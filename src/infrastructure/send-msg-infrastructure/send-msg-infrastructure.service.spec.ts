import { Test, TestingModule } from '@nestjs/testing';
import { SendMsgInfrastructureService } from './send-msg-infrastructure.service';

describe('SendMsgInfrastructureService', () => {
  let service: SendMsgInfrastructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMsgInfrastructureService],
    }).compile();

    service = module.get<SendMsgInfrastructureService>(SendMsgInfrastructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
