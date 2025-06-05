(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 350,
	height: 310,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/Layer10.png", id:"Layer10"},
		{src:"images/Layer1_1.png", id:"Layer1_1"},
		{src:"images/Layer2_1.png", id:"Layer2_1"},
		{src:"images/Layer3_1.png", id:"Layer3_1"},
		{src:"images/Layer4_1.png", id:"Layer4_1"},
		{src:"images/Layer5_1.png", id:"Layer5_1"},
		{src:"images/Layer6_1.png", id:"Layer6_1"},
		{src:"images/Layer7_1.png", id:"Layer7_1"},
		{src:"images/Layer9.png", id:"Layer9"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Layer10 = function() {
	this.initialize(img.Layer10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,373,84);


(lib.Layer1_1 = function() {
	this.initialize(img.Layer1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,694,619);


(lib.Layer2_1 = function() {
	this.initialize(img.Layer2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,621);


(lib.Layer3_1 = function() {
	this.initialize(img.Layer3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,462);


(lib.Layer4_1 = function() {
	this.initialize(img.Layer4_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,135);


(lib.Layer5_1 = function() {
	this.initialize(img.Layer5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,621);


(lib.Layer6_1 = function() {
	this.initialize(img.Layer6_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,134);


(lib.Layer7_1 = function() {
	this.initialize(img.Layer7_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,99);


(lib.Layer9 = function() {
	this.initialize(img.Layer9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,119);


(lib.Layer10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373,84);


(lib.Layer9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,119);


(lib.Layer7_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,99);


(lib.Layer7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer6_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208,134);


(lib.Layer6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer5_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,621);


(lib.Layer5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer4_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,135);


(lib.Layer4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer3_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,462);


(lib.Layer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,621);


(lib.Layer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Layer1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,694,619);


(lib.Layer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3_1_1();
	this.instance.setTransform(175,194.5,0.499,0.499,0,0,0,351,231.2);

	this.instance_1 = new lib.Layer2_1_1();
	this.instance_1.setTransform(175,154.9,0.499,0.499,0,0,0,351,310.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,309.6);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4_1_1();
	this.instance.setTransform(86.6,33.7,0.499,0.499,0,0,0,173.6,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,67.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6_1_1();
	this.instance.setTransform(51.9,33.4,0.499,0.499,0,0,0,104.1,66.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,66.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9_1();
	this.instance.setTransform(48.1,29.7,0.499,0.499,0,0,0,96.5,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,59.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10_1();
	this.instance.setTransform(93.1,21,0.499,0.499,0,0,0,186.7,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,41.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7_1_1();
	this.instance.setTransform(61.1,24.8,0.499,0.499,0,0,0,122.5,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.2,49.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5_1_1();
	this.instance.setTransform(175,154.9,0.499,0.499,0,0,0,351,310.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,309.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(43.8,33.4,1,1,0,0,0,43.8,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,66.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(48.1,29.7,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,59.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(93,20.9,1,1,0,0,0,93,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,41.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(51.9,33.4,1,1,0,0,0,51.9,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,66.8);


// stage content:
(lib.Animatiomn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer-9
	this.instance = new lib.Symbol7();
	this.instance.setTransform(-51.6,112.4,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-45.9,y:112.5},0).wait(1).to({x:-40.1},0).wait(1).to({x:-34.4,y:112.6},0).wait(1).to({x:-28.7,y:112.7},0).wait(1).to({x:-23.1,y:112.8},0).wait(1).to({x:-17.4},0).wait(1).to({x:-11.7,y:112.9},0).wait(1).to({x:-6.1,y:113},0).wait(1).to({x:-0.5,y:113.1},0).wait(1).to({x:5.2},0).wait(1).to({x:10.8,y:113.2},0).wait(1).to({x:16.4,y:113.3},0).wait(1).to({x:21.9,y:113.4},0).wait(1).to({x:27.5},0).wait(1).to({x:33,y:113.5},0).wait(1).to({x:38.6,y:113.6},0).wait(1).to({x:44.1},0).wait(1).to({x:49.6,y:113.7},0).wait(1).to({x:55.1,y:113.8},0).wait(1).to({x:60.5,y:113.9},0).wait(1).to({x:66},0).wait(1).to({x:68,y:114},0).wait(122));

	// Layer-10
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(452.2,115.1,1,1,0,0,0,93,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:442},0).wait(1).to({x:431.8},0).wait(1).to({x:421.7},0).wait(1).to({x:411.6},0).wait(1).to({x:401.6},0).wait(1).to({x:391.5},0).wait(1).to({x:381.5},0).wait(1).to({x:371.5},0).wait(1).to({x:361.5},0).wait(1).to({x:351.6},0).wait(1).to({x:341.6},0).wait(1).to({x:331.7},0).wait(1).to({x:321.8},0).wait(1).to({x:312},0).wait(1).to({x:302.1},0).wait(1).to({x:292.3},0).wait(1).to({x:282.6},0).wait(1).to({x:272.8},0).wait(1).to({x:263},0).wait(1).to({x:253.3},0).wait(1).to({x:243.6},0).wait(1).to({x:240.1},0).wait(122));

	// Layer-7
	this.instance_2 = new lib.Layer7();
	this.instance_2.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(143));

	// Layer-6
	this.instance_3 = new lib.Layer6();
	this.instance_3.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(143));

	// Layer-5
	this.instance_4 = new lib.Layer5();
	this.instance_4.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(143));

	// Layer-4
	this.instance_5 = new lib.Layer4();
	this.instance_5.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(143));

	// Layer-3
	this.instance_6 = new lib.Layer3();
	this.instance_6.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(143));

	// Layer-2
	this.instance_7 = new lib.Layer2();
	this.instance_7.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(143));

	// Layer-1
	this.instance_8 = new lib.Layer1();
	this.instance_8.setTransform(0,0,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(143));

	// Layer-7_1
	this.instance_9 = new lib.Symbol2();
	this.instance_9.setTransform(-70.1,199.2,1,1,0,0,0,61.1,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:-63},0).wait(1).to({x:-55.9},0).wait(1).to({x:-48.8},0).wait(1).to({x:-41.8},0).wait(1).to({x:-34.8},0).wait(1).to({x:-27.7},0).wait(1).to({x:-20.7},0).wait(1).to({x:-13.8},0).wait(1).to({x:-6.8},0).wait(1).to({x:0.2},0).wait(1).to({x:7.1},0).wait(1).to({x:14},0).wait(1).to({x:20.9},0).wait(1).to({x:27.8},0).wait(1).to({x:34.7},0).wait(1).to({x:41.5},0).wait(1).to({x:48.4},0).wait(1).to({x:55.2},0).wait(1).to({x:61.9},0).wait(1).to({x:68.7},0).wait(1).to({x:72.1},0).wait(123));

	// Layer-6_1
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(426.4,49.3,1,1,0,0,0,51.9,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({x:418.5},0).wait(1).to({x:410.6},0).wait(1).to({x:402.8},0).wait(1).to({x:394.9},0).wait(1).to({x:387.1},0).wait(1).to({x:379.3},0).wait(1).to({x:371.5},0).wait(1).to({x:363.7},0).wait(1).to({x:356},0).wait(1).to({x:348.2},0).wait(1).to({x:340.5},0).wait(1).to({x:332.8},0).wait(1).to({x:325.1},0).wait(1).to({x:317.5},0).wait(1).to({x:309.8},0).wait(1).to({x:302.2},0).wait(1).to({x:294.6},0).wait(1).to({x:287},0).wait(1).to({x:279.4},0).wait(1).to({x:271.9},0).wait(1).to({x:268.2},0).wait(123));

	// Layer 27
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(175,155.9,1,1,0,0,0,175,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:154.8,y:155.8},0).wait(69).to({y:155.7},0).wait(74));

	// Layer-5_1
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(175,155.2,1,1,0,0,0,175,154.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(144));

	// Layer-4_1
	this.instance_13 = new lib.Symbol8();
	this.instance_13.setTransform(107.9,49,1,1,0,0,0,86.5,33.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regY:33.7,y:49.1,alpha:0.018},0).wait(1).to({alpha:0.036},0).wait(1).to({alpha:0.054},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.107},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.232},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.393},0).wait(1).to({alpha:0.411},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.464},0).wait(1).to({alpha:0.482},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.536},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.607},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.768},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.821},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.911},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.946},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(88));

	// Layer-3_1
	this.instance_14 = new lib.Symbol9();
	this.instance_14.setTransform(175,154.8,1,1,0,0,0,175,154.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(144));

	// Layer-1_1
	this.instance_15 = new lib.Layer1_1_1();
	this.instance_15.setTransform(173,155.4,0.499,0.499,0,0,0,346.9,309.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.8,155,676.4,310.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;