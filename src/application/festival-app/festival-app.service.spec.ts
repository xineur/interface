import { Test, TestingModule } from '@nestjs/testing';
import { FestivalAppService } from './festival-app.service';

describe('FestivalAppService', () => {
  let service: FestivalAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FestivalAppService],
    }).compile();

    service = module.get<FestivalAppService>(FestivalAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
