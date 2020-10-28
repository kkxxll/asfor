const { promisify } = require('util')
const figlet = promisify(require('figlet')) // 文字工具（异步函数）
const clear = require('clear') // 清屏
const chalk = require('chalk') // 色彩
const log = content => console.log(chalk.green(content)) // 打印
const {clone} = require('./download')
module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('ASFOR Welcome')
    log(data)

    // clone
    log(`👏 创建项目 ${name}`)
    await clone('icecreamk/icecream#main', name)
}