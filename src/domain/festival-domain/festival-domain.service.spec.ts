import { Test, TestingModule } from '@nestjs/testing';
import { FestivalDomainService } from './festival-domain.service';

describe('FestivalDomainService', () => {
  let service: FestivalDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FestivalDomainService],
    }).compile();

    service = module.get<FestivalDomainService>(FestivalDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
