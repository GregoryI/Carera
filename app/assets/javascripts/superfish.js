(function(e){e.fn.superfish=function(t){var n=e.fn.superfish,r=n.c,i=e('<span class="'+r.arrowClass+'"> &#187;</span>'),s=function(){var t=e(this),n=u(t);clearTimeout(n.sfTimer);t.showSuperfishUl().siblings().hideSuperfishUl()},o=function(t){var r=e(this),i=u(r),o=n.op;var a=function(){o.retainPath=e.inArray(r[0],o.$path)>-1;r.hideSuperfishUl();if(o.$path.length&&r.parents("li."+o.hoverClass).length<1){o.onIdle.call();e.proxy(s,o.$path,t)()}};if(t.type==="click"){a()}else{clearTimeout(i.sfTimer);i.sfTimer=setTimeout(a,o.delay)}},u=function(t){if(t.hasClass(r.menuClass)){e.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent")}var i=t.closest("."+r.menuClass)[0];n.op=n.o[i.serial];return i},a=function(e){e.css("ms-touch-action","none")},f=function(t){var r="li:has(ul)";if(!n.op.useClick){if(e.fn.hoverIntent&&!n.op.disableHI){t.hoverIntent(s,o,r)}else{t.on("mouseenter",r,s).on("mouseleave",r,o)}}var i="MSPointerDown";if(!navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)){i+=" touchstart"}t.on("focusin","li",s).on("focusout","li",o).on("click","a",c).on(i,"a",l)},l=function(t){var n=e(this),r=n.siblings("ul");if(r.length>0&&!r.is(":visible")){n.data("follow",false);if(t.type==="MSPointerDown"){n.trigger("focus");return false}}},c=function(t){var r=e(this),i=r.siblings("ul"),u=r.data("follow")===false?false:true;if(i.length&&(n.op.useClick||!u)){t.preventDefault();if(!i.is(":visible")){e.proxy(s,r.parent("li"))()}else if(n.op.useClick&&u){e.proxy(o,r.parent("li"),t)()}}},h=function(t,n){if(n.autoArrows){t.children("a").each(function(){p(e(this))})}},p=function(e){e.addClass(r.anchorClass).append(i.clone())};return this.addClass(r.menuClass).each(function(){var i=this.serial=n.o.length;var s=e.extend({},n.defaults,t);var o=e(this);var u=o.find("li:has(ul)");s.$path=o.find("li."+s.pathClass).slice(0,s.pathLevels).each(function(){e(this).addClass(s.hoverClass+" "+r.bcClass).filter("li:has(ul)").removeClass(s.pathClass)});n.o[i]=n.op=s;h(u,s);a(o);f(o);u.not("."+r.bcClass).children("ul").show().hide();s.onInit.call(this)})};var t=e.fn.superfish;t.o=[];t.op={};t.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator"};t.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",autoArrows:true,disableHI:false,useClick:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){},onIdle:function(){}};e.fn.extend({hideSuperfishUl:function(){var n=t.op,r=this,i=n.retainPath===true?n.$path:"";n.retainPath=false;var s=e("li."+n.hoverClass,this).add(this).not(i).find(">ul").stop().animate(n.animationOut,n.speedOut,function(){s=e(this);s.parent().removeClass(n.hoverClass);n.onHide.call(s);if(t.op.useClick){r.children("a").data("follow",false)}});return this},showSuperfishUl:function(){var e=t.op,n=this,r=this.find(">ul:hidden");r.parent("li").addClass(e.hoverClass);e.onBeforeShow.call(r);r.stop().animate(e.animation,e.speed,function(){e.onShow.call(r);n.children("a").data("follow",true)});return this}})})(jQuery)