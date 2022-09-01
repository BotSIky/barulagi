let handler = async (m, { conn, usedPrefix, command }) => {
let moneyy = `${Math.floor(Math.random() * 999999999999999)}`.trim()
global.db.data.users[m.sender].limit += moneyy * 1

    conn.send1But(m.chat, `Bot Sudah Memasukan limit Sebesar ${moneyy} Ke Owner`.trim(), wm, 'more', usedPrefix + 'getlimit', m)
}
handler.help = ['getlimit']
handler.tags = ['owner'] 
handler.limit = true
handler.owner = true
handler.command = /^(getlimit)$/i

module.exports = handler