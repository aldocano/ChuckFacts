const { dialogflow, MediaObject, Image } = require('actions-on-google');
const functions = require('firebase-functions');
const i18n = require('i18n');


// --- Quotes -----------------------------------------------------------------------------------------------------
const quotes = {
  1: {
    phrase: "Chuck Norris invented the bolt-action rifle, liquor, sexual intercourse, and football-- in that order.",
  },
  2: {
    phrase: "Chuck Norris is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face.');",
  },
  3: {
    phrase: "Chuck Norris invented a new martial arts style: Chuck-Will-Kill.",
  },
  4: {
    phrase: "Chuck Norris always knows the EXACT location of Carmen SanDiego.",
  },
  5: {
    phrase: "Chuck Norris can be unlocked on the hardest level of Tekken. But only Chuck Norris is skilled enough to unlock himself. Then he roundhouse kicks the Playstation back to Japan.",
  },
  6: {
    phrase: 'Chuck Norris can exist in two or more places at the same time.',
  },
  7: {
    phrase: "Contrary to popular belief, there is indeed enough Chuck Norris to go around",
  },
  8: {
    phrase: "Chuck Norris invented a new martial arts style: Chuck-Will-Kill.",
  },
  9: {
    phrase: "Police label anyone attacking Chuck Norris as a Code 45-11.... A suicide.",
  },
  10: {
    phrase: "Contrary to popular belief, there is indeed enough Chuck Norris to go around.",
  },
  11: {
    phrase: "Chuck Norris doesn''t have disk latency because the hard drive knows to hurry the hell up.",
  },
  12: {
    phrase: 'The only thing you can beat Chuck Norris at is the number of times you have had your face kicked in.',
  },
  13: {
    phrase: "Chuck Norris once spit on a lizard. The result is tyrannosaurus rex.",
  },
  14: {
    phrase: 'Never look a gift Chuck Norris in the mouth, because he will bite your damn eyes off.',
  },
  15: {
    prase: 'The Bermuda Triangle used to be the Bermuda Square, until Chuck Norris Roundhouse kicked one of the corners off.',
  },
  16: {
    phrase: 'They once made Chuck Norris toilet paper. The only problem was that it wouldnt take shit from no one!',
  },
  17: {
    phrase: 'Chuck Norris just says "no" to drugs. If he said "yes", it would collapse Colombia\'s infrastructure.',
  },
  18: {
    phrase: 'Chuck Norris knows everything there is to know - Except for the definition of mercy.',
  },
  19: {
    phrase: "Chuck Norris built a better mousetrap, but the world was too frightened to beat a path to his door.",
  },
  20: {
    phrase: 'In an average living room there are 1,242 objects Chuck Norris could use to kill you, including the room itself.',
  },
  21: {
    phrase: 'The pen is mighter than the sword, but only if the pen is held by Chuck Norris.',
  },
  22: {
    prase: 'Chuck Norris invented bacon by throwing a pig through a chain link fence.',
  },
  23: { 
    phrase: "A man once asked Chuck Norris if his real name is \"Charles\". Chuck Norris did not respond, he simply stared at him until he exploded.",
  },
  24: {
    phrase: "The word ''Kill'' was invented by Chuck Norris. Other words were ''Die'', ''Beer'', and ''What''.",
  },
  25: {
    phrase: 'Hakuna Matata is actually Swahili for all hail Chuck Norris.',
  },
  26: {
    phrase: "Most people have 23 pairs of chromosomes. Chuck Norris has 72... and they''re all poisonous.",
      },
  27: {
    phrase: "Chuck Norris thinks inside the bun",
  },
  28: {
    phrase: "Chuck Norris is not Politically Correct. He is just Correct. Always.",
  },
  29: {
    phrase: "Think of a hot woman. Chuck Norris did her.",
  },
  30: {
    phrase: 'The First rule of Chuck Norris is: you do not talk about Chuck Norris.',
  },
  31: {
    phrase: 'Chuck Norris can watch TV...on his GameBoy...',
  },
  32: {
    phrase: 'Chuck Norris CAN see John Cena.',
  },
  33: {
    phrase: "Chuck Norris did in fact, build Rome in a day.",
  },
  34: {
    phrase: "In the Bible, Jesus turned water into wine. But then Chuck Norris turned that wine into beer.",
  },
  35: {
    prase: "Chuck Norris uses tabasco sauce instead of visine.",
  },
  36: {
    phrase: "Chuck Norris programs do not accept input.",
  },
  37: {
    phrase: "In the X-Men movies, none of the X-Men super-powers are done with special effects. Chuck Norris is the stuntman for every character.",
  },
  38: {
    phrase: 'Chuck Norris doesn\'t believe in ravioli. He stuffs a live turtle with beef and smothers it in pig\'s blood.',
  },
  39: {
    phrase: 'Chuck Norris invented manure spreaders.',
  },
  40: {
    phrase: "Chuck Norris finished World of Warcraft.",
  },
  41: {
    phrase: 'Chuck Norris sleeps with a pillow under his gun.',
  },
  42: {
    phrase: 'Hellen Keller\'s favorite color is Chuck Norris.',
  },
  43: {
    phrase: "If Chuck Norris had killed Kenny, he would have stayed dead.",
  },
  44: {
    phrase: 'Chuck Norris likes his ice like he likes his skulls: crushed.',
  },
  45: {
    phrase: 'Chuck Norris is not Irish. His hair is soaked in the blood of his victims.',
  },
  46: {
    phrase: "There is no such thing as global warming. Chuck Norris was cold, so he turned the sun up.",
  },
  47: {
    phrase: 'If you spell Chuck Norris in Scrabble, you win. Forever.',
  },
  48: {
    phrase: "Chuck Norris''s brain waves are suspected to be harmful to cell phones.",
  },
  49: {
    phrase: "Who knows what evil lurks in the hearts of men? Goddamn Chuck Norris, that''s who.",
  },
  50: {
    phrase: 'Chuck Norris\'s brain waves are suspected to be harmful to cell phones.',
  },
  51: {
    phrase: "Who knows what evil lurks in the hearts of men? Goddamn Chuck Norris, that''s who.",
  },
  52: {
    phrase: "The crickets don''t chirp at Chuck Norris'' house, if they know what''s good for them.'",
  },
  53: {
    phrase: 'Chuck Norris doesn\'t read books. He stares them down until he gets the information he wants.',
  },
  54: {
    phrase: 'When you say no one\'s perfect", Chuck Norris takes this as a personal insult.',
  },
  55: {
    phrase: 'Chuck Norris chooses not to compete in an Ironman because of the swim, every time he starts kicking and swinging his arms, people die!',
  },
  56: {
    phrase: "Chuck Norris does not follow fashion trends, they follow him. But then he turns around and kicks their ass. Nobody follows Chuck Norris.",
  },
  57: {
    phrase: 'Every SQL statement that Chuck Norris codes has an implicit "COMMIT" in its end.',
  },
  58: {
    phrase: 'Chuck Norris doesnt shave; he kicks himself in the face. The only thing that can cut Chuck Norris is Chuck Norris.',
  },
  59: {
    phrase: "Chuck Norris crossed the road. No one has ever dared question his motives.",
  },
  60: {
    phrase: "The truth will set you free. Unless Chuck Norris has you, in which case, forget it buddy!",
  },
  61: {
    phrase: "Chuck Norris likes to perform surprise lobotomies with an ice-cream scoop.",
  },
  62: {
    phrase: 'Little Miss Muffet sat on her tuffet, until Chuck Norris roundhouse kicked her into a glacier.',
  },
  63: {
    phrase: "Chuck Norris does not play the lottery. It doesn''t have nearly enough balls.",
  },
  64: {
    phrase: "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.",
  },
  65: {
    phrase: 'No matter which part of Chuck Norris you aim at, the bullet will always hit the center of your forehead.',
  },
  66: {
    phrase: 'Chuck Norris roundhouse kicks don\'t really kill people. They wipe out their entire existence from the space-time continuum.',
  },
  67: {
    phrase: 'Those aren\'t credits that roll after Walker Texas Ranger. It is actually a list of fatalities that occurred during the making of the episode.',
  },
  68: {
    phrase: 'The show Survivor had the original premise of putting people on an island with Chuck Norris. There were no survivors, and nobody is brave enough to go to the island to retrieve the footage.',
  },
  69: {
    phrase: 'Chuck Norris could order a steak at PETA\'s cafeteria and get one. But he\'s far more likely to kick the shit out of all the candy-asses in the place before roundhousing the building into rubble.',
  },
  70: {
    phrase: 'A man once claimed Chuck Norris kicked his ass twice, but it was promptly dismissed as false - no one could survive it the first time.',
  },
  71: {
    phrase: 'Chuck Norris owns a chain of fast-food restaurants throughout the southwest. They serve nothing but barbecue-flavored ice cream and Hot Pockets.',
  },
  72: {
    phrase: 'Chuck Norris once lost the remote, but maintained control of the TV by yelling at it in between bites of his "Filet of Child" sandwich.',
  },
  73: {
    phrase: 'Divide Chuck Norris by zero and you will in fact get one........one bad-ass that is.',
  },
  74: {
    phrase: 'Chuck Norris will attain statehood in 2009. His state flower will be the Magnolia.',
  },
  75: {
    phrase: 'Jack in the Box\'s do not work around Chuck Norris. They know better than to attempt to scare Chuck Norris',  
  },
  76: {
    phrase: 'They once made a Chuck Norris toilet paper, but there was a problem-- It wouldn\'t take shit from anybody.',
  },
  77: {
    phrase: 'Chuck Norris is not dead yet because he knows Bruce Lee is waiting for him in the after life.',
  },
  78: {
    phrase: 'Chuck Norris never goes to the dentist because his teeth are unbreakable. His enemies never go to the dentist because they have no teeth.',
  },
  79: {
    phrase: 'Chuck Norris never wet his bed as a child. The bed wet itself out of fear.',
  },
  80: {
    phrase: 'Chuck Norris\' gaydar is so finely tuned he can tell if you have EVER stared at another man\'s ass and will brutally kill you accordingly.',
  },
  81: {
    phrase: 'Crime does not pay - unless you are an undertaker following Walker, Texas Ranger, on a routine patrol.',
  },
  82: { 
    phrase: 'Many rednecks and rual farmers enjoy Mountain Oysters as a special delicacy within their traditional menus. Chuck Norris, however, prefers to personally harvest and diet upon Mountain Gorilla Oysters.',
  },
  83: {
    phrase: 'In the beginning there was nothing...then Chuck Norris Roundhouse kicked that nothing in the face and said "Get a job". That is the story of the universe.',
  },
  84: {
    phrase: 'When Chuck Norris kills you, the government fully covers all funeral expenses, as ordered by the  UN. It is the only truly good thing they have ever done.',
  },
  85: {
    phrase: 'When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack. Chuck Norris has not had to pay taxes, ever.',
  },
  86: {
    phrase: 'Chuck Norris keeps his friends close and his enemies closer. Close enough to drop them with one round house kick to the face.',
  },
  87: {
    phrase: 'There are two types of people in the world... people that suck, and Chuck Norris.',
  },
  88: {
    phrase:'# Chuck Norris\'s show is called Walker: Texas Ranger, because Chuck Norris doesn\'t run.',
  },
  89: {
    phrase: 'Archeologists unearthed an old english dictionary dating back to the year 1236. It defined "victim" as "one who has encountered Chuck Norris"',
  },
  90: {
    phrase: 'It is most common among people to believe that Hiroshima and Nagasaki were destroyed by nuclear bombs. Not so known fact is that Chuck Norris was spotted in Japan at that time supposedly having minor flatulance problem due to assassination attempt with uranium filled sushi. Hence the later radiation.',
  },
  91: {
    phrase: 'The term "Cleveland Steamer" got its name from Chuck Norris, when he took a dump while visiting the Rock and Roll Hall of fame and buried northern Ohio under a glacier of fecal matter.',
  },
  92: {
    phrase: 'If you rearrange the letters in "Chuck Norris", they also spell "Crush Rock In". The words "with his fists" are understood.',
  },
  93: {
    phrase: 'Chuck Norris does not have to answer the phone. His beard picks up the incoming electrical impulses and translates them into audible sound.',
  },
  94: {
    phrase: 'Chuck Norris is the only person who can simultaneously hold and fire FIVE Uzis: One in each hand, one in each foot -- and the 5th one he roundhouse-kicks into the air, so that it sprays bullets.',
  },
  95: {
    phrase: 'How many roundhouse kicks does it take to get to the center of a tootsie pop? Just one. From Chuck Norris.',
  },
  96: {
    phrase: 'According to the Encyclopedia Brittanica, the Native American "Trail of Tears" has been redefined as anywhere that Chuck Norris walks.',
  },
  97: {
    phrase: 'Pick a number between 1 and 10. No matter what it is, you are wrong, and Chuck Norris is now on his way to brutally murder you.',
  },
  98: {
    phrase: 'Human cloning is outlawed because of Chuck Norris, because then it would be possible for a Chuck Norris roundhouse kick to meet another Chuck Norris roundhouse kick. Physicists theorize that this contact would end the universe.',
  },
  99: {
    phrase: 'Chuck Norris invented a language that incorporates karate and roundhouse kicks. So next time Chuck Norris is kicking your ass, don?t be offended or hurt, he may be just trying to tell you he likes your hat.',
  },
  100: {
    phrase: "Chuck Norris is currently suing NBC, claiming 'Law and Order' are trademarked names.",
  },
  101: {
    phrase: 'Chuck Norris can divide by zero.',
  },
  102: {
    phrase: 'Chuck Norris can kill two stones with one bird.',
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

app.intent('smalltalk.greetings.whatcanyoudo', (conv) => {
  const relevantQuotesKeys = ['2', '30'];
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

// Cloud Functions for Firebase handler for HTTPS POST requests.
// https://developers.google.com/actions/dialogflow/fulfillment#building_fulfillment_responses
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
