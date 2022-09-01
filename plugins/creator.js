function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['realowner', 'creator']
handler.tags = ['info']

handler.command = /^(realowner|creator)$/i

module.exports = handler
