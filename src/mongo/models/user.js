import mongo, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import Util from '../../utils';

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'provide your full name'],
    minlength: 1,
    validate: {
      validator: Util.validateName,
      message: 'Invalid name, only alphanumeric characters'
    }
  },
  username: {
    type: String,
    trim: true,
    unique: [true, 'try another username'],
    validate: {
      validator: Util.validateUserName,
      message: 'username must not contain spaces'
    }
  },
  email: {
    type: String,
    trim: true,
    unique: [true, 'this email is already registered!'],
    required: false,
    validate: {
      validator: Util.validateEmail,
      message: 'Invalid email'
    }
  },
  phonenumber: {
    type: String,
    trim: true,
    required: false,
    validate: {
      validator: Util.validatePhoneNo,
      message: 'use valid phonenumber, ex.. 078..'
    }
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password is required'],
  },
  bio: {
    type: String,
    trim: true,
    required: false
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
      values: ['admin', 'provider', 'superadmin'],
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

