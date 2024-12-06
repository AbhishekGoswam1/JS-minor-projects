const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'black') {
      body.style.backgroundColor = 'black';
      document.querySelector('.h1').style.color = 'white';
      document.querySelector('.h2').style.color = 'green';
    }
    if (event.target.id === 'red') {
      body.style.backgroundColor = event.target.id;
    }
  });
    // if (document.querySelector('.body').style.backgroundColor === 'black') {
    //     document.querySelector('.heading').style.color = 'white';
    // }  
    // not working
});
