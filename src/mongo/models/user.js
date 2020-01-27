import mongo, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose/node8';
import dotenv from 'dotenv';
import encrypt from 'mongoose-bcrypt';
import utils from '../../utils';

dotenv.config();
const { PRIVATE_KEY } = process.env;
const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'username is required'],
    unique: [true, 'try another username'],
    validate: {
      validator: utils.validateUserName,
      message: 'username must not contain spaces'
    },
    minlength: 3
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password is required'],
    validate: {
      validator: utils.validatePassword,
      message: 'use strong password',
    },
    minlength: 8,
    bcrypt: true
  },
  role: {
    type: String,
    trim: true,
    default: 'client',
    enum: {
      values: ['admin', 'client', 'provider'],
      message: 'invalid user\'s role',
    }
  }
}, { collection: 'users' });

UserSchema.plugin(timestamps);
UserSchema.plugin(encrypt);
UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = mongo.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
