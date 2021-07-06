import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from "axios";
import * as dayjs from "dayjs";

export interface IFestivalRequest {
  code: 0 | -1
  type: {
    type: 0 | 1 | 2 | 3 // 节假日类型，分别表示 工作日、周末、节日、调休。
    name: string
    week: 1 | 2 | 3 | 4 | 5 | 6 | 7 // 一周中的第几天。值为 1 - 7，分别表示 周一 至 周日。
  },
  holiday?: {
    holiday: boolean // true表示是节假日，false表示是调休
    name: string // 节假日的中文名。如果是调休，则是调休的中文名，例如'国庆前调休'
    wage: number // 薪资倍数，1表示是1倍工资
    date?: string // 只在调休下有该字段。true表示放完假后调休，false表示先调休再放假
    rest?: number // 只在调休下有该字段。表示调休的节假日
  }
}

export interface IFestival {
  week: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  type: 0 | 1 | 2 | 3
  name: string | null
  weekName: "周一" | "周二" | "周三" | "周四" | "周五" | "周六" | "周日"
  typeName: "工作日" | "周末" | "节日" | "调休"
}


@Injectable()
export class FestivalInfrastructureService {
  private week = {
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
    7: '周日',
  }

  private type = {
    0: '工作日',
    1: '周末',
    2: '节日',
    3: '调休',
  }

  constructor() {
  }

  private format(date: Date) {
    return dayjs(date).format('yyyy-MM-dd')
  }

  async getFestival(date: Date): Promise<IFestival> {
    return axios.get(`http://timor.tech/api/holiday/info/${this.format(date)}`).then((res: AxiosResponse<IFestivalRequest>) => {
      const { type, holiday } = res.data
      return {
        week: type.week,
        type: type.type,
        name: holiday?.name,
        weekName: this.week[type.week],
        typeName: this.type[type.type]
      } as IFestival
    })
  }
}
