import { Controller, Get } from '@nestjs/common';
import { FestivalDomainService, IFestival } from "src/domain/festival-domain/festival-domain.service";

@Controller('festival')
export class FestivalController {
  constructor(private festivalDomainService: FestivalDomainService) { }
  @Get()
  getFestival(): IFestival {
    return this.festivalDomainService.festival
  }
}
