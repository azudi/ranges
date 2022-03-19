# ranges.js

[![npm version](https://badge.fury.io/js/vanilla-tilt.svg)](https://badge.fury.io/js/vanilla-tilt)

A smooth progress bar javascript library forked from [(ranges.js)](https://github.com/azudi/ranges/tree/main/range).

[View landing page (demos)](https://azudi.github.io/ranges/)

### Usage

```html
<body>
  
<!-- your target element -->
 <div id="circle-div"><svg><circle/></svg>
 </div>

<script>
let people=new range.circle({
  id:"circle-div",
  width:150,
  strokewidth:15,
  percent:70,
  rounded:false,
  fontsize:33,
  color:"red",
  textcolor:"red",
  textbold:100,
  track:true,
  indicator:true,
  animate:false,
  trackcolor:"",
  unit:"%",
  })
  </script>
</body>
```

### Options
```js
{
    id:                "circle-div",       // id of the element  (--string)
    width:                      180,       // width of the element as a progress bar in px  (--number)
    strokewidth:                 15,       // width of the stroke in px   (--number)
    percent:                     4         // precentage  of the stroke  (--number)
    rounded:                   true,       // the curve of the edges of the stroke(true/false)
    fontsize:                    25,       // the fontsize of the text indicator  (--number)
    textcolor:                "red",       // color of the text indicator  (-- string)
    color:                    "red",       // the color of the stroke  ( --string)
    textbold:                   600,       // the fontweight of the indicator text  (--number)
    indicator:                 true,       // If the indicator is to be visible (true/false)
    track:                     true,       // these is set to the default background track
    roundrange: "5px 10px 50px 0px",       // these is set to border-radius of the liner progress bar  (--string)
    trackcolor:  "rgb(245,245,245)",       // these is set to the background color of the track  (--string)
    trackfit:                  true,       // these is set to track to be fit to the progress bar  (true/false)
    animate:                   true,       // to animate the liner progress bar (can only functio if the ranges.css is loaded)   (true/false)
    widetrack:                 true,       // these is set to the track to be wider than the progress bar  (true/false)
    dashed:                    true,       // these is to set track in dashed track  (true/false)
    unit:                "%",              // the unit to be displayed in the indicator  (string)
    balltip:                   true,       // set the end tip of the stroke to be round  (true/false)
    arrowtip:                  true,       // set the end of the stroke to be an arrow  (true/false)
    fillbackground:       "red",           // these is set to the background color of the progress bar  (--string)
    breakcolor:  "rgb(245,245,245)",       // To set the dashed track breaks color -- (these color should be the same with the background color || if background is transparent set to the background of the parent element)   (--string) 
    ratio:                        2,       // To set the number of divided tracks (only available in roller function)   (--number)
  
}
```

### Events


### Methods
```js

```

### Install
You can copy and include any of the following file:

* [ranges.css](https://github.com/azudi/ranges/blob/main/range/range.css) ~ 1kb

#### NPM

Also available on npm https://www.npmjs.com/package/vanilla-tilt

```
npm install vanilla-tilt
```

Import it using

```
import VanillaTilt from 'vanilla-tilt';
```


### Credits

Original library: [ranges.js](https://github.com/azudi/ranges/tree/main/range)

Original library author: [jerry azubuike](https://twitter.com/GijsRoge)


### License

ISC License