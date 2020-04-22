const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

const handleFormSubmit = event => {
    event.preventDefault();

    const location = search.value;
    messageOne.textContent = 'loading...';
    fetch(`/weather?address=${location}`).then(response => response.json()).then(weather => {
        if (weather.error) return messageOne.textContent = weather.error;

        messageOne.textContent = weather.forecast;
        messageTwo.textContent = weather.location;
    }).catch(e => log(e));

};

weatherForm.addEventListener('submit', handleFormSubmit);