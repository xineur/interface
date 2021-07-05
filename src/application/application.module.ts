import { Module } from '@nestjs/common';
import { DomainModule } from "../domain/domain.module";
import { FestivalAppService } from './festival-app/festival-app.service';

@Module({
  providers: [FestivalAppService],
  imports: [DomainModule],
  exports: [FestivalAppService]
})
export class ApplicationModule { }
