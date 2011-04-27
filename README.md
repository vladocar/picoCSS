picoCSS - really small JavaScript Framework
-----
picoCSS is small(0,35kb gzipped & compressed)  JavaScript Library for basic CSS DOM manipulation optimized for webkit browsers(Safari, Chrome) also works in Firefox, Opera without the part of animation. picoCSS dosen't aim to be complete JS framework just simple tool for simple needs. Basically if only need to do simple CSS JavaScript manipulation for your next iPad,iPhone or Android app, picoCSS can help you. 

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

