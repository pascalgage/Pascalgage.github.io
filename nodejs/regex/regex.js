// const myReg = new RegExp("[a-zA-Z]");

let actor = "Steven, Spielberg".toLowerCase();

userInput = "Tarik".toLowerCase();

console.log(actor.includes(userInput) ? 'Yes' : 'No');


let reg = new RegExp(userInput.toLowerCase());

if(actor.match(reg)) {
    console.log('OK');
}
else {
    console.log('NOOK');
}




const myRegex = /^([a-zA-Z\s]{2,20})$/;

