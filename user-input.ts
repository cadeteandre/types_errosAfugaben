const greetUser = () => {
    const userName = prompt('Type your username:');
    if(userName === '') {
        throw new Error('No username has been entered')
    } else if(userName === null) {
        return `You're very welcome, whoever you are...`;
    } else {
        return `You're very welcome ${userName}`;
    }
}

try {
    const userName = greetUser();
    console.log(userName);
} catch(err) {
    console.log(err);
}