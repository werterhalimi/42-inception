(function(){"use strict";var u={};const r={},n={};class l{constructor(t){this.url=t,this.eventSource=new EventSource(t),this.listening={},this.clients=[],this.listen("open"),this.listen("close"),this.listen("logout"),this.listen("notification-count"),this.listen("stopwatches"),this.listen("error")}register(t){this.clients.includes(t)||(this.clients.push(t),t.postMessage({type:"status",message:`registered to ${this.url}`}))}deregister(t){const e=this.clients.indexOf(t);return e<0?this.clients.length:(this.clients.splice(e,1),this.clients.length)}close(){this.eventSource&&(this.eventSource.close(),this.eventSource=null)}listen(t){this.listening[t]||(this.listening[t]=!0,this.eventSource.addEventListener(t,e=>{this.notifyClients({type:t,data:e.data})}))}notifyClients(t){for(const e of this.clients)e.postMessage(t)}status(t){t.postMessage({type:"status",message:`url: ${this.url} readyState: ${this.eventSource.readyState}`})}}self.addEventListener("connect",c=>{for(const t of c.ports)t.addEventListener("message",e=>{if(!self.EventSource){t.postMessage({type:"no-event-source"});return}if(e.data.type==="start"){const s=e.data.url;if(r[s]){const o=r[s];o.register(t),n[t]=o;return}let i=n[t];if(i){if(i.eventSource&&i.url===s)return;i.deregister(t)===0&&(i.close(),r[i.url]=null)}i=new l(s),i.register(t),r[s]=i,n[t]=i}else if(e.data.type==="listen")n[t].listen(e.data.eventType);else if(e.data.type==="close"){const s=n[t];if(!s)return;s.deregister(t)===0&&(s.close(),r[s.url]=null,n[t]=null)}else if(e.data.type==="status"){const s=n[t];if(!s){t.postMessage({type:"status",message:"not connected"});return}s.status(t)}else t.postMessage({type:"error",message:`received but don't know how to handle: ${e.data}`})}),t.start()})})();