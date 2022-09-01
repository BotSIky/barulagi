let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let Jid = m.chat
    if (Jid in conn.tebaklagu) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklagu[Jid][0])
        throw false
    }
    // ubah isi 'Jid' kalo mau ganti playlist spotifynya
    
    let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    // if (!json.status) throw json
    let caption = `
TEBAK JUDUL LAGU 
Artis : ${json.artis}
Judul : _____
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}cek* untuk bantuan
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
*Balas pesan ini untuk menjawab!*`.trim()
    conn.tebaklagu[Jid] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklagu[Jid]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, conn.tebaklagu[Jid][0])
            delete conn.tebaklagu[Jid]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.lagu, 'audio.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
handler.group = true
module.exports = handler
