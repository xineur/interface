import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from "axios";
import { getConfig } from "src/core/public";

export interface IWeatherParam {
  key: string,
  city: number,
  extensions: "base" | "all",
  output: "JSON" | "XML"
}

export interface IWeatherRequest {
  status: "0" | "1" // 值为0或1 1：成功；0：失败
  count: number // 	返回结果总数目
  info: string // 返回的状态信息
  infocode: string // 返回状态说明,10000代表正确
  lives?: { // 实况天气数据信息
    province: string // 省份名
    city: string // 城市名
    adcode: string // 区域编码
    weather: string // 天气现象（汉字描述）
    temperature: string // 实时气温，单位：摄氏度
    winddirection: string // 风向描述
    windpower: string // 风力级别，单位：级
    humidity: string // 空气湿度
    reporttime: string // 数据发布的时间
  }[]
  forecast?: { // 预报天气信息数据
    city: string // 城市名称
    adcode: number // 城市编码
    province: string // 省份名称
    reporttime: string // 预报发布时间
    casts: {
      date: string // 日期
      week: string // 星期几
      dayweather: string // 白天天气现象
      nightweather: string // 晚上天气现象
      daytemp: string // 白天温度
      nighttemp: string // 晚上温度
      daywind: string // 白天风向
      nightwind: string // 晚上风向
      daypower: string // 白天风力
      nightpower: string // 晚上风力
    }[]
  }
}

@Injectable()
export class WeatherInfrastructureService {
  constructor() {
  }
  async getWeather(city: number, extensions: IWeatherParam['extensions'] = "all"): Promise<IWeatherRequest['forecast'] | IWeatherRequest['lives']> {
    const { gdamap } = await getConfig()
    return axios.get("https://restapi.amap.com/v3/weather/weatherInfo", {
      params: {
        key: gdamap,
        city,
        extensions,
        output: 'JSON'
      } as IWeatherParam
    }).then((res: AxiosResponse<IWeatherRequest>) => {
      const { forecast, lives } = res.data
      return forecast || lives
    })
  }
}
