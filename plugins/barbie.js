let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("wallpaper barbie","cute barbie","Cosplay Barbie","Barbie lucu","Barbie Lucu").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendButtonImg(m.chat,b, 'Nihhh', wm, 'NEXT', '.barbie', m))
   }
    
handler.help = ['barbie'] 
handler.tags = ['internet']
handler.command = /^(barbie)$/i
handler.limit = true

module.exports = handler