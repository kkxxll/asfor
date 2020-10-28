const { promisify } = require('util')
const figlet = promisify(require('figlet')) // 文字工具（异步函数）
const clear = require('clear') // 清屏
const chalk = require('chalk') // 色彩
const log = content => console.log(chalk.green(content)) // 打印

module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('ASFOR Welcome')
    log(data)
}