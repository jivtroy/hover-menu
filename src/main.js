import './style.css'
import { Dropdown } from 'bootstrap'

if (!('ontouchstart' in document.documentElement)) {
  document.addEventListener('DOMContentLoaded', function() {
    const SELECTOR_HOVER = '.dropdown-hover'
    const toggles = document.querySelectorAll(`${SELECTOR_HOVER} > [data-bs-toggle="dropdown"]`)
    if (toggles.length) {
      toggles.forEach(toggle => {
        toggle.addEventListener('mouseenter', function() {
          Dropdown.getOrCreateInstance(toggle).show()
        })
        toggle.closest(SELECTOR_HOVER).addEventListener('mouseleave', function() {
          Dropdown.getOrCreateInstance(toggle).hide()
        })
      })
    }
  })
}