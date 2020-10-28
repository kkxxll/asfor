const {promisify} = require('util')

/**
 * 
 * @param {源地址} repo 
 * @param {目标地址} desc 
 */
module.exports.clone = async function (repo, desc) {
    const download = promisify(require('download-git-repo')) // 下载git仓库
    const ora = require('ora') // 进度条
    const process = ora(`下载......${repo}`)
    process.start()
    try {
        await download(repo, desc)
        process.succeed()
    } catch (error) {
        console.log('error', error)
        process.succeed()
    }
}