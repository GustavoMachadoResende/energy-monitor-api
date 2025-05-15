import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EnergyModule } from './energy/energy.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:QR7iuF15tznW4hPb@webmobile.laiuhbi.mongodb.net/?retryWrites=true&w=majority&appName=webmobile'),
    EnergyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
