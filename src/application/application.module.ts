import { Module } from '@nestjs/common';
import { DomainModule } from "../domain/domain.module";
import { FestivalAppService } from './festival-app/festival-app.service';
import { SendWeatherAppService } from './send-weather-app/send-weather-app.service';
import { WeatherAppService } from './weather-app/weather-app.service';
import { SendMsgAppService } from './send-msg-app/send-msg-app.service';

@Module({
  providers: [FestivalAppService, WeatherAppService, SendWeatherAppService, SendMsgAppService],
  imports: [DomainModule],
  exports: [FestivalAppService, WeatherAppService, SendWeatherAppService]
})
export class ApplicationModule { }
