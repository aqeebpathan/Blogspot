"use strict";

//Menu
const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__menu");
menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("show");
});

///
const openModal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const subCategory = document.querySelectorAll(".sub-category__heading");
console.log(subCategory);

subCategory.forEach(function (ele) {
  ele.addEventListener("click", function () {
    openModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", function () {
  openModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
///

// Filter JS
$(document).ready(function () {
  $(".blog-filter__category").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".posted-blog").show("1000");
    } else {
      $(".posted-blog")
        .not("." + value)
        .hide("1000");
      $(".posted-blog")
        .filter("." + value)
        .show("1000");
    }
  });

  // Active category
  $(".blog-filter__category").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
