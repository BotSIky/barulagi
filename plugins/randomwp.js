let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("wallpaper aesthetic","Wallpaper Dark","Wallpaper Cute","Wallpaper Sad","Wallpaper Kartun").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendButtonImg(m.chat,b, 'Nih Random Wallpaper Nya', wm, 'NEXT', '.randomwpp', m))
   }
    
handler.help = ['randomwp'] 
handler.tags = ['maker']
handler.command = /^(randomwp)$/i
handler.limit = true

module.exports = handler