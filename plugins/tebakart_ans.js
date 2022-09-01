let handler = m => m

global.tebakart = global.tebakart ? global.tebakart : {}

handler.before = async function (m, { text }) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 tebakart 」/i.test(m.quoted.text)) return
  if (!(id in global.tebakart)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.tebakart[id][0].id) {
  let tebakart = global.tebakart[id][1]
  if (m.text.toLowerCase() == 'Anya'.toLowerCase() 
|| m.text.toLowerCase() == 'Loid forger'.toLowerCase() 
|| m.text.toLowerCase() == 'Yor forger'.toLowerCase() 
|| m.text.toLowerCase() == 'Dustin'.toLowerCase() 
|| m.text.toLowerCase() == 'Tiktok'.toLowerCase() 
|| m.text.toLowerCase() == 'Iphone'.toLowerCase() 
|| m.text.toLowerCase() == 'Like'.toLowerCase()
|| m.text.toLowerCase() == 'Among Us'.toLowerCase() 
|| m.text.toLowerCase() == 'Rainbow'.toLowerCase() 
|| m.text.toLowerCase() == 'Steve'.toLowerCase() 
|| m.text.toLowerCase() == 'Heart'.toLowerCase()
|| m.text.toLowerCase() == 'Helicopter'.toLowerCase()) {
   this.send2But(m.chat, `*Jawaban Benar!*\n+10000 XP`, wm, 'tebakart', '.tebakart', 'exp', '.exp', m)
    global.db.data.users[m.sender].exp += 10000

    clearTimeout(global.tebakart[id][3])
    delete global.tebakart[id]
  } else {
    if (--global.tebakart[id][4] == 0) {
      this.send1But(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, 'tebakart', '.tebakart', m)
      clearTimeout(global.tebakart[id][3])
      delete global.tebakart[id]
    } else this.reply(m.chat, `Jawaban Salah`, m)
  }
 }
}

module.exports = handler

