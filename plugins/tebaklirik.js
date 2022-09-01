const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let Jid = m.chat
    if (Jid in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[Jid][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teli untuk bantuan
Bonus: ${poin} XP
TiketCoin: 1 Tiketcoin
    `.trim()
    conn.tebaklirik[Jid] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[Jid]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[Jid][0])
            delete conn.tebaklirik[Jid]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.limit = true
handler.group = true

module.exports = handler