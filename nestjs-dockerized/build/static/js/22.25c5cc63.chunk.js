"use strict";(self.webpackChunkjuleb_task_pp=self.webpackChunkjuleb_task_pp||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var r=n(1811),u=n(9507),i=n(7909),a=function(t,e,n,a,c){var o=t.ownerDocument.defaultView,s=(0,u.i)(t),f=function(t){return s?-t.deltaX:t.deltaX};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;a(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,u=e/n,i=function(t){return s?-t.velocityX:t.velocityX}(t),a=i>=0&&(i>.2||e>n/2),l=(a?1-u:u)*n,h=0;if(l>5){var d=l/Math.abs(i);h=Math.min(d,540)}c(a,u<=0?.01:(0,r.j)(0,u,.9999),h)}})}}}]);
//# sourceMappingURL=22.25c5cc63.chunk.js.map