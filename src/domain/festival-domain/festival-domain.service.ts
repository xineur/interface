import { Injectable } from '@nestjs/common';
import { regularly } from "src/core/public";
import { FestivalInfrastructureService, IFestival } from "src/infrastructure/festival-infrastructure/festival-infrastructure.service";

export { IFestival } from "src/infrastructure/festival-infrastructure/festival-infrastructure.service";

@Injectable()
export class FestivalDomainService {
  private festivalInfo: IFestival
  constructor(private festivalService: FestivalInfrastructureService) {
    regularly(this.getFestival(new Date()), [0, 0, 0, 0])
  }
  private async getFestival(date: Date) {
    this.festivalInfo = await this.festivalService.getFestival(date)
  }

  get festival() {
    return this.festivalInfo
  }

  get week() {
    return this.festivalInfo.weekName
  }

  get type() {
    return this.festivalInfo.typeName
  }
}
