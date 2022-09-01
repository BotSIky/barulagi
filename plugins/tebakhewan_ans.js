let handler = m => m

global.tebakhewan = global.tebakhewan ? global.tebakhewan : {}

handler.before = async function (m, { text }) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 tebakhewan 」/i.test(m.quoted.text)) return
  if (!(id in global.tebakhewan)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.tebakhewan[id][0].id) {
  let tebakhewan = global.tebakhewan[id][1]
  if (m.text.toLowerCase() == 'Jerapah'.toLowerCase() 
|| m.text.toLowerCase() == 'Mamut'.toLowerCase() 
|| m.text.toLowerCase() == 'Banteng'.toLowerCase() 
|| m.text.toLowerCase() == 'Zebra'.toLowerCase() 
|| m.text.toLowerCase() == 'Kucing'.toLowerCase() 
|| m.text.toLowerCase() == 'Anjing'.toLowerCase() 
|| m.text.toLowerCase() == 'Bebek'.toLowerCase()
|| m.text.toLowerCase() == 'Ikan'.toLowerCase() 
|| m.text.toLowerCase() == 'Ayam'.toLowerCase() 
|| m.text.toLowerCase() == 'Buaya'.toLowerCase()
|| m.text.toLowerCase() == 'Harimau'.toLowerCase() 
|| m.text.toLowerCase() == 'Elang'.toLowerCase() 
|| m.text.toLowerCase() == 'Ulat'.toLowerCase()
|| m.text.toLowerCase() == 'Kupu-kupu'.toLowerCase() 
|| m.text.toLowerCase() == 'Cicak'.toLowerCase() 
|| m.text.toLowerCase() == 'Babi'.toLowerCase()
|| m.text.toLowerCase() == 'Lebah'.toLowerCase() 
|| m.text.toLowerCase() == 'Lalat'.toLowerCase() 
|| m.text.toLowerCase() == 'Kuman'.toLowerCase()
|| m.text.toLowerCase() == 'Flaminggo'.toLowerCase() 
|| m.text.toLowerCase() == 'Tikus'.toLowerCase() 
|| m.text.toLowerCase() == 'Gurita'.toLowerCase() 
|| m.text.toLowerCase() == 'Berang-berang'.toLowerCase() 
|| m.text.toLowerCase() == 'Anjing laut'.toLowerCase() 
|| m.text.toLowerCase() == 'Rakun'.toLowerCase()
|| m.text.toLowerCase() == 'Kura-kura'.toLowerCase() 
|| m.text.toLowerCase() == 'Macan tutul'.toLowerCase()) {
      this.send1But(m.chat, `*Jawaban Benar!*\n+5000 XP`, wm, 'tebakhewan', '.tebakhewan', m)
    global.db.data.users[m.sender].exp += 5000

    clearTimeout(global.tebakhewan[id][3])
    delete global.tebakhewan[id]
  } else {
    if (--global.tebakhewan[id][4] == 0) {
      this.send1But(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, 'tebakhewan', '.tebakhewan', m)
      clearTimeout(global.tebakhewan[id][3])
      delete global.tebakhewan[id]
    } else this.reply(m.chat, `Jawaban Salah!`, m)
  }
 }
}

module.exports = handler

