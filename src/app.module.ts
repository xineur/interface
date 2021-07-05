import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { LogService } from './core/log/log.service';
import { DomainModule } from './domain/domain.module';
import { FestivalInfrastructureModel } from './infrastructure/festival-infrastructure/festival-infrastructure.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [FestivalInfrastructureModel, DomainModule, ApplicationModule, RouterModule],
  controllers: [AppController],
  providers: [AppService, LogService],
})
export class AppModule { }
