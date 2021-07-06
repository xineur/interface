import { Module } from '@nestjs/common';
import { FestivalInfrastructureModel } from "../infrastructure/festival-infrastructure/festival-infrastructure.module";
import { WeatherInfrastructureModule } from "../infrastructure/weather-infrastructure/weather-infrastructure.module";
import { FestivalDomainService } from './festival-domain/festival-domain.service';
import { WeatherDomainService } from './weather-domain/weather-domain.service';

@Module({
  providers: [FestivalDomainService, WeatherDomainService],
  imports: [FestivalInfrastructureModel, WeatherInfrastructureModule],
  exports: [FestivalDomainService, WeatherDomainService]
})
export class DomainModule { }
