const { Client, RichEmbed } = require('discord.js');
const config = require('./config.json');
const client= new Client();
const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify} = require('util');

const creds = require('./client_secret.json');

client.on('ready', () => {
    console.log('running')
    client.user.setActivity("/help pour appeler de l'aide + code NOMAD", { type: 'WATCHING' });
})
client.on('messageReactionAdd', (reaction, user) => {
	console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
});

client.on('messageReactionRemove', (reaction, user) => {
	console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
});
client.on("debug", function(info){
    console.log(`debug -> ${info}`);
});
client.on('message', async message => {
    if (message.content.toLowerCase().startsWith('!bot')){
    
        async function accessSpreadsheet(embed) {
            // Insert the code already being used up to the for loop.
            const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
            await promisify(doc.useServiceAccountAuth)(creds);
            const info = await promisify(doc.getInfo)();
            var sheet = info.worksheets[0];
        
            var cells = await promisify(sheet.getCells)({
                'min-row': 2,
                'max-row': 7,
                'min-col': 16,
                'max-col': 16,
                'return-empty': true,
            })
            for (var cell of cells) {
                
            }
            for (let i = 0; i < 25 && cells[i]; i++) {
            {if (i == 0) embed.addField('Nom', `•1⃣ ${cells[i].value}`, false);}
            {if (i == 1) embed.addField('Nom', `•2⃣ ${cells[i].value}`, false);}
            {if (i == 2) embed.addField('Nom', `•3⃣ ${cells[i].value}`, false);}
            {if (i == 3) embed.addField('Nom', `•4⃣ ${cells[i].value}`, false);}
            {if (i == 4) embed.addField('Nom', `•5⃣ ${cells[i].value}`, false);}
            }
          }
          
          var embed = new RichEmbed()
            .setColor('#0099ff')
            .setTitle("Créer une alarme lorsqu'un tournoi approche")
            .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
            .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
            .addBlankField()
            .setDescription('Ecrivez avec quel tournoi vous souhaitez créer une alarme \n (**10sec pour choisir**)')
            .setTimestamp()
	        .setFooter('Bot créé par DEEPonion');

          
          

            try {
                var sentMessage = await accessSpreadsheet(embed)
                .then(() => message.author.send(embed))
                .catch(console.error);
          
                for (let n = 1; n <= 5; n++) await sentMessage.react(`${n}⃣`);
          
                const filter = (reaction, user) => ['1', '2', '3', '4', '5'].includes(reaction.emoji.name.slice(0, 1)) && user.id === message.author.id;
                const collected = await sentMessage.awaitReactions(filter, { maxMatches: 1, time: 4000 });
          
                if (collected.size === 0) {
                  var embed6 = new RichEmbed()
    .setColor('#0099ff')
    .setTitle("__Erreur__")
    .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://www.youtube.com/c/lateamnomad')
    .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
    .addField('Causes possibles:', `• temps écoulé \n • réaction appuyée trop rapidement`, true)
    .addField('Relancez le bot avec', '**`!bot`**')
    .setFooter('Bot créé par DEEPonion');
                  await message.author.send(embed6);
                } else {
                  const reaction = collected.first();
          
                  switch(reaction.emoji.name.slice(0, 1)) {
                    case '1':
                            async function accessSpreadsheet(embed1) {
                                const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                                await promisify(doc.useServiceAccountAuth)(creds);
                                const info = await promisify(doc.getInfo)();
                                var sheet = info.worksheets[0];
                            
                                var cells = await promisify(sheet.getCells)({
                                    'min-row': 2,
                                    'max-row': 7,
                                    'min-col': 16,
                                    'max-col': 16,
                                    'return-empty': true,
                                })
                                for (let i = 0; i < 25 && cells[i]; i++) {
                                {if (i == 0) embed1.setTitle(`Vous avez sélectionné: ${cells[i].value}`);}
                                }
                                var cells1 = await promisify(sheet.getCells)({
                                    'min-row': 2,
                                    'max-row': 7,
                                    'min-col': 17,
                                    'max-col': 17,
                                    'return-empty': true,
                                })
                                for (let j = 0; j < 25 && cells1[j]; j++) {
                                    {if (j == 0) embed1.setDescription(`Description: \n \n ${cells1[j].value}`);}
                              }
                              var cells1 = await promisify(sheet.getCells)({
                                'min-row': 2,
                                'max-row': 7,
                                'min-col': 18,
                                'max-col': 18,
                                'return-empty': true,
                            })
                            for (let l = 0; l < 25 && cells1[l]; l++) {
                                {if (l == 0) embed1.addField(`Discord:`, `${cells1[l].value}`, true);}
                          }
                              var cells1 = await promisify(sheet.getCells)({
                                'min-row': 2,
                                'max-row': 7,
                                'min-col': 20,
                                'max-col': 20,
                                'return-empty': true,
                            })
                            for (let k = 0; k < 25 && cells1[k]; k++) {
                                {if (k == 0) embed1.addField(`Date:`, `${cells1[k].value}`, true);}
                          }
                          for (let k = 0; k < 25 && cells1[k]; k++) {
                            {if (k == 0) embed1.addField(`À valider avec ✅:`, `clickez sur la réaction en dessous de ce message pour continuer`, true);}
                          }
                          }
                              
                              var embed1 = new RichEmbed()
                                .setColor('#0099ff')
                                .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                                .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                              .setFooter('Bot créé par DEEPonion');
                              
                      await accessSpreadsheet(embed1)           //here starts the problem
                      .then(() => message.author.send(embed1))
                      .then(message => {
                        message.react('✅')
                        client.on('messageReactionAdd', async (reaction, user) => {
                          if (reaction.emoji.name === '✅' && user.id !== client.user.id) {
                          async function accessSpreadsheet(embed2) {
                            const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                            await promisify(doc.useServiceAccountAuth)(creds);
                            const info = await promisify(doc.getInfo)();
                            var sheet = info.worksheets[0];
                          
                            var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 20,
                            'max-col': 20,
                            'return-empty': true,
                            })
                            for (let m = 0; m < 25 && cells[m]; m++) {
                            {if (m == 0) embed2.addField('Date:',` ${cells[m].value}`, true);}
                            }
                            var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 22,
                            'max-col': 22,
                            'return-empty': true,
                            })
                            for (let m = 0; m < 25 && cells[m]; m++) {
                            {if (m == 0) embed2.addField('Ce tournoi commence',` ${cells[m].value}`, true);}
                            }
                          }
                            var embed2 = new RichEmbed()
                            .setColor('#0099ff')
                            .setTitle("Très bien, il ne reste plus que de règler la durée entre le rappel et le jour du tournoi")
                            .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                            .addBlankField()
                            .addField(`Choisissez quand vous voulez être averti:`,` \n 1⃣ La veille du tournoi \n 2⃣ Le jour même, à midi `)
                            .addField('\n 🔊 Pour avoir les 2,', 'clickez sur les 2 réactions', false)
                            .addBlankField()
                            .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                            .setFooter('Bot créé par DEEPonion');
                           
                          await accessSpreadsheet(embed2)
                          .then(() => message.channel.send(embed2))
                          .then(message => {
                            message.react('1⃣').then(() => message.react('2⃣'))
                            client.on('messageReactionAdd', async (reaction, user) => {

                              if (reaction.emoji.name === '1⃣' && user.id !== client.user.id) {                 //veille
                                async function accessSpreadsheet(embed4) {
                                  const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                                  await promisify(doc.useServiceAccountAuth)(creds);
                                  const info = await promisify(doc.getInfo)();
                                  var sheet = info.worksheets[0];
                                
                                  var cells = await promisify(sheet.getCells)({
                                  'min-row': 2,
                                  'max-row': 2,
                                  'min-col': 15,
                                  'max-col': 25,
                                  'return-empty': true,
                                  })
                              
                                  var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                                  var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                                  var anne = 9; anne == 9 && cells[anne]; anne++ //année
                                  var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                                  var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                                  //year, month 0-11, date, hour, min, sec,msec
                                  var now = new Date();
                                  var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value - 1, 18, 0, 0, 0) - now;
                                  if (millisTill10 < 0) {
                                       millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                                  }
                                  setTimeout(tempsJ, millisTill10);
                                  function tempsJ() {
                                    console.log("C'est l'heure")
                                    var embed5 = new RichEmbed()
                                  .setColor('#0099ff')
                                  .setTitle("Rappel du tournoi")
                                  .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                                  .setThumbnail('https://i.gifer.com/GvB3.gif')
                                  .addBlankField()
                                  .addField('Nom', cells[nom].value, true)
                                  .addField('Discord', cells[discord].value, true)
                                  .setFooter('Bot créé par DEEPonion');
                                  message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                                  }
                                }
                                var embed4 = new RichEmbed()
                                  .setColor('#0099ff')
                                  .setTitle("Succès")
                                  .setDescription('Vous recevrez un mp de ce bot __la veille du tournoi, à 18h!__. \n Je vous souhaite une agréable journée')
                                  .setFooter('Bot créé par DEEPonion')
                                  .setTimestamp();

                              
                                  await accessSpreadsheet(embed4)
                                  .then(() => message.channel.send(embed4))
                                  .catch(console.error);                 
                              }

                              if (reaction.emoji.name === '2⃣' && user.id !== client.user.id) {              //midi
                                async function accessSpreadsheet(embed4) {
                                  const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                                  await promisify(doc.useServiceAccountAuth)(creds);
                                  const info = await promisify(doc.getInfo)();
                                  var sheet = info.worksheets[0];
                                
                                  var cells = await promisify(sheet.getCells)({
                                  'min-row': 2,
                                  'max-row': 2,
                                  'min-col': 15,
                                  'max-col': 25,
                                  'return-empty': true,
                                  })
                              
                                  var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                                  var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                                  var anne = 9; anne == 9 && cells[anne]; anne++ //année
                                  var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                                  var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                                  //year, month 0-11, date, hour, min, sec,msec
                                  var now = new Date();
                                  var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value, 12, 0, 0, 0) - now;
                                  if (millisTill10 < 0) {
                                       millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                                  }
                                  setTimeout(tempsJ, millisTill10);
                                  function tempsJ() {
                                    console.log("C'est l'heure")
                                    var embed5 = new RichEmbed()
                                  .setColor('#0099ff')
                                  .setTitle("Rappel du tournoi")
                                  .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                                  .setThumbnail('https://i.gifer.com/GvB3.gif')
                                  .addBlankField()
                                  .addField('Nom', cells[nom].value, true)
                                  .addField('Discord', cells[discord].value, true)
                                  .setFooter('Bot créé par DEEPonion');
                                  message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                                  }
                                }
                                var embed4 = new RichEmbed()
                                  .setColor('#0099ff')
                                  .setTitle("Succès")
                                  .setDescription('Vous recevrez un mp de ce bot __le jour même du tournoi, à midi pile__. \n Je vous souhaite une agréable journée')
                                  .setFooter('Bot créé par DEEPonion')
                                  .setTimestamp();
                              
                                  await accessSpreadsheet(embed4)
                                  .then(() => message.channel.send(embed4))
                                  .catch(console.error);                 
                              }
                            })
                          })
                          .catch(console.error);
                            
                      }
                        })
                      })
                      
                      .catch(console.error); //fin case 1
                      break;
                    case '2':
                      async function accessSpreadsheet2(embed5) {
                        const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                        await promisify(doc.useServiceAccountAuth)(creds);
                        const info = await promisify(doc.getInfo)();
                        var sheet = info.worksheets[0];
                    
                        var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 16,
                            'max-col': 16,
                            'return-empty': true,
                        })
                        for (let i = 0; i < 25 && cells[i]; i++) {
                        {if (i == 1) embed5.setTitle(`Vous avez sélectionné: ${cells[i].value}`);}
                        }
                        var cells1 = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 17,
                            'max-col': 17,
                            'return-empty': true,
                        })
                        for (let j = 0; j < 25 && cells1[j]; j++) {
                            {if (j == 1) embed5.setDescription(`Description: \n \n ${cells1[j].value}`);}
                      }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 18,
                        'max-col': 18,
                        'return-empty': true,
                    })
                    for (let l = 0; l < 25 && cells1[l]; l++) {
                        {if (l == 1) embed5.addField(`Discord:`, `${cells1[l].value}`, true);}
                  }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 20,
                        'max-col': 20,
                        'return-empty': true,
                    })
                    for (let k = 0; k < 25 && cells1[k]; k++) {
                        {if (k == 1) embed5.addField(`Date:`, `${cells1[k].value}`, true);}
                  }
                  for (let k = 0; k < 25 && cells1[k]; k++) {
                    {if (k == 1) embed5.addField(`À valider avec ✅:`, `clickez sur la réaction en dessous de ce message pour continuer`, true);}
                  }
                  }
                      
                      var embed5 = new RichEmbed()
                        .setColor('#0099ff')
                        .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                        .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                      .setFooter('Bot créé par DEEPonion');
                      
              await accessSpreadsheet2(embed5)
              .then(() => message.author.send(embed5))
              .then(message => {
                message.react('✅')
                client.on('messageReactionAdd', async (reaction, user) => {
                  if (reaction.emoji.name === '✅' && user.id !== client.user.id) {
                  async function accessSpreadsheet(embed2) {
                    const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                    await promisify(doc.useServiceAccountAuth)(creds);
                    const info = await promisify(doc.getInfo)();
                    var sheet = info.worksheets[0];
                  
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 20,
                    'max-col': 20,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 1) embed2.addField('Date:',` ${cells[m].value}`, true);}
                    }
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 22,
                    'max-col': 22,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 1) embed2.addField('Ce tournoi commence',` ${cells[m].value}`, true);}
                    }
                  }
                    var embed2 = new RichEmbed()
                    .setColor('#0099ff')
                    .setTitle("Très bien, il ne reste plus que de règler la durée entre le rappel et le jour du tournoi")
                    .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                    .addBlankField()
                    .addField(`Choisissez quand vous voulez être averti:`,` \n 1⃣ La veille du tournoi \n 2⃣ Le jour même, à midi `)
                    .addField('\n 🔊 Pour avoir les 2,', 'clickez sur les 2 réactions', false)
                    .addBlankField()
                    .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                    .setFooter('Bot créé par DEEPonion');
                   
                  await accessSpreadsheet(embed2)
                  .then(() => message.channel.send(embed2))
                  .then(message => {
                    message.react('1⃣').then(() => message.react('2⃣'))
                    client.on('messageReactionAdd', async (reaction, user) => {

                      if (reaction.emoji.name === '1⃣' && user.id !== client.user.id) {                 //veille
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 3,
                          'max-row': 3,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value - 1, 18, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __la veille du tournoi, à 18h!__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();

                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }

                      if (reaction.emoji.name === '2⃣' && user.id !== client.user.id) {              //midi
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 3,
                          'max-row': 3,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value, 12, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __le jour même du tournoi, à midi pile__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();
                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }
                    })
                  })
                  .catch(console.error);
                    
              }
                })
              })
              
              .catch(console.error); //fin case 
                        break; //fin case 2
                    case '3':
                      async function accessSpreadsheet3(embed1) {
                        const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                        await promisify(doc.useServiceAccountAuth)(creds);
                        const info = await promisify(doc.getInfo)();
                        var sheet = info.worksheets[0];
                    
                        var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 16,
                            'max-col': 16,
                            'return-empty': true,
                        })
                        for (let i = 0; i < 25 && cells[i]; i++) {
                        {if (i == 2) embed1.setTitle(`Vous avez sélectionné: ${cells[i].value}`);}
                        }
                        var cells1 = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 17,
                            'max-col': 17,
                            'return-empty': true,
                        })
                        for (let j = 0; j < 25 && cells1[j]; j++) {
                            {if (j == 2) embed1.setDescription(`Description: \n \n ${cells1[j].value}`);}
                      }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 18,
                        'max-col': 18,
                        'return-empty': true,
                    })
                    for (let l = 0; l < 25 && cells1[l]; l++) {
                        {if (l == 2) embed1.addField(`Discord:`, `${cells1[l].value}`, true);}
                  }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 20,
                        'max-col': 20,
                        'return-empty': true,
                    })
                    for (let k = 0; k < 25 && cells1[k]; k++) {
                        {if (k == 2) embed1.addField(`Date:`, `${cells1[k].value}`, true);}
                  }
                  for (let k = 0; k < 25 && cells1[k]; k++) {
                    {if (k == 2) embed1.addField(`À valider avec ✅:`, `clickez sur la réaction en dessous de ce message pour continuer`, true);}
                  }
                  }
                      
                      var embed1 = new RichEmbed()
                        .setColor('#0099ff')
                        .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                        .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                      .setFooter('Bot créé par DEEPonion');
                      
              await accessSpreadsheet3(embed1)
              .then(() => message.author.send(embed1))
              .then(message => {
                message.react('✅')
                client.on('messageReactionAdd', async (reaction, user) => {
                  if (reaction.emoji.name === '✅' && user.id !== client.user.id) {
                  async function accessSpreadsheet(embed2) {
                    const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                    await promisify(doc.useServiceAccountAuth)(creds);
                    const info = await promisify(doc.getInfo)();
                    var sheet = info.worksheets[0];
                  
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 20,
                    'max-col': 20,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 2) embed2.addField('Date:',` ${cells[m].value}`, true);}
                    }
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 22,
                    'max-col': 22,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 2) embed2.addField('Ce tournoi commence',` ${cells[m].value}`, true);}
                    }
                  }
                    var embed2 = new RichEmbed()
                    .setColor('#0099ff')
                    .setTitle("Très bien, il ne reste plus que de règler la durée entre le rappel et le jour du tournoi")
                    .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                    .addBlankField()
                    .addField(`Choisissez quand vous voulez être averti:`,` \n 1⃣ La veille du tournoi \n 2⃣ Le jour même, à midi `)
                    .addField('\n 🔊 Pour avoir les 2,', 'clickez sur les 2 réactions', false)
                    .addBlankField()
                    .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                    .setFooter('Bot créé par DEEPonion');
                   
                  await accessSpreadsheet(embed2)
                  .then(() => message.channel.send(embed2))
                  .then(message => {
                    message.react('1⃣').then(() => message.react('2⃣'))
                    client.on('messageReactionAdd', async (reaction, user) => {

                      if (reaction.emoji.name === '1⃣' && user.id !== client.user.id) {                 //veille
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 4,
                          'max-row': 4,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value - 1, 18, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __la veille du tournoi, à 18h!__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();

                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }

                      if (reaction.emoji.name === '2⃣' && user.id !== client.user.id) {              //midi
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 4,
                          'max-row': 4,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value, 12, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __le jour même du tournoi, à midi pile__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();
                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }
                    })
                  })
                  .catch(console.error);
                    
              }
                })
              })
              
              .catch(console.error); //fin case 3
                        break; //fin case 3
                    case '4':
                      async function accessSpreadsheet4(embed1) {
                        const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                        await promisify(doc.useServiceAccountAuth)(creds);
                        const info = await promisify(doc.getInfo)();
                        var sheet = info.worksheets[0];
                    
                        var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 16,
                            'max-col': 16,
                            'return-empty': true,
                        })
                        for (let i = 0; i < 25 && cells[i]; i++) {
                        {if (i == 3) embed1.setTitle(`Vous avez sélectionné: ${cells[i].value}`);}
                        }
                        var cells1 = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 17,
                            'max-col': 17,
                            'return-empty': true,
                        })
                        for (let j = 0; j < 25 && cells1[j]; j++) {
                            {if (j == 3) embed1.setDescription(`Description: \n \n ${cells1[j].value}`);}
                      }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 18,
                        'max-col': 18,
                        'return-empty': true,
                    })
                    for (let l = 0; l < 25 && cells1[l]; l++) {
                        {if (l == 3) embed1.addField(`Discord:`, `${cells1[l].value}`, true);}
                  }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 20,
                        'max-col': 20,
                        'return-empty': true,
                    })
                    for (let k = 0; k < 25 && cells1[k]; k++) {
                        {if (k == 3) embed1.addField(`Date:`, `${cells1[k].value}`, true);}
                  }
                  for (let k = 0; k < 25 && cells1[k]; k++) {
                    {if (k == 3) embed1.addField(`À valider avec ✅:`, `clickez sur la réaction en dessous de ce message pour continuer`, true);}
                  }
                  }
                      
                      var embed1 = new RichEmbed()
                        .setColor('#0099ff')
                        .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                        .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                      .setFooter('Bot créé par DEEPonion');
                      
              await accessSpreadsheet4(embed1)
              .then(() => message.author.send(embed1))
              .then(message => {
                message.react('✅')
                client.on('messageReactionAdd', async (reaction, user) => {
                  if (reaction.emoji.name === '✅' && user.id !== client.user.id) {
                  async function accessSpreadsheet(embed2) {
                    const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                    await promisify(doc.useServiceAccountAuth)(creds);
                    const info = await promisify(doc.getInfo)();
                    var sheet = info.worksheets[0];
                  
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 20,
                    'max-col': 20,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 3) embed2.addField('Date:',` ${cells[m].value}`, true);}
                    }
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 22,
                    'max-col': 22,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 3) embed2.addField('Ce tournoi commence',` ${cells[m].value}`, true);}
                    }
                  }
                    var embed2 = new RichEmbed()
                    .setColor('#0099ff')
                    .setTitle("Très bien, il ne reste plus que de règler la durée entre le rappel et le jour du tournoi")
                    .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                    .addBlankField()
                    .addField(`Choisissez quand vous voulez être averti:`,` \n 1⃣ La veille du tournoi \n 2⃣ Le jour même, à midi `)
                    .addField('\n 🔊 Pour avoir les 2,', 'clickez sur les 2 réactions', false)
                    .addBlankField()
                    .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                    .setFooter('Bot créé par DEEPonion');
                   
                  await accessSpreadsheet(embed2)
                  .then(() => message.channel.send(embed2))
                  .then(message => {
                    message.react('1⃣').then(() => message.react('2⃣'))
                    client.on('messageReactionAdd', async (reaction, user) => {

                      if (reaction.emoji.name === '1⃣' && user.id !== client.user.id) {                 //veille
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 5,
                          'max-row': 5,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value - 1, 18, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __la veille du tournoi, à 18h!__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();

                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }

                      if (reaction.emoji.name === '2⃣' && user.id !== client.user.id) {              //midi
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 5,
                          'max-row': 5,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value, 12, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __le jour même du tournoi, à midi pile__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();
                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }
                    })
                  })
                  .catch(console.error);
                    
              }
                })
              })
              
              .catch(console.error); //fin case 
                        break; //fin case 4
                    case '5':
                      async function accessSpreadsheet5(embed1) {
                        const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                        await promisify(doc.useServiceAccountAuth)(creds);
                        const info = await promisify(doc.getInfo)();
                        var sheet = info.worksheets[0];
                    
                        var cells = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 16,
                            'max-col': 16,
                            'return-empty': true,
                        })
                        for (let i = 0; i < 25 && cells[i]; i++) {
                        {if (i == 4) embed1.setTitle(`Vous avez sélectionné: ${cells[i].value}`);}
                        }
                        var cells1 = await promisify(sheet.getCells)({
                            'min-row': 2,
                            'max-row': 7,
                            'min-col': 17,
                            'max-col': 17,
                            'return-empty': true,
                        })
                        for (let j = 0; j < 25 && cells1[j]; j++) {
                            {if (j == 4) embed1.setDescription(`Description: \n \n ${cells1[j].value}`);}
                      }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 18,
                        'max-col': 18,
                        'return-empty': true,
                    })
                    for (let l = 0; l < 25 && cells1[l]; l++) {
                        {if (l == 4) embed1.addField(`Discord:`, `${cells1[l].value}`, true);}
                  }
                      var cells1 = await promisify(sheet.getCells)({
                        'min-row': 2,
                        'max-row': 7,
                        'min-col': 20,
                        'max-col': 20,
                        'return-empty': true,
                    })
                    for (let k = 0; k < 25 && cells1[k]; k++) {
                        {if (k == 4) embed1.addField(`Date:`, `${cells1[k].value}`, true);}
                  }
                  for (let k = 0; k < 25 && cells1[k]; k++) {
                    {if (k == 4) embed1.addField(`À valider avec ✅:`, `clickez sur la réaction en dessous de ce message pour continuer`, true);}
                  }
                  }
                      
                      var embed1 = new RichEmbed()
                        .setColor('#0099ff')
                        .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                        .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                      .setFooter('Bot créé par DEEPonion');
                      
              await accessSpreadsheet5(embed1)
              .then(() => message.author.send(embed1))
              .then(message => {
                message.react('✅')
                client.on('messageReactionAdd', async (reaction, user) => {
                  if (reaction.emoji.name === '✅' && user.id !== client.user.id) {
                  async function accessSpreadsheet(embed2) {
                    const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                    await promisify(doc.useServiceAccountAuth)(creds);
                    const info = await promisify(doc.getInfo)();
                    var sheet = info.worksheets[0];
                  
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 20,
                    'max-col': 20,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 4) embed2.addField('Date:',` ${cells[m].value}`, true);}
                    }
                    var cells = await promisify(sheet.getCells)({
                    'min-row': 2,
                    'max-row': 7,
                    'min-col': 22,
                    'max-col': 22,
                    'return-empty': true,
                    })
                    for (let m = 0; m < 25 && cells[m]; m++) {
                    {if (m == 4) embed2.addField('Ce tournoi commence',` ${cells[m].value}`, true);}
                    }
                  }
                    var embed2 = new RichEmbed()
                    .setColor('#0099ff')
                    .setTitle("Très bien, il ne reste plus que de règler la durée entre le rappel et le jour du tournoi")
                    .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                    .addBlankField()
                    .addField(`Choisissez quand vous voulez être averti:`,` \n 1⃣ La veille du tournoi \n 2⃣ Le jour même, à midi `)
                    .addField('\n 🔊 Pour avoir les 2,', 'clickez sur les 2 réactions', false)
                    .addBlankField()
                    .setThumbnail('https://i.ibb.co/ZXPSmtq/mascotte5.png')
                    .setFooter('Bot créé par DEEPonion');
                   
                  await accessSpreadsheet(embed2)
                  .then(() => message.channel.send(embed2))
                  .then(message => {
                    message.react('1⃣').then(() => message.react('2⃣'))
                    client.on('messageReactionAdd', async (reaction, user) => {

                      if (reaction.emoji.name === '1⃣' && user.id !== client.user.id) {                 //veille
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 6,
                          'max-row': 6,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value - 1, 18, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __la veille du tournoi, à 18h!__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();

                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }

                      if (reaction.emoji.name === '2⃣' && user.id !== client.user.id) {              //midi
                        async function accessSpreadsheet(embed4) {
                          const doc = new GoogleSpreadsheet('1qA11t460-ceILmwu6RtfiPGb_n9MUD_7z6Ld7I_Z6yc');
                          await promisify(doc.useServiceAccountAuth)(creds);
                          const info = await promisify(doc.getInfo)();
                          var sheet = info.worksheets[0];
                        
                          var cells = await promisify(sheet.getCells)({
                          'min-row': 6,
                          'max-row': 6,
                          'min-col': 15,
                          'max-col': 25,
                          'return-empty': true,
                          })
                      
                          var jour = 7; jour == 7 && cells[jour]; jour++ //jour
                          var mois = 8; mois == 8 && cells[mois]; mois++ //mois
                          var anne = 9; anne == 9 && cells[anne]; anne++ //année
                          var nom = 0; nom == 0 && cells[nom]; nom++ //nom
                          var discord = 2; discord == 2 && cells[discord]; discord++ //discord
                          //year, month 0-11, date, hour, min, sec,msec
                          var now = new Date();
                          var millisTill10 = new Date(cells[anne].value, cells[mois].value, cells[jour].value, 12, 0, 0, 0) - now;
                          if (millisTill10 < 0) {
                               millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
                          }
                          setTimeout(tempsJ, millisTill10);
                          function tempsJ() {
                            console.log("C'est l'heure")
                            var embed5 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Rappel du tournoi")
                          .setAuthor('La Team NoMaD', 'https://i.ibb.co/ZXPSmtq/mascotte5.png', 'https://discord.gg/eQFymXS')
                          .setThumbnail('https://i.gifer.com/GvB3.gif')
                          .addBlankField()
                          .addField('Nom', cells[nom].value, true)
                          .addField('Discord', cells[discord].value, true)
                          .setFooter('Bot créé par DEEPonion');
                          message.channel.send(embed5).then(() => message.channel.send(cells[discord].value))
                          }
                        }
                        var embed4 = new RichEmbed()
                          .setColor('#0099ff')
                          .setTitle("Succès")
                          .setDescription('Vous recevrez un mp de ce bot __le jour même du tournoi, à midi pile__. \n Je vous souhaite une agréable journée')
                          .setFooter('Bot créé par DEEPonion')
                          .setTimestamp();
                      
                          await accessSpreadsheet(embed4)
                          .then(() => message.channel.send(embed4))
                          .catch(console.error);                 
                      }
                    })
                  })
                  .catch(console.error);
                    
              }
                })
              })
              
              .catch(console.error); //fin case 
                        break; //fin case 5
                  }
                }
              } catch(err) {
                console.error(err);
              }}})        
client.login(config.token)  
