import { Schema, model } from "mongoose";

interface IPhone {
    id: string;
    brand: string;
    model: string;
    price: number;
    color: string;
    name: string;
    storage: string;
    spec: {
      display: string;
      screen_width: string;
      screen_height: string;
    };
  }

const phoneSchema = new Schema<IPhone>({
    id: { type: String },
    brand: { type: String },
    model: { type: String },
    price: { type: Number },
    color: { type: String },
    storage: { type: String },
    spec: {
      display: { type: String },
      screen_width: { type: String },
      screen_height: { type: String },
    },
  });
  
const Phone = model<IPhone>('Phone', phoneSchema)

export { Phone }
