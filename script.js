var up =document.getElementById('paragraph_UP');
var down = document.getElementById('paragraph_DOWN');
up.innerHTML = 'Click on the button to generate alpha-numeric string';

function randomStr(len, arr) {
    var ans = '';
    for (var i = len; i > 0; i --) {
       ans +=
       arr[Math.floor(Math.random() * arr.length )]; 
    }
    return ans;
}

function paragraph_Fun() {
    down.innerHTML = randomStr(20, '123456789abcdefghijklmnop');
}


