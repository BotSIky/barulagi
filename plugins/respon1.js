let handler = async m => m.reply(`
            iya kak Bot Ada Di Sini Silah kan ketik .menu
`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^(p|P|oyy|Oyy|oy|Oy|woy|Woy|Oy|oy)$/i
handler.command = new RegExp

handler.limit = 200
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false 
module.exports = handler