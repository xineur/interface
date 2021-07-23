import { Injectable } from '@nestjs/common';
import { regularly } from "src/core/public";
import { FestivalInfrastructureService, IFestival } from "src/infrastructure/festival-infrastructure/festival-infrastructure.service";

export { IFestival } from "src/infrastructure/festival-infrastructure/festival-infrastructure.service";

@Injectable()
export class FestivalDomainService {
  private festivalInfo: IFestival
  constructor(private festivalService: FestivalInfrastructureService) {
    if (!this.festivalInfo) {
      this.getFestival(new Date())
    } else {
      regularly(() => this.getFestival(new Date()), [0, 1, 0, 0])
    }
  }
  async getFestival(date: Date) {
    this.festivalInfo = await this.festivalService.getFestival(date)
  }

  get festival() {
    return this.festivalInfo
  }

  get week() {
    return this.festivalInfo.weekName
  }

  get typeName() {
    return this.festivalInfo.typeName
  }

  get type() {
    return this.festivalInfo.type
  }
}
