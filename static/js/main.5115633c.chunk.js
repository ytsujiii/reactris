(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{25:function(A,n,e){},26:function(A,n,e){"use strict";e.r(n);var o,t=e(0),c=e.n(t),r=e(11),g=e.n(r),i=e(33),u=e(9),a=e.n(u),I=e(12),B=e(3),C=e(1),E=e(4),R=e(13),d=e(14);!function(A){A[A.rotateLeft=0]="rotateLeft",A[A.rotateRight=1]="rotateRight",A[A.moveLeft=2]="moveLeft",A[A.moveRight=3]="moveRight",A[A.drop=4]="drop",A[A.hardDrop=5]="hardDrop"}(o||(o={}));var h,b,Q=function(A){return{type:A,rotation:0,coord:w[A]}};!function(A){A[A.i=0]="i",A[A.o=1]="o",A[A.t=2]="t",A[A.s=3]="s",A[A.z=4]="z",A[A.j=5]="j",A[A.l=6]="l"}(h||(h={})),function(A){A[A.i=0]="i",A[A.o=1]="o",A[A.t=2]="t",A[A.s=3]="s",A[A.z=4]="z",A[A.j=5]="j",A[A.l=6]="l",A[A.none=7]="none",A[A.shadow=8]="shadow"}(b||(b={}));var l=function(){function A(n){var e=n.y,o=n.x;Object(R.a)(this,A),this.y=void 0,this.x=void 0,this.y=e,this.x=o}return Object(d.a)(A,[{key:"move",value:function(n){var e=n.dy,o=n.dx;return new A({y:e?this.y+e:this.y,x:o?this.x+o:this.x})}},{key:"left",value:function(){return this.move({dx:-1})}},{key:"right",value:function(){return this.move({dx:1})}},{key:"up",value:function(){return this.move({dy:-1})}},{key:"down",value:function(){return this.move({dy:1})}}]),A}(),w=[new l({y:0,x:3}),new l({y:1,x:4}),new l({y:1,x:3}),new l({y:1,x:3}),new l({y:1,x:3}),new l({y:1,x:3}),new l({y:1,x:3})],m=function(A,n){return s[A][n]},j=function(A,n){return s[A][n].filter((function(A){return A.some((function(A){return A!==b.none}))}))},s=[[[[b.none,b.none,b.none,b.none],[b.i,b.i,b.i,b.i],[b.none,b.none,b.none,b.none],[b.none,b.none,b.none,b.none]],[[b.none,b.none,b.i,b.none],[b.none,b.none,b.i,b.none],[b.none,b.none,b.i,b.none],[b.none,b.none,b.i,b.none]],[[b.none,b.none,b.none,b.none],[b.none,b.none,b.none,b.none],[b.i,b.i,b.i,b.i],[b.none,b.none,b.none,b.none]],[[b.none,b.i,b.none,b.none],[b.none,b.i,b.none,b.none],[b.none,b.i,b.none,b.none],[b.none,b.i,b.none,b.none]]],[[[b.o,b.o],[b.o,b.o]],[[b.o,b.o],[b.o,b.o]],[[b.o,b.o],[b.o,b.o]],[[b.o,b.o],[b.o,b.o]]],[[[b.none,b.t,b.none],[b.t,b.t,b.t],[b.none,b.none,b.none]],[[b.none,b.t,b.none],[b.none,b.t,b.t],[b.none,b.t,b.none]],[[b.none,b.none,b.none],[b.t,b.t,b.t],[b.none,b.t,b.none]],[[b.none,b.t,b.none],[b.t,b.t,b.none],[b.none,b.t,b.none]]],[[[b.none,b.s,b.s],[b.s,b.s,b.none],[b.none,b.none,b.none]],[[b.none,b.s,b.none],[b.none,b.s,b.s],[b.none,b.none,b.s]],[[b.none,b.none,b.none],[b.none,b.s,b.s],[b.s,b.s,b.none]],[[b.s,b.none,b.none],[b.s,b.s,b.none],[b.none,b.s,b.none]]],[[[b.z,b.z,b.none],[b.none,b.z,b.z],[b.none,b.none,b.none]],[[b.none,b.none,b.z],[b.none,b.z,b.z],[b.none,b.z,b.none]],[[b.none,b.none,b.none],[b.z,b.z,b.none],[b.none,b.z,b.z]],[[b.none,b.z,b.none],[b.z,b.z,b.none],[b.z,b.none,b.none]]],[[[b.j,b.none,b.none],[b.j,b.j,b.j],[b.none,b.none,b.none]],[[b.none,b.j,b.j],[b.none,b.j,b.none],[b.none,b.j,b.none]],[[b.none,b.none,b.none],[b.j,b.j,b.j],[b.none,b.none,b.j]],[[b.none,b.j,b.none],[b.none,b.j,b.none],[b.j,b.j,b.none]]],[[[b.none,b.none,b.l],[b.l,b.l,b.l],[b.none,b.none,b.none]],[[b.none,b.l,b.none],[b.none,b.l,b.none],[b.none,b.l,b.l]],[[b.none,b.none,b.none],[b.l,b.l,b.l],[b.l,b.none,b.none]],[[b.l,b.l,b.none],[b.none,b.l,b.none],[b.none,b.l,b.none]]]],k=function(A,n,e){var o,t,c,r,g=(A.rotation+n+4)%4,i=Object(C.a)(Object(C.a)({},A),{},{rotation:g});if(0===e)return i;if(A.type===h.i)switch(o=0===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:2*-n})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.right()}):2===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:-n})}):Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.left()}),t=0===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:n})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.left()}):2===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:2*n})}):Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.right()}),e){case 1:return o;case 2:return t;case 3:var u=-1===n?2:1;return 0===g||2===g?1===A.rotation?Object(C.a)(Object(C.a)({},i),{},{coord:o.coord.move({dy:-u})}):Object(C.a)(Object(C.a)({},i),{},{coord:t.coord.move({dy:u})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:o.coord.move({dy:u})}):Object(C.a)(Object(C.a)({},i),{},{coord:o.coord.move({dy:-u})});case 4:var a=1===n?2:1;return 0===g||2===g?1===A.rotation?Object(C.a)(Object(C.a)({},i),{},{coord:t.coord.move({dy:a})}):Object(C.a)(Object(C.a)({},i),{},{coord:o.coord.move({dy:-a})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:t.coord.move({dy:-a})}):Object(C.a)(Object(C.a)({},i),{},{coord:t.coord.move({dy:a})})}else switch(c=0===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:-n})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.left()}):2===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.move({dx:n})}):Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.right()}),r=1===g||3===g?Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.down().down()}):Object(C.a)(Object(C.a)({},i),{},{coord:A.coord.up().up()}),e){case 1:return c;case 2:return 1===g||3===g?Object(C.a)(Object(C.a)({},i),{},{coord:c.coord.up()}):Object(C.a)(Object(C.a)({},i),{},{coord:c.coord.down()});case 3:return r;case 4:return 0===g||2===g?Object(C.a)(Object(C.a)({},i),{},{coord:r.coord.move({dx:-n})}):1===g?Object(C.a)(Object(C.a)({},i),{},{coord:r.coord.left()}):Object(C.a)(Object(C.a)({},i),{},{coord:r.coord.right()})}},U=function(){for(var A=[h.i,h.o,h.t,h.s,h.z,h.j,h.l],n=A.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),o=A[n];A[n]=A[e],A[e]=o}return A};var p=Array.from(Array(20),(function(){return Array.from(Array(10),(function(){return b.none}))}));function O(A,n){var e=function(){var A=Object(t.useRef)(),n=Object(t.useRef)(),e=Object(t.useCallback)((function(){if(A.current)return Q(A.current.shift())}),[]),o=Object(t.useRef)();Object(t.useEffect)((function(){o.current||(A.current=U(),n.current=U(),o.current=e())}),[]);var c=Object(t.useCallback)((function(){A.current&&(A.current.length<=0?(A.current=n.current,n.current=U(),o.current=e()):o.current=e())}),[]);return[o,c,A.current,n.current]}(),o=Object(B.a)(e,4),c=o[0],r=o[1],g=o[2],i=o[3],u=Object(t.useRef)(),a=Object(t.useRef)(p),I=Object(t.useRef)(),R=Object(t.useRef)(!1),d=Object(t.useRef)();Object(t.useEffect)((function(){c.current&&(console.info("Initializing game"),a.current=G(c.current),h(),A())}),[]);var h=function(){if(c.current&&a.current){for(var A=Object(C.a)({},c.current);s(A);)A=Object(C.a)(Object(C.a)({},A),{},{coord:A.coord.down()});d.current=A}},w=Object(t.useCallback)((function(A,n){if(!c.current||!a.current)return!1;var e=v(a.current),o=m(c.current.type,c.current.rotation),t=m(c.current.type,n);o.map((function(A,n){A.map((function(A,o){c.current&&D(c.current.coord.move({dy:n,dx:o}))&&A!==b.none&&(e[c.current.coord.y+n][c.current.coord.x+o]=b.none)}))}));var r=!1;return t.map((function(n,o){n.map((function(n,t){n!==b.none&&(D(A.move({dy:o,dx:t}))&&e[A.y+o][A.x+t]===b.none?e[A.y+o][A.x+t]=n:r=!0)}))})),!r&&(c.current=Object(C.a)(Object(C.a)({},c.current),{},{coord:A,rotation:n}),a.current=e,h(),!0)}),[]),j=function(){c.current&&(!function(){var A=Array.from(Array(10),(function(){return b.none})),n=a.current.filter((function(A){for(var n=0;n<A.length;n++)if(A[n]===b.none)return!0;return!1}));a.current=[].concat(Object(E.a)(Array.from(Array(20-n.length),(function(){return A}))),Object(E.a)(n))}(),r(),w(c.current.coord,c.current.rotation),R.current=!1,n())},s=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.current,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.current;if(!A||!n)return!1;var e=A.type,o=A.rotation,t=A.coord,r=m(e,o),g=v(n);return r.slice().reverse().every((function(A,n){var e=t.y+r.length-n-1;return A.every((function(A,n){var o=t.x+n;return A===b.none||!!D(new l({y:e+1,x:o}))&&(g[e+1][o]===b.none&&(g[e][o]=b.none,!0))}))}))},O=Object(t.useCallback)((function(){c.current&&(window.clearTimeout(I.current),I.current=void 0,w(c.current.coord.left(),c.current.rotation),s()||(I.current=window.setTimeout((function(){j(),I.current=void 0}),500)),A())}),[w]),Y=Object(t.useCallback)((function(){c.current&&(window.clearTimeout(I.current),I.current=void 0,w(c.current.coord.right(),c.current.rotation),s()||(I.current=window.setTimeout((function(){j(),I.current=void 0}),500)),A())}),[w]),y=Object(t.useCallback)((function(){!I.current&&c.current&&(w(c.current.coord.down(),c.current.rotation),s()||I.current||(I.current=window.setTimeout((function(){j(),I.current=void 0}),500)),A())}),[w]),S=Object(t.useCallback)((function(A){if(c.current){window.clearTimeout(I.current),I.current=void 0;for(var n=0;n<=4;n++){var e=k(c.current,A,n);if(w(e.coord,e.rotation))return}s()||(I.current=window.setTimeout((function(){j(),I.current=void 0}),500))}}),[w]),M=Object(t.useCallback)((function(){S(-1),A()}),[S]),K=Object(t.useCallback)((function(){S(1),A()}),[S]),G=Object(t.useCallback)((function(A){var n=m(A.type,A.rotation),e=Array.from(Array(20)).map((function(){return Array.from(Array(10)).map((function(){return b.none}))}));return n.map((function(n,o){n.map((function(n,t){e[A.coord.y+o][A.coord.x+t]=n}))})),e}),[]),v=Object(t.useCallback)((function(A){return A.map((function(A){return A.map((function(A){return A}))}))}),[]),D=function(A){return 0<=A.x&&0<=A.y&&A.x<10&&A.y<20};return[u,a,d,O,Y,y,function(){if(c.current){for(window.clearTimeout(I.current);s();)w(c.current.coord.down(),c.current.rotation);j(),A()}},M,K,function(){if(c.current&&!R.current){var n=v(a.current);if(m(c.current.type,c.current.rotation).map((function(A,e){A.map((function(A,o){c.current&&D(c.current.coord.move({dy:e,dx:o}))&&A!==b.none&&(n[c.current.coord.y+e][c.current.coord.x+o]=b.none)}))})),u.current){var e=Q(u.current.type);u.current=Q(c.current.type),c.current=e}else u.current=Q(c.current.type),r();m(c.current.type,c.current.rotation).map((function(A,e){A.map((function(A,o){A!==b.none&&c.current&&(n[c.current.coord.y+e][c.current.coord.x+o]=A)}))})),a.current=n,R.current=!0,h(),A()}},g,i]}var Y=e(15),y=e(2),S=Object(i.a)({square:{width:"24px",height:"24px",backgroundSize:"100%"},i:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAhKADAAQAAAABAAAAhAAAAADc26tmAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAEZ0lEQVR4Ae2ZS04bQRQAn40XsGPBgkPkAkicLSg5ExIcgBskCxaJEBvEDhRAGIlPeJgQAf7M9Izlsqd6ESngble/KtnI7n05PX3a296O9X4/XN2ewK+7u+j/vL2Nb+fnMXx87PY0On77jGHv7CxeXhaMots1/H6N4c/zi8Lb+4RRdDOKjOHr8ytDxpDrLYj8T0bx3bePHEUn1scY8tLvgsgf/DCKHMPKr3Ex5KU/BZE/NIqcwuquSTHkjccGkb8wipzC6q1pMeRtJwaRvzSKnMLqrFkx5E2nBpEP+BfFnZ9T5DiWdlWJIS83M4h8UEaRH14ZRU5j+VbVGPJmlYLIBxpFTmH5Vp0Y8naVg8gHG0VOYXlW3RjyZrWCyA1GkVPgr5IY8la1g8hNRpFT4K7SGPJGRUHkxowiP+b2D82cBmc1iSFv0Yvj46cm11nf3IzBxkaTI9zb4gSGFxdxPxwWnzgo3vm68eWpnxo11RTB/S1OoPgto0UGjwJNwCBAMggoBkGwAGIwCJAMAopBECyAGAwCJIOAYhAECyAGgwDJIKAYBMECiMEgQDIIKAZBsABiMAiQDAKKQRAsgBgMAiSDgGIQBAsgBoMAySCgGATBAojBIEAyCCgGQbAAYjAIkAwCikEQLIAYDAIkg4BiEAQLIAaDAMkgoBgEwQKIwSBAMggoBkGwAGIwCJAMAopBECyAGAwCJIOAYhAECyAGgwDJIKAYBMECiMEgQDIIKAZBsABiMAiQDAKKQRAsgBgMAiSDgGIQBAsgBoMAySCgGATBAojBIEAyCCgGQbAAYjAIkAwCikEQLIAYDAIkg4BiEAQLIAaDAMkgoBgEwQKIwSBAMggoBkGwAGIwCJAMAopBECyAGAwCJIOAYhAECyAGgwDJIKAYBMECiMEgQDIIKAZBsABiMAiQDAKKQRAsgBgMAiSDgGIQBAsgBoMAySCgGATBAojBIEAyCCgGQbAAYjAIkAwCikEQLIAYDAIkg4BiEAQLIAaDAMkgoBgEwQKIwSBAMggoBkGwAGIwCJAMAopBECyAGAwCJIOAYhAECyAGgwDJIKAYBMECiMEgQDIIKAZBsABiMAiQDAKKQRAsgBgMAiSDgGIQBAsgBoMAySCgGATBAojBIEAyCCgGQbAAYjAIkAwCikEQLIAYDAIkg4BiEAQLIAaDAMkgoBgEwQKIwSBAMggog0YQV1cR+/sR9/eNjnFzixPY2orY2YlYWys6tDyIjOHwMOLmpuiJ3TSnCVxeRjw8ROzuFkVR9pZhDHOy2dKxJycRR0ejMGoeWT8IY6g54gU9vDCKekEYw4LsFj5tQRTVgzCGQisL3lYzimpBGMOCrTZ8+hpRzA7CGBragGyvGMX0IIwBYrMljApRTA7CGFqyADtmRhTjgzAGmMWWcaZE8TkIY2h5+tDjJkTxPghjgNqbE9aYKP4HcX3tdxNzmjv62A9RjL7cyhgODvyiCm1ujnAZRa7nL8QGYQyjYXT934yi14u/fPCdGSg8ngwAAAAASUVORK5CYII=",")")},o:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},t:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},s:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},z:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},j:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAhKADAAQAAAABAAAAhAAAAADc26tmAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAAEcElEQVR4Ae2ZzW4SURhALw2JJMaF79D3cOtTtWlfoI+jC5f6BO2iizbuTBcumoopJFiczwpS5GfmDgMH5twEQ+nc4dzvnARSOxcX/fHx8avkavcEBoOndHZ2l45OT7+lm5thu6fR8tNPYri6ekxHDw9PKaK4vTWKNnYxG0Oc/yj+iShOTowiZtGmNR9DnP1PEPHEKGIK7VkRw/n5XYqPidk1DSJeNIrZ0Rzu80kMl5cvY4gTvwgiXjCKmMLhrlUxxKn/CyJeNIqYwuGtdTHEiRcGEb8wipjC4awyMcRplwYRvzSKmML+r+Hw+Qvkou8M86dbGURcbBTzI9uvnyOG+AtkmRjiZGuDiIuMIqawf6tqDHHCUkHEhUYRU9iflRNDnK50EHGxUcQU+Cs3hjhZpSBig1HEFLirTgxxqspBxCajiCnwVsQQf44u+wVy0Qk6KV2PF/2izGvdbi/1em/LXOo1W5jAaPSYBoP7Wu/UrbN7NEqp38/uqc5bu7ehCWR9ZDTE4m0BEzAIgAQSgkGQbABYDAIggYRgECQbABaDAEggIRgEyQaAxSAAEkgIBkGyAWAxCIAEEoJBkGwAWAwCIIGEYBAkGwAWgwBIICEYBMkGgMUgABJICAZBsgFgMQiABBKCQZBsAFgMAiCBhGAQJBsAFoMASCAhGATJBoDFIAASSAgGQbIBYDEIgAQSgkGQbABYDAIggYRgECQbABaDAEggIRgEyQaAxSAAEkgIBkGyAWAxCIAEEoJBkGwAWAwCIIGEYBAkGwAWgwBIICEYBMkGgMUgABJICAZBsgFgMQiABBKCQZBsAFgMAiCBhGAQJBsAFoMASCAhGATJBoDFIAASSAgGQbIBYDEIgAQSgkGQbABYDAIggYRgECQbABaDAEggIRgEyQaAxSAAEkgIBkGyAWAxCIAEEoJBkGwAWAwCIIGEYBAkGwAWgwBIICEYBMkGgMUgABJICAZBsgFgMQiABBKCQZBsAFgMAiCBhGAQJBsAFoMASCAhGATJBoDFIAASSAgGQbIBYDEIgAQSgkGQbABYDAIggYRgECQbABaDAEggIRgEyQaAxSAAEkgIBkGyAWAxCIAEEoJBkGwAWAwCIIGEYBAkGwAWgwBIICEYBMkGgMUgABJICAZBsgFgMQiABBKCQZBsAFgMAiCBhGAQJBsAFoMASCAhGATJBoDFIAASSAgGQbIBYDEIgAQSQjcf5lex9VPx+J5/C3dueAKh813xeJN9305K1+PquyOGz8Xja/Wt7mh4Aq+L+78vHnlRZHxkGEPDRmve/mex/2Px+JF1n4pBGEPWlLe+KT+KCkEYw9a91nrDvChKBmEMtdzsbHP1KEoEYQw787mRN64WxZogjGEjTnZ+k/JRrAjCGHbucaMA5aJYEoQxbNQF5mbro1gQhDFg/DUCsjqKuSCMoREHuJsuj2ImCGPAeWsUaHEUf4MwhkZnj735JIr+lLAIwhim02jlk4jiQ/F4jqII4kvxg/9r2coWpof+F8Vvzk9DcD9mczAAAAAASUVORK5CYII=",")")},l:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},shadow:{backgroundImage:"url(".concat("data:image/png;base64,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",")")}});function M(A){var n=S(),e=A.state,o=Object(t.useCallback)((function(A){switch(A){case b.i:return n.i;case b.o:return n.o;case b.t:return n.t;case b.s:return n.s;case b.z:return n.z;case b.j:return n.j;case b.l:return n.l;case b.shadow:return n.shadow;default:return null}}),[]);return Object(y.jsx)("div",{className:Object(Y.a)(n.square,o(e)||"")})}var K=Object(i.a)({root:{display:"inline-block",height:"fit-content",borderLeft:"1px solid white",borderRight:"1px solid white",borderBottom:"1px solid white"},row:{display:"flex"}});function G(A){var n=K(),e=A.squares,o=A.minoShadow,t=e.map((function(A){return A.map((function(A){return A}))}));o&&m(o.type,o.rotation).map((function(A,n){A.map((function(A,c){A!==b.none&&e[o.coord.y+n][o.coord.x+c]===b.none&&(t[o.coord.y+n][o.coord.x+c]=b.shadow)}))}));return Object(y.jsx)("div",{className:n.root,children:t.map((function(A,e){return Object(y.jsx)("div",{className:n.row,children:A.map((function(A,n){return Object(y.jsx)(M,{state:A},n)}))},e)}))})}var v=Object(i.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"1px solid white",height:100,width:120,overflow:"visible",marginRight:10},row:{display:"flex"},label:{position:"absolute",top:35,color:"white",fontWeight:"bold",fontSize:21,backgroundColor:"black",padding:"0 5px 0 7px",letterSpacing:2}});function D(A){var n=A.holdingMino,e=v(),o=n?j(n.type,n.rotation):[[b.none]];return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)("div",{className:e.label,children:"HOLD"}),!o||o.map((function(A,n){return Object(y.jsx)("div",{className:e.row,children:A.map((function(A,n){return Object(y.jsx)(M,{state:A},n)}))},n)}))]})}var F=Object(i.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",border:"1px solid white",marginLeft:10,width:120,height:400,padding:"30px 0"},label:{position:"absolute",top:35,color:"white",fontWeight:"bold",fontSize:21,backgroundColor:"black",padding:"0 5px 0 7px",letterSpacing:2},row:{display:"flex"}});function f(A){var n=A.minoBag,e=A.nextMinoBag,o=F();if(n&&e){var t=[].concat(Object(E.a)(n),Object(E.a)(e)).slice(0,5).map((function(A){return j(A,0)}));return Object(y.jsxs)("div",{className:o.root,children:[Object(y.jsx)("div",{className:o.label,children:"NEXT"}),t.map((function(A,n){return Object(y.jsx)("div",{children:A.map((function(A,n){return Object(y.jsx)("div",{className:o.row,children:A.map((function(A,n){return Object(y.jsx)(M,{state:A},n)}))},n)}))},n)}))]})}return Object(y.jsx)(y.Fragment,{})}var J=Object(i.a)({root:{display:"flex"}});function x(){var A=Object(t.useReducer)((function(A){return A+1}),0),n=Object(B.a)(A,2),e=n[0],o=n[1],c=Object(t.useReducer)((function(A){return A+1}),0),r=Object(B.a)(c,2),g=r[0],i=r[1],u=Object(t.useState)(!1),C=Object(B.a)(u,2),E=C[0],R=C[1],d=Object(t.useState)(!1),h=Object(B.a)(d,2),b=h[0],Q=h[1],l=Object(t.useState)(!1),w=Object(B.a)(l,2),m=w[0],j=w[1],s=Object(t.useRef)(),k=Object(t.useRef)(),U=O(i,o),p=Object(B.a)(U,12),Y=p[0],S=p[1],M=p[2],K=p[3],v=p[4],F=p[5],x=p[6],W=p[7],H=p[8],L=p[9],V=p[10],Z=p[11],T=Object(t.useCallback)(function(){var A=Object(I.a)(a.a.mark((function A(n){return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(!n.repeat){A.next=2;break}return A.abrupt("return");case 2:A.t0=n.key,A.next="z"===A.t0?5:"x"===A.t0?7:"ArrowUp"===A.t0?9:" "===A.t0?11:"ArrowDown"===A.t0?13:"ArrowLeft"===A.t0?15:"ArrowRight"===A.t0?17:19;break;case 5:return W(),A.abrupt("break",20);case 7:return H(),A.abrupt("break",20);case 9:return x(),A.abrupt("break",20);case 11:return L(),A.abrupt("break",20);case 13:return R(!0),A.abrupt("break",20);case 15:return Q(!0),A.abrupt("break",20);case 17:return j(!0),A.abrupt("break",20);case 19:return A.abrupt("break",20);case 20:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),[W,H,x,L]),z=Object(t.useCallback)((function(A){switch(A.key){case"ArrowDown":R(!1);break;case"ArrowLeft":Q(!1);break;case"ArrowRight":j(!1)}}),[]);Object(t.useEffect)((function(){if(E){var A=setInterval((function(){F()}),50);return function(){return clearInterval(A)}}}),[E]),Object(t.useEffect)((function(){if(b)return K(),s.current=window.setTimeout((function(){k.current=window.setInterval((function(){return K()}),25)}),100),function(){window.clearTimeout(s.current),window.clearInterval(k.current)}}),[b]),Object(t.useEffect)((function(){if(m)return v(),s.current=window.setTimeout((function(){k.current=window.setInterval((function(){return v()}),25)}),100),function(){window.clearTimeout(s.current),window.clearInterval(k.current)}}),[m]),Object(t.useEffect)((function(){if(!E){var A=setInterval((function(){console.debug("time elapsed"),F()}),1e3);return function(){return clearInterval(A)}}}),[F,e,E]),Object(t.useEffect)((function(){return document.addEventListener("keydown",T),document.addEventListener("keyup",z),function(){document.removeEventListener("keydown",T),document.removeEventListener("keyup",z)}}),[T,z]);var X=J();return Object(y.jsxs)("div",{className:X.root,children:[Object(y.jsx)(D,{holdingMino:Y.current}),Object(y.jsx)(G,{boardState:g,squares:S.current,minoShadow:M.current}),Object(y.jsx)(f,{minoBag:V,nextMinoBag:Z})]})}var W=Object(i.a)({root:{paddingTop:50,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",backgroundColor:"black"}});var H=function(){var A=W();return Object(y.jsx)("div",{className:A.root,children:Object(y.jsx)(x,{})})};e(25);g.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5115633c.chunk.js.map