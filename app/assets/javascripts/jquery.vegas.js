(function(e)
	{function h(t,n)
		{var r={align:"center",valign:"center"};
		e.extend(r,n);
		if(t.height()==0){
			console.log("pecouille");
			t.load(function(){h(e(this),n)});
			return
		}
		var i=e(window).width(),s=e(window).height(),o=t.width(),u=t.height(),a=s/i,f=u/o,l,c,p,d,v;
		if(a>f){
			l=s/f;c=s
		}
		else{
			l=i;c=i*f
		}
		v={
			width:l+"px",height:c+"px",top:"auto",bottom:"auto",left:"auto",right:"auto"
		};
		if(!isNaN(parseInt(r.valign))){
			v["top"]=0-(c-s)/100*parseInt(r.valign)+"px"
		}
		else if(r.valign=="top"){
			v["top"]=0
		}
		else if(r.valign=="bottom"){v["bottom"]=0
	}
else{v["top"]=(s-c)/2
}
if(!isNaN(parseInt(r.align))){
	v["left"]=0-(l-i)/100*parseInt(r.align)+"px"
}
else if(r.align=="left"){v["left"]=0
}
else if(r.align=="right"){v["right"]=0
}
else{v["left"]=(i-l)/2}t.css(v)
}
function p(){
	r.prependTo("body").fadeIn()
}
function d(){
	r.fadeOut("fast",function(){
		e(this).remove()
	}
	)
}
function v(){
	if(e("body").css("backgroundImage")){
		return e("body").css("backgroundImage").replace(/url\("?(.*?)"?\)/i,"$1")
	}
}
var t=e("<img />").addClass("vegas-background"),
n=e("<div />").addClass("vegas-overlay"),
r=e("<div />").addClass("vegas-loading"),
i=e(),s=null,o=[],u=0,a=5e3,f=function(){},
l,c={init:function(n){
	var r={src:v(),align:"center",valign:"center",fade:0,loading:true,load:function(){},complete:function(){}
};
e.extend(r,e.vegas.defaults.background,n);
if(r.loading){
	p()
}
var s=t.clone();
s.css({
	position:"fixed",left:"0px",top:"0px"
}
).bind("load",function(){
	if(s==i){
		return
	}
	e(window).bind("load resize.vegas",function(e){
		h(s,r)
	}
	);
	if(i.is("img")){
		i.stop();s.hide().insertAfter(i).fadeIn(r.fade,function(){
			e(".vegas-background").not(this).remove();
			e("body").trigger("vegascomplete",[this,u-1]);
			r.complete.apply(s,[u-1])
		}
		)
	}
	else{
		s.hide().prependTo("body").fadeIn(r.fade,function(){
			e("body").trigger("vegascomplete",[this,u-1]);
			r.complete.apply(this,[u-1])
		}
		)
	}
	i=s;
	h(i,r);
	if(r.loading){
		d()}e("body").trigger("vegasload",[i.get(0),u-1]);
		r.load.apply(i.get(0),[u-1]);
		if(u){
			e("body").trigger("vegaswalk",[i.get(0),u-1]);
			r.walk.apply(i.get(0),[u-1])}}).attr("src",r.src);
return e.vegas
}
,destroy:function(t){
	if(!t||t=="background"){
		e(".vegas-background, .vegas-loading").remove();
		e(window).unbind("resize.vegas");
		i=e()}if(t=="overlay"){
			e(".vegas-overlay").remove()
		}
		return e.vegas
	}
	,overlay:function(t){var r={src:null,opacity:null};
	e.extend(r,e.vegas.defaults.overlay,t);
	n.remove();
	n.css({margin:"0",padding:"0",position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"
}
);
	if(r.src){n.css("backgroundImage","url("+r.src+")")
}
if(r.opacity){
	n.css("opacity",r.opacity)
}
n.prependTo("body");
return e.vegas}
,slideshow:function(t,n){
	var r={
		step:u,delay:a,preload:false,backgrounds:o,walk:f
	};
	e.extend(r,e.vegas.defaults.slideshow,t);
	if(r.backgrounds!=o){
		if(!t.step){r.step=0}
			if(!t.walk){
				r.walk=function(){}
			}
			if(r.preload){e.vegas("preload",r.backgrounds)
		}
}
o=r.backgrounds;
a=r.delay;
u=r.step;
f=r.walk;
clearInterval(l);
if(!o.length){return e.vegas
}
var c=function()
{
	if(u<0){u=o.length-1
	}
	if(u>=o.length||!o[u-1]){u=0
	}
	var t=o[u++];
	t.walk=r.walk;
	if(typeof t.fade=="undefined")
		{
			t.fade=r.fade}if(t.fade>r.delay){
				t.fade=r.delay}e.vegas(t)};c();
				if(!n){s=false;e("body").trigger("vegasstart",[i.get(0),u-1])
			}
			if(!s){l=setInterval(c,r.delay)
			}
			return e.vegas
		},
		next:function(){
			var t=u;
			if(u){
				e.vegas("slideshow",{step:u},true);
			e("body").trigger("vegasnext",[i.get(0),u-1,t-1])}return e.vegas},previous:function(){var t=u;if(u){e.vegas("slideshow",{step:u-2},true);
			e("body").trigger("vegasprevious",[i.get(0),u-1,t-1])}return e.vegas},jump:function(t){var n=u;if(u){e.vegas("slideshow",{step:t},true);e("body").trigger("vegasjump",[i.get(0),u-1,n-1])}return e.vegas},stop:function(){var t=u;u=0;s=null;clearInterval(l);e("body").trigger("vegasstop",[i.get(0),t-1]);return e.vegas},pause:function(){s=true;clearInterval(l);e("body").trigger("vegaspause",[i.get(0),u-1]);return e.vegas},get:function(e)
	{if(e==null||e=="background"){return i.get(0)}
	if(e=="overlay"){return n.get(0)}if(e=="step"){return u-1}if(e=="paused"){return s}},preload:function(t){var n=[];for(var r in t){if(t[r].src)
		{var i=document.createElement("img");
		i.src=t[r].src;n.push(i)}}return e.vegas}};
		e.vegas=function(t){
			if(c[t]){return c[t].apply(this,Array.prototype.slice.call(arguments,1))
			}
			else if(typeof t==="object"||!t)
				{
					return c.init.apply(this,arguments)}
					else
						{e.error("Method "+t+" does not exist")}};
		e.vegas.defaults={background:{},slideshow:{},overlay:{}}})(jQuery)


