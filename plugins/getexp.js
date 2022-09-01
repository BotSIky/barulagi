let handler = async (m, { conn, usedPrefix, command }) => {
let moneyy = `${Math.floor(Math.random() * 99999999)}`.trim()
global.db.data.users[m.sender].exp += moneyy * 1

    conn.send1But(m.chat, `Bot Sudah Memasukan exp Sebesar ${moneyy} Ke Owner`.trim(), wm, 'more', usedPrefix + 'getexp', m)
}
handler.help = ['getexp']
handler.tags = ['owner'] 
handler.limit = true
handler.owner = true
handler.command = /^(getexp)$/i

module.exports = handler