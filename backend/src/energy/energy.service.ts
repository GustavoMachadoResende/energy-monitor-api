import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Energy } from './energy.model';

@Injectable()
export class EnergyService {
  constructor(@InjectModel('Energy') private readonly energyModel: Model<Energy>) {}

  async addRecord(energy: Energy): Promise<string> {
    const newRecord = new this.energyModel(energy);
    const result = await newRecord.save();
    return result.id;
  }

  async getHistory(userId: string, start: Date, end: Date): Promise<Energy[]> {
    return await this.energyModel.find({
      userId,
      date: { $gte: start, $lte: end },
    }).exec();
  }

  async checkAlert(userId: string): Promise<any> {
    const records = await this.energyModel.find({ userId }).sort({ date: -1 }).limit(2).exec();

    if (records.length < 2) {
      return { alert: false, message: 'Insufficient data' };
    }

    const [latest, previous] = records;
    if (latest.consumption > previous.consumption) {
      return {
        alert: true,
        message: `Consumo elevado! ${latest.consumption} kWh comparado a ${previous.consumption} kWh do mês anterior.`,
      };
    }

    return { alert: false, message: 'Consumo normal.' };
  }
}
