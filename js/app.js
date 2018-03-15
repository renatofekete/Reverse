var btn = document.getElementById("btn");
var input = document.getElementById("submit");
var answer = document.querySelector('.reversed p');
var container = document.querySelector('.reversed');

btn.addEventListener('click', function () {
  answer.innerHTML = '';

  var reversed = input.value.split('').reverse('');

  for (i = 0; i < reversed.length; i++) {
    (function (i) {
      setTimeout(function () {
        answer.innerHTML += reversed[i];
      }, 100 * i);
    })(i);


  }



});

input.addEventListener('focus', function () {
  input.value = '';

});
console.log("test");