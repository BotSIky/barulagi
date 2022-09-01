global.tebakhewan = global.tebakhewan ? global.tebakhewan : {}
let handler  = async (m, { conn, usedPrefix }) => {

  let id = m.chat
  if (id in global.tebakhewan) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.tebakhewan[id][0])
  global.tebakhewan[id] = [
    await conn.reply(m.chat,`「 tebakhewan 」\n\nPertanyaan :\n${pickRandom(global.tebakhewan)}\n\nWaktu : 60.00 Detik\nBonus : 10000 XP`, m),
    tebakhewan, 1,
    setTimeout(() => {
      if (global.tebakhewan[id]) conn.send1But(m.chat, `Waktu habis!\n\nCobaa Lagi Lain Waktu`, wm, 'tebakhewan', '.tebakhewan', m)
      delete global.tebakhewan[id]
    }, 60000)
  ]
}
handler.help = ['tebakhewan']
handler.tags = ['game']
handler.command = /^(tebakhewan)$/i
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

global.tebakhewan = [
'🦒',
'🦣',
'🐂',
'🦓',
'🐈‍⬛',
'🦮',
'🦆',
'🐟',
'🐓',
'🐊',
'🐆',
'🦅',
'🐛',
'🦋',
'🦎',
'🐷',
'🐝',
'🪰',
'🦠',
'🦩',
'🐀',
'🐙',
'🦦',
'🦭',
'🦝',
'🐢',
'🐆',
]
