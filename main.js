const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");


email.addEventListener('input', () => checkEmail());
submit.onclick = () => { if (checkEmail()) email.value = ''; };

function checkEmail() {
  const re = /\w+@\w+\.\w+/;
  let value = email.value;
  if (re.test(value) == false) {
    error.parentElement.classList.add('active');
    return false;
  } else {
    error.parentElement.classList.remove('active');
    return true;
  }
}
