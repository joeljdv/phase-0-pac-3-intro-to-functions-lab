function shout(string){
    return string.toUpperCase();
}
shout('Hello')

function whisper(string){
    return string.toLowerCase();
}
whisper("HELLO")

function logShout(string){
    console.log(string.toUpperCase())
}
logShout('Hello')

function logWhisper(string){
    console.log(string.toLowerCase())
}
logWhisper('HELLO')

const string='Hello!;'
function sayHiToGrandma(string){
    if (string==='I love you, Grandma.'){return('I love you, too.')}
    if (string===string.toLowerCase()){return("I can't hear you!")}
    if (string===string.toUpperCase()){return("YES INDEED!")}
}
sayHiToGrandma(string)