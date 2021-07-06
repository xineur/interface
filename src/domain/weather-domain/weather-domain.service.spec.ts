import { Test, TestingModule } from '@nestjs/testing';
import { WeatherDomainService } from './weather-domain.service';

describe('WeatherDomainService', () => {
  let service: WeatherDomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherDomainService],
    }).compile();

    service = module.get<WeatherDomainService>(WeatherDomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
