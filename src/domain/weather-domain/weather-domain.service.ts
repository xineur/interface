import { Injectable } from '@nestjs/common';
import { IWeatherRequest, WeatherInfrastructureService } from "src/infrastructure/weather-infrastructure/weather-infrastructure.service";

export { IWeatherParam, IWeatherRequest } from "src/infrastructure/weather-infrastructure/weather-infrastructure.service";

@Injectable()
export class WeatherDomainService {
  constructor(
    private weatherInfrastructureService: WeatherInfrastructureService
  ) { }
  async getForecast(city: number): Promise<IWeatherRequest["forecasts"]> {
    return await this.weatherInfrastructureService.getWeather(city, 'all') as IWeatherRequest["forecasts"]
  }

  async getLives(city: number): Promise<IWeatherRequest["lives"]> {
    return await this.weatherInfrastructureService.getWeather(city, 'base') as IWeatherRequest["lives"]
  }
}
