import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EnergyService } from './energy.service';
import { Energy } from './energy.model';

@Controller('energy')
export class EnergyController {
  constructor(private readonly energyService: EnergyService) {}

  @Post()
  async addRecord(@Body() energy: Energy) {
    const id = await this.energyService.addRecord(energy);
    return { id };
  }

  @Get('history/:userId')
  async getHistory(
    @Param('userId') userId: string,
    @Query('start') start: string,
    @Query('end') end: string
  ) {
    return this.energyService.getHistory(userId, new Date(start), new Date(end));
  }

  @Get('alert/:userId')
  async getAlert(@Param('userId') userId: string) {
    return this.energyService.checkAlert(userId);
  }
}
