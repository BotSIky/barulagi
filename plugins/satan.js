let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("wallpaper satanist","Dark Satanist","cat satanist","Lucifer","Satanas").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendButtonImg(m.chat,b, '666', wm, 'NEXT', '.satanist', m))
   }
    
handler.help = ['satanist'] 
handler.tags = ['internet'] 
handler.command = /^(satanist)$/i
handler.limit = true

module.exports = handler