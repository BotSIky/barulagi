let handler = async (m, { conn, command, text }) => {

  conn.reply(m.chat, `
┏━━━━━━━━━━━━━━━ 
┃• Mending Makan : ${pickRandom(['Ayam Geprek','Sate Madura','Sate Padang','Bubur','Naspad','Soto','Seblak','Gado Gado','Pecel','Jagung','Bebek','Ayam'])}
┗━━━━━━━━━━━━━━━
`.trim(), m)
}
handler.help = ['makanapaya']
handler.tags = ['fun']
handler.command = /^makanapaya/i
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

