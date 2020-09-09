window.onload = function () {
  var font1 = document.getElementsByClassName("part");

  var font2 = document.getElementsByClassName("upper");
  var font3 = document.getElementsByClassName("lower");
  var href = document.getElementsByClassName("button");

  for (let i = 0; i < font1.length; i++) {
    font1[i].classList.add("font1");
  }

  arr_img = ["url(./1.jpg)", "url(./2.jpg)", "url(./3.jpg)"];
  for (let i = 0; i < font2.length; i++) {
    font2[i].classList.add("font2");
    let img = arr_img[i];
    font2[i].style.backgroundImage = img;
  }

  for (let i = 0; i < font3.length; i++) {
    font3[i].classList.add("font3");
  }
};
