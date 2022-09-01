let handler = async (m, { conn, usedPrefix, command }) => {
let moneyy = `${Math.floor(Math.random() * 5000)}`.trim()
global.db.data.users[m.sender].money += moneyy * 1

    conn.send1But(m.chat, `Karena Kamu Telah Mengakui Ke Gans Nya iky Kamu Dapat ${moneyy} 💵`.trim(), wm, 'LAGI', usedPrefix + 'ikyganteng', m)
}
handler.help = ['ikyganteng']
handler.tags = ['fun'] 
handler.limit = true
handler.command = /^(Ikyganteng)$/i

module.exports = handler