import { readFile } from "fs"
import { join } from "path"
import { promisify } from "util"

const readFilePromise = promisify(readFile)
let config: any

/**
 * 定时执行
 * @param callBack 
 * @param timing 
 */
export async function regularly(callBack: any, timing: [number, number, number, number]) {
  let nextTime = 0
  while (true) {
    if (new Date().setHours(...timing) > new Date().getTime()) nextTime = new Date().setHours(...timing)
    else nextTime = new Date().setHours(...timing) + 24 * 60 * 60 * 1000
    await sleep(nextTime - new Date().getTime())
    callBack()
  }
}

/**
 * 延时器
 * @param time 
 * @returns 
 */
export function sleep(time: number): Promise<void> {
  if (!time) {
    // 随机15-35s时间
    time = Math.floor(Math.random() * 20000 + 15000)
  }
  return new Promise(res => {
    setTimeout(() => res(), time)
  })
}

/**
 * 获取配置文件信息
 * @returns 
 */
export async function getConfig() {
  if (config) return config
  config = await readFilePromise(join(__dirname, "../../config/config.json"), {
    encoding: 'utf-8'
  })
  config = JSON.parse(config)
  return config
}