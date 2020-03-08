# bootsdark

A responsive Bootstrap theme that respects client computer's dark or light mode preference
---
![bootsdark demo](https://terrymorse.com/public/bootsdark-demo.gif "Bootsdark
 demo")
**bootsdark** detects the user preference for dark or light mode, responding to
 changes.
 
It works in any browser that respects the standard media query:
 
```css
@media (prefers-color-scheme: dark) {}
```
Earliest browser versions that support `prefers-color-scheme`:

Browser         | Version
--------------- | -------
IE              | no
Edge            | 79
Firefox         | 67
Chrome          | 76
Safari          | 12.1
Opera           | 62
iOS Safari      | 13.1
Android Browser | 80
Chrome Android  | 80
Firefox Android | 68

## Usage
Link the `bootsdark.css` or `bootsdark.min.css` file in an HTML page after
 linking `bootstrap.css`:
```html
<head>
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="bootsdark.css">
</head>
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
