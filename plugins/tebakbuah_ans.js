let handler = m => m

global.tebakbuah = global.tebakbuah ? global.tebakbuah : {}

handler.before = async function (m, { text }) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 tebakbuah 」/i.test(m.quoted.text)) return
  if (!(id in global.tebakbuah)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.tebakbuah[id][0].id) {
  let tebakbuah = global.tebakbuah[id][1]
  if (m.text.toLowerCase() == 'Anggur'.toLowerCase() 
|| m.text.toLowerCase() == 'Semangka'.toLowerCase() 
|| m.text.toLowerCase() == 'Alpukat'.toLowerCase() 
|| m.text.toLowerCase() == 'Nanas'.toLowerCase() 
|| m.text.toLowerCase() == 'Timun'.toLowerCase() 
|| m.text.toLowerCase() == 'Pisang'.toLowerCase() 
|| m.text.toLowerCase() == 'Lemon'.toLowerCase()
|| m.text.toLowerCase() == 'Apel'.toLowerCase() 
|| m.text.toLowerCase() == 'Kiwi'.toLowerCase() 
|| m.text.toLowerCase() == 'Tomat'.toLowerCase()
|| m.text.toLowerCase() == 'Jagung'.toLowerCase() 
|| m.text.toLowerCase() == 'Mangga'.toLowerCase() 
|| m.text.toLowerCase() == 'Pir'.toLowerCase()
|| m.text.toLowerCase() == 'Cerry'.toLowerCase() 
|| m.text.toLowerCase() == 'Paprika'.toLowerCase() 
|| m.text.toLowerCase() == 'Stroberry'.toLowerCase()
|| m.text.toLowerCase() == 'Jeruk'.toLowerCase() 
|| m.text.toLowerCase() == 'Melon'.toLowerCase() 
|| m.text.toLowerCase() == 'Kelapa'.toLowerCase()
|| m.text.toLowerCase() == 'Terong'.toLowerCase() 
|| m.text.toLowerCase() == 'Cabe'.toLowerCase()) {
   this.send2But(m.chat, `*Jawaban Benar!*\n+10000 XP`, wm, 'tebakbuah', '.tebakbuah', 'exp', '.exp', m)
    global.db.data.users[m.sender].exp += 10000

    clearTimeout(global.tebakbuah[id][3])
    delete global.tebakbuah[id]
  } else {
    if (--global.tebakbuah[id][4] == 0) {
      this.send1But(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, 'tebakbuah', '.tebakbuah', m)
      clearTimeout(global.tebakbuah[id][3])
      delete global.tebakbuah[id]
    } else this.reply(m.chat, `Jawaban Salah`, m)
  }
 }
}

module.exports = handler