let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.togel = conn.togel ? conn.togel : {}
    if (m.chat in conn.togel) return m.reply ('Masih ada yang melakukan togel disini, tunggu sampai selesai!!')
    else conn.togel[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'togel <jumlah>\n ' + usedPrefix + 'Masukan Nomor Andalan mu Contoh \n.gastogel 3479 ', m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            //await m.reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `>>>> 🌸 SAKURA TOTO 🌸 <<<<\nYOU =  ${Kamu} Point\nCOMPUTER = ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} Uang(xp)`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].exp += count * 2
                conn.reply(m.chat, `>>>> 🌸 SAKURA TOTO 🌸<<<<\n*YOU = ${Kamu} Point\nCOMPUTER ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} Uang(xp)`.trim(), m)
            } else {
                global.db.data.users[m.sender].exp += count * 1
                conn.reply(m.chat, `>>>> 🌸 SAKURA TOTO 🌸 <<<<\nYOU = ${Kamu} Point\nCOMPUTER = ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} Uang(xp)`.trim(), m)
            }
        } else conn.reply(m.chat, `Uang(xp) kamu tidak mencukupi untuk Togel silahkan *#kerja* terlebih dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'togel.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.togel[m.chat]
    }
}
    
handler.help = ['gastogel <Angka Andalan>']
handler.tags = ['game', 'rpg']
handler.command = /^(gastogel)$/i

handler.fail = null

handler.limit = 1

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}