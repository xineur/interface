import { Module } from '@nestjs/common';
import { FestivalInfrastructureService } from './festival-infrastructure.service';

@Module({
  providers: [FestivalInfrastructureService],
  exports: [FestivalInfrastructureService]
})
export class FestivalInfrastructureModel { }
