// egy változó ami megnyitja a modal-t
var btn = document.getElementsByClassName('col');

// összes modal
var modals = document.querySelectorAll('.modal');

// Az összes element aminek a classa "close"
var spans = document.getElementsByClassName('close');

//Forciklus arra, hogy megnyissuk a modal-t kattintással

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = e => {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute('href')); // href-ből dolgozik
    modal.style.display = 'block';
  };
}
// Forciklus a <span> (x), akkor bezáródjon
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = () => {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
        modals[index].style.display = 'none';
    }
  };
}

// ha a modalon kívül kattintunk, akkor bezáródik
window.onclick = event => {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
        modals[index].style.display = 'none';
    }
  }
};

/* Check box a csoportokhoz */

var getValue = () => {
  var check = document.getElementsByClassName('checkbox');
  var str;

  for (i = 0; i < 10; i++) {
    str = check[i].value;
    var append = document.getElementsByClassName(str);
    if (check[i].checked === false) {
      var j;
      for (j = 0; j < append.length; j++) {
        append[j].style.opacity = '0.3';
      }
    } else if (check[i].checked === true) {
      var k;
      for (k = 0; k < append.length; k++) {
        append[k].style.opacity = '1';
      }
    }
  }
};

getValue();
