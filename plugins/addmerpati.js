let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah merpati yang akan diberi'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let merpati = poin
    if (merpati < 1) throw 'Minimal 1'
    let users = global.db.data.users
    users[who].merpati += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} merpati!`, m, { mentions: [who] }, {
        mentions: [m.sender]
    }) 
}

handler.help = ['addmerpati @user <amount>']
handler.tags = ['tools']
handler.command = /^addmerpati$/
handler.owner = true

module.exports = handler

