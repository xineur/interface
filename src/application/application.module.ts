import { Module } from '@nestjs/common';
import { DomainModule } from "../domain/domain.module";
import { FestivalAppService } from './festival-app/festival-app.service';
import { SendWeatherAppService } from './send-weather-app/send-weather-app.service';
import { WeatherAppService } from './weather-app/weather-app.service';

@Module({
  providers: [FestivalAppService, WeatherAppService, SendWeatherAppService],
  imports: [DomainModule],
  exports: [FestivalAppService, WeatherAppService, SendWeatherAppService]
})
export class ApplicationModule { }
