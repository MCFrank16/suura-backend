import mongo, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const SessionSchema = new Schema({
  token: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { collection: 'sessions' });

SessionSchema.plugin(timestamps);
SessionSchema.index({ createdAt: 1, updatedAt: 1 });

export default mongo.model('Session', SessionSchema);
