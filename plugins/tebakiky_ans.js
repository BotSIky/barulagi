let handler = m => m

global.tebakiky = global.tebakiky ? global.tebakiky : {}

handler.before = async function (m, { text }) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 tebakiky 」/i.test(m.quoted.text)) return
  if (!(id in global.tebakiky)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.tebakiky[id][0].id) {
  let tebakiky = global.tebakiky[id][1]
  if (m.text.toLowerCase() == 'Sate'.toLowerCase() 
|| m.text.toLowerCase() == 'Beatiful In White'.toLowerCase() 
|| m.text.toLowerCase() == 'Taro'.toLowerCase() 
|| m.text.toLowerCase() == 'Palembang'.toLowerCase() 
|| m.text.toLowerCase() == 'Rizky'.toLowerCase() 
|| m.text.toLowerCase() == '173'.toLowerCase() 
|| m.text.toLowerCase() == 'Bokep'.toLowerCase()
|| m.text.toLowerCase() == 'Ramah'.toLowerCase() 
|| m.text.toLowerCase() == 'Banget'.toLowerCase() 
|| m.text.toLowerCase() == 'Berenang'.toLowerCase() 
|| m.text.toLowerCase() == 'Sprite'.toLowerCase()) {
   this.send2But(m.chat, `*Jawaban Benar!*\n+10000 XP`, wm, 'tebakiky', '.tebakiky', 'exp', '.exp', m)
    global.db.data.users[m.sender].exp += 10000

    clearTimeout(global.tebakiky[id][3])
    delete global.tebakiky[id]
  } else {
    if (--global.tebakiky[id][4] == 0) {
      this.send1But(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, 'tebakiky', '.tebakiky', m)
      clearTimeout(global.tebakiky[id][3])
      delete global.tebakiky[id]
    } else this.reply(m.chat, `Jawaban Salah`, m)
  }
 }
}

module.exports = handler

