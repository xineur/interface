import { Test, TestingModule } from '@nestjs/testing';
import { WeatherInfrastructureService } from './weather-infrastructure.service';

describe('WeatherInfrastructureService', () => {
  let service: WeatherInfrastructureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherInfrastructureService],
    }).compile();

    service = module.get<WeatherInfrastructureService>(WeatherInfrastructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
