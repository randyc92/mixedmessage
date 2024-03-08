function randomNumberGenerator(array){
    return Math.floor(Math.random() * array.length);
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const fortunes = ["you will make a game winning goal", "you will get money from an unexpected place", "you will make tons of friends this year", "you will discover you are loved by many", "you will discover you are liked by many", "you will have a very special day", "you will learn a lot of new things", "you will grow to be rich", "you will be experience a large amount of successful", "all your dreams will come true", "you will gain more confidence", "you will meet someone special", "you will perform well on a test", "you will attend a special event",  "you will receive a phone call that will bring good news"];

const misfortunes = ["you may have an accident", "of who you make friends with", "before you fall in love too easily", "what you say behind a friend's back", "not to put your faith in the advice of strangers", "an upcoming school assignment will prove harder than you expected", "believing in the promises of fortunes", "you may have more enemies than you realize", "there may be someone in your social circle who may not be trustworthy"];


function fortuneTeller(){
    let month = months[randomNumberGenerator(months)]; 
    let fortune = fortunes[randomNumberGenerator(fortunes)];
    let misfortune = misfortunes[randomNumberGenerator(misfortunes)];

    console.log(`The month of ${month} will be very important this year for you.\n
    During ${month} ${fortune}.\n
    However, this new found fortune is not all that awaits you.\n
    You should be careful ${misfortune}.`);
}

fortuneTeller();