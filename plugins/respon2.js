let handler = async m => m.reply(`
            iya kak jika ingin bertanya bisa ketik .realowner
`.trim()) // Tambah sendiri kalo mau

handler.customPrefix = /^(hai|halo|hello|hallo|hi|hei|haii|haaii|haii|huy|hey|hay|hii)$/i
handler.command = new RegExp

handler.limit = 200
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false
module.exports = handler