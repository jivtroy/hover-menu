/*! 
 * HoverMenu v1.0.0
 * Homepage (https://github.com/jivtroy/hover-menu)
 * Copyright Jiv Troy
 * License: MIT
 */
import { Dropdown as o } from "bootstrap";
"ontouchstart" in document.documentElement || document.addEventListener("DOMContentLoaded", function() {
  const n = ".dropdown-hover", t = document.querySelectorAll(`${n} > [data-bs-toggle="dropdown"]`);
  t.length && t.forEach((e) => {
    e.addEventListener("mouseenter", function() {
      o.getOrCreateInstance(e).show();
    }), e.closest(n).addEventListener("mouseleave", function() {
      o.getOrCreateInstance(e).hide();
    });
  });
});
