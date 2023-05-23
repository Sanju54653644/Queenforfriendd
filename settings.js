/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

WHATSAPP BOT BY 𝑅𝛥𝛭 𝐶𝛨𝛥𝑅𝛥𝛮 ( 𝐒 𝐌𝐮𝐬𝐢𝐜 𝐏𝐮𝐫𝐮𝐥𝐢𝐚 )

WHATSAPP - 917047294017
WEB SITE - https://github.com/Sanju54653644
SUPPORT GROUP - https://t.me/smusicpurulia5
YOUTUBE - https://youtube.com/@smusicpurulia


*/

const fs = require('fs')
const chalk = require('chalk')


/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true "
global.READ_MASSAGE = true
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = true
//👇 Inbox massage block PM block
global.INBOX_BLOCK = true
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = true
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = true
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['917047294917'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝑅𝛥𝛭 𝐶𝛨𝛥𝑅𝛥𝛮 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '𝑺 𝑴𝒖𝒔𝒊𝒄 𝑷𝒖𝒓𝒖𝒍𝒊𝒂' 
//👇 Your name
global.ownernma =  '𝑅𝛥𝛭 𝐶𝛨𝛥𝑅𝛥𝛮!' 
//👇 Sticker Author Name
global.packname =  '𝑅𝛥𝛭 𝐶𝛨𝛥𝑅𝛥𝛮' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!! if you unlock contact 917047294917'
//👇 Owner React Imoji
global.OWNER_REACT =  '📡'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Kolkata'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.imgur.com/iESMaas.jpeg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `❣️❣️❣️𝗠𝘆 𝗕𝗼𝘁 𝗪𝗼𝗿𝗸𝗶𝗻𝗴 𝗡𝗼𝘄 𝗧𝘆𝗽𝗲𝘀 .menu 𝗺𝘆 𝗯𝗼𝘁 𝗮𝗹𝗹  𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣☠︎︎☠︎︎☠︎︎ .

❤️‍🔥 #quote ❤️‍🔥 https://i.imgur.com/DV6lmgL.jpeg

✔︎*𝐑𝐮𝐧𝐭𝐢𝐦𝐞*: #uptime . ✍︎✍︎✍︎

✔︎ ☞︎︎︎☞︎︎︎☞︎︎︎𝑯𝒊 𝑰 𝑨𝒎 𝑹𝒂𝒎ˢᵃⁿʲᵒʸ 𝑪𝒉𝒂𝒓𝒂𝒏ᵐᵃʰᵃᵗᵒ  . ☜︎︎︎☜︎︎︎☜︎︎︎

✔︎𝗠𝘆 𝗮𝗱𝗱𝗿𝗲𝘀𝘀 :- ༆🅘︎🅝︎🅓︎🅘︎🅐︎ ˡᵒᵛᵉ ,  𝙒𝙚𝙨𝙩 𝘽𝙚𝙣𝙜𝙖𝙡, 𝐏𝐮𝐫𝐮𝐥𝐢𝐚༆ . 

✔︎𖣘🇮 𝗔𝗺 𝗕𝗼𝘁 𝘂𝘀𝗲𝗿𝘀 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𖣘.

✔︎𝗠𝘆 𝗠𝗼𝗯𝗶𝗹𝗲ᵖʰᵒⁿᵉ 𝗡𝘂𝗺𝗯𝗲𝗿 :-  * +91 7047294917 * ⌫

✔︎⚠︎𝙏𝙝𝙞𝙨 𝙞𝙨 𝙢𝙮 𝙖𝙡𝙡 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣⚠︎✈︎✈︎✈︎`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Desable PM Block numbers
global.NO_BLOCK = ["917047294917","917865054966"]
//👇 Desable download words
global.IMG_BLOCKER = [""]
//👇 Open ai API
global.CHATGPT_API =''
/*

   🍃 OTHER 🍃

*/
global.S_CAP = ''
global.V_CAP = ''
global.YT_CAP = ''
global.PORT = '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['917047294917'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['917047294917'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dark Maker' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'QUEEN ELISA'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
