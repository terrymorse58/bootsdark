# bootsdark

A Bootstrap theme that responds to a computer's dark/light mode setting
---
![bootsdark demo](https://terrymorse.com/public/bootsdark-demo.gif "Bootsdark
 demo")
**bootsdark** is a pure Bootstrap CSS (no JavaScript) file that detects a
 computer's dark or light mode setting, responding instantly to changes.
 
**bootsdark** works in any browser that supports the standard media query for
dark mode:
 
```css
  @media (prefers-color-scheme: dark) {}
```
Browsers that support dark mode `@media` query:

Browser         | Version
--------------- | -------
IE              | no
Edge            | 79+
Firefox         | 67+
Chrome          | 76+
Safari          | 12.1+
Opera           | 62+
iOS Safari      | 13.1+
Android Browser | 80+
Chrome Android  | 80+
Firefox Android | 68+

## Demo

View a live **bootsdark** demo at [terrymorse.com](https://terrymorse.com/coding/darkmode/index.html).

## Install
```shell script
$ npm install bootsdark
```

## Usage
Simply link *bootsdark.css* (or *bootsdark.min.css*) in an HTML page after
linking *bootstrap.css*:
```html
<head>
    <link rel="stylesheet" href="bootstrap.css">
      <!----->
    <link rel="stylesheet" href="bootsdark.css">
</head>
```
Or simply link to the CDN:
```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/terrymorse58/bootsdark/ios-modal.css/dist/bootsdark.min.css">
```

## License

MIT License

Copyright (c) 2020 Terry Morse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
