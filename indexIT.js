const { dialogflow, MediaObject, Image } = require('actions-on-google');
const functions = require('firebase-functions');

// --- Quotes -----------------------------------------------------------------------------------------------------
const quotes = {
  1: {
    phrase: "Quando Chuck Norris tira un pugno al muro, sanguina.Il muro.",
  },
  2: {
    phrase: "La prima parola pronunciata da Chuck Norris da piccolo, è stata “Chuck”. La seconda “Norris”. La terza non c’è mai stata. Da quel giorno, Chuck Norris si esprime a calci rotanti.",
  },
  3: {
    phrase: "Chuck Norris per presentarsi: “Il mio nome è Norris. Chuck Norris.”",
  },
  4: {
    phrase: "Chuck Norris non piange, suda dagli occhi.",
  },
  5: {
    phrase: " Chuck Norris usa i preservativi stimolanti a rovescio, cosi gode lui.",
  },
  6: {
    phrase: "Dopo una attenta analisi il presidente Truman decise di lanciare la bomba atomica su Hiroshima piuttosto che mandare Chuck Norris. La motivazione? Era stata ritenuta la soluzione più umana.",
  },
  7: {
    phrase: "Chuck Norris da vero gentiluomo non chiede mai l’età a una donna. La sega a metà e conta i cerchi..",
  },
  8: {
    phrase: "Chuck Norris ha perso la verginità prima di suo padre.",
  },
  9: {
    phrase: "Chuck Norris può sgommare in folle.",
  },
  10: {
    phrase: "Chuck Norris ha aperto quella porta.",
  },
  11: {
    phrase: "Chuck Norris è il Lato Oscuro del Lato Oscuro della Forza.",
  },
  12: {
    phrase: "Chuck Norris usa come ventilatore il Mulino Bianco.",
  },
  13: {
    phrase: "Chuck Norris ha stabilito il nuovo record di mondiale di salto in alto. Per ufficializzare il primato stanno tutt’ora aspettando che atterri.",
  },
  14: {
    phrase: "Quando Chuck Norris capisce fischi per fiaschi, i fiaschi per non contraddirlo si tramutano in fischi all’istante.",
  },
  15: {
    prase: "Quando sul suo pickup Chuck Norris aziona le quattro frecce, non è per indicare che sta per fermarsi, ma per indicare che sta per svoltare in quattro direzioni diverse.",
  },
  16: {
    phrase: " Chuck Norris può distrarre Coccolino Concentrato.",
  },
  17: {
    phrase: 'Chuck Norris può cancellare il cestino di Windows.',
  },
  18: {
    phrase: "Le ciabatte di Chuck Norris sono addestrate a riportargli il cane quando serve.",
  },
  19: {
    phrase: "Durante una partita al Gioco dei Mimi, per far indovinare “Hitler” alla sua squadra, Chuck Norris ha invaso la Polonia.",
  },
  20: {
    phrase: "Alle ditte produttrici di Viagra, arriva lo spam di Chuck Norris.",
  },
  21: {
    phrase: "Quando fa footing, Chuck Norris indossa un paio di Puma. Vivi.",
  },
  22: {
    prase: "Ozzy Osbourne, con un morso, ha staccato la testa ad un pipistrello. Chuck Norris, con un morso, ha staccato la testa a Batman.",
  },
  23: { 
    phrase: "Se Chuck Norris scoreggia in ascensore, tutti i presenti automaticamente si dichiarano colpevoli. E Chuck Norris prontamente li uccide con un calcio rotante. Nessuno scoreggia in presenza di Chuck Norris: nessuno.",
  },
  24: {
    phrase: "Quando la matrigna di Biancaneve ha chiesto allo specchio chi fosse la più bella del reame, lo specchio ha risposto “Chuck Norris”.",
  },
  25: {
    phrase: "Atlantide è stata sommersa dalle acque quando Chuck Norris, interrogato in geografia, si è ricordato solo di cinque continenti su sei.",
  },
  26: {
    phrase: "Una volta Chuck Norris, attraversando la strada sulle strisce pedonali, ha travolto e ucciso un ubriaco al volante.",
      },
  27: {
    phrase: "Da piccolo, quando Chuck Norris litigava coi suoi genitori, li mandava a letto senza cena.",
  },
  28: {
    phrase: "Chuck Norris non legge libri, li fissa finché non ottiene le informazioni che vuole",
  },
  29: {
    phrase: "Chuck Norris non chiede se puo fumare, sono gli altri a dover chiedere a lui il permesso per respirare.",
  },
  30: {
    phrase: "Se Chuck Norris guarda in faccia la realtà, lei abbassa lo sguardo.",
  },
  31: {
    phrase: "Chuck Norris può sbattere una porta girevole.",
  },
  32: {
    phrase: "Le persone comuni vanno dal dentista per la pulizia dei denti dal tartaro. Chuck Norris mette il pugno davanti alla bocca e il tartaro salta fuori da solo.",
  },
  33: {
    phrase: "Quelli che scorrono alla fine di ogni puntata di Walker Texas Ranger non sono i titoli di coda, sono i nomi delle persone che Chuck Norris ha ucciso nelle due ore precedenti al termine della puntata.",
  },
  34: {
    phrase: "Se all’alba Chuck Norris ha ancora sonno e vuole dormire, il sole chiede scusa e tramonta di nuovo dalla stessa parte.",
  },
  35: {
    prase: "Chuck Norris può portare una donna all’orgasmo semplicemente indicandola con un dito e dicendo “ravanello”.",
  },
  36: {
    phrase: "Tra i ragazzi va di moda appendere dei pupazzetti al cellulare. Chuck Norris ha appeso al suo cellulare un orso di 315 kg. Vivo.",
  },
  37: {
    phrase: "È stato Chuck Norris a dire ai suoi genitori che Babbo Natale non esiste.",
  },
  38: {
    phrase: "Quando Chuck Norris fa le flessioni, non alza se stesso, abbassa la Terra.",
  },
  39: {
    phrase: 'Chuck Norris invented manure spreaders.',
  },
  40: {
    phrase: "Chuck Norris di notte gira con una pila, non perchè abbia paura del buio, ma perchè il buio ha paura di Chuck Norris.",
  },
  41: {
    phrase: "Chuck Norris non ha letto la bibbia. L’ha scritta.",
  },
  42: {
    phrase: "Chuck Norris una volta ha calciato un cavallo sul mento. Ora i suoi discendenti sono noti come “giraffe”.",
  },
  43: {
    phrase: "Non ci sono disabili. Solo persone che hanno incontrato Chuck Norris.",
  },
  44: {
    phrase: "Chuck Norris non ha le maniglie dell’amore, ha le maniglie dell’odio.",
  },
  45: {
    phrase: "Chuck Norris può dividere per zero.",
  },
  46: {
    phrase: "Se chiedete l’ora a Chuck Norris lui vi risponderà “Ancora due secondi.” Dopo aver chiesto “Ancora due secondi cosa?”, vi colpisce con un calcio rotante.",
  },
  47: {
    phrase: "Una volta un uomo chiese a Chuck Norris se il suo vero nome fosse “Charles”. Chuck Norris non rispose, si limitò a fissare l’uomo fino a farlo esplodere.",
  },
  48: {
    phrase: "Chuck Norris spesso chiede alle persone di tirargli il dito. Quando lo fanno, li colpisce con un calcio volante nell’addome. Poi scoreggia.",
  },
  49: {
    phrase: "Chuck Norris non esiste. È un’invenzione per mandare a letto presto i bambini la sera.",
  },
  50: {
    phrase: "Prima di incontrare Chuck Norris, la Mano della Famiglia Addams era un uomo intero",
  },
};

const prompts = [
  'Feel free to request a random quote or just chat with me',
  "Ask me for a random quote or let's just talk",
  'Say "random  quote" to get one or just chatter with me',
  'You can ask me for a random quote or we can simply talk',
];

// --- Functions -----------------------------------------------------------------------------------------------------
// Takes an object with qoutes data and optionally a filter (keys for the quotes)
// Returns a ssml-formatted string with data of random quote selected from the filtered
function randomQuote(quotesVariants, myFilter = []) {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  // We have >1 quotes
  if (Object.keys(quotesVariants).length > 1) {
    // We don't have a filter
    if (myFilter.length === 0) {
        const randPair = randomKeyPair(quotesVariants);
        return `<speak>${randPair.phrase}" -// ${prompt}</speak>`;
      }
    // We have a filter
    const filteredQuotes = {};
    myFilter.forEach((key) => {
      filteredQuotes[key] = quotes[key];
    });
    randPair = randomKeyPair(filteredQuotes);
    return `<speak>${randPair.phrase}" - // ${prompt}</speak>`;
  }

  // Quotes object has the only quote
  const theOnlyQuote = quotesVariants[Object.keys(quotesVariants)[0]];
  return `<speak>${theOnlyQuote.phrase}" - // ${prompt}</speak>`;
}

// Helper function - returns a random key-value pair from a given object
function randomKeyPair(quotesVariants) {
  const quotesKeys = Object.keys(quotesVariants);
  const randKey = Math.round(Math.random() * (quotesKeys.length - 1));
  return quotesVariants[quotesKeys[randKey]];
}

// Instantiate the Dialogflow client with debug logging enabled.
const app = dialogflow({
  debug: true,
});

// --- Dialogs -----------------------------------------------------------------------------------------------------
app.intent('random.quote', (conv) => {
  const ssml = randomQuote(quotes);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.hello', (conv) => {
  const relevantQuotesKeys = ['10', '80', '81', '8', '20', '49', '52', '61', '63', '66', '68'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.whatsup', (conv) => {
  const relevantQuotesKeys = ['1', '44', '50'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.whatcanyoudo', (conv) => {
  const relevantQuotesKeys = ['2', '30'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.whereareyou', (conv) => {
  const relevantQuotesKeys = ['4', '41', '50'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('default.fallback', (conv) => {
  const relevantQuotesKeys = ['8', '11', '34', '50', '55', '88'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.goodmorning', (conv) => {
  const relevantQuotesKeys = ['12'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.whatislove', (conv) => {
  const relevantQuotesKeys = ['13'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.whatisit', (conv) => {
  const relevantQuotesKeys = ['14'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.agent.acquaintance', (conv) => {
  const relevantQuotesKeys = ['22', '63', '65', '68', '75', '100'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.how_are_you', (conv) => {
  const relevantQuotesKeys = ['19', '30', '38', '40', '41', '44', '53'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.greetings.bye', (conv) => {
  const relevantQuotesKeys = ['37', '47', '61', '76'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.agent.my_friend', (conv) => {
  const relevantQuotesKeys = ['56', '58', '63'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

app.intent('smalltalk.whatislife', (conv) => {
  const relevantQuotesKeys = ['93'];
  const ssml = randomQuote(quotes, relevantQuotesKeys);
  console.log(`SSML: ${ssml}`);
  conv.ask(ssml);
});

// Cloud Functions for Firebase handler for HTTPS POST requests.
// https://developers.google.com/actions/dialogflow/fulfillment#building_fulfillment_responses
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
