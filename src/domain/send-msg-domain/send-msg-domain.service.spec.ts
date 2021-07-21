import { Test, TestingModule } from '@nestjs/testing';
import { SendMsgDomainService } from './send-msg-domain.service';

describe('SendMsgDomainService', () => {
  let service: SendMsgDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMsgDomainService],
    }).compile();

    service = module.get<SendMsgDomainService>(SendMsgDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
