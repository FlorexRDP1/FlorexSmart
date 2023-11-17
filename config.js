global.owner = ['6287817207497']  
global.mods = ['6287817207497'] 
global.prems = ['6285810280139']
global.nameowner = 'florexgt'
global.numberowner = '6287817207497' 
global.mail = 'support@tioprm.my.id' 
global.gc = 'https://instagram.com/florexgt'
global.instagram = 'https://instagram.com/florexgt'
global.wm = '© florexgt'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'uwuMufXB' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'uwuMufXB'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'uwuMufXB' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
