import { Module } from '@nestjs/common';
import { FestivalInfrastructureModel } from "../infrastructure/festival-infrastructure/festival-infrastructure.module";
import { FestivalDomainService } from './festival-domain/festival-domain.service';

@Module({
  providers: [FestivalDomainService],
  imports: [FestivalInfrastructureModel],
  exports: [FestivalDomainService]
})
export class DomainModule { }
