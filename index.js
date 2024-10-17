const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------------------- SISTEMA 24/7 -----------------------------//

const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });


client.on("ready", () => {
  console.log(`INICIADO COMO BOT: ${client.user.tag}`);
});

//---------------------------- CODIGO DEL BOT ----------------------------//

var prefix = "*"

client.on("message", msg => {

  if (msg.content.startsWith(prefix + "D")) {

    msg.channel.send("Te pisan Dennis")

  }

  if (msg.author.id === "33582998142976") {
    msg.channel.send('Callese Eduardo');
  }

  if (msg.author.id === "8654667188097") {
    msg.channel.send('Callese Marco');
  }

  if (msg.author.id === "6718809751595") {
    msg.channel.send('Callese Marco');
  }

});

client.on("message", message => {
  var Mensajes = ["Compongase rei", "Si pistean fok", "Pisteon't", "Ojala alabaran a cristo con la misma fuerza con la que pistean", "Sea serio rei", "<:do:956990184942075924>"];
  var aleatorio = Math.floor(Math.random() * (Mensajes.length));
  if (message.content.startsWith("Pisteo")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("pisteo")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("pisteito")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("pisteamiento")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("Pisteamiento")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("pistear")) {
    message.channel.send(Mensajes[aleatorio]);
  }
});

client.on("message", message => {
  if (message.content.startsWith("*juanjosay")) {

    let texto = message.content.slice(10);
    if (texto.startsWith(" ")) {
      texto = texto.slice(1);
    }

    let embed = new MessageEmbed()
      .setTitle("Juanjo dice...")
      .setColor("RANDOM")
      .setDescription(texto);
    message.delete()
    message.channel.send(embed);
  }
});

client.on("message", message => {
  var Mensajes = ["Honduras vive 2 siglos atrás, enserio van a dar lecciones de moralidad? Y las redes de prostitución, toda la 7 calle está llena, o la venta de drogas como si fuera pan y quieren hacer los moralistas cerrandole el negocio a personas que hicieron una inversión.", "La libertad de expresión es para todos, también tengo la libertad de criticar que tu crítica me parace incongruente", "Por su parte es una movida inteligente. Recuerdo cuando llamaron cobarde a Xabi Alonso por dejarle el timón del barco a Kroos. Casemiro está haciendo lo mismo con Camavinga y Tchouaméni. Siente que es el momento correcto para dejar el Real Madrid, y se debe respetar su decisión.", "No es que fuera malo, sino que no mejoraba, si tuviera 17 años sería una promesa muy buena pero esta iba a ser su 6ª temporada y seguía igual, ningún entrenador lo ponía porque por lo visto no era de los que más se esforzaba, no tenía mucho interés por mejorar", "No es que fuera malo, sino que no mejoraba, si tuviera 17 años sería una promesa muy buena pero esta iba a ser su 6ª temporada y seguía igual, ningún entrenador lo ponía porque por lo visto no era de los que más se esforzaba, no tenía mucho interés por mejorar", "Que asquerosos los políticos de Honduras, cuando algún hondureños gana algún premio en el extranjero, son los primeros en felicitar, pero no mueven ni un dedo por apoyar el arte y el deporte hondureño😆😆😆", "Lo mismo ha pasado en Honduras, con extravagancias corruptas e impunidad de políticos que han asumido el poder como una obra psíquica de sus delirios de grandeza y poder absoluto", "Puta maje mi integridad no puede ser más vulnerada", "Las drogas destruyen", "El Newcastle si jugase con un equipo de la liga española (que no sea Real Madrid y Barcelona) le jugarían a defenderse con el equipo atrás. Ese es el nivel de la liga española. El Newcastle le planta cara al City. El CrystalPalece le planta cara al liverpool. Brentford al United", "El descaro de ustedes NO TIENE LÍMITES! Es deber de ustedes invertir en la infraestructura pública. Pena les debería de dar que un extranjero sea más Hondureño ustedes. Construya lo usted, su gobierno les regreso el fondo departamental (más corrupción)", "No es posible como Pumas paso de ir regular antes de la llegada de Dani Alves y después se desplomó.", "DAME DAME DAME, LA SEMITA!", "Jueputa... Mira, si me hubiera echado la compu por tu culp.. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!", "ejejeje *se muerde el pulgar*", "Extrañando a mi amigo negropoco...", "El recuerdo perenne de que el Imperio Inglés siempre ha robando... En política, económia, guerra, sociedad, deportes", "3 partidos Cristiano Suplente 3 partidos ganados, si esto le pasara a Messi quien los callaria con sus burlas de Messicito Pecho frío y lo otro", "La respuesta no es una gran respuesta, pero... Ven como se tragan todo lo que los medios de comunicación dicen? Sin antes informarse se comen todo el amarillismo, que fácil les dan atol con el dedo.", "Sin duda que este gobierno tiene muchas cosas criticables, pero hay muchos que magicamente se volvieron criticos y empezaron a ver las cosas hasta ahorita. Y que bien por los que critican lo malo sin importar el color politico.", "Trata de explicar esto en nuestro país... aquí se gana el aplauso fácil el que revienta la pelota, el que da patadas, al que dribla siempre le dicen solta la pelota que te van a joder", "Estoy de acuerdo que el exámen de admisión quiere resolver al final una problemática estructural de la mediocre educacion media, pero todas las universidades de prestigio tienen un examen de admisión. Y esta bien difícil sacar menos de 600 y adecuarte en tu nivel ayuda a que no te metas a carreras que no vas a poder culminar después", "Aviso por aquí para que quede Registro, que según mis análisis Bitcoin esta cerca de salir del mercado Bajista y empezar a subir, ahora esta en 19 mil y lo máximo que va bajar es a los 15 mil antes de empezar a subir sin parar","Sigo con el anito dañado por la final"];

  var aleatorio = Math.floor(Math.random() * (Mensajes.length));
  if (message.content.startsWith("#Juanjo")) {
    message.channel.send(Mensajes[aleatorio]);
  }

  if (message.content.includes("#juanjo")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on("message", message => {
  var Mensajes = ["<:do:956990184942075924>"];
  var aleatorio = Math.floor(Math.random() * (Mensajes.length));
  if (message.content.startsWith("Dejare que juanjo responda eso")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});

client.on("message", message => {
  var Mensajes = ["<:pepecy:1099907921602687088>", "<:pepenosign:888999048458158131>"];
  var aleatorio = Math.floor(Math.random() * (Mensajes.length));
  if (message.content.startsWith("#sionojuanjo")) {
    message.channel.send(Mensajes[aleatorio]);
  }

});


const mySecret = process.env['TOKEN']
client.login(mySecret);