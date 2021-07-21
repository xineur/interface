import { Test, TestingModule } from '@nestjs/testing';
import { SendMsgService } from './send-msg.service';

describe('SendMsgService', () => {
  let service: SendMsgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMsgService],
    }).compile();

    service = module.get<SendMsgService>(SendMsgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
