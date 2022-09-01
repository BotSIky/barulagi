const Btikus = 1800
const Stikus = 500
const Bbebek = 500
const Sbebek = 50
const Bmerak = 800
const Smerak = 200
const Bflaminggo = 1500
const Sflaminggo = 400
const Bmonyet = 2000 
const Smonyet = 900
const Bcacing = 1400
const Scacing = 300
const Btupai = 1600
const Stupai = 500
const Bberuang = 700
const Sberuang = 100
const Brusa = 500
const Srusa = 50
const Bmerpati = 99999999
const Smerpati = 999999

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `
${usedPrefix}shopanimal <buy|sell> <item> <jumlah>

Contoh penggunaan: *${usedPrefix}shopanimal buy tikus 1*

============================

*Animal | Harga Beli*
tikus: ${Btikus}
bebek: ${Bbebek}
merak: ${Bmerak}
flaminggo: ${Bflaminggo}
monyet: ${Bmonyet}
cacing: ${Bcacing}
tupai: ${Btupai}
beruang: ${Bberuang}
rusa: ${Brusa}
merpati²: ${Bmerpati}


*Animal | Harga Jual*
tikus: ${Stikus}
bebek: ${Sbebek}
merak: ${Smerak}
flaminggo: ${Sflaminggo}
monyet: ${Smonyet}
cacing: ${Scacing}
tupai: ${Stupai}
beruang: ${Sberuang}
rusa: ${Srusa}
merpati²: ${Smerpati}
`.trim()

    try {
        if (/shopanimal/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'tikus':
                            if (global.db.data.users[m.sender].money >= Btikus * count) {
                                global.db.data.users[m.sender].tikus += count * 1
                                global.db.data.users[m.sender].money -= Btikus * count
                                conn.reply(m.chat, `Succes membeli ${count} tikus dengan harga ${Btikus * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tikus dengan harga ${Btikus * count} money`.trim(), m)
                        
                    break
                    case 'bebek':
                            if (global.db.data.users[m.sender].money >= Bbebek * count) {
                                global.db.data.users[m.sender].bebek += count * 1
                                global.db.data.users[m.sender].money -= Bbebek * count
                                conn.reply(m.chat, `Succes membeli ${count} bebek dengan harga ${Bbebek * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bebek dengan harga ${Bbebek * count} money`.trim(), m)
                        
                    break
                    case 'merak':
                            if (global.db.data.users[m.sender].money >= Bmerak * count) {
                                global.db.data.users[m.sender].merak += count * 1
                                global.db.data.users[m.sender].money -= Bmerak * count
                                conn.reply(m.chat, `Succes membeli ${count} merak dengan harga ${Bmerak * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} merak dengan harga ${Bmerak * count} money`.trim(), m)
                        
                    break
                    case 'flaminggo':
                            if (global.db.data.users[m.sender].money >= Bflaminggo * count) {
                                global.db.data.users[m.sender].flaminggo += count * 1
                                global.db.data.users[m.sender].money -= Bflaminggo * count
                                conn.reply(m.chat, `Succes membeli ${count} flaminggo dengan harga ${Bflaminggo * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} flaminggo dengan harga ${Bflaminggo * count} money`.trim(), m)
                        
                    break
                    case 'monyet':
                            if (global.db.data.users[m.sender].money >= Bmonyet * count) {
                                global.db.data.users[m.sender].monyet += count * 1
                                global.db.data.users[m.sender].money -= Bmonyet * count
                                conn.reply(m.chat, `Succes membeli ${count} monyet dengan harga ${Bmonyet * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} monyet dengan harga ${Bmonyet * count} money`.trim(), m)
                        
                    break
                    case 'cacing':
                            if (global.db.data.users[m.sender].money >= Bcacing * count) {
                                global.db.data.users[m.sender].cacing += count * 1
                                global.db.data.users[m.sender].money -= Bcacing * count
                                conn.reply(m.chat, `Succes membeli ${count} cacing dengan harga ${Bcacing * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} cacing dengan harga ${Bcacing * count} money`.trim(), m)
                        
                    break
                    case 'tupai':
                            if (global.db.data.users[m.sender].money >= Btupai * count) {
                                global.db.data.users[m.sender].tupai += count * 1
                                global.db.data.users[m.sender].money -= Btupai * count
                                conn.reply(m.chat, `Succes membeli ${count} tupai dengan harga ${Btupai * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tupai dengan harga ${Btupai * count} money`.trim(), m)
                        
                    break
                    case 'beruang':
                            if (global.db.data.users[m.sender].money >= Bberuang * count) {
                                global.db.data.users[m.sender].beruang += count * 1
                                global.db.data.users[m.sender].money -= Bberuang * count
                                conn.reply(m.chat, `Succes membeli ${count} beruang dengan harga ${Bberuang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} beruang dengan harga ${Bberuang * count} money`.trim(), m)
                        
                    break
                    case 'rusa':
                            if (global.db.data.users[m.sender].money >= Brusa * count) {
                                global.db.data.users[m.sender].rusa += count * 1
                                global.db.data.users[m.sender].money -= Brusa * count
                                conn.reply(m.chat, `Succes membeli ${count} rusa dengan harga ${Brusa * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} rusa dengan harga ${Brusa * count} money`.trim(), m)
                        
                    break
                    case 'merpati':
                            if (global.db.data.users[m.sender].money >= Bmerpati * count) {
                                global.db.data.users[m.sender].merpati += count * 1
                                global.db.data.users[m.sender].money -= Bmerpati * count
                                conn.reply(m.chat, `Succes membeli ${count} merpati² dengan harga ${Bmerpati * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} merpati² dengan harga ${Bmerpati * count} money`.trim(), m)
                        
                    break                   
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
             break
            case 'sell': 
                switch (_type) {
                    case 'tikus':
                        if (global.db.data.users[m.sender].tikus >= count * 1) {
                            global.db.data.users[m.sender].tikus -= count * 1
                            global.db.data.users[m.sender].money += Stikus * count
                            conn.reply(m.chat, `Succes menjual ${count} tikus, dan anda mendapatkan ${Stikus * count} money`, m)
                        } else conn.reply(m.chat, `tikus anda tidak cukup`, m)
                        break
                    case 'bebek':
                        if (global.db.data.users[m.sender].bebek >= count * 1) {
                            global.db.data.users[m.sender].bebek -= count * 1
                            global.db.data.users[m.sender].money += Sbebek * count
                            conn.reply(m.chat, `Succes menjual ${count} bebek, dan anda mendapatkan ${Sbebek * count} money`, m)
                        } else conn.reply(m.chat, `bebek anda tidak cukup`, m)
                        break
                    case 'merak':
                        if (global.db.data.users[m.sender].merak >= count * 1) {
                            global.db.data.users[m.sender].merak -= count * 1
                            global.db.data.users[m.sender].money += Smerak * count
                            conn.reply(m.chat, `Succes menjual ${count} merak, dan anda mendapatkan ${Smerak * count} money`, m)
                        } else conn.reply(m.chat, `merak anda tidak cukup`, m)
                        break
                    case 'flaminggo':
                        if (global.db.data.users[m.sender].flaminggo >= count * 1) {
                            global.db.data.users[m.sender].flaminggo -= count * 1
                            global.db.data.users[m.sender].money += Sflaminggo * count
                            conn.reply(m.chat, `Succes menjual ${count} flaminggo, dan anda mendapatkan ${Sflaminggo * count} money`, m)
                        } else conn.reply(m.chat, `flaminggo anda tidak cukup`, m)
                        break
                    case 'monyet':
                        if (global.db.data.users[m.sender].monyet >= count * 1) {
                            global.db.data.users[m.sender].monyet -= count * 1
                            global.db.data.users[m.sender].money += Smonyet * count
                            conn.reply(m.chat, `Succes menjual ${count} monyet, dan anda mendapatkan ${Smonyet * count} money`, m)
                        } else conn.reply(m.chat, `monyet anda tidak cukup`, m)
                        break
                    case 'cacing':
                        if (global.db.data.users[m.sender].cacing >= count * 1) {
                            global.db.data.users[m.sender].cacing -= count * 1
                            global.db.data.users[m.sender].money += Scacing * count
                            conn.reply(m.chat, `Succes menjual ${count} cacing, dan anda mendapatkan ${Scacing * count} money`, m)
                        } else conn.reply(m.chat, `cacing anda tidak cukup`, m)
                        break
                    case 'tupai':
                        if (global.db.data.users[m.sender].tupai >= count * 1) {
                            global.db.data.users[m.sender].tupai -= count * 1
                            global.db.data.users[m.sender].money += Stupai * count
                            conn.reply(m.chat, `Succes menjual ${count} tupai, dan anda mendapatkan ${Stupai * count} money`, m)
                        } else conn.reply(m.chat, `tupai anda tidak cukup`, m)
                        break
                    case 'beruang':
                        if (global.db.data.users[m.sender].beruang >= count * 1) {
                            global.db.data.users[m.sender].beruang -= count * 1
                            global.db.data.users[m.sender].money += Sberuang * count
                            conn.reply(m.chat, `Succes menjual ${count} beruang, dan anda mendapatkan ${Sberuang * count} money`, m)
                        } else conn.reply(m.chat, `beruang anda tidak cukup`, m)
                        break
                    case 'rusa':
                        if (global.db.data.users[m.sender].rusa >= count * 1) {
                            global.db.data.users[m.sender].rusa -= count * 1
                            global.db.data.users[m.sender].money += Srusa * count
                            conn.reply(m.chat, `Succes menjual ${count} rusa, dan anda mendapatkan ${Srusa * count} money`, m)
                        } else conn.reply(m.chat, `rusa anda tidak cukup`, m)
                        break
                    case 'merpati':
                        if (global.db.data.users[m.sender].merpati >= count * 1) {
                            global.db.data.users[m.sender].merpati -= count * 1
                            global.db.data.users[m.sender].money += Smerpati * count
                            conn.reply(m.chat, `Succes menjual ${count} merpati², dan anda mendapatkan ${Smerpati * count} money`, m)
                        } else conn.reply(m.chat, `merpati² anda tidak cukup`, m)
                        break                    
               default:
                        return conn.reply(m.chat, Kaine, m)
                }
            break
        default:
                return conn.reply(m.chat, Kaine, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m)
        console.log(e)
    }
}

handler.help = ['shopanimal <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shopanimal)$/i
handler.limit = true
handler.group = true
module.exports = handler



