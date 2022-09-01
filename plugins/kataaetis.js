
let handler  = async (m, { conn }) => {
let kataateis = [
'Jika benar hanya ada 1 AGAMA yang paling ABSOLUT dari 2.400 agama di dunia ini, Lantas kenapa ketika umat agama lain berdoa maka doanyaterkabulkan?.',
'Mencari Tuhan sama hal nya seperti kau berjalan di padang gurun dan melihat air dari kejauhan',
'Kalian mengira Tuhan bisa mnenyelamatkan manusia Padahal untuk menyelamatkan Adam dari iblis saja dia tidak bisa.',
'Tuhan adalah dalang dari segala kehancuran yang di muka bumi ini , kita hanyalah mainan tuhan',
'Agama Selalu mengajarkan kan yang Kebaikan? lantas bagaimana dengan hindu yang mengajarkan penistaan terhadap tuhan nya sendiri di dalak ninda-stuti.',
'Kalau tuhan ada Dia harus bertanggung jawab 100% Ataa kasus pembunuhan yang di lakukan ciptaannya',
'Tanpa kalian sadari Tuhan adalah mesin pembunuh yang sebenarnya nya dia menciptakan manusia lalu membunuh nya dengan sadis.',
'Tuhan di jaman sekarang bagaimana narkoba dapat membuat candu dan berhalusinasi',
'Kalau hanya Sekedar YAKIN DAN PERCAYA Kepada TUHAN tanpa berpikir lagi, Lantas Apa bedanya Lu sama orang jaman dlu yang percaya dan yakin bahwa bumi itu datar bukan bulat.',
'Lebih baik di panggil sesat karena berfikir dari pada mengaku benar tanpa berfikir.',
'Percaya tuhan dan agama itu Samal hal nya seperti kalian sedang terbelenggu di dalam kegelapan',
'Aku bersaksi tiada tuhan selain allah&Aku bersaksi Muhammad utusan allah = untuk apa bersaksi jika tidak bisa di lihat.',
'Apa gunanya sedekah dan berbuat kebaikan Jika Kalian melakukan tersebut hanya karena mengharap kan surga',
'Agama Dan Tuhan itu seperti Politik Banyak menjanjikan hal hal indah Tapi tidak da bukti yang nyata',
'setelah ku pelajari lebih dalam" ternyata Kata DOSA hanyalah doktrina untuk menakuti anak kecil dan meyakinkan orang dewasa.',
'Coba bayangin deh Tuhan lagi duduk di atas singgahsana-nya, Sambil makan Popcorn+Nontonin pembunuhan yg di lakukan ciptaanya.',
'Manusia adalah Makhluk yang Sulit untuk mempercayai dirinya sendiri, Dan mengapa Kalian harus mempercayai Suatu yg tidak terlihat(TUHAN)?.',
'Kelucuan Umat BerAgama Sudah memilih 1 agama yg menurutnya paling benar, dan Di dalam agama tsb terdapat banyak aliran, yg lebih mirisnya lagi setiap aliran ngejudge aliran lain sesat..',
'Jika Tuhan Itu ada dan dia Tau Ending  dari manusia apakah mereka disurga atau di neraka pada akhirnya, seperti yg di katakan di kitab suci, Kenapa manusia masih berdoa dan mengira doanya dapat merubah itu?.',
'Apakah TUHAN itu beneran Ada Atau Tuhan Hanyalah Mainan Hasil Khayalan Manusia belaka?',
'Jika tuhan tidak suka perbuatan zina lantas kenapa masi ada negara bebas',
]

let dia = kataateis[Math.floor(Math.random() * kataateis.length)]
  conn.reply(m.chat,`“${dia}”`, m)
}
handler.help = ['ateis']
handler.tags = ['quotes']
handler.command = /^(ateis)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
