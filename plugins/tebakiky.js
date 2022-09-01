global.tebakiky = global.tebakiky ? global.tebakiky : {}
let handler  = async (m, { conn, usedPrefix }) => {

  let id = m.chat
  if (id in global.tebakiky) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.tebakiky[id][0])
  global.tebakiky[id] = [
    await conn.reply(m.chat,`「 tebakiky 」\n\nPertanyaan :\n${pickRandom(global.tebakiky)}\n\nWaktu : 60.00 Detik\nBonus : 10000 XP`, m),
    tebakiky, 1,
    setTimeout(() => {
      if (global.tebakiky[id]) conn.send1But(m.chat, `Waktu habis!\n\nCobaa Lagi Lain Waktu`, wm, 'tebakiky', '.tebakiky', m)
      delete global.tebakiky[id]
    }, 60000)
  ]
}
handler.help = ['tebakiky']
handler.tags = ['game']
handler.command = /^(tebakiky)$/i
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

global.tebakiky = [
'Apa Makanan Favorit Iky',
'Apa Lagu Favorit Iky',
'Apa Warna Kesukaan Iky',
'Dari Mana Iku Berasal',
'Nama Asli Iky',
'Tinggi Badan Iky (165-175)',
'Film Kesukaan Iky',
'Watak Iky',
'Apakah Iky Ganteng Atau Tidak',
'Apa Hobby Iky',
'Minuman Kesukaan Iky',
]
