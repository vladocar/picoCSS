picoCSS - really small JavaScript Framework
-----
picoCSS is small (0,35kb gzipped & compressed)  JavaScript Library for basic CSS DOM manipulation optimized for webkit browsers(Safari, Chrome) also works in Firefox, Opera without the part of animation. 

picoCSS dosen't aim to be complete JS framework just simple tool for simple needs. 

Basically if only need to do simple CSS JavaScript manipulation for your next iPad, iPhone or Android app, picoCSS can help you. 

With picoCSS you can:
---------------------

  * Insert inline CSS
  * Change Class or ID 
  * Make basic webkit animation
  * picoCSS integrates [Svetlo Selector Engine](http://www.vcarrer.com/2011/04/svetlo-one-line-javascript-selector.html)
  
<h3>The syntax looks like this:</h3>

	p.select("#a").css("background-color : green; color: #fff;");

or 

	p.select("#b").animate('0.5', '1','360','1','1','1','1', '0','0');

or

	p.select("#main").att("class","bumm");

If you open picoCSS.js file you will notice that the library is very easy to extend. 

Feel free to do any kind of modification to the library.


Google Closure Compiler was used for compressing the JS file.

Demos:
---------------------

  * [Demo1](http://www.allapis.com/picoCSS/sun.html)
  * [Demo2](http://www.allapis.com/picoCSS/css.html)
  * [Demo3](http://www.allapis.com/picoCSS/of-onn.html)
  * [Demo4](http://www.allapis.com/picoCSS/animate.html)

Also my blog post [picoCSS - JavaScript Framework](http://www.vcarrer.com/2011/04/picocss-really-small-javascript.html)