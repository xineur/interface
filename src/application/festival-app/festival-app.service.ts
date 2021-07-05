import { Injectable } from '@nestjs/common';
import { FestivalDomainService } from "src/domain/festival-domain/festival-domain.service";

@Injectable()
export class FestivalAppService {
  constructor(private festivalDomainService: FestivalDomainService) { }



  get week() {
    return this.festivalDomainService.week
  }
  get festival() {
    return this.festivalDomainService.festival
  }
  get type() {
    return this.festivalDomainService.type
  }
}
