let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("Cosplay Pikachu","Gambar Pikachu","Pikachu imut","Wallpaper pikachu","Pikachu").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendButtonImg(m.chat,b, 'Pika-pika', wm, 'NEXT', '.pikachu', m))
   }
    
handler.help = ['pikachu']
handler.tags = ['internet']
handler.command = /^(pikachu)$/i
handler.limit = true

module.exports = handler