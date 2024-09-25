let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*بل تكت بتعه🧚🏻‍♂️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🧚🏻‍♂️', key: m.key } })
  }

   if (/^عبيط|يا عبيط$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بطل تنمر يسطا 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بنوري 🥺💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } })
   }
    if (/^مين عمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عمي هو ويكا اخو وسكي طبعا 🫶🏻💗*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    if (/^خخخ|خخخخ|خخخخخ|خخخخخخخخ$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*خوخ ومنجا وسوق العبور كلو🌚*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
}

 if (/^كسم البضان$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*احطهولك وره الحطان😹😹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
 } 

   if (/^اها|اهه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*اه وجع ولا دلع🌚*',m) //wm, null, [['Menu', '#menu']], m) botones :v
await conn.sendMessage(m.chat, { react: { text: '🔥', key: m.key } })
   }

   if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *🗿 كسمك*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^يسطا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ختك علي البسطا😂*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^شوفت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*وسمعت*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^بضان/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بضان التحرير😹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هزعلك لو هزرت معايا تاني 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*معرفش انت تعرف؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^لف$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*لفيت بعبصتك وجريت😂*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وانت مالك بيا روح نام* 🗿`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^متيجي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مليش ف الخشن ي شاذ😒*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مين انت علشان تسكتني😒*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^مبضون$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اكتر منك🙂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*عارفين ف اسكت احسن لك🥱*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الشارع الي وراه 🐧⚡*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*احسن منك 🧚🏻‍♂️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 if (/^تعرف سفروت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اكيد طبعا مين في مصر ميعرفش سفروت🧚🏻‍♂😹*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 }
  
 } 
 return !0 } 
 export default handler
