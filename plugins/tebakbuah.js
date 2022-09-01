global.tebakbuah = global.tebakbuah ? global.tebakbuah : {}
let handler  = async (m, { conn, usedPrefix }) => {

  let id = m.chat
  if (id in global.tebakbuah) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.tebakbuah[id][0])
  global.tebakbuah[id] = [
    await conn.reply(m.chat,`「 tebakbuah 」\n\nBuah Apa ini :\n${pickRandom(global.tebakbuah)}\n\nWaktu : 70.00 Detik\nBonus : 10000 XP`, m),
    tebakbuah, 1,
    setTimeout(() => {
      if (global.tebakbuah[id]) conn.send1But(m.chat, `Waktu habis!\n\nCobaa Lagi Lain Waktu`, wm, 'tebakbuah', '.tebakbuah', m)
      delete global.tebakbuah[id]
    }, 70000)
  ]
}
handler.help = ['tebakbuah']
handler.tags = ['game']
handler.command = /^(tebakbuah)$/i
handler.owner = false
handler.mods = false
handler.off = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.tebakbuah = [
'🍇',
'🍉',
'🥑',
'🍍',
'🥒',
'🍌',
'🍋',
'🍎',
'🥝',
'🍅',
'🌽', 
'🥭', 
'🍐',
'🍒',
'🫑',
'🍓',
'🍊',
'🍈',
'🥥',
'🍆',
'🌶️',
]