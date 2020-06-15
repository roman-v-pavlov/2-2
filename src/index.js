let input1 = document.createElement('input');

let input2 = document.createElement('input');

let button = document.createElement('button');
button.textContent = 'Calculate';

const error1 = document.createElement('div');
error1.classList.add('error-message');
error1.textContent = 'This is not a number';
const error2 = document.createElement('div');
error2.classList.add('error-message');
error2.textContent = "This is not a number";

function isDec(num) {
  if (isFinite(num) && /^\d*\.?\d*$/.test(num.toString())) return true;
  return false;
}

input1.style.display = input2 = button = 'block';

input1 = document.body.appendChild(input1);
input2 = document.body.appendChild(input2);
button = document.body.appendChild(button);

const res = document.createElement('div');
res.id = 'result';

button.addEventListener('click', function() {
  if (!isDec(input1.value)) {
    document.body.insertBefore(error1, input2);
  } else {
    error.remove();
  }

  if (!isDec(input2.value)) {
    document.body.insertBefore(error2, button);
  } else {
    error.remove();
  }

  if (isDec(input1.value) && isDec(input2.value)) {
    res.textContent = +input1.value + +input2.value;
    if (res.parentNode !== document.body) document.body.appendChild(res);
  }
});
