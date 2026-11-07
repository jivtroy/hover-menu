# Bootstrap Hover Menu

Bootstrap framework hover menu with js events support.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
3. [Usage](#usage)
   1. [CDN](#cdn)
   2. [Local](#local)
   3. [Bundler](#bundler)
4. [Sponsors](#sponsors)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Bootstrap | >= 5.3 and < 6.0

## Installation

### NPM

```bash
npm install hover-menu
```

## Usage

### CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hover Menu</title>

    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/hover-menu@1/dist/css/hover-menu.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="btn-group dropdown-hover dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
      <div class="dropdown-menu hover-menu">
        <li><a class="dropdown-item" href="#">Menu item 1</a></li>
        <li><a class="dropdown-item" href="#">Menu item 2</a></li>
        <li><a class="dropdown-item" href="#">Menu item 3</a></li>
      </div>
    </div>

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/hover-menu@1/dist/js/hover-menu.umd.js"></script>
  </body>
</html>
```

### Local

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hover Menu</title>

    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/hover-menu.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="btn-group dropdown-hover dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
      <div class="dropdown-menu hover-menu">
        <li><a class="dropdown-item" href="#">Menu item 1</a></li>
        <li><a class="dropdown-item" href="#">Menu item 2</a></li>
        <li><a class="dropdown-item" href="#">Menu item 3</a></li>
      </div>
    </div>

    <!-- JS -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/hover-menu.umd.js"></script>
  </body>
</html>
```

### Bundler

ESM import:

```js
import 'hover-menu/css'
/* or */
import 'hover-menu/dist/css/hover-menu.min.css'

import 'hover-menu'
```

CommonJS import:

```js
require('hover-menu/css')
/* or */
require('hover-menu/dist/css/hover-menu.min.css')

require('hover-menu')
```

CSS import:

```css
@import "hover-menu/css";
/* or */
@import "hover-menu/dist/css/hover-menu.min.css";
```

## Sponsors

## Author

* [Dev](https://dev.to/jivtroy)
* [Medium](https://medium.com/@jivtroy)
* [YouTube](https://www.youtube.com/@jivtroy)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.