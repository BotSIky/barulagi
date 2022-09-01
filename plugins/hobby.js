let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
    
  conn.reply(m.chat, `
┏━━❬ *Hobby ${text}* ❭━━┓
┃• Nama : ${text}
┃• Hobinya : ${pickRandom(['Makan','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Maling','Ngutang','Nabung','Dekorasi','Ciuman'])}
┗━━━━━━━━━━━━━━━━
`.trim(), m)
}
handler.help = ['hobby <nama>']
handler.tags = ['fun']
handler.command = /^hobby/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

