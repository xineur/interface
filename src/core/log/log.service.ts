import { Injectable } from '@nestjs/common';
import { getLogger } from 'log4js';

@Injectable()
export class LogService {
  logger = getLogger()
  constructor() {
    this.logger.level = "all"
  }
  get log() {
    return this.logger
  }
}
