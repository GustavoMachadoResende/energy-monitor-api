import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnergySchema } from './energy.model';
import { EnergyService } from './energy.service';
import { EnergyController } from './energy.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Energy', schema: EnergySchema }])],
  controllers: [EnergyController],
  providers: [EnergyService],
})
export class EnergyModule {}
