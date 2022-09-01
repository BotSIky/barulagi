let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = 'https://api.zacros.my.id/randomimg/cosplay'
    await conn.sendButtonImg(m.chat, url, '*COSPLAY*', wm, 'NEXT', '.meme',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['cosplay']
handler.tags = ['fun']
handler.command = /^(cosplay)$/i
handler.limit = false

module.exports = handler