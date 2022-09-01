const quotes = require('../lib/jagokata')
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `contoh:\n\n${usedPrefix + command} cinta

PILIHAN TERSEDIA 🔥

𖣐 .kata cinta
𖣐 .kata rindu
𖣐 .kata mimpi
𖣐 .kata sendiri
𖣐 .kata sabar
𖣐 .kata kesedihan
𖣐 .kata sedih
𖣐 .kata galau
𖣐 .kata albert
𖣐 .kata mencintai
𖣐 .kata mengasihi
𖣐 .kata mulut
𖣐 .kata orang
𖣐 .kata ali
𖣐 .kata benci
𖣐 .kata tere
𖣐 .kata tobat
𖣐 .kata gombal
𖣐 .kata bayang
𖣐 .kata lain
𖣐 .kata sendiri
𖣐 .kata kebebasan
𖣐 .kata psikopat
𖣐 .kata orizuka
𖣐 .kata menyentuh
𖣐 .kata kebahagiaan
𖣐 .kata pernikahan
𖣐 .kata kemerdekaan
`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'psikopat':
        case 'rindu':
        case 'albert':
        case 'sendiri':
        case 'lain':
        case 'tobat':
        case 'orang':
        case 'ali':
        case 'benci':
        case 'gombal':
        case 'orizuka':
        case 'kebebasan':
        case 'bayang':
        case 'mencintai':
        case 'mengasihi':
        case 'mulut':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'tere':
        case 'sedih':
        case 'seks':
        case 'galau':
        case 'menyentuh':
        case 'kebahagiaan':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                m.reply(`_“${quote}”_\n\n_${author}_`)
            })
            break
        default:
            throw er
    }
}
handler.help = ['kata'].map(v => v + ' <opsi>')
handler.tags = ['quotes']
handler.command = /^(kata|jagokata)$/i
handler.limit = true

module.exports = handler