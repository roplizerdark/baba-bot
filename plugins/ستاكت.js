/* Codigo copiado de GataBot-MD */

import { sticker } from '../lib/sticker.js';
import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw "*[🌱] حط نص ليتم تحويلها الي ملصق*";
   if (!text) return m.reply('*[🌱] قم بداخل نص ليتم تحويلها الي ملصق مع صوؤة بروفايلك*');
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
    const mentionRegex = new RegExp(`@${who.split('@')[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'g');
    const mishi = text.replace(mentionRegex, '');
   if (mishi.length > 30) return m.reply('*[❗️] عدد الحروف كتيره الحد الأدنى 30*');
    const pp = await conn.profilePictureUrl(who).catch((_) => 'https://i.ibb.co/52H5GwS/file.jpg')
    const nombre = await conn.getName(who)
    const obj = {"type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{"entities": [], "avatar": true, "from": {"id": 1, "name": `${who?.name || nombre}`, "photo": {url: `${pp}`}}, "text": mishi, "replyMessage": {}}]};
    const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {headers: {'Content-Type': 'application/json'}});
    const buffer = Buffer.from(json.data.result.image, 'base64');
   let stiker = await sticker(buffer, false, global.packname, global.author);
   if (stiker) return conn.sendFile(m.chat, stiker, 'error.webp', '', m);
}
handler.help = ['qc'];
handler.tags = ['sticker'];
handler.command = /^(ستاكت)$/i;
export default handler;
