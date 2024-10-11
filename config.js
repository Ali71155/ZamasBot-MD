import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['595972157130', 'Creador de Zamas 🍧', true]]
//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59509090909
global.confirmCode = ''

global.suittag = ['595972157130']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [['595972157130']]

//Aqui encuentras los nombres del bot 
global.packname = 'ZamasBot-MD'
global.author = 'ZamasBot'
global.wm = '© ZamasBot-MD'
global.wm2 = 'Zamas : Bot'
global.azami = 'Ivan'
global.cb = 'ZamasBot'


//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Ivan Mods?'
global.devnum = '+595 972 157130'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
