let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikerhuuu), m, { packname: "Ikyyy", author: "Bot" })
}

handler.help = ['dadu']
handler.tags = ['game']
handler.command = /^(dadu|dice)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
"https://telegra.ph/file/7fdd6b16261b3c8807f8a.jpg",
"https://telegra.ph/file/20415cc582d601ea843c0.jpg",
"https://telegra.ph/file/380e5a9672865c3b076be.jpg",
"https://telegra.ph/file/fb5a5bf31844dd9cab7eb.jpg",
",https://telegra.ph/file/3c178716a7a35209775cd.jpg",
",https://telegra.ph/file/750dd04bdb78739acf096.jpg",
]
