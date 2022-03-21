# ranges.js

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=1.1.2&x2=0)](https://badge.fury.io/js/vanilla-tilt)

A smooth progress bar javascript library forked from [(ranges.js)](https://github.com/azudi/ranges/tree/main/range).

[View landing page (demos)](https://azudi.github.io/ranges/)

### Building ###

Clone git repository:

   $ git clone git://github.com/azudi/ranges.git

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
    unit:                       "%",       // the unit to be displayed in the indicator  (string)
    balltip:                   true,       // set the end tip of the stroke to be round  (true/false)
    arrowtip:                  true,       // set the end of the stroke to be an arrow  (true/false)
    boxshadow:                 true,       // set the inset box shadow of the track  (true/false)
    fillbackground:           "red",           // these is set to the background color of the progress bar  (--string)
    gradient:                  object,     // set the background gradient of the stroke   
    type:           "linear gradient",     //To set the type of gradient --property of gradient-- (--string)
    colors:                    object,     // To set the gradient color --property of gradient-- (["red 0%","orange 30%","teal 100%"])
    orientation:               object,    //To set the gradient orientation --property of gradient-- (x:orientation along the x-axis, y:orientation along the y-axis, fill:capacity occupied by the gradient)  
    breakcolor:  "rgb(245,245,245)",       // To set the dashed track breaks color -- (these color should be the same with the background color || if background is transparent set to the background of the parent element)   (--string) 
    ratio:                        2,       // To set the number of divided tracks (only available in roller function)   (--number)
  
}
```


### Install
Include these CDNs

--Javascript
```
<script type="text/javascript" src="https://azudi.github.io/ranges/range/range.js"></script>
```

--CSS
```
<script type="text/javascript" src="https://azudi.github.io/ranges/range/range.css"></script>
```
You can copy and include any of the following file for liner animation:

* [ranges.css](https://github.com/azudi/ranges/blob/main/range/range.css) ~ 1kb

#### NPM

Also available on npm https://www.npmjs.com/package/ranges

```
npm install range
```

Import it using

```
import range from 'range';
```


### Credits

Original library: [ranges.js](https://github.com/azudi/ranges/tree/main/range)

Original library author: [jerry azubuike](https://twitter.com/@JerryAzubuike5)

Original library author linkedin: [jerry azubuike](https://www.linkedin.com/in/jerry-azubuike-801752222)


### License

ISC License