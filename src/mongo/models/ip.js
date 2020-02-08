import mongo, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const IPSchema = new Schema({
  ip: {
    type: String,
    trim: true,
    required: true
  },
}, { collection: 'ips' });

IPSchema.plugin(timestamps);
IPSchema.index({ createdAt: 1, updatedAt: 1 });

export default mongo.model('IP', IPSchema);
