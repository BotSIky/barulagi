global.tebakinggris = global.tebakinggris ? global.tebakinggris : {}
let handler  = async (m, { conn, usedPrefix }) => {

  let id = m.chat
  if (id in global.tebakinggris) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.tebakinggris[id][0])
  global.tebakinggris[id] = [
    await conn.reply(m.chat,`「 tebakinggris 」\n\nApa Bahasa Inggris Nya = ${pickRandom(global.tebakinggris)}\n\nWaktu : 30.00 Detik\nBonus : 10000 XP`, m),
    tebakinggris, 1,
    setTimeout(() => {
      if (global.tebakinggris[id]) conn.send1But(m.chat, `Waktu habis!\n\nCobaa Lagi Lain Waktu`, wm, 'tebakinggris', '.tebakinggris', m)
      delete global.tebakinggris[id]
    }, 30000)
  ]
}
handler.help = ['tebakinggris']
handler.tags = ['game']
handler.command = /^(tebakinggris)$/i
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

global.tebakinggris = [
'Pintu',
'Mobil',
'Kereta',
'Rumah',
'Malaikat',
'Supir',
'Bumi',
'Awan',
'Laut',
'Tanah',
'Nenen',
'Payung',
'Sunami',
'Gajah',
'Kadal',
'Kucing',
'Lalat',
'Kuman',
'Hidung',
'Ayam',
'Pacar',
'Selingkuhan',
'Meja',
'Boneka',
'Hantu',
'Elang',
]