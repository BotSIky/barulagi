let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa Yang Mau Di Tebak`
  conn.reply(m.chat, `
NAMA = ${text}
Sepertinya Dia Ber Umur *${Math.floor(Math.random() * 50)}* Tahun ${command.replace('tebakumur', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['tebakumur <nama>']
handler.tags = ['fun']
handler.command = /^tebakumur$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
