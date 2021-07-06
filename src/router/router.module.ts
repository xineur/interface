import { Module } from '@nestjs/common';
import { ApplicationModule } from "src/application/application.module";
import { DomainModule } from "src/domain/domain.module";
import { FestivalController } from './festival/festival.controller';
import { WeatherController } from './weather/weather.controller';

@Module({
  providers: [],
  controllers: [FestivalController, WeatherController],
  imports: [ApplicationModule, DomainModule]
})
export class RouterModule { }
