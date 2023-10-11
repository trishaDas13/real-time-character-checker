let text = document.querySelector('textarea');
let count = document.querySelectorAll('span');
let btn = document.querySelector('button');

text.addEventListener('keyup', function(e) {
    let length = e.target.value.length;
    count[0].innerText = length;
    count[1].innerText = 50-length; 
});

btn.addEventListener('click', function(e) {
    count[0].innerText = 0;
    count[1].innerText = 50; 
    text.value = "";
});
