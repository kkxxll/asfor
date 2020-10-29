const { promisify } = require('util')
const figlet = promisify(require('figlet')) // 文字工具（异步函数）
const clear = require('clear') // 清屏
const chalk = require('chalk') // 色彩
const log = content => console.log(chalk.green(content)) // 打印
const {clone} = require('./download')

const spawn = async(...args) => {
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        // 子进程
        const proc = spawn(...args)
        
        // 将子进程的流导入主进程
        proc.stdout.pipe(process.stdout) // 正常流
        proc.stderr.pipe(process.stderr) // 异常流

        // 执行完成
        proc.on('close', () => {
            resolve()
        }, (error) => {
            console.log('proc', error)
        })
    })
}

module.exports = async name => {
    // 打印欢迎界面
    clear()
    const data = await figlet('ASFOR Welcome')
    log(data)

    // 下载 (git clone)
    log(`👏 创建项目 ${name}`)
    await clone('icecreamk/icecream#main', name)

    // 安装依赖 (npm install)
    log('🔨🔨🔨安装依赖......')
    try {
        await spawn('npm', ['install'], {cwd: `./${name}`})
    } catch (error) {
        console.log('install', error)
    }

    log(`
✅安装完成
To get Start
=============================
    cd ${name}
    npm run mockdev
=============================
    `)
}