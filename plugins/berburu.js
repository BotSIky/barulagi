
const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastberburu + 1800000
  if (new Date - global.db.data.users[m.sender].lastberburu< 1800000) throw `Anda sudah lelah untuk berburu\nTunggu selama ${msToTime(time - new Date())} lagi`
	let tikusnye = `${Math.floor(Math.random() * 10)}`.trim()
	let bebeknye = `${Math.floor(Math.random() * 10)}`.trim()
	let meraknye = `${Math.floor(Math.random() * 10)}`.trim()
	let flaminggonye = `${Math.floor(Math.random() * 10)}`.trim()
	let monyetnye = `${Math.floor(Math.random() * 10)}`.trim()
	let cacingnye = `${Math.floor(Math.random() * 10)}`.trim()
	let tupainye = `${Math.floor(Math.random() * 10)}`.trim()
	let beruangnye = `${Math.floor(Math.random() * 10)}`.trim()
	let rusanye = `${Math.floor(Math.random() * 10)}`.trim()
	let merpatinye = `${Math.floor(Math.random() * 1)}`.trim()
	global.db.data.users[m.sender].tikus += tikusnye * 1
	global.db.data.users[m.sender].bebek += bebeknye * 1
	global.db.data.users[m.sender].merak += meraknye * 1
	global.db.data.users[m.sender].flaminggo += flaminggonye * 1
	global.db.data.users[m.sender].monyet += monyetnye * 1
	global.db.data.users[m.sender].cacing += cacingnye * 1
	global.db.data.users[m.sender].tupai += tupainye * 1
	global.db.data.users[m.sender].beruang += beruangnye * 1
	global.db.data.users[m.sender].rusa += rusanye * 1
	global.db.data.users[m.sender].merpati += merpatinye * 1
	global.db.data.users[m.sender].lastberburu = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${tikusnye} 🐁\n+${meraknye} 🦚\n+${bebeknye} 🦆\n+${flaminggonye} 🦩\n+${monyetnye} 🐒\n+${cacingnye} 🪱\n+${tupainye} 🐿\n+${beruangnye} 🐻\n+${rusanye} 🦌\n+${merpatinye} 🕊\n\nWahh Hasil Berburu Hari Ini Lumayan Juga..`)
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya berburu lagi 😅`, m)
					}, timeout)
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}