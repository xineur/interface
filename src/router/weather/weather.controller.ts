import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { IWeatherRequest, WeatherDomainService } from "src/domain/weather-domain/weather-domain.service";

@Controller('weather')
export class WeatherController {
  constructor(
    private weatherDomainService: WeatherDomainService
  ) { }

  @Get()
  async getForecast(@Req() request: Request): Promise<IWeatherRequest["forecasts"]> {
    return await this.weatherDomainService.getForecast(request.query.city as any) as IWeatherRequest["forecasts"]
  }

  @Get()
  async getLives(@Req() request: Request): Promise<IWeatherRequest["lives"]> {
    return await this.weatherDomainService.getLives(request.query.city as any) as IWeatherRequest["lives"]
  }
}
