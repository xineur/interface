import { Module } from '@nestjs/common';
import { WeatherInfrastructureService } from './weather-infrastructure.service';

@Module({
  providers: [WeatherInfrastructureService],
  exports: [WeatherInfrastructureService]
})
export class WeatherInfrastructureModule { }
