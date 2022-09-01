global.tebakart = global.tebakart ? global.tebakart : {}
let handler  = async (m, { conn, usedPrefix }) => {

  let id = m.chat
  if (id in global.tebakart) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.tebakart[id][0])
  global.tebakart[id] = [
    await conn.reply(m.chat,`「 tebakart 」\n\nArt Berbentuk Apakah Ini :\n${pickRandom(global.tebakart)}\n\nWaktu : 60.00 Detik\nBonus : 10000 XP`, m),
    tebakart, 1,
    setTimeout(() => {
      if (global.tebakart[id]) conn.send1But(m.chat, `Waktu habis!\n\nCobaa Lagi Lain Waktu`, wm, 'tebakart', '.tebakart', m)
      delete global.tebakart[id]
    }, 60000)
  ]
}
handler.help = ['tebakart']
handler.tags = ['game']
handler.command = /^(tebakart)$/i
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

global.tebakart = [
`
⬛⬛️🌸🌸🌸🌸⬛⬛
⬛🌸🌸🌸🌸🌸🌸⬛
🌸🌸🌸🌸🌸🌸🌸🌸
🌸🏻🏻🏻🏻🏻🏻🌸
🌸⬜🟩🏻🏻🟩⬜🌸
🌸🏻🏻🏻🏻🏻🏻🌸
🌸🏻🏻🟥🟥🏻🏻🌸
🌸🏻🏻🟥🟥🏻🏻🌸`, 
`
🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟫🟫🏻🏻🟫🟫🟨
🟨⬜🟦🏻🏻🟦⬜🟨
🏻🏻🏻🏻🏻🏻🏻🏻
🏻🏻🏻🟥🟥🏻🏻🏻
🏻🏻🏻🟥🟥🏻🏻🏻`, 
`
⬛⬛⬛⬛⬛⬛⬛⬛
⬛🟨🟨🟨🟨🟨🟨⬛
🟨⬛⬛⬛⬛⬛⬛🟨
🟨⬛⬛⬛⬛⬛⬛🟨
🟨⬜🟥🏻🏻🟥⬜🟨
🟨🏻🏻🏻🏻🏻🏻🟨
⬛🏻🏻🟥🟥🏻🏻⬛
⬛🏻🏻🏻🏻🏻🏻⬛`, 
`
🟦🟦⬜⬜⬜⬜🟦🟦
🟥🟥🟥🟥🟥🟥🟥🟥
🟫🏻🏻🏻🏻🏻🏻🟫
🟫⬜⬛🏻🏻⬛⬜🟫
🟫🏻🏻🏻🏻🏻🏻🟫
🟫🟥⬜⬛⬛⬜🟥🟫
🟫🏻🟥🟥🟥🟥🏻🟫
🟫🏻🏻🏻🏻🏻🏻🟫`, 
`
████████▀▀▀████
████████────▀██
████████──█▄──█
███▀▀▀██──█████
█▀──▄▄██──█████
█──█████──█████
█▄──▀▀▀──▄█████
███▄▄▄▄▄███████`, 
`
🎛⬜⬜
⬜⬜⬜
⬜🍎⬜
⬜⬜⬜
⬜⬜⬜`, 
`
░░░░░░▄▄
░░░░░█░░█
▄▄▄▄▄█░░█▄▄▄
▓▓▓▓█░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
███▀▀▀███████`, 
`
⠀🟥🟥🟥
🟥🟦⬜⬜
🟥🟦🟦🟦
🟥🟥🟥🟥
🟥🟥🟥🟥
🟥._🟥`, 
`
➖➖➖➖➖🟥🟥🟥
➖➖➖🟥🟥🟧🟧🟧
➖➖🟥🟧🟧🟨🟨🟨
➖🟥🟧🟧🟨🟩🟩🟩
➖🟥🟧🟨🟩🟦🟦🟦
🟥🟧🟨🟩🟦🟪🟪🟪
🟥🟧🟨🟩🟦🟪
🟥🟧🟨🟩🟦🟪`, 
`
🏿🏿🏿🏿🏿🏿🏿🏿
🏿🏿🏽🏽🏽🏽🏿🏿
🏽🏽🏽🏽🏽🏽🏽🏽
🏽⬜⬛🏽🏽⬛⬜🏽
🏽🏽🏽🏿🏿🏽🏽🏽
🏽🏽🏿🏽🏽🏿🏽🏽
🏽🏽🏿🏿🏿🏿🏽🏽‍‍`, 
`
➖🟥🟥➖➖➖🟥🟥
🟥🟥🟥🟥➖🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥🟥🟥
🟥🟥🟥🟥🟥🟥🟥🟥🟥
➖🟥🟥🟥🟥🟥🟥🟥
➖🟥🟥🟥🟥🟥🟥🟥
➖➖🟥🟥🟥🟥🟥
➖➖➖🟥🟥🟥
➖➖➖➖🟥`, 
`
▬▬.◙.▬▬
▂▄▄▓▄▄▂
█▀▀████▄▄▄▄▄◢◤
█Heli-Cop █▀▀▀▀╬
◥████████◤
══╩══╩══`, 
]
