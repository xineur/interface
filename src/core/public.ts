export async function regularly(callBack: any, timing: [number, number, number, number]) {
  let nextTime = 0
  nextTime = new Date().setHours(...timing) + 24 * 60 * 60 * 1000
  await sleep(nextTime - new Date().getTime())
  regularly(callBack, timing)
}

export function sleep(time: number): Promise<void> {
  if (!time) {
    // 随机15-35s时间
    time = Math.floor(Math.random() * 20000 + 15000)
  }
  return new Promise(res => {
    setTimeout(() => res(), time)
  })
}