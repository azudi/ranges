

 export default range = {
  //these code below is for rectangular loader
  rectangle: function ({
    id,
    color,
    width,
    strokewidth,
    percent,
    rounded,
    fontsize,
    textcolor,
    textbold,
    indicator,
    trackcolor,
    unit,
    track,
    dashed,
    breakcolor
  }) {
    //code for error
    if (percent > 100) {
      console.log("percent cannot ne greater than 100");
    }

    if (document.getElementById(id)) {
      const moduleClick = document.getElementById(id);
      const moduleClickChild = document.getElementById(id).children[0];
      const moduleClickChildNext =
        document.getElementById(id).children[0].children[0];
      strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black");
      unit ? (unit = unit) : (unit = "%");
      trackcolor
        ? (trackcolor = trackcolor)
        : (trackcolor = "rgba(0,0,0,0.07)");

      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center

      if (moduleClick.children.length > 6)
        for (let p = 6; p < moduleClick.children.length; p++) {
          if (moduleClick.children[p].tagName === "DIV") {
            moduleClick.children[p].remove();
          }
        }
      const rollerIndicator = document.createElement("span");
      moduleClick.appendChild(rollerIndicator);
      rollerIndicator.innerHTML = `${percent}${unit}`;
      rollerIndicator.style.cssText = `position:absolute;top:calc(50% - ${
        fontsize / 2
      }px);
    left:calc(50% - ${fontsize / 2}px);
    text-align:center;
    width:${fontsize}px;
    height:${fontsize}px;
    display:${indicator == true ? "inline-flex" : "none"};
    justify-content:center;
    align-items:center;
    font-weight:${textbold ? textbold : 300};
    color:${textcolor ? textcolor : "black"};
    font-size:${fontsize}px;
    `;

      if (moduleClick.children.length > 2) {
        moduleClick.children[1].remove();
      } //end of display indicator in center
      //code for the display of track

      if (track && track == true) {
        const rangetrack = document.createElement("span");
        moduleClick.appendChild(rangetrack);
        rangetrack.style.cssText = `position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:10;
    `;
        rangetrack.innerHTML = `
       <svg width=${width}px
       height=${width}px >
         <rect
          y:${0};
          x:${0};
          style='
          stroke:${trackcolor};
          stroke-width:${strokewidth}px;
          fill:transparent;
          width:${width};
          height:${width};
          '
         />
       </svg>
       `;
      } //end of code for the display of track
      //code for dashed display

      if (dashed && dashed == true) {
        let svg2 = document.createElement("span");
        svg2.classList.add("roller_rx_range_rx");
        svg2.style.cssText = `width:${width}px;
 height:${width}px;
 position:absolute;top:0;left:0;display:block;
 z-index:6;
 `;
        svg2.innerHTML = `<svg width=${width}px height=${width}px>
    <rect
          y:${0};
          x:${0};
          style='
          stroke:${breakcolor};
          stroke-width:${strokewidth + 1}px;
          fill:transparent;
          width:${width};
          height:${width};
          stroke-dasharray:5 10
          '
         />
 </svg>`;
        moduleClick.appendChild(svg2);
      } //   //end of code for the dashed display

      if (width) {
        moduleClick.style.cssText = `width:${width}px;
    height:${width}px;position:relative !important;
    
    `;
        moduleClickChild.style.cssText = `width:${width}px;
    height:${width}px;fill:transparent;
    `;
        moduleClickChildNext.style.cssText = `stroke:${color ? color : black};
    stroke-width:${strokewidth}px;
    y:${0};
    x:${0};
    fill:transparent;
    width:${width};
    height:${width};
    stroke-dashoffset:0 0;
    stroke-dasharray:${(percent * ((8 * width) / 2)) / 100} ${
          ((100 - percent) * ((8 * width) / 2)) / 100
        };
    stroke-linecap:${rounded ? "round" : "none"}
    `;
      }
    }
  },
  //code below is for square roller
  rectangleroller: function ({
    id,
    color,
    width,
    strokewidth,
    rounded,
    track,
    trackcolor
  }) {
    const moduleClick = document.getElementById(id);
    const moduleClickChild = document.getElementById(id).children[0];
    const moduleClickChildNext =
      document.getElementById(id).children[0].children[0];
    strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
    width ? (width = width) : (width = 200);
    color ? (color = color) : (color = "black");
    trackcolor ? (trackcolor = trackcolor) : (trackcolor = "rgba(0,0,0,0.07)");
    const rangetrack = document.createElement("div");
    moduleClick.appendChild(rangetrack);
    rangetrack.style.cssText = `position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    z-index:10;
    `;
    rangetrack.innerHTML = `
       <svg width=${width}px
       height=${width}px >
         <rect
          y:${0};
          x:${0};
          style='
          stroke:${trackcolor};
          stroke-width:${strokewidth}px;
          fill:transparent;
          width:${width};
          height:${width};
          '
         />
       </svg>
       `;

    if (width) {
      moduleClick.style.cssText = `width:${width}px;
    height:${width}px;position:relative;
    `;
      moduleClickChild.style.cssText = `width:${width}px;
    height:${width}px;fill:transparent;
    `;
      moduleClickChildNext.style.cssText = `stroke:${color ? color : black};
    stroke-width:${strokewidth}px;
    y:${0};
    x:${0};
    fill:transparent;
    width:${width};
    height:${width};
    stroke-dashoffset:0 0;
    stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
        (100 * ((8 * width) / 2)) / 100
      };
    stroke-linecap:${rounded ? "round" : "none"}
    `;
    }

    setTimeout(() => {
      moduleClickChildNext.style.cssText = `${
        moduleClickChildNext.style.cssText
      }
            transition:2.2s;
            stroke-dasharray:${(100 * ((8 * width) / 2)) / 100} ${
        (100 * ((0 * width) / 2)) / 100
      };
            `;
      setTimeout(() => {
        moduleClickChildNext.style.cssText = `${
          moduleClickChildNext.style.cssText
        }
                transition:0s;
                stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
          (100 * ((8 * width) / 2)) / 100
        };
                `;
      }, 1700);
    }, 10);
    setInterval(() => {
      moduleClickChildNext.style.cssText = `${
        moduleClickChildNext.style.cssText
      }
            transition:2s;
            stroke-dasharray:${(100 * ((8 * width) / 2)) / 100} ${
        (100 * ((0 * width) / 2)) / 100
      };
            `;
      setTimeout(() => {
        moduleClickChildNext.style.cssText = `${
          moduleClickChildNext.style.cssText
        }
                transition:0s;
                stroke-dasharray:${(100 * ((0 * width) / 2)) / 100} ${
          (100 * ((8 * width) / 2)) / 100
        };
                `;
      }, 1700);
    }, 2000);
  },
  //end of sqare roller
  //these code below is for loader timer
  circle: function ({
    id,
    color,
    width,
    strokewidth,
    percent,
    rounded,
    fontsize,
    textcolor,
    textbold,
    indicator,
    track,
    trackcolor,
    trackfit,
    widetrack,
    dashed,
    unit,
    balltip,
    arrowtip,
    fillbackground,
    breakcolor,
    boxshadow,
    widestroke,
    gradient
  }) {
    //code for error
    if (percent > 100) {
      console.log("percent cannot be greater than 100");
    }

    if (document.getElementById(id)) {
      const moduleClick = document.getElementById(id);
      const moduleClickChild = moduleClick.children[0];
      const moduleClickChildNext = moduleClick.children[0].children[0];
      document.getElementById(id).children[0].children[0];
      fillbackground ? (dashed = false) : (dashed = dashed);
      unit ? (unit = unit) : (unit = "%");
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black");
      trackfit ? (track = false) : (track = track);
      dashed ? (track = false) : (track = track);
      let rangevalue=5.8;
      widestroke?rangevalue=(rangevalue*0.99):rangevalue=5.8

      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center

      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center

      for (let i = 0; i < moduleClick.children.length; i++) {
        if (moduleClick.children[i].tagName === "SPAN") {
          moduleClick.children[i].remove();
        }
      } //code below is to display indicator in center
      // code to adjust the strokewide based on the width

      if (strokewidth) {
        if (strokewidth < width * 0.05) {
          strokewidth = strokewidth;
        } else {
          strokewidth = width * 0.05;
        }
      } // end of code to adjust the strokewide based on the width

      const rollerIndicator = document.createElement("span");
      moduleClick.appendChild(rollerIndicator);
      rollerIndicator.innerHTML = `${percent}${unit}`; //code to show the percent in number

      rollerIndicator.style.cssText = `position:absolute;top:calc(50% - ${
        fontsize / 2
      }px);
   left:calc(50% - ${fontsize / 2}px);
   text-align:center;
   width:${fontsize}px;
   height:${fontsize}px;
   display:${indicator == true ? "inline-flex" : "none"};
   justify-content:center;
   align-items:center;
   font-weight:${textbold ? textbold : 300};
   color:${textcolor ? textcolor : black};
   font-size:${fontsize}px;
   `; //end of code to show the percent in number

      if (track && track == true) {
        //code for track which the stroke move along
        const trackdiv = document.createElement("span");
        const rangetrack = document.createElement("span");
        trackdiv.appendChild(rangetrack);
        moduleClick.appendChild(trackdiv);
        trackdiv.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;
    display:block !important;
    `;
        rangetrack.style.cssText = `position:absolute;
   width:calc(100% - ${strokewidth * 2}px);
   height:calc(100% - ${strokewidth * 2}px);
   border:${strokewidth + 1}px solid ${
          trackcolor ? trackcolor : "rgba(0,0,0,0.07)"
        };
   top:${strokewidth}px;left:${strokewidth}px;
   border-radius:50%;
   display:${track ? "inline-block" : "none"};
   z-index:-1
   `;
      } //end of code for track which the stroke move along
      //code below for dashed and trackfit

      if (dashed && dashed == true && moduleClick.children.length < 5) {
        let widewidth;
        widetrack
          ? (widewidth = strokewidth * 2)
          : (widewidth = strokewidth + 1);
        let svg2 = document.createElement("span");
        svg2.classList.add("roller_rx_range_rx");
        svg2.style.cssText = `width:${width}px;
   height:${width}px;transform:rotateZ(-90deg);
   position:absolute;top:0;left:0;`;
        svg2.innerHTML = `<svg width=${width}px height=${width}px>
   <circle cy=${width / 2} cx=${width / 2} 
   r=${width / 2 - strokewidth} 
   fill='transparent'
   style='
   stroke-width:${widewidth}px;
   stroke:${breakcolor};
   stroke-dashoffset:0 0;
   stroke-dasharray:6 15;
   stroke-linecap:none;
   '
   />
   </svg>`;
        moduleClick.appendChild(svg2);
      }

      if (trackfit && trackfit == true && moduleClick.children.length < 5) {
        let widewidth;
        widetrack ? (widewidth = strokewidth * 2) : (widewidth = strokewidth);
        let svg = document.createElement("span");
        svg.classList.add("roller_rx_range_rx2");
        svg.style.cssText = `width:${width}px;
   height:${width}px;transform:rotateZ(-90deg);
   position:absolute;top:0;left:0;z-index:-1`;
        svg.innerHTML = `<svg width=${width}px height=${width}px>
   <circle cy=${width / 2} cx=${width / 2} 
   r=${width / 2 - strokewidth} 
   fill='transparent'
   style='
   stroke-width:${widewidth}px;
   stroke:rgba(235,235,235,1);
   stroke-linecap:${rounded ? "round" : "none"};
   '
   />
   </svg>`;
        moduleClick.appendChild(svg);
      } //end of code for dashed and trackfit

      if (width) {
        moduleClick.style.cssText = `width:${width}px;
   height:${width}px;position:relative;
 
   `;

        if (fillbackground && fillbackground != "") {
          moduleClick.style.cssText = `${moduleClick.style.cssText};background:${fillbackground};
       border-radius:50%;
     `;
          dashed = false;
        } //code below for balltip

        if (balltip && balltip == true) {
          let ball = document.createElement("span");
          let tip = document.createElement("span");
          ball.style.cssText = `
             position:absolute;top:0;left:0;
             width:100%;height:100%;
             border-radius:50%;
             display:block;
             z-index:100;
             transform:rotateZ(${(percent / 100) * 360}deg)  
           `;
          tip.style.cssText = `
             position:absolute;top:0.5px;
             left:50%;width:${strokewidth * 2}px;
             height:${strokewidth * 2}px;
             border-radius:inherit;
             background:${color};
           `;
          ball.appendChild(tip);
          moduleClick.appendChild(ball);
        } //end of code for balltip


        //code below for arrowtip

        if (arrowtip && arrowtip == true) {
          let ball = document.createElement("span");
          let tip = document.createElement("span");
          ball.style.cssText = `
          position:absolute;top:0;left:0;
          width:100%;height:100%;
          border-radius:50%;
          display:block;
          z-index:100;
          transform:rotateZ(${(percent / 100) * 360}deg)  
        `;
          tip.style.cssText = `
          position:absolute;top:${-strokewidth}px;
          left:50%;
         border-left:${strokewidth * 2}px solid ${color};
         border-top:${strokewidth * 2}px solid transparent;
         border-bottom:${strokewidth * 2}px solid transparent;
         border-radius:50px
        `;
          ball.appendChild(tip);
          moduleClick.appendChild(ball);
        } //end of code for arrowtip

   

        moduleClickChild.style.cssText = `width:${width}px;
   height:${width}px;transform:rotateZ(-90deg);z-index:20 !important;
   `;
        moduleClickChildNext.style.cssText = `
        stroke:${color ? color : black};
   stroke-width:${widestroke?(strokewidth*2)-1:strokewidth}px;
   cy:${width / 2};
   cx:${width / 2};
   r:${width / 2 - strokewidth};
   fill:transparent;
   stroke-dashoffset:0;
   stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
          ((100 - percent) * ((rangevalue * width) / 2)) / 100
        };
   stroke-linecap:${rounded ? "round" : "none"};
   animation:2s infinite linear svgroller
   `;
      } 
       


      //code for box shadow
        if(boxshadow && boxshadow==true){ 
       let shadow= document.createElement("span")
       let shadowinner= document.createElement("span")
          shadow.style.cssText=`
             width:100%;height:100%;
             border-radius:50%;
             position:absolute;top:0;left:0;
             
          `
          shadowinner.style.cssText=`
          position:absolute;top:${strokewidth*2}px;
          left:${strokewidth*2}px;width:calc(100% - ${4*strokewidth}px);
          height:calc(100% - ${4*strokewidth}px);
          border-radius:inherit;
          box-shadow: 2px 4px 10px rgba(0,0,0,0.09),
       -2px -4px 10px rgba(0,0,0,0.09),
       inset -2px -4px 10px rgba(0,0,0,0.05),
      inset 2px 4px 10px rgba(0,0,0,0.05);
          `
          shadow.appendChild(shadowinner)
        moduleClick.appendChild(shadow)
      moduleClick.style.cssText=`
      ${moduleClick.style.cssText};
      box-shadow:inset 2px 6px 10px rgba(0,0,0,0.1),
      inset -2px -6px 10px rgba(0,0,0,0.1);
      border-radius:50%;
      `
        }
          //end of code for box shadow

          //code for gradient
            if(gradient){
               let stop=""
                  if(gradient.colors){
                  for(let i=0;i<gradient.colors.length;i++){
                    stop=`${stop}  <stop
                    offset="${gradient.colors[i].substring(gradient.colors[i].lastIndexOf(" "),gradient.colors[i].length)}" style="stop-color:${gradient.colors[i].substring(0,gradient.colors[i].lastIndexOf(" "))}; stop-opacity:1"
                  ></stop>`
                  }
                }
         
                //code below for linear gradient 
              if(gradient.type=="linear-gradient"){
             
              moduleClickChild.innerHTML=`
              
                <linearGradient id="grad" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
                ${stop}
                </linearGradient>

                <circle
                stroke="url(#grad)"
                style='
                stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
                cy:${width / 2};
                cx:${width / 2};
                r:${width / 2 - strokewidth};
                fill:transparent;
                stroke-dashoffset:0;
                stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
                        ((100 - percent) * ((rangevalue * width) / 2)) / 100
                      };
                stroke-linecap:${rounded ? "round" : "none"};
                '
                ></circle>
             
              `}
               //end of code for linear gradient

           //code below for radial gradient
            if(gradient.type=="radial-gradient"){
             
            moduleClickChild.innerHTML=`
            
              <radialGradient id="grad" cx="${gradient.orientation?gradient.orientation.x:0}%" cy="${gradient.orientation?gradient.orientation.y:0}%" r="${gradient.orientation?gradient.orientation.fill:100}%">
              ${stop}
              </radialGradient>

              <circle
              stroke="url(#grad)"
              style='
              stroke-width:${widestroke?(strokewidth*2):strokewidth}px;
              cy:${width / 2};
              cx:${width / 2};
              r:${width / 2 - strokewidth};
              fill:transparent;
              stroke-dashoffset:0;
              stroke-dasharray: ${(percent * ((rangevalue * width) / 2)) / 100} ${
                      ((100 - percent) * ((rangevalue * width) / 2)) / 100
                    };
              stroke-linecap:${rounded ? "round" : "none"};
              '
              ></circle>
           
            `
                  }
         //end of code for radial gradient
            }
          // end of code for gradient  
    
        
    }
   
  },
  //the code below is for line svg
  line: function ({
    id,
    color,
    width,
    strokewidth,
    percent,
    animate,
    indicator,
    roundrange,
    trackcolor,
    textcolor
  }) {
    //code for error
    if (percent > 100) {
      console.log("percent cannot ne greater than 100");
    }

    if (document.getElementById(id)) {
      const moduleClick = document.getElementById(id);

      if (moduleClick.children.length > 0) {
        for (let h = 0; h < moduleClick.children.length; h++) {
          moduleClick.children[h].remove();
        }
      }

      strokewidth ? (strokewidth = strokewidth) : (strokewidth = 1);
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black");
      trackcolor ? (trackcolor = trackcolor) : (trackcolor = "rgba(0,0,0,0.1)");
      textcolor ? (textcolor = textcolor) : (textcolor = "black");
      animate ? (roundrange = false) : (roundrange = roundrange);

      if (moduleClick.children.length > 0) {
        for (let h = 0; h < moduleClick.children.length; h++) {
          moduleClick.children[h].remove();
        }
      } //code below is to create new elwment

      let moduleClickChild = document.createElement("div");
      let moduleClickChildNext = document.createElement("span");

      if (width) {
        moduleClickChild.appendChild(moduleClickChildNext);
        moduleClick.appendChild(moduleClickChild);

        if (indicator && indicator == true && animate == false) {
          let rx_indicate = document.createElement("span");
          moduleClick.appendChild(rx_indicate);
          rx_indicate.innerHTML = `${percent}`;
          rx_indicate.style.cssText = `position:absolute;
       bottom:calc(100% - ${0}px);
       left:${percent}%;margin:0 !important;
       padding:0;
       border-radius:50px 50px 50px 0px;
       background:${color};
       color:${textcolor};
       display:inline-block;padding:7px;
       font-size:12px;font-weight:300;
       font-family:arial;
       `;
        }

        moduleClick.style.cssText = `width:${width} !important;position:relative;border-radius:${roundrange};display:block`;
        moduleClickChild.style.cssText = `width:100%;
   height:${strokewidth}px;position:relative;background:${trackcolor};
   overflow:hidden !important;
   border-radius:${roundrange}
   `;
        moduleClickChildNext.style.cssText = `width:${percent}%;
   height:${strokewidth}px;background:${color};width:${percent}%;
   display:block;
   border-radius:inherit
   `;
      } //begin for code to animate

      if (animate && animate == true) {
        moduleClickChildNext.style.cssText = `${moduleClickChildNext.style.cssText}; width:30%`;
        moduleClickChildNext.classList.add("rx_liner");
      } //end of code to animate
    }
  },
  roller: function ({
    id,
    color,
    width,
    strokewidth,
    percent,
    rounded,
    ratio,
    track
  }) {
    if (document.getElementById(id)) {
      const moduleClick = document.getElementById(id);
      const moduleClickChild = document.getElementById(id).children[0];
      const moduleClickChildNext =
        document.getElementById(id).children[0].children[0];
      width ? (width = width) : (width = 200);
      color ? (color = color) : (color = "black"); //code below for dashed and trackfit

      if (track && track === true) {
        let svg = document.createElement("div");
        svg.style.cssText = `width:${width}px;
  height:${width}px;transform:rotateZ(-90deg);
  position:absolute;top:0;left:0;z-index:-1`;
        svg.innerHTML = `<svg width=${width}px height=${width}px>
  <circle cy=${width / 2} cx=${width / 2} 
  r=${width / 2 - strokewidth} 
  fill='transparent'
  style='
  stroke-width:${strokewidth + 0.5}px;
  stroke:rgba(235,235,235,1);
  stroke-linecap:${rounded ? "round" : "none"};
  '
  />
  </svg>`;
        moduleClick.appendChild(svg); //end of code for dashed and trackfit
      }

      if (width) {
        moduleClick.style.cssText = `width:${width}px;
  height:${width}px;position:relative;
  
  `;
        moduleClickChild.style.cssText = `width:${width}px;
  height:${width}px;transform:rotateZ(-90deg);z-index:20 !important;
  `;
        moduleClickChildNext.style.cssText = `stroke:${color ? color : black};
  stroke-width:${strokewidth}px;
  cy:${width / 2};
  cx:${width / 2};
  r:${width / 2 - strokewidth};
  fill:transparent;
  stroke-dashoffset:0;
  stroke-dasharray: ${(percent * ((ratio * width) / 2)) / 100} ${
          ((100 - percent) * ((ratio * 2 * width) / 2)) / 100
        };
  stroke-linecap:${rounded ? "round" : "none"};
  animation:2s infinite linear svgroller
  `;
      }

      setTimeout(() => {
        moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:2s;transform:rotateZ(1440deg)`;
      }, 10);
      setInterval(() => {
        moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:1.6s;transform:rotateZ(720deg)`;
        setTimeout(() => {
          moduleClickChild.style.cssText = `${moduleClickChild.style.cssText} transition:linear 0s; transform:rotateZ(0deg)`;
        }, 1450);
      }, 1500);
    }
  }
};
