/*!
 * History API JavaScript Library v4.1.13
 *
 * Support: IE8+, FF3+, Opera 9+, Safari, Chrome and other
 *
 * Copyright 2011-2014, Dmitrii Pakhtinov ( spb.piksel@gmail.com )
 *
 * http://spb-piksel.ru/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Update: 2014-06-29 20:56
 */
(function(K){"function"===typeof define&&define.amd?define("object"!==typeof document||"loading"!==document.readyState?[]:"html5-history-api",K):K()})(function(){var h=!0,k=null,n=!1;function L(a,b){var c=e.history!==q;c&&(e.history=q);a.apply(q,b);c&&(e.history=i)}function F(){}function l(a,b,c){if(a!=k&&""!==a&&!b){var b=l(),d=g.getElementsByTagName("base")[0];!c&&d&&d.getAttribute("href")&&(d.href=d.href,b=l(d.href,k,h));c=b.d;d=b.h;a=""+a;a=/^(?:\w+\:)?\/\//.test(a)?0===a.indexOf("/")?d+a:a:d+"//"+b.g+(0===a.indexOf("/")?a:0===a.indexOf("?")?c+a:0===a.indexOf("#")?c+b.e+a:c.replace(/[^\/]+$/g,"")+a)}else if(a=b?a:f.href,!o||c)a=a.replace(/^[^#]*/,"")||"#",a=f.protocol.replace(/:.*$|$/,
":")+"//"+f.host+j.basepath+a.replace(RegExp("^#[/]?(?:"+j.type+")?"),"");M.href=a;var a=/(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/.exec(M.href),b=a[2]+(a[3]?":"+a[3]:""),c=a[4]||"/",d=a[5]||"",e="#"===a[6]?"":a[6]||"",i=c+d+e,N=c.replace(RegExp("^"+j.basepath,"i"),j.type)+d;return{b:a[1]+"//"+b+i,h:a[1],g:b,i:a[2],k:a[3]||"",d:c,e:d,a:e,c:i,j:N,f:N+e}}function Z(){var a;try{a=e.sessionStorage,a.setItem(y+"t","1"),a.removeItem(y+"t")}catch(b){a=
{getItem:function(a){a=g.cookie.split(a+"=");return 1<a.length&&a.pop().split(";").shift()||"null"},setItem:function(a){var b={};if(b[f.href]=i.state)g.cookie=a+"="+z.stringify(b)}}}try{m=z.parse(a.getItem(y))||{}}catch(c){m={}}p(s+"unload",function(){a.setItem(y,z.stringify(m))},n)}function A(a,b,c,d){var f=0;c||(c={set:F},f=1);var g=!c.set,i=!c.get,j={configurable:h,set:function(){g=1},get:function(){i=1}};try{v(a,b,j),a[b]=a[b],v(a,b,c)}catch(l){}if(!g||!i)if(a.__defineGetter__&&(a.__defineGetter__(b,
j.get),a.__defineSetter__(b,j.set),a[b]=a[b],c.get&&a.__defineGetter__(b,c.get),c.set&&a.__defineSetter__(b,c.set)),!g||!i){if(f)return n;if(a===e){try{var o=a[b];a[b]=k}catch(q){}if("execScript"in e)e.execScript("Public "+b,"VBScript"),e.execScript("var "+b+";","JavaScript");else try{v(a,b,{value:F})}catch(r){}a[b]=o}else try{try{var m=G.create(a);v(G.getPrototypeOf(m)===a?m:a,b,c);for(var p in a)"function"===typeof a[p]&&(m[p]=a[p].bind(a));try{d.call(m,m,a)}catch(s){}a=m}catch(t){v(a.constructor.prototype,
b,c)}}catch(u){return n}}return a}function $(a,b,c){c=c||{};a=a===O?f:a;c.set=c.set||function(c){a[b]=c};c.get=c.get||function(){return a[b]};return c}function B(a,b){var c=(""+("string"===typeof a?a:a.type)).replace(/^on/,""),d=t[c];if(d){b="string"===typeof a?b:a;if(b.target==k)for(var f=["target","currentTarget","srcElement","type"];a=f.pop();)b=A(b,a,{get:"type"===a?function(){return c}:function(){return e}});(("popstate"===c?e.onpopstate:e.onhashchange)||F).call(e,b);for(var f=0,g=d.length;f<
g;f++)d[f].call(e,b);return h}return aa(a,b)}function P(){var a=g.createEvent?g.createEvent("Event"):g.createEventObject();a.initEvent?a.initEvent("popstate",n,n):a.type="popstate";a.state=i.state;B(a)}function w(a,b,c,d){o?x=f.href:(0===r&&(r=2),b=l(b,2===r&&-1!==(""+b).indexOf("#")),b.c!==l().c&&(x=d,c?f.replace("#"+b.f):f.hash=b.f));!C&&a&&(m[f.href]=a);D=n}function Q(a){var b=x;x=f.href;if(b){R!==f.href&&P();var a=a||e.event,b=l(b,h),c=l();a.oldURL||(a.oldURL=b.b,a.newURL=c.b);b.a!==c.a&&B(a)}}
function S(a){setTimeout(function(){p("popstate",function(a){R=f.href;C||(a=A(a,"state",{get:function(){return i.state}}));B(a)},n)},0);!o&&a!==h&&"location"in i&&(T(E.hash),D&&(D=n,P()))}function ba(a){var a=a||e.event,b;a:{for(b=a.target||a.srcElement;b;){if("A"===b.nodeName)break a;b=b.parentNode}b=void 0}var c="defaultPrevented"in a?a.defaultPrevented:a.returnValue===n;b&&"A"===b.nodeName&&!c&&(c=l(),b=l(b.getAttribute("href",2)),c.b.split("#").shift()===b.b.split("#").shift()&&b.a&&(c.a!==b.a&&
(E.hash=b.a),T(b.a),a.preventDefault?a.preventDefault():a.returnValue=n))}function T(a){var b=g.getElementById(a=(a||"").replace(/^#/,""));b&&b.id===a&&"A"===b.nodeName&&(a=b.getBoundingClientRect(),e.scrollTo(H.scrollLeft||0,a.top+(H.scrollTop||0)-(H.clientTop||0)))}var e=("object"===typeof window?window:this)||{};if(!e.history||"emulate"in e.history)return e.history;var g=e.document,H=g.documentElement,G=e.Object,z=e.JSON,f=e.location,q=e.history,i=q,I=q.pushState,U=q.replaceState,o=!!I,C="state"in
q,v=G.defineProperty,E=A({},"t")?{}:g.createElement("a"),s="",J=e.addEventListener?"addEventListener":(s="on")&&"attachEvent",V=e.removeEventListener?"removeEventListener":"detachEvent",W=e.dispatchEvent?"dispatchEvent":"fireEvent",p=e[J],X=e[V],aa=e[W],j={basepath:"/",redirect:0,type:"/"},y="__historyAPI__",M=g.createElement("a"),x=f.href,R="",D=n,r=0,m={},t={},u=g.title,ca={onhashchange:k,onpopstate:k},Y={setup:function(a,b,c){j.basepath=(""+(a==k?j.basepath:a)).replace(/(?:^|\/)[^\/]*$/,"/");j.type=
b==k?j.type:b;j.redirect=c==k?j.redirect:!!c},redirect:function(a,b){i.setup(b,a);b=j.basepath;if(e.top==e.self){var c=l(k,n,h).c,d=f.pathname+f.search;o?(d=d.replace(/([^\/])$/,"$1/"),c!=b&&RegExp("^"+b+"$","i").test(d)&&f.replace(c)):d!=b&&(d=d.replace(/([^\/])\?/,"$1/?"),RegExp("^"+b,"i").test(d)&&f.replace(b+"#"+d.replace(RegExp("^"+b,"i"),j.type)+f.hash))}},pushState:function(a,b,c){var d=g.title;u!=k&&(g.title=u);I&&L(I,arguments);w(a,c);g.title=d;u=b},replaceState:function(a,b,c){var d=g.title;
u!=k&&(g.title=u);delete m[f.href];U&&L(U,arguments);w(a,c,h);g.title=d;u=b},location:{set:function(a){0===r&&(r=1);e.location=a},get:function(){0===r&&(r=1);return o?f:E}},state:{get:function(){return m[f.href]||k}}},O={assign:function(a){0===(""+a).indexOf("#")?w(k,a):f.assign(a)},reload:function(){f.reload()},replace:function(a){0===(""+a).indexOf("#")?w(k,a,h):f.replace(a)},toString:function(){return this.href},href:{get:function(){return l().b}},protocol:k,host:k,hostname:k,port:k,pathname:{get:function(){return l().d}},
search:{get:function(){return l().e}},hash:{set:function(a){w(k,(""+a).replace(/^(#|)/,"#"),n,x)},get:function(){return l().a}}};if(function(){var a=g.getElementsByTagName("script"),a=(a[a.length-1]||{}).src||"";(-1!==a.indexOf("?")?a.split("?").pop():"").replace(/(\w+)(?:=([^&]*))?/g,function(a,b,c){j[b]=(c||"").replace(/^(0|false)$/,"")});p(s+"hashchange",Q,n);var b=[O,E,ca,e,Y,i];C&&delete Y.state;for(var c=0;c<b.length;c+=2)for(var d in b[c])if(b[c].hasOwnProperty(d))if("function"===typeof b[c][d])b[c+
1][d]=b[c][d];else{a=$(b[c],d,b[c][d]);if(!A(b[c+1],d,a,function(a,d){if(d===i)e.history=i=b[c+1]=a}))return X(s+"hashchange",Q,n),n;b[c+1]===e&&(t[d]=t[d.substr(2)]=[])}i.setup();j.redirect&&i.redirect();!C&&z&&Z();if(!o)g[J](s+"click",ba,n);"complete"===g.readyState?S(h):(!o&&l().c!==j.basepath&&(D=h),p(s+"load",S,n));return h}())return i.emulate=!o,e[J]=function(a,b,c){a in t?t[a].push(b):3<arguments.length?p(a,b,c,arguments[3]):p(a,b,c)},e[V]=function(a,b,c){var d=t[a];if(d)for(a=d.length;a--;){if(d[a]===
b){d.splice(a,1);break}}else X(a,b,c)},e[W]=B,i});


/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

  // Enable strict mode
  "use strict";

  w.picturefill = function() {
    var ps = w.document.getElementsByTagName( "span" );

    // Loop the pictures
    for( var i = 0, il = ps.length; i < il; i++ ){
      if( ps[ i ].getAttribute( "data-picture" ) !== null ){

        var sources = ps[ i ].getElementsByTagName( "span" ),
          matches = [];

        // See if which sources match
        for( var j = 0, jl = sources.length; j < jl; j++ ){
          var media = sources[ j ].getAttribute( "data-media" );
          // if there's no media specified, OR w.matchMedia is supported
          if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
            matches.push( sources[ j ] );
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

      if( matches.length ){
        var matchedEl = matches.pop();
        if( !picImg || picImg.parentNode.nodeName === "NOSCRIPT" ){
          picImg = w.document.createElement( "img" );
          picImg.alt = ps[ i ].getAttribute( "data-alt" );
        }
        else if( matchedEl === picImg.parentNode ){
          // Skip further actions if the correct image is already in place
          continue;
        }

        picImg.src =  matchedEl.getAttribute( "data-src" );
        matchedEl.appendChild( picImg );
      }
      else if( picImg ){
        picImg.parentNode.removeChild( picImg );
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if( w.addEventListener ){
    w.addEventListener( "resize", w.picturefill, false );
    w.addEventListener( "DOMContentLoaded", function(){
      w.picturefill();
      // Run once only
      w.removeEventListener( "load", w.picturefill, false );
    }, false );
    w.addEventListener( "load", w.picturefill, false );
  }
  else if( w.attachEvent ){
    w.attachEvent( "onload", w.picturefill );
  }

}( this ));

