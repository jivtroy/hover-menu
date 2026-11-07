/*! 
 * HoverMenu v1.0.0
 * Homepage (https://github.com/jivtroy/hover-menu)
 * Copyright Jiv Troy
 * License: MIT
 */
(function(e,n){typeof exports=="object"&&typeof module<"u"?n(require("bootstrap")):typeof define=="function"&&define.amd?define(["bootstrap"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.bootstrap))})(this,(function(e){"use strict";"ontouchstart"in document.documentElement||document.addEventListener("DOMContentLoaded",function(){const n=".dropdown-hover",o=document.querySelectorAll(`${n} > [data-bs-toggle="dropdown"]`);o.length&&o.forEach(t=>{t.addEventListener("mouseenter",function(){e.Dropdown.getOrCreateInstance(t).show()}),t.closest(n).addEventListener("mouseleave",function(){e.Dropdown.getOrCreateInstance(t).hide()})})})}));
