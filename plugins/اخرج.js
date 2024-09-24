let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*انا خارج يولاد المتناكه🐤*') 
await conn.groupLeave(id)}
handler.command = /^(اخرج|اطلع|غادر|خروج)$/i
handler.group = true
handler.rowner = true
export default handler
