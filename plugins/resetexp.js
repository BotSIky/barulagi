let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 28 : isNumber(args[0]) ? parseInt(args[0]) : 28
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.exp = lim)))
		conn.reply(m.chat, `Succes Reset Exp`, m)
}
handler.help = ['exp'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetexp)$/i

handler.owner = true

module.exports = handler

function isNumber(x = 0) { 
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
