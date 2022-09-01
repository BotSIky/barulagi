let handler = m => m

global.tebakinggris = global.tebakinggris ? global.tebakinggris : {}

handler.before = async function (m, { text }) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 tebakinggris 」/i.test(m.quoted.text)) return
  if (!(id in global.tebakinggris)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.tebakinggris[id][0].id) {
  let tebakinggris = global.tebakinggris[id][1]
  if (m.text.toLowerCase() == 'Door'.toLowerCase() 
|| m.text.toLowerCase() == 'Cars'.toLowerCase() 
|| m.text.toLowerCase() == 'Train'.toLowerCase() 
|| m.text.toLowerCase() == 'House'.toLowerCase() 
|| m.text.toLowerCase() == 'Angel '.toLowerCase() 
|| m.text.toLowerCase() == 'Driver'.toLowerCase() 
|| m.text.toLowerCase() == 'Earth'.toLowerCase()
|| m.text.toLowerCase() == 'Cloud'.toLowerCase() 
|| m.text.toLowerCase() == 'Sea'.toLowerCase() 
|| m.text.toLowerCase() == 'Soil'.toLowerCase()
|| m.text.toLowerCase() == 'Breast'.toLowerCase() 
|| m.text.toLowerCase() == 'Umbrella'.toLowerCase() 
|| m.text.toLowerCase() == 'Tsunami'.toLowerCase()
|| m.text.toLowerCase() == 'Elephant'.toLowerCase() 
|| m.text.toLowerCase() == 'Lizard'.toLowerCase() 
|| m.text.toLowerCase() == 'Cat'.toLowerCase()
|| m.text.toLowerCase() == 'Fly'.toLowerCase() 
|| m.text.toLowerCase() == 'Germs'.toLowerCase() 
|| m.text.toLowerCase() == 'Nose'.toLowerCase()
|| m.text.toLowerCase() == 'Chiken'.toLowerCase() 
|| m.text.toLowerCase() == 'Boyfriend'.toLowerCase() 
|| m.text.toLowerCase() == 'Having an affair '.toLowerCase() 
|| m.text.toLowerCase() == 'Table'.toLowerCase() 
|| m.text.toLowerCase() == 'Doll'.toLowerCase() 
|| m.text.toLowerCase() == 'Ghost'.toLowerCase()
|| m.text.toLowerCase() == 'Macan tutul'.toLowerCase()) {
   this.send2But(m.chat, `*Jawaban Benar!*\n+10000 XP`, wm, 'tebakinggris', '.tebakinggris', 'exp', '.exp', m)
    global.db.data.users[m.sender].exp += 10000

    clearTimeout(global.tebakinggris[id][3])
    delete global.tebakinggris[id]
  } else {
    if (--global.tebakinggris[id][4] == 0) {
      this.send1But(m.chat, `*Kesempatan habis!*\n\nCoba Lagi lain waktu`, wm, 'tebakinggris', '.tebakinggris', m)
      clearTimeout(global.tebakinggris[id][3])
      delete global.tebakinggris[id]
    } else this.reply(m.chat, `Jawaban Salah`, m)
  }
 }
}

module.exports = handler