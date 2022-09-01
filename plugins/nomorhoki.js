let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Masukan Nomor', m)
	
  conn.reply(m.chat, `
┏━━❬ *Nomor Nya ${text}* ❭
┃
┃• Nomor : ${text}
┃• Kesesatan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Kedustaan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Sifat Buruk Nomor : ${pickRandom(['Sial','Sangat Sial','Pelit','Berbahaya','Dannger','Mematikan','Beracun','Sangat Bahaya','Penuh Kesialan','Curang'])}
┃• Sifat Baik Nomor : ${pickRandom(['Mantap','Jp Trs','Hobi Wd','Wangi','Baik','Penolong','Mukjizat','Keberuntungan','Sedikit Hoki','Sangat Hoki','Hoki'])}
┃• Keberuntungan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Kehokian : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Kekuatan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Kesuraman : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┗━━━━━━━━━━━━━━━━
`.trim(), m)
}
handler.help = ['nomorhoki <nomor>']
handler.tags = ['fun']
handler.command = /^nomorhoki/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

