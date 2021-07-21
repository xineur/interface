import { Injectable } from '@nestjs/common';
import axios from "axios";
import { getConfig } from "src/core/public";

@Injectable()
export class SendMsgDomainService {
  constructor() { }
  async send(wxid: string, msg: string) {
    const config = await getConfig()
    axios.post(config.wx.host, {}, {
      params: {
        wxid,
        msg
      }
    })
  }
}
