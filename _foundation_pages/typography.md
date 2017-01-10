---
title: Typography
permalink: /foundations/typography/
---

<h1>h1. heading</h1>
<h2>h2. heading</h2>
<h3>h3. heading</h3>
<h4>h4. heading</h4>
<h5>h5. heading</h5>
<h6>h6. heading</h6>

<div class="mt-5"></div>

## Font Utility Classes
- <div class="tisa-med font-up-4">Tisa Medium (font-weight: 500)</div> `tisa-med`
- <div class="tisa-light font-up-4">Tisa Light (font-weight: 300)</div> `tisa-light`
- <div class="tisa-sans font-up-4">Tisa Sans (font-weight: 400, default face)</div> `tisa-sans`

<div class="mt-5"></div>

Our root font size is `16px` which corresponds to `1rem`.

The modular font scale uses a ratio of `1.125 / 8:9`. There are utility classes to go up 10, and down 5. Such as `font-up-3` or `font-down-1`

<div class="font-up-10">Pack my box with five dozen liquor jugs</div>
`font-up-10`
<div class="font-up-9">Pack my box with five dozen liquor jugs</div>
`font-up-9`
<div class="font-up-8">Pack my box with five dozen liquor jugs</div>
`font-up-8`
<div class="font-up-7">Pack my box with five dozen liquor jugs</div>
`font-up-7`
<div class="font-up-6">Pack my box with five dozen liquor jugs</div>
`font-up-6`
<div class="font-up-5">Pack my box with five dozen liquor jugs</div>
`font-up-5`
<div class="font-up-4">Pack my box with five dozen liquor jugs</div>
`font-up-4`
<div class="font-up-3">Pack my box with five dozen liquor jugs</div>
`font-up-3`
<div class="font-up-2">Pack my box with five dozen liquor jugs</div>
`font-up-2`
<div class="font-up-1">Pack my box with five dozen liquor jugs</div>
`font-up-1`
<div>Pack my box with five dozen liquor jugs</div>
`Root size / 16px / 1rem`
<div class="font-down-1">Pack my box with five dozen liquor jugs</div>
`font-down-1`
<div class="font-down-2">Pack my box with five dozen liquor jugs</div>
`font-down-2`
<div class="font-down-3">Pack my box with five dozen liquor jugs</div>
`font-down-3`
<div class="font-down-4">Pack my box with five dozen liquor jugs</div>
`font-down-4`
<div class="font-down-5">Pack my box with five dozen liquor jugs</div>
`font-down-5`

<div class="mt-5"></div>

Base line height is 1.55, however the header line height (1.25) can be applied with `lh-header`

<div class="font-up-4 lh-header">1234567890</div>
{% highlight html %}
<div class="font-up-4 lh-header">1234567890</div>
{% endhighlight %}

<img src="https://s3.amazonaws.com/theknot.com/union/tk-typography_2x-min.jpg" alt="typography" class="img-fluid">
