import { Module } from '@nestjs/common';
import { ApplicationModule } from "src/application/application.module";
import { DomainModule } from "src/domain/domain.module";
import { FestivalController } from './festival/festival.controller';

@Module({
  providers: [],
  controllers: [FestivalController],
  imports: [ApplicationModule, DomainModule]
})
export class RouterModule { }
