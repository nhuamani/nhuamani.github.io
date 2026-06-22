(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _activeMenu = require("./modules/active-menu");

var _showMenu = require("./modules/show-menu");

(0, _activeMenu.activeMenu)();
(0, _showMenu.showMenu)();
(0, _showMenu.closeMenu)();

},{"./modules/active-menu":2,"./modules/show-menu":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var activeMenu = exports.activeMenu = function activeMenu() {
    var menu = document.getElementById('main-menu');
    if (menu) {
        var links = Array.from(menu.querySelectorAll('a'));
        links.map(function (link) {
            if (link.href === location.href || link.href === location.href.slice(0, -1)) link.classList.add('active');
        });
    }
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMenu = showMenu;
exports.closeMenu = closeMenu;
var icon = document.getElementById("menu-icon");
var menu = document.querySelector(".header-nav");
var menuclose = document.querySelector(".header-icon__item");

function showMenu() {
  icon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
}

console.log(menuclose);

function closeMenu() {
  icon.addEventListener("click", function () {
    menuclose.classList.toggle("active");
  });
}

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
