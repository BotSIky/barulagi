const dir = [
 'https://d.top4top.io/m_2194kkur50.mp4',
 'https://d.top4top.io/m_2194w90w70.mp4',
 'https://e.top4top.io/m_219404rh21.mp4',
 'https://f.top4top.io/m_2194657rl2.mp4',
 'https://g.top4top.io/m_2194cb2n33.mp4',
 'https://h.top4top.io/m_2194305c84.mp4',
 'https://i.top4top.io/m_219422ujt5.mp4',
 'https://j.top4top.io/m_2194b6xd16.mp4',
 'https://k.top4top.io/m_21945fvbm7.mp4,',
 'https://l.top4top.io/m_2194l9btc8.mp4',
 'https://a.top4top.io/m_2194mvqfr9.mp4', 
 'https://l.top4top.io/m_2194jop630.mp4',
 'https://a.top4top.io/m_21947er5e1.mp4',
 'https://b.top4top.io/m_2194p4frq2.mp4', 
 'https://c.top4top.io/m_2194qwfod3.mp4',
 'https://d.top4top.io/m_21941r0l14.mp4',
 'https://e.top4top.io/m_2194n5qob5.mp4'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'asupan.mp4', '', m)
}
handler.help = ['asupankienzi']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^asupankienzi$/i

module.exports = handler
