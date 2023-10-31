// models/Resource.ts
import { Document, Schema, model } from 'mongoose';

interface Resource {
  name: string;
  description: string;
}

const resourceSchema = new Schema<Resource & Document>({
  name: String,
  description: String,
});

export default model<Resource & Document>('Resource', resourceSchema);