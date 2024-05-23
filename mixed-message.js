function random_message() {
    random_message = ['1', '2', '3'];
    number = Math.floor(Math.random()*(random_message.length))
    return random_message[number]; 
}

console.log(random_message());