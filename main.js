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

// function solution(str) {
//   let ar = [];
//   for (let i = 0; i < str.length; i += 2) ar.push(str.slice(i, i + 2));
//   let final = ar.map(ele => {
//     if (ele.length == 1) {
//       ele = ele + '_';
//       return ele;
//     } else if (ele.length == 2) {
//       return ele;
//     }
//   });
//   return final;
// }

// console.log(solution(''));




let descendingOrder = (n) => +[...n.toString()].reverse().join('');
// console.log(descendingOrder(1021));