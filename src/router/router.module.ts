import { Module } from '@nestjs/common';
import { ApplicationModule } from "src/application/application.module";
import { DomainModule } from "src/domain/domain.module";
import { FestivalController } from './festival/festival.controller';
import { WeatherController } from './weather/weather.controller';
import { SendMsgService } from './send-msg/send-msg.service';

@Module({
  providers: [SendMsgService],
  controllers: [FestivalController, WeatherController],
  imports: [ApplicationModule, DomainModule]
})
export class RouterModule { }
