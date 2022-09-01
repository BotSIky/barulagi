let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 5 : isNumber(args[0]) ? parseInt(args[0]) : 5
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.money = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
}
handler.help = ['money'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetmoney)$/i

handler.owner = true

module.exports = handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
