(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[66967],{66967:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(98840),a=n(31402),i=(n(36221),function(e,t,n,i,c){var o=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,a=t/n,i=e.velocityX,u=n/2,s=i>=0&&(i>.2||e.deltaX>u),d=(s?1-a:a)*n,f=0;if(d>5){var h=d/Math.abs(i);f=Math.min(h,540)}c(s,a<=0?.01:(0,r.j)(0,a,.9999),f)}})})}}]);