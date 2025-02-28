const subject = ['You', 'We', 'He', 'She', 'They'];
const verb = ['can', "can't", "will", "won't", "must", "musn't"];
const action = ['jump off a cliff', 'bake bread', "break bad", "eat beans"];

function createMessage() {
    return `${subject[randomNumber(subject)]} ${verb[randomNumber(verb)]} ${action[randomNumber(action)]}!`
};

function randomNumber(arr) {
    return Math.floor(Math.random() * arr.length)
};

document.getElementById('message').textContent = createMessage();
