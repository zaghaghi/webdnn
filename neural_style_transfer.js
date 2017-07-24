!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://mil-tokyo.github.io/webdnn",t(t.s=10)}([function(e,t){!function(e,t,n,a,i,r,s){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,r=t.createElement(n),s=t.getElementsByTagName(n)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),ga("create","UA-100057100-1","auto"),ga("send","pageview")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=function(){function e(e){this.base=e;var t=e.querySelector(".InitializingView-Message");if(!t)throw Error(".InitializingView-Message not found");this.message=t;var n=e.querySelector(".ProgressBar-Inner");if(!n)throw Error(".ProgressBar-Inner not found");this.progressBar=new a.default(n)}return e.prototype.updateProgress=function(e){this.progressBar.update(e)},e.prototype.updateMessage=function(e){this.message.textContent=e},e.prototype.remove=function(){this.base.parentNode&&this.base.parentNode.removeChild(this.base)},e}();t.default=i},function(e,t,n){"use strict";function a(e){var t=e.getContext("2d");if(!t)throw new Error("CanvasRenderingContext2D initialization failed.");return t}function i(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?l=function(e){return navigator.mediaDevices.getUserMedia(e)}:"mozGetUserMedia"in navigator?l=function(e){return navigator.mozGetUserMedia(e)}:"webkitGetUserMedia"in navigator&&(l=function(e){return navigator.webkitGetUserMedia(e)}),"URL"in window?h=window.URL:"webkitURL"in window?h=window.webkitURL:"mozURL"in window?h=window.mozURL:"msURL"in window&&(h=window.msURL),navigator.userAgent.match(/Firefox\D+(\d+)/)&&parseInt(RegExp.$1,10)<21&&(l=null),"object"==typeof navigator.plugins&&"object"==typeof navigator.plugins[d]&&navigator.plugins[d].description&&"object"==typeof navigator.mimeTypes&&navigator.mimeTypes[f]&&navigator.mimeTypes[f].enabledPlugin)b=!0;else if("ActiveXObject"in window)try{var e=new window.ActiveXObject(p);e&&e.GetVariable("$version")&&(b=!0)}catch(e){}v=!0}function r(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return console.log("Not a valid JPEG file"),0;for(var n=2;n<e.byteLength;){if(255!=t.getUint8(n))return console.log("Not a valid marker at offset "+n+", found: "+t.getUint8(n)),0;if(225==t.getUint8(n+1)){n+=4;for(var a="",i=0;i<4;i++)a+=String.fromCharCode(t.getUint8(n+i));if("Exif"!=a)return console.log("Not valid EXIF data found"),0;n+=6;var r=null;if(18761==t.getUint16(n))r=!1;else{if(19789!=t.getUint16(n))return console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),0;r=!0}if(42!=t.getUint16(n+2,!r))return console.log("Not valid TIFF data! (no 0x002A)"),0;var s=t.getUint32(n+4,!r);if(s<8)return console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(n+4,!r)),0;for(var o=n+s,u=t.getUint16(o,!r),c=0;c<u;c++){var l=o+12*c+2;if(274==t.getUint16(l,!r)){var h=t.getUint16(l+2,!r),d=t.getUint32(l+4,!r);if(3!=h&&1!=d)return console.log("Invalid EXIF orientation value type ("+h+") or count ("+d+")"),0;var p=t.getUint16(l+8,!r);return p<1||p>8?(console.log("Invalid EXIF orientation value ("+p+")"),0):p}}}else n+=2+t.getUint16(n+2)}return 0}function s(e,t,n){var a=new Image;a.addEventListener("load",function(){var e=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw Error("null");switch(t<5?(e.width=a.width,e.height=a.height):(e.width=a.height,e.height=a.width),t){case 2:i.transform(-1,0,0,1,a.width,0);break;case 3:i.transform(-1,0,0,-1,a.width,a.height);break;case 4:i.transform(1,0,0,-1,0,a.height);break;case 5:i.transform(0,1,1,0,0,0);break;case 6:i.transform(0,1,-1,0,a.height,0);break;case 7:i.transform(0,-1,-1,0,a.height,a.width);break;case 8:i.transform(0,-1,1,0,0,a.width)}i.drawImage(a,0,0),n.src=e.toDataURL()},!1),a.src=e}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),u=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function s(e){try{u(a.next(e))}catch(e){r(e)}}function o(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,o)}u((a=a.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){function n(e){return function(t){return a([e,t])}}function a(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o};Object.defineProperty(t,"__esModule",{value:!0});var l,h,d="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",f="application/x-shockwave-flash",m=function(e){function t(t){return e.call(this,t)||this}return o(t,e),t}(Error),g=location.protocol.match(/https/i)?"https":"http",w=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),v=!1,b=!1,y={width:0,height:0,destWidth:0,destHeight:0,imageFormat:"png",jpegQuality:90,flagFlashEnable:!0,flagForceFlash:!1,fps:30,constraints:null,swfURL:"",flagUnfreezeSnap:!0},I=function(){function e(e){var t=this;this.$container=null,this.$peg=null,this.$previewCanvas=null,this.previewContext=null,this.$video=null,this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1,this.flagUseUserMedia=!1,v||i(),this.params=Object.assign({},y,e),this.flagUserMedia=!this.params.flagForceFlash&&!!l&&!!window.URL,this.flagUserMedia&&(this.onBeforeUnload=function(){return t.reset()},window.addEventListener("beforeunload",this.onBeforeUnload))}return e.prototype.attachAsync=function(e){return u(this,void 0,void 0,function(){var t,n,a,i,o,u,d,p,f,m,g,v=this;return c(this,function(c){switch(c.label){case 0:if("string"==typeof e&&(e=document.querySelector(e)),!e)throw new Error("Could not locate DOM element to attach to.");if(this.$container=e,this.$container.innerHTML="",t=document.createElement("div"),e.appendChild(t),this.$peg=t,this.params.width||(this.params.width=e.offsetWidth),this.params.height||(this.params.height=e.offsetHeight),!this.params.width||!this.params.height)throw new Error("No width and/or height for webcam.  Please call set() first, or attach to a visible element.");if(this.params.destWidth||(this.params.destWidth=this.params.width),this.params.destHeight||(this.params.destHeight=this.params.height),"number"!=typeof this.params.fps&&(this.params.fps=30),n=this.params.width/this.params.destWidth,a=this.params.height/this.params.destHeight,!this.flagUserMedia||this.params.flagForceFlash)return[3,6];i=document.createElement("video"),i.setAttribute("autoplay","autoplay"),i.style.width=this.params.destWidth+"px",i.style.height=this.params.destHeight+"px",1==n&&1==a||(this.$container.style.overflow="hidden",i.style.transformOrigin="0px 0px",i.style.transform="scaleX("+n+") scaleY("+a+")"),this.$video=i,this.$container.appendChild(i),c.label=1;case 1:return c.trys.push([1,4,,5]),[4,l({audio:!1,video:!0})];case 2:return o=c.sent(),[4,new Promise(function(e,t){i.addEventListener("loadedmetadata",function(){v.flagFlashMovieLoaded=!0,v.flagFlashLive=!0,e()}),i.addEventListener("error",function(e){return t(e)}),i.srcObject=o})];case 3:return[2,c.sent()];case 4:if(u=c.sent(),this.$container&&b)return console.warn("This browser supports WebRTC, but initialization is failed."),console.warn(u),console.warn("WebCam.ts retries initialization with flash fallback."),this.params.flagForceFlash=!0,[2,this.attachAsync(this.$container)];throw u;case 5:return[3,10];case 6:return w?(d=document.createElement("div"),d.id=this.$container.id+"-ios_div",d.style.width=this.params.width+"px",d.style.height=this.params.height+"px",d.style.textAlign="center",d.style.display="table-cell",d.style.verticalAlign="middle",d.style.backgroundRepeat="no-repeat",d.style.backgroundSize="contain",d.style.backgroundPosition="center",p=document.createElement("span"),p.id=this.$container.id+"-ios_span",p.innerHTML="Tap here to open camera.",d.appendChild(p),f=document.createElement("img"),f.id=this.$container.id+"-ios_$img",f.style.width=this.params.destWidth+"px",f.style.height=this.params.destHeight+"px",f.style.display="none",d.appendChild(f),m=document.createElement("input"),m.id=this.$container.id+"-ios_$input",m.setAttribute("type","file"),m.setAttribute("accept","image/*"),m.setAttribute("capture","camera"),m.addEventListener("change",function(){if(m&&m.files&&m.files.length>0&&0==m.files[0].type.indexOf("image/")){var e=h.createObjectURL(m.files[0]),t=new Image;t.addEventListener("load",function(){var e=document.createElement("canvas");e.width=v.params.destWidth,e.height=v.params.destHeight;var n=e.getContext("2d");if(!n)throw Error("Canvas initialization is failed.");var a=Math.min(t.width/v.params.destWidth,t.height/v.params.destHeight),i=v.params.destWidth*a,r=v.params.destHeight*a,s=(t.width-i)/2,o=(t.height-r)/2;n.drawImage(t,s,o,i,r,0,0,v.params.destWidth,v.params.destHeight);var u=e.toDataURL();f.src=u,d.style.backgroundImage="url('"+u+"')"},!1);var n=new FileReader;n.addEventListener("load",function(){var a=r(n.result);a>1?s(e,a,t):t.src=e},!1);var a=new XMLHttpRequest;a.open("GET",e,!0),a.responseType="blob",a.onload=function(){200!=a.status&&0!==a.status||n.readAsArrayBuffer(a.response)},a.send()}},!1),m.style.display="none",e.appendChild(m),d.addEventListener("click",function(){m.style.display="block",m.focus(),m.click(),m.style.display="none"},!1),e.appendChild(d),this.flagFlashMovieLoaded=!0,this.flagFlashLive=!0,[3,10]):[3,7];case 7:return this.params.flagFlashEnable&&b?(window.Webcam=this,g=document.createElement("div"),[4,new Promise(function(e,t){v.onFlashLive=function(){v.onFlashLive=v.onFlashError=null,e()},v.onFlashError=function(e){v.onFlashLive=v.onFlashError=null,t(e)},g.innerHTML=v.getSWFHTML(),v.$container.appendChild(g)})]):[3,9];case 8:return[2,c.sent()];case 9:throw new Error("No WebCam interface is detected.");case 10:return e.style.width=this.params.width+"px",e.style.height=this.params.height+"px",[2]}})})},e.prototype.reset=function(){if(this.flagPreviewIsActive&&this.unfreeze(),this.flagUseUserMedia&&(this.$video=null),this.flagUseUserMedia&&this.flagFlashMovieLoaded&&!w){var e=this.getMovie();e&&"_releaseCamera"in e&&e._releaseCamera()}this.$container&&(this.$container.innerHTML="",this.$container=null),this.flagFlashMovieLoaded=!1,this.flagFlashLive=!1},e.prototype.getSWFHTML=function(){var e=this;if(!b)throw new m("Adobe Flash Player not found. Please install from get.adobe.com/flashplayer and try again.");var t=Object.keys(this.params).map(function(t){return t+"="+encodeURIComponent(e.params[t])}).join("&");return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="'+g+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+this.params.width+'" height="'+this.params.height+'" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+this.params.swfURL+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+t+'" /><embed id="webcam_movie_embed" src="'+this.params.swfURL+'" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+this.params.width+'" height="'+this.params.height+'" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+t+'"></embed></object>'},e.prototype.getMovie=function(){if(!this.flagFlashMovieLoaded)throw new m("Flash Movie is not loaded yet");var e;if(e=document.getElementById("webcam_movie_obj"),e&&e._snap||(e=document.getElementById("webcam_movie_embed")),!e)throw new m("Cannot locate Flash movie in DOM");return e},e.prototype.freezeAsync=function(){return u(this,void 0,void 0,function(){var e,t,n,i,r,s,o,u,h,d=this;return c(this,function(c){switch(c.label){case 0:if(!this.$container)throw new Error("$container is null.");if(this.flagPreviewIsActive&&this.unfreeze(),this.$previewCanvas?e=this.$previewCanvas:(t=this.params.destWidth,n=this.params.destHeight,e=document.createElement("canvas"),e.width=t,e.height=n,i=this.params.width/this.params.destWidth,r=this.params.height/this.params.destHeight,1==i&&1==r||(e.style.transformOrigin="0px 0px",e.style.transform="scaleX("+i+") scaleY("+r+")"),this.$previewCanvas=e),!l)return[3,1];if(!this.$video)throw Error("video is null");return a(this.$previewCanvas).drawImage(this.$video,0,0,this.params.destWidth,this.params.destHeight),[3,7];case 1:if(!w)return[3,5];if(!this.$container)throw Error("Not initialized yet");if(s=document.getElementById(this.$container.id+"-ios_div"),o=document.getElementById(this.$container.id+"-ios_input"),u=document.getElementById(this.$container.id+"-ios_img"),!s||!u||!o)throw Error("null");return o.value?[3,3]:[4,new Promise(function(t,n){u.onload=function(){a(e).drawImage(u,0,0,d.params.destWidth,d.params.destHeight),t()},u.onerror=function(e){return n(e)},o.style.display="block",o.focus(),o.click(),o.style.display="none",s.style.backgroundImage="none",u.removeAttribute("src"),o.value=""})];case 2:return c.sent(),[3,4];case 3:a(e).drawImage(u,0,0,this.params.destWidth,this.params.destHeight),s.style.backgroundImage="none",u.removeAttribute("src"),o.value="",c.label=4;case 4:return[3,7];case 5:return h=new Image,[4,new Promise(function(t,n){h.onload=function(){a(e).drawImage(h,0,0,d.params.destWidth,d.params.destHeight),t()},h.onerror=function(e){return n(e)},h.src="data:image/png;base64,"+d.getMovie()._snap()})];case 6:c.sent(),c.label=7;case 7:return this.$previewCanvas.style.position="relative",this.$previewCanvas.style.left=this.$container.scrollLeft+"px",this.$previewCanvas.style.top=this.$container.scrollTop+"px",this.$container.insertBefore(this.$previewCanvas,this.$peg),this.$container.style.overflow="hidden",this.flagPreviewIsActive=!0,[2]}})})},e.prototype.unfreeze=function(){this.flagPreviewIsActive&&(this.$container&&this.$previewCanvas&&this.$container.removeChild(this.$previewCanvas),this.previewContext=null,this.$previewCanvas=null,this.flagPreviewIsActive=!1)},e.prototype.snapAsync=function(e){return u(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:if(!this.flagFlashMovieLoaded)throw new Error("Webcam is not loaded yet");return this.flagPreviewIsActive?[3,2]:[4,this.freezeAsync()];case 1:t.sent(),t.label=2;case 2:if(!this.$previewCanvas)throw new Error("PreviewCanvas is null");return a(e).drawImage(this.$previewCanvas,0,0),this.params.flagFleezeWhenSnapped||this.unfreeze(),[2]}})})},e.prototype.flashNotify=function(e,t){switch(e){case"flashLoadComplete":this.flagFlashMovieLoaded=!0;break;case"cameraLive":this.flagFlashLive=!0,this.onFlashLive&&this.onFlashLive();break;case"error":this.onFlashError&&this.onFlashError(new m(t))}},e}();t.default=I},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.bar=e}return e.prototype.update=function(e){this.bar.style.width=100*Math.min(Math.max(e,0),1)+"%"},e}();t.default=a},,,,function(e,t){},,,function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function s(e){try{u(a.next(e))}catch(e){r(e)}}function o(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,o)}u((a=a.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function n(e){return function(t){return a([e,t])}}function a(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(e){n=[6,e],r=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o};Object.defineProperty(t,"__esModule",{value:!0}),n(7),n(0);var r,s=n(1),o=n(2);!function(e){e[e.INITIALIZING=0]="INITIALIZING",e[e.STAND_BY=1]="STAND_BY",e[e.RUNNING=2]="RUNNING",e[e.ERROR=3]="ERROR"}(r||(r={}));var u=new(function(){function e(){this.state=r.INITIALIZING,this.lastStatus=""}return e.prototype.initialize=function(){return a(this,void 0,void 0,function(){var e,t,n,n,a,r,o,c,l,h,d,p,f,m,g,w=this;return i(this,function(i){switch(i.label){case 0:if(ga("send","event","NeuralStyleTransfer","launch"),!(e=document.getElementById("backend")))throw Error("#backend is not found.");if(this.backendSelect=e,t=WebDNN.getBackendAvailability(),t.status.webgpu)switch(this.lastStatus=localStorage.getItem("webgpu_last_status")||"none",this.lastStatus){case"none":break;case"running":case"crashed":t.status.webgpu=!1,localStorage.setItem("webgpu_last_status","crashed"),console.warn("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. Therefore, WebDNN disabled WebGPU backend temporally."),localStorage.getItem("flag_webgpu_disabled_alert")||(alert("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. \n\nTherefore, WebDNN disabled WebGPU backend temporally."),localStorage.setItem("flag_webgpu_disabled_alert","1"))}if(t.status.webgpu||(n=document.querySelector('option[value="webgpu"]'),n&&(n.disabled=!0),e.value="webassembly"),!t.status.webassembly)throw n=document.querySelector('option[value="webassembly"]'),n&&(n.disabled=!0),Error("This browser does not support either WebGPU nor WebAssembly/asm.js backends");if(e.addEventListener("change",function(){return w.onBackendSelectChange()}),!(a=document.getElementById("runButton")))throw Error("#runButton is not found.");if(this.runButton=a,this.runButton.addEventListener("click",function(){return u.onPlayButtonClick()}),r=document.getElementById("launchView"),r&&r.parentNode&&(r.parentNode.removeChild(r),r=null),!(o=document.getElementById("dataSource")))throw Error("#dataSource is not found");if(this.dataSourceSelect=o,o.addEventListener("change",function(){return w.onDataSourceSelectChange()}),!(c=document.getElementById("cameraContainer")))throw Error("#cameraContainer is not found");if(this.cameraContainer=c,!(l=document.getElementById("sampleContainer")))throw Error("#sampleContainer is not found");if(this.sampleContainer=l,!(h=document.getElementById("initializingView")))throw Error("#initializingView is not found");return d=new s.default(h),d.updateMessage("Load model data"),this.runners={},[4,this.initBackendAsync(this.backendSelect.value,function(e,t){return d.updateProgress(e/t)})];case 1:if(i.sent(),!(p=document.getElementById("inputCanvas")))throw Error("#inputCanvas is not found");if(this.inputCanvas=p,this.w=p.width,this.h=p.height,!(f=p.getContext("2d")))throw Error("Canvas initialization failed");if(this.inputCtx=f,!(m=document.getElementById("outputCanvas")))throw Error("#outputCanvas is not found");if(!(g=m.getContext("2d")))throw Error("Canvas initialization failed");return this.outputCtx=g,[4,this.updateDataSource()];case 2:return i.sent(),d.remove(),[2]}})})},e.prototype.onDataSourceSelectChange=function(){this.updateDataSource()},e.prototype.onBackendSelectChange=function(){this.initBackendAsync(this.backendSelect.value)},e.prototype.onPlayButtonClick=function(){return a(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:switch(e=this.state){case r.STAND_BY:return[3,1];case r.RUNNING:return[3,3]}return[3,5];case 1:return[4,this.setState(r.RUNNING)];case 2:return t.sent(),[3,6];case 3:return[4,this.setState(r.STAND_BY)];case 4:return t.sent(),[3,6];case 5:return[3,6];case 6:return[2]}})})},e.prototype.initBackendAsync=function(e,t){return a(this,void 0,void 0,function(){var n,a,s,o;return i(this,function(i){switch(i.label){case 0:return[4,this.setState(r.INITIALIZING)];case 1:return i.sent(),e in this.runners?(this.runner=this.runners[e],[3,5]):[3,2];case 2:return[4,WebDNN.init([e])];case 3:return i.sent(),this.runner=this.runners[e]=WebDNN.runner,n=performance.now(),[4,this.runner.load("./models/neural_style_transfer",t)];case 4:i.sent(),a=performance.now()-n,ga("send","event","NeuralStyleTransfer","play","loading_time-"+e,Math.round(a)),i.label=5;case 5:return s=this,[4,this.runner.getInputViews()];case 6:return s.inputView=i.sent()[0].toActual(),o=this,[4,this.runner.getOutputViews()];case 7:return o.outputView=i.sent()[0].toActual(),[4,this.setState(r.STAND_BY)];case 8:return i.sent(),[2]}})})},e.prototype.updateDataSource=function(){return a(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:switch(this.dataSource=this.dataSourceSelect.value,this.sampleContainer.style.display="sample"==this.dataSource?"block":"none",this.cameraContainer.style.display="video"==this.dataSource||"photo"==this.dataSource?"block":"none",e=this.dataSource){case"photo":case"video":return[3,1];case"sample":return[3,5]}return[3,9];case 1:return[4,this.setState(r.INITIALIZING)];case 2:return t.sent(),[4,this.initializeCameraAsync()];case 3:return t.sent(),[4,this.setState(r.STAND_BY)];case 4:return t.sent(),[3,9];case 5:return[4,this.setState(r.INITIALIZING)];case 6:return t.sent(),this.finalizeCamera(),[4,this.loadSampleImageToPreview()];case 7:return t.sent(),[4,this.setState(r.STAND_BY)];case 8:return t.sent(),[3,9];case 9:return[2]}})})},e.prototype.initializeCameraAsync=function(){return a(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:this.webcam=new o.default({width:192,height:144,fps:60,flip_horiz:!1,imageFormat:"png",flagForceFlash:!1,swfURL:"/webdnn/webcam.swf",flagUnfreezeSnap:"video"==this.dataSource}),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.webcam.attachAsync("#cameraContainer")];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),console.error(e),this.setMessage(e),this.setState(r.ERROR),[3,4];case 4:return[2]}})})},e.prototype.finalizeCamera=function(){this.webcam&&this.webcam.reset()},e.prototype.loadSampleImageToPreview=function(){return a(this,void 0,void 0,function(){var e,t,n;return i(this,function(a){switch(a.label){case 0:return e=Math.floor(6*Math.random()),t="./assets/images/"+e+".png",n=new Image,[4,new Promise(function(e){n.onload=function(){return e(n)},n.src=t})];case 1:return a.sent(),this.inputCtx.drawImage(n,0,0,n.width,n.height,0,0,this.inputCtx.canvas.width,this.inputCtx.canvas.height),[2]}})})},e.prototype.setState=function(e){return a(this,void 0,void 0,function(){var t,n=this;return i(this,function(a){switch(a.label){case 0:switch(this.state=e,t=e){case r.INITIALIZING:return[3,1];case r.STAND_BY:return[3,2];case r.RUNNING:return[3,3];case r.ERROR:return[3,5]}return[3,6];case 1:return this.setMessage("Initializing..."),this.runButton.textContent="Initializing...",this.runButton.disabled=!0,[3,6];case 2:return this.setMessage("Ready(backend: "+this.runner.backendName+")"),this.runButton.textContent="Run",this.runButton.disabled=!1,[3,6];case 3:return this.setMessage("Processing..."),this.runButton.disabled=!0,[4,this.transfer()];case 4:return a.sent(),"video"==this.dataSource?(this.setMessage("Running"),this.runButton.textContent="Stop",this.runButton.disabled=!1):setTimeout(function(){return n.setState(r.STAND_BY)}),[3,6];case 5:return this.runButton.textContent="Error",this.runButton.disabled=!0,[3,6];case 6:return[2]}})})},e.prototype.transfer=function(){return a(this,void 0,void 0,function(){var e,t,n=this;return i(this,function(a){switch(a.label){case 0:return this.state!==r.RUNNING?[2]:[4,this.getImageData()];case 1:return a.sent(),"video"!=this.dataSource?[3,3]:[4,this.runner.run()];case 2:return a.sent(),this.setImageData(),requestAnimationFrame(function(){return n.transfer()}),[3,5];case 3:return"webgpu"===this.runner.backendName&&"none"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","running"),this.lastStatus="running"),e=performance.now(),[4,this.runner.run()];case 4:a.sent(),t=performance.now()-e,"webgpu"===this.runner.backendName&&"running"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","completed"),this.lastStatus="completed"),this.setImageData();try{ga("send","event","NeuralStyleTransfer","play","computation_time",Math.round(t))}catch(e){}a.label=5;case 5:return[2]}})})},e.prototype.getImageData=function(){return a(this,void 0,void 0,function(){var e,t,n,a,r;return i(this,function(i){switch(i.label){case 0:return e=this.w,t=this.h,"photo"!=this.dataSource?[3,3]:[4,this.webcam.freezeAsync()];case 1:return i.sent(),[4,this.webcam.snapAsync(this.inputCanvas)];case 2:return i.sent(),[3,5];case 3:return"video"!=this.dataSource?[3,5]:[4,this.webcam.snapAsync(this.inputCanvas)];case 4:i.sent(),i.label=5;case 5:for(n=this.inputCtx.getImageData(0,0,e,t).data,a=0;a<t;a++)for(r=0;r<e;r++)this.inputView[3*(a*e+r)]=n[4*(a*e+r)],this.inputView[3*(a*e+r)+1]=n[4*(a*e+r)+1],this.inputView[3*(a*e+r)+2]=n[4*(a*e+r)+2];return[2]}})})},e.prototype.setImageData=function(){for(var e=this.w,t=this.h,n=new ImageData(e,t),a=0;a<t;a++)for(var i=0;i<e;i++)n.data[4*(a*e+i)]=this.outputView[3*(a*e+i)],n.data[4*(a*e+i)+1]=this.outputView[3*(a*e+i)+1],n.data[4*(a*e+i)+2]=this.outputView[3*(a*e+i)+2],n.data[4*(a*e+i)+3]=255;this.outputCtx.putImageData(n,0,0)},e.prototype.setMessage=function(e){var t=document.getElementById("message");t&&(t.textContent=e)},e}());window.onload=function(){WebDNN.registerTransformDelegate(function(e){var t=e.match(/([^\/]+)(?:\?.*)?$/);return t?"https://mil-tokyo.github.io/webdnn-data/models/neural_style_transfer/"+t[1]+"?raw=true&v=3":e});var e=document.getElementById("runAppButton");if(!e)throw Error("#runAppButton is not found");e.addEventListener("click",function(){return u.initialize()}),"?run=1"==location.search&&u.initialize()},window.onerror=function(e,t,n,a,i){ga("send","exception",{exDescription:e,exFatal:!1})}}]);