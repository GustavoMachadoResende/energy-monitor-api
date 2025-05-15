import * as mongoose from 'mongoose';

export const EnergySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  consumption: { type: Number, required: true },
  date: { type: Date, required: true }
});

export interface Energy {
  id: string;
  userId: string;
  consumption: number;
  date: Date;
}
