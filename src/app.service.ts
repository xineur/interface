import { Injectable } from '@nestjs/common';
import { SendWeatherAppService } from "src/application/send-weather-app/send-weather-app.service";

@Injectable()
export class AppService {
  constructor(private endWeatherAppService: SendWeatherAppService) {

  }
}
