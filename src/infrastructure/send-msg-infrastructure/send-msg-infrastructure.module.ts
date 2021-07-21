import { Module } from '@nestjs/common';
import { SendMsgInfrastructureService } from './send-msg-infrastructure.service';

@Module({
  providers: [SendMsgInfrastructureService]
})
export class SendMsgInfrastructureModule {}
