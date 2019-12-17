
export const greetings = ['Hello',
'Hiya',
'How You Doin\'?',
'Greetings',
'Shalom',
'Word',
'Sup',
'O Hai',
'What is crack a lacking?',
'Dudester!',
'Alrighty then!',
'Hola',
'Guten Targ',
'Oh Hiii',
'Oh hi there',
'Howdy',
'Bonjour',
'Speak!',
'Hey',
'Hey There',
'G\'Day Mate!',
'Yo',
'Domino\'s Pizza, pickup or delivery?',
'What\'s up?',
'WUZZUP?',
'Good day to you!',
'Ahoy Matey!'];

export function getGreeting()
{
    let rand = Math.floor(Math.random() * greetings.length);
    return greetings[rand];

};


// exports.greet = () => getGreeting();