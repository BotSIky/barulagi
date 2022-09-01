let handler = async (m, { conn, usedPrefix, command }) => {
let moneyy = `${Math.floor(Math.random() * 999999999999999)}`.trim()
global.db.data.users[m.sender].money += moneyy * 1

    conn.send1But(m.chat, `Bot Sudah Memasukan Money Sebesar ${moneyy} Ke Owner`.trim(), wm, 'more', usedPrefix + 'getmoney', m)
}
handler.help = ['getmoney']
handler.tags = ['owner'] 
handler.limit = true
handler.owner = true
handler.command = /^(getmoney)$/i

module.exports = handler