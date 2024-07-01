// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const menu = document.querySelector(".menu-bar");
const btn = document.querySelector(".btn");
const ull = document.querySelector(".ull");
menu.addEventListener("click", function () {
  ull.classList.toggle("btn");
  ull.classList.remove("aactive");
});
