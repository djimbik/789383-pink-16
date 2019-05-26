var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

var link = document.querySelector('.main-form__button');
var popupError = document.querySelector('.modal--error');
var popupAccept = document.querySelector('.modal--accept');
var close = document.querySelectorAll(".modal__button");
var form = document.querySelector(".main-form");
var sername = form.querySelector("[name=sername]");
var userName = form.querySelector("[name=name]");
var userMail = form.querySelector("[name=userMail]");

link.addEventListener("click", function (evt) {
  if (!sername.value || !userName.value || !userMail.value) {
    evt.preventDefault();
    popupError.classList.add("error-show");
  }
});

close.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupError.classList.remove("error-show");
    popupAccept.classList.remove("accept-show");
  });
})

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  popupAccept.classList.add("accept-show");
})

function initMap() {
  var spb = {lat: 59.938856, lng: 30.323037};
  var map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 15, center: spb});
  var marker = new google.maps.Marker({position: spb, map: map});
}
