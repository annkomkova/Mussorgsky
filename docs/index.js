/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var imgContent = document.querySelectorAll('.img-content-hover');
function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    var x = e.pageX;
    var y = e.pageY;
    imgContent[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
  }
}
document.addEventListener('mousemove', showImgContent);
/******/ })()
;