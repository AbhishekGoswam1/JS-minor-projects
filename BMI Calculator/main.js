const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.5) {
      results.innerHTML = `<span>Your BMI: ${bmi} <br> You are under weight</span>`;
    } else if (bmi > 18.5 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI: ${bmi} <br> You are in normal range</span>`;
    } else if (bmi >= 25) {
      results.innerHTML = `<span>Your BMI: ${bmi} <br> You are over weight</span>`;
    }
  }
});
