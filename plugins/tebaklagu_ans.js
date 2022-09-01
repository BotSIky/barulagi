const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let Jid = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/TEBAK JUDUL LAGU/i.test(m.quoted.text)) return !0
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {}
    if (!(Jid in this.tebaklagu)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.Jid == this.tebaklagu[Jid][0].Jid) {
        let json = JSON.parse(JSON.stringify(this.tebaklagu[Jid][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.judul.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklagu[Jid][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`*Benar!*\n+${this.tebaklagu[Jid][2]} XP\n+1 Tiketcoin`)
            clearTimeout(this.tebaklagu[Jid][3])
            delete this.tebaklagu[Jid]
        } else if (similarity(m.text.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
