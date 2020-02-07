import mongo, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import utils from '../../utils';

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'provide your full name'],
    minlength: 1,
    validate: {
      validator: utils.validateName,
      message: 'Invalid name, only alpha characters'
    }
  },
  username: {
    type: String,
    trim: true,
    unique: [true, 'try another username'],
    validate: {
      validator: utils.validateUserName,
      message: 'username must not contain spaces'
    },
    minlength: 2
  },
  email: {
    type: String,
    trim: true,
    unique: [true, 'this email is already registered!'],
    required: [true, 'username is required']
  },
  phonenumber: {
    type: String,
    trim: true,
    minlength: 1,
    required: false,
    validate: {
      validator: utils.validatePhoneNo,
      message: 'use valid phone line'
    }
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password is required'],
    minlength: 8
  },
  address: {
    type: String,
    trim: true,
    required: false,
  },
  role: {
    type: String,
    trim: true,
    default: 'provider',
    enum: {
      values: ['admin', 'provider', 'superadmin', 'client'],
      message: 'invalid user\'s role',
    }
  },
  avatar: {
    type: String,
    trim: true,
    required: false
  },
  banner: {
    type: String,
    trim: true,
    required: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  }
}, { collection: 'users' });

UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1 });

export default mongo.model('User', UserSchema);

