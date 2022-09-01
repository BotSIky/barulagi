let handler = async (m, { conn, usedPrefix }) => {
         let tikus = global.db.data.users[m.sender].tikus          
         let bebek = global.db.data.users[m.sender].bebek
         let merak = global.db.data.users[m.sender].merak 
         let flaminggo = global.db.data.users[m.sender].flaminggo
         let monyet = global.db.data.users[m.sender].monyet 
         let cacing = global.db.data.users[m.sender].cacing
         let tupai = global.db.data.users[m.sender].tupai
         let beruang = global.db.data.users[m.sender].beruang 
         let rusa = global.db.data.users[m.sender].rusa
         let merpati = global.db.data.users[m.sender].merpati       
         let aineh = `
[ K A N D A N G ]

▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄
█▒▒░░░░░░░░░▒▒█
─█░░█░░░░░█░░█
──█░░░▀█▀░░░█
──▀▄░░░░░░░▄▀
█▄█ █▀█ █▀█ █▀█ █▄█
█▀█ █▀█ █▀▀ █▀▀  █ 

> 🐁 : [${tikus}] Ekor Tikus       
> 🦆 : [${bebek}] Ekor Bebek
> 🦚 : [${merak}] Ekor Merak     
> 🦩 : [${flaminggo}] Ekor Flaminggo
> 🐒 : [${monyet}] Ekor Monyet      
> 🪱 : [${cacing}] Ekor Cacing
> 🐿️ : [${tupai}] Ekor Tupai          
> 🐻 : [${beruang}] Ekor Beruang
> 🦌️ : [${rusa}] Ekor Rusa

HEWAN LANGKA         
🀄 🕊️ : [${merpati}] Ekor Merpati  🀄

AYO MARI TINGKATKAN ISI KANDANG MU
`.trim()

conn.reply(m.chat, aineh, m)
}

handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i
handler.limit = true
handler.group = true
module.exports = handler

