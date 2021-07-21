import { Module } from '@nestjs/common';
import { FestivalInfrastructureModel } from "../infrastructure/festival-infrastructure/festival-infrastructure.module";
import { WeatherInfrastructureModule } from "../infrastructure/weather-infrastructure/weather-infrastructure.module";
import { FestivalDomainService } from './festival-domain/festival-domain.service';
import { SendMsgDomainService } from './send-msg-domain/send-msg-domain.service';
import { WeatherDomainService } from './weather-domain/weather-domain.service';

@Module({
  providers: [FestivalDomainService, WeatherDomainService, SendMsgDomainService],
  imports: [FestivalInfrastructureModel, WeatherInfrastructureModule, SendMsgDomainService],
  exports: [FestivalDomainService, WeatherDomainService, SendMsgDomainService]
})
export class DomainModule { }
