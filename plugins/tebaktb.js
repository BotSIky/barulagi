let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa Yang Mau Di Tebak`
  conn.reply(m.chat, `
NAMA = ${text}
Sepertinya Tinggi Badan Nya *${Math.floor(Math.random() * 200)}* Cm ${command.replace('tebaktb', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['tebaktb <nama>']
handler.tags = ['fun']
handler.command = /^tebaktb$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
