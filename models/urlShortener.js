import mongoose from 'mongoose';
import shortId from 'shortid';

const urlShortenerSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model('UrlShortener', urlShortenerSchema);