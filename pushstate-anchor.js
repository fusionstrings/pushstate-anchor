!function(){function t(t){if(!t.ctrlKey&&!t.metaKey&&2!==t.which){var e=this.getAttribute("href");if(0!==e.indexOf("http")||window.location.host===new URL(e).host){window.history.pushState(JSON.parse(this.getAttribute("state"))||window.history.state,this.getAttribute("title"),e);try{var n=new PopStateEvent("popstate",{bubbles:!1,cancelable:!1,state:window.history.state});"dispatchEvent_"in window?window.dispatchEvent_(n):window.dispatchEvent(n)}catch(i){var a=document.createEvent("CustomEvent");a.initCustomEvent("popstate",!1,!1,{state:window.history.state}),window.dispatchEvent(a)}t.preventDefault()}}}var e=Object.create(HTMLAnchorElement.prototype);e.attachedCallback=function(){this.addEventListener("click",t,!1)},e.detachedCallback=function(){this.removeEventListener("click",t,!1)},document.registerElement("pushstate-anchor",{prototype:e,"extends":"a"})}();