 handler = async (m, { conn }) => {
 
let rest = 'https://telegra.ph/file/0dd6f3b43337945baedbb.jpg'
conn.sendButtonImg(m.chat, rest, 'Halo Kak Kenapa Manggil Owner', wm, 'OWNER', '/owner', m)
}
handler.customPrefix = /^(Hallo Iky|Iky|ky|ki)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
