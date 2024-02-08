import './polyfills.server.mjs';
import{G as Q,I as Y,J as K,K as C,L as W,M as J,N as X,O as z,P as Z,Q as ee,R as te,S as re,T as oe,W as se,_ as ie,a as T,b as S,ba as ne,c as M,d as U,e as A,f as x,g as w,h as g,i as k,j as m,k as D,l as j,m as q,n as L,o as R,p as B,q as H,r as $,s as h,t as l,u as _,v as O,w as G,x as u,y,z as V}from"./chunk-EAKE7NOU.mjs";var ce=(()=>{let e=class e{constructor(t){this.http=t,this.projectsUrl="api/projects"}getProjects(){return this.http.get(this.projectsUrl)}};e.\u0275fac=function(o){return new(o||e)(m(Z))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function me(i,e){if(i&1&&(h(0,"li",27)(1,"h3")(2,"a",28),u(3),l()(),h(4,"span",29),u(5),l(),_(6,"br"),h(7,"span",30),u(8),l()()),i&2){let r=e.$implicit;R(2),G("href",r.link,L),R(),y(r.name),R(2),y(r.lang),R(3),y(r.desc)}}var ae=(()=>{let e=class e{constructor(t){this.projectService=t,this.title="Bernadette Corner",this.projects=[]}openGitHub(){open("https://github.com/dttncl")}openLinkedIn(){open("https://www.linkedin.com/in/bnhfernando/")}openCV(){open("../assets/Bernadette-Fernando-Resume.pdf")}getProjects(){this.projectService.getProjects().subscribe(t=>this.projects=t)}ngOnInit(){this.getProjects()}};e.\u0275fac=function(o){return new(o||e)(B(ce))},e.\u0275cmp=D({type:e,selectors:[["app-root"]],standalone:!0,features:[V],decls:44,vars:1,consts:[[1,"main"],[1,"welcome"],[1,"welcome-details"],[1,"social-container"],["id","githubImg","title","GitHub",3,"click"],["id","linkedinImg","title","LinkedIn",3,"click"],["id","portfolioImg"],[1,"summary"],["id","viewCV",3,"click"],[1,"projects"],[1,"project-list"],[1,"projects-list-items"],["class","projects-list-item",4,"ngFor","ngForOf"],[1,"toolbox"],[1,"toolbox-container"],["id","html5Img","title","HTML5"],["id","css3Img","title","CSS3"],["id","jscriptImg","title","Javascript"],["id","phpImg","title","PHP"],["id","pythonImg","title","Python"],["id","gitImg","title","Git"],["id","javaImg","title","Java"],["id","csharpImg","title","C#"],["id","djangoImg","title","Django"],["id","angularImg","title","Angular"],["id","dotnetImg","title",".NETCore"],["id","sqlserverImg","title","SQL Server"],[1,"projects-list-item"],["target","_blank",3,"href"],[1,"language"],[1,"description"]],template:function(o,s){o&1&&(h(0,"main",0)(1,"div",1)(2,"div",2)(3,"h1"),u(4,"Hey, it's"),l(),h(5,"p"),u(6,"Bernadette"),l(),h(7,"h2"),u(8,"Software Developer"),l(),h(9,"div",3)(10,"div",4),O("click",function(){return s.openGitHub()}),l(),h(11,"div",5),O("click",function(){return s.openLinkedIn()}),l()()(),_(12,"div",6),l(),h(13,"div",7)(14,"p"),u(15,"It\u2019s a pleasure having you here!"),_(16,"br")(17,"br"),u(18," My name is Bernadette, your friendly software developer. One simple spark of interest from a pregnant physics professor has evolved into a passion that I haven't stopped chasing since. Currently a student at LaSalle College in Montreal, pursuing my Programmer Analyst diploma, my mission is to turn my creative problem solving skills as a career."),l(),h(19,"button",8),O("click",function(){return s.openCV()}),u(20,"View My CV"),l()(),h(21,"div",9)(22,"h2"),u(23,"Featured Projects"),l(),h(24,"div",10)(25,"ul",11),$(26,me,9,4,"li",12),l()()(),h(27,"div",13)(28,"h2"),u(29,"my toolbox"),l(),h(30,"div",14),_(31,"div",15)(32,"div",16)(33,"div",17)(34,"div",18)(35,"div",19)(36,"div",20)(37,"div",21)(38,"div",22)(39,"div",23)(40,"div",24)(41,"div",25)(42,"div",26),l()()(),_(43,"router-outlet")),o&2&&(R(26),H("ngForOf",s.projects))},dependencies:[K,Y,ie],styles:['@import"https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Pacifico&display=swap";main[_ngcontent-%COMP%]{font-size:10px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:55vh 45vh;grid-template-areas:"welcome projects" "summary toolbox"}.welcome[_ngcontent-%COMP%]{border:.5rem solid #1572B6;border-radius:.5rem;padding-top:2rem;padding-left:2rem;grid-area:welcome;display:flex}.welcome[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}.welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font:4rem Pacifico;color:#1572b6}.projects[_ngcontent-%COMP%]{padding:2rem;padding-top:0;grid-area:projects;overflow-y:scroll}.projects[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;background:transparent}.projects[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;margin-top:0;position:-webkit-sticky;position:sticky;top:0;background-color:#fff}.summary[_ngcontent-%COMP%]{grid-area:summary;padding:2rem}.toolbox[_ngcontent-%COMP%]{padding-left:2rem;grid-area:toolbox}.toolbox[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:2rem Pacifico;margin-top:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font:1.5rem Inter}p[_ngcontent-%COMP%]{font:1rem Inter}.project-list[_ngcontent-%COMP%]{display:flex;flex-direction:horizontal;flex-wrap:wrap}.toolbox-container[_ngcontent-%COMP%]{display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:space-evenly;row-gap:3em}.toolbox-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-basis:15%;width:6em;height:6em}#portfolioImg[_ngcontent-%COMP%]{width:100%;height:100%;background:url("./media/girl-2SGDGDV6.svg") no-repeat center;background-size:contain}#html5Img[_ngcontent-%COMP%]{background:url("./media/html5-UIMYQBWL.svg") no-repeat center}#css3Img[_ngcontent-%COMP%]{background:url("./media/css3-7ZYKHUJ3.svg") no-repeat center}#jscriptImg[_ngcontent-%COMP%]{background:url("./media/javascript-22HULFCT.svg") no-repeat center}#phpImg[_ngcontent-%COMP%]{background:url("./media/php-5PXU5QQL.svg") no-repeat center}#pythonImg[_ngcontent-%COMP%]{background:url("./media/python-YFEIKK22.svg") no-repeat center}#gitImg[_ngcontent-%COMP%]{background:url("./media/git-PQV25STY.svg") no-repeat center}#javaImg[_ngcontent-%COMP%]{background:url("./media/java-ARRPVAB5.svg") no-repeat center}#csharpImg[_ngcontent-%COMP%]{background:url("./media/csharp-Z67XJB6Q.svg") no-repeat center}#djangoImg[_ngcontent-%COMP%]{background:url("./media/django-7K472OYA.svg") no-repeat center}#angularImg[_ngcontent-%COMP%]{background:url("./media/angularjs-O3YKSTSX.svg") no-repeat center}#dotnetImg[_ngcontent-%COMP%]{background:url("./media/dotnetcore-GV5FXGZL.svg") no-repeat center}#sqlserverImg[_ngcontent-%COMP%]{background:url("./media/microsoftsqlserver-XN6BGSHU.svg") no-repeat center}#githubImg[_ngcontent-%COMP%]{background:url("./media/github-QLSKN2O7.svg") no-repeat center;width:3em;height:3em}#githubImg[_ngcontent-%COMP%]:hover{cursor:pointer}#linkedinImg[_ngcontent-%COMP%]{background:url("./media/linkedin-MFDYG7UF.svg") no-repeat center;width:3em;height:3em}#linkedinImg[_ngcontent-%COMP%]:hover{cursor:pointer}.social-container[_ngcontent-%COMP%]{padding-top:10px;display:flex;gap:2em}#viewCV[_ngcontent-%COMP%]{background-color:#1572b6;border:none;color:#ebebeb;font-size:.8rem;padding:8px 30px;font-weight:700;border-radius:30px}#viewCV[_ngcontent-%COMP%]:hover{cursor:pointer}.projects-list-items[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;font:1rem Inter}.projects-list-items[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;padding:0}.projects-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#1572b6}.projects-list-items[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]{font-style:italic}.description[_ngcontent-%COMP%]{display:inline-block;padding-top:5px}.projects-list-item[_ngcontent-%COMP%]{margin-bottom:20px}']});let i=e;return i})();var de=[];function Re(i,e){return new T(r=>{let t=!1,o=!1,s=i.subscribe(n=>{o=!0,setTimeout(()=>{r.next(n),t&&r.complete()},e)},n=>setTimeout(()=>r.error(n),e),()=>{t=!0,o||r.complete()});return()=>s.unsubscribe()})}var d={CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTIPLE_CHOICES:300,MOVED_PERMANTENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,TEMPORARY_REDIRECT:307,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,PAYLOAD_TO_LARGE:413,URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,UPGRADE_REQUIRED:426,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,PROCESSING:102,MULTI_STATUS:207,IM_USED:226,PERMANENT_REDIRECT:308,UNPROCESSABLE_ENTRY:422,LOCKED:423,FAILED_DEPENDENCY:424,PRECONDITION_REQUIRED:428,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,NETWORK_AUTHENTICATION_REQUIRED:511},_e={100:{code:100,text:"Continue",description:'"The initial part of a request has been received and has not yet been rejected by the server."',spec_title:"RFC7231#6.2.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.2.1"},101:{code:101,text:"Switching Protocols",description:`"The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection."`,spec_title:"RFC7231#6.2.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.2.2"},200:{code:200,text:"OK",description:'"The request has succeeded."',spec_title:"RFC7231#6.3.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},201:{code:201,text:"Created",description:'"The request has been fulfilled and has resulted in one or more new resources being created."',spec_title:"RFC7231#6.3.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},202:{code:202,text:"Accepted",description:'"The request has been accepted for processing, but the processing has not been completed."',spec_title:"RFC7231#6.3.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.3"},203:{code:203,text:"Non-Authoritative Information",description:`"The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy."`,spec_title:"RFC7231#6.3.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.4"},204:{code:204,text:"No Content",description:'"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',spec_title:"RFC7231#6.3.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.5"},205:{code:205,text:"Reset Content",description:'"The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',spec_title:"RFC7231#6.3.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.6"},206:{code:206,text:"Partial Content",description:`"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field."`,spec_title:"RFC7233#4.1",spec_href:"https://tools.ietf.org/html/rfc7233#section-4.1"},300:{code:300,text:"Multiple Choices",description:'"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',spec_title:"RFC7231#6.4.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.1"},301:{code:301,text:"Moved Permanently",description:'"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',spec_title:"RFC7231#6.4.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.2"},302:{code:302,text:"Found",description:'"The target resource resides temporarily under a different URI."',spec_title:"RFC7231#6.4.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.3"},303:{code:303,text:"See Other",description:'"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',spec_title:"RFC7231#6.4.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.4"},304:{code:304,text:"Not Modified",description:'"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',spec_title:"RFC7232#4.1",spec_href:"https://tools.ietf.org/html/rfc7232#section-4.1"},305:{code:305,text:"Use Proxy",description:"*deprecated*",spec_title:"RFC7231#6.4.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.5"},307:{code:307,text:"Temporary Redirect",description:'"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',spec_title:"RFC7231#6.4.7",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.4.7"},400:{code:400,text:"Bad Request",description:'"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',spec_title:"RFC7231#6.5.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.1"},401:{code:401,text:"Unauthorized",description:'"The request has not been applied because it lacks valid authentication credentials for the target resource."',spec_title:"RFC7235#6.3.1",spec_href:"https://tools.ietf.org/html/rfc7235#section-3.1"},402:{code:402,text:"Payment Required",description:"*reserved*",spec_title:"RFC7231#6.5.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.2"},403:{code:403,text:"Forbidden",description:'"The server understood the request but refuses to authorize it."',spec_title:"RFC7231#6.5.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.3"},404:{code:404,text:"Not Found",description:'"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',spec_title:"RFC7231#6.5.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.4"},405:{code:405,text:"Method Not Allowed",description:'"The method specified in the request-line is known by the origin server but not supported by the target resource."',spec_title:"RFC7231#6.5.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.5"},406:{code:406,text:"Not Acceptable",description:'"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',spec_title:"RFC7231#6.5.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.6"},407:{code:407,text:"Proxy Authentication Required",description:'"The client needs to authenticate itself in order to use a proxy."',spec_title:"RFC7231#6.3.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},408:{code:408,text:"Request Timeout",description:'"The server did not receive a complete request message within the time that it was prepared to wait."',spec_title:"RFC7231#6.5.7",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.7"},409:{code:409,text:"Conflict",description:'"The request could not be completed due to a conflict with the current state of the resource."',spec_title:"RFC7231#6.5.8",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.8"},410:{code:410,text:"Gone",description:'"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',spec_title:"RFC7231#6.5.9",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.9"},411:{code:411,text:"Length Required",description:'"The server refuses to accept the request without a defined Content-Length."',spec_title:"RFC7231#6.5.10",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.10"},412:{code:412,text:"Precondition Failed",description:'"One or more preconditions given in the request header fields evaluated to false when tested on the server."',spec_title:"RFC7232#4.2",spec_href:"https://tools.ietf.org/html/rfc7232#section-4.2"},413:{code:413,text:"Payload Too Large",description:'"The server is refusing to process a request because the request payload is larger than the server is willing or able to process."',spec_title:"RFC7231#6.5.11",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.11"},414:{code:414,text:"URI Too Long",description:'"The server is refusing to service the request because the request-target is longer than the server is willing to interpret."',spec_title:"RFC7231#6.5.12",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.12"},415:{code:415,text:"Unsupported Media Type",description:'"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',spec_title:"RFC7231#6.5.13",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.13"},416:{code:416,text:"Range Not Satisfiable",description:`"None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."`,spec_title:"RFC7233#4.4",spec_href:"https://tools.ietf.org/html/rfc7233#section-4.4"},417:{code:417,text:"Expectation Failed",description:`"The expectation given in the request's Expect header field could not be met by at least one of the inbound servers."`,spec_title:"RFC7231#6.5.14",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.14"},418:{code:418,text:"I'm a teapot",description:'"1988 April Fools Joke. Returned by tea pots requested to brew coffee."',spec_title:"RFC 2324",spec_href:"https://tools.ietf.org/html/rfc2324"},426:{code:426,text:"Upgrade Required",description:'"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',spec_title:"RFC7231#6.5.15",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.5.15"},500:{code:500,text:"Internal Server Error",description:'"The server encountered an unexpected condition that prevented it from fulfilling the request."',spec_title:"RFC7231#6.6.1",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.1"},501:{code:501,text:"Not Implemented",description:'"The server does not support the functionality required to fulfill the request."',spec_title:"RFC7231#6.6.2",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.2"},502:{code:502,text:"Bad Gateway",description:'"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',spec_title:"RFC7231#6.6.3",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.3"},503:{code:503,text:"Service Unavailable",description:'"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',spec_title:"RFC7231#6.6.4",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.4"},504:{code:504,text:"Gateway Time-out",description:'"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',spec_title:"RFC7231#6.6.5",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.5"},505:{code:505,text:"HTTP Version Not Supported",description:'"The server does not support, or refuses to support, the protocol version that was used in the request message."',spec_title:"RFC7231#6.6.6",spec_href:"https://tools.ietf.org/html/rfc7231#section-6.6.6"},102:{code:102,text:"Processing",description:'"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it."',spec_title:"RFC5218#10.1",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.1"},207:{code:207,text:"Multi-Status",description:'"Status for multiple independent operations."',spec_title:"RFC5218#10.2",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.2"},226:{code:226,text:"IM Used",description:'"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',spec_title:"RFC3229#10.4.1",spec_href:"https://tools.ietf.org/html/rfc3229#section-10.4.1"},308:{code:308,text:"Permanent Redirect",description:'"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',spec_title:"RFC7238",spec_href:"https://tools.ietf.org/html/rfc7238"},422:{code:422,text:"Unprocessable Entity",description:'"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',spec_title:"RFC5218#10.3",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.3"},423:{code:423,text:"Locked",description:'"The source or destination resource of a method is locked."',spec_title:"RFC5218#10.4",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.4"},424:{code:424,text:"Failed Dependency",description:'"The method could not be performed on the resource because the requested action depended on another action and that action failed."',spec_title:"RFC5218#10.5",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.5"},428:{code:428,text:"Precondition Required",description:'"The origin server requires the request to be conditional."',spec_title:"RFC6585#3",spec_href:"https://tools.ietf.org/html/rfc6585#section-3"},429:{code:429,text:"Too Many Requests",description:'"The user has sent too many requests in a given amount of time ("rate limiting")."',spec_title:"RFC6585#4",spec_href:"https://tools.ietf.org/html/rfc6585#section-4"},431:{code:431,text:"Request Header Fields Too Large",description:'"The server is unwilling to process the request because its header fields are too large."',spec_title:"RFC6585#5",spec_href:"https://tools.ietf.org/html/rfc6585#section-5"},451:{code:451,text:"Unavailable For Legal Reasons",description:'"The server is denying access to the resource in response to a legal demand."',spec_title:"draft-ietf-httpbis-legally-restricted-status",spec_href:"https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"},506:{code:506,text:"Variant Also Negotiates",description:'"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',spec_title:"RFC2295#8.1",spec_href:"https://tools.ietf.org/html/rfc2295#section-8.1"},507:{code:507,text:"Insufficient Storage",description:'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',spec_title:"RFC5218#10.6",spec_href:"https://tools.ietf.org/html/rfc2518#section-10.6"},511:{code:511,text:"Network Authentication Required",description:'"The client needs to authenticate to gain network access."',spec_title:"RFC6585#6",spec_href:"https://tools.ietf.org/html/rfc6585#section-6"}};function be(i){return _e[i+""].text||"Unknown Status"}function ve(i){return i>=200&&i<300}var b=class{},P=class{},E=(()=>{let e=class e{constructor(t={}){Object.assign(this,{caseSensitiveSearch:!1,dataEncapsulation:!1,delay:500,delete404:!1,passThruUnknownUrl:!1,post204:!0,post409:!1,put204:!0,put404:!1,apiBase:void 0,host:void 0,rootPath:void 0},t)}};e.\u0275fac=function(o){return new(o||e)(m(P))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let i=e;return i})();function Te(i){let r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(i),t={source:"",protocol:"",authority:"",userInfo:"",user:"",password:"",host:"",port:"",relative:"",path:"",directory:"",file:"",query:"",anchor:""},o=Object.keys(t),s=o.length;for(;s--;)t[o[s]]=r&&r[s]||"";return t}function Oe(i){return i.replace(/\/$/,"")}var F=class{constructor(e,r={}){this.inMemDbService=e,this.config=new E,this.db={},this.requestInfoUtils=this.getRequestInfoUtils();let t=this.getLocation("/");this.config.host=t.host,this.config.rootPath=t.path,Object.assign(this.config,r)}get dbReady(){return this.dbReadySubject||(this.dbReadySubject=new S(!1),this.resetDb()),this.dbReadySubject.asObservable().pipe(w(e=>e))}handleRequest(e){return this.dbReady.pipe(x(()=>this.handleRequest_(e)))}handleRequest_(e){let r=e.urlWithParams?e.urlWithParams:e.url,t=this.bind("parseRequestUrl"),o=t&&t(r,this.requestInfoUtils)||this.parseRequestUrl(r),s=o.collectionName,n=this.db[s],c={req:e,apiBase:o.apiBase,collection:n,collectionName:s,headers:this.createHeaders({"Content-Type":"application/json"}),id:this.parseId(n,s,o.id),method:this.getRequestMethod(e),query:o.query,resourceUrl:o.resourceUrl,url:r,utils:this.requestInfoUtils},a;if(/commands\/?$/i.test(c.apiBase))return this.commands(c);let p=this.bind(c.method);if(p){let f=p(c);if(f)return f}return this.db[s]?this.createResponse$(()=>this.collectionHandler(c)):this.config.passThruUnknownUrl?this.getPassThruBackend().handle(e):(a=this.createErrorResponseOptions(r,d.NOT_FOUND,`Collection '${s}' not found`),this.createResponse$(()=>a))}addDelay(e){let r=this.config.delay;return r===0?e:Re(e,r||500)}applyQuery(e,r){let t=[],o=this.config.caseSensitiveSearch?void 0:"i";r.forEach((n,c)=>{n.forEach(a=>t.push({name:c,rx:new RegExp(decodeURI(a),o)}))});let s=t.length;return s?e.filter(n=>{let c=!0,a=s;for(;c&&a;){a-=1;let p=t[a];c=p.rx.test(n[p.name])}return c}):e}bind(e){let r=this.inMemDbService[e];return r?r.bind(this.inMemDbService):void 0}bodify(e){return this.config.dataEncapsulation?{data:e}:e}clone(e){return JSON.parse(JSON.stringify(e))}collectionHandler(e){let r;switch(e.method){case"get":r=this.get(e);break;case"post":r=this.post(e);break;case"put":r=this.put(e);break;case"delete":r=this.delete(e);break;default:r=this.createErrorResponseOptions(e.url,d.METHOD_NOT_ALLOWED,"Method not allowed");break}let t=this.bind("responseInterceptor");return t?t(r,e):r}commands(e){let r=e.collectionName.toLowerCase(),t=e.method,o={url:e.url};switch(r){case"resetdb":return o.status=d.NO_CONTENT,this.resetDb(e).pipe(x(()=>this.createResponse$(()=>o,!1)));case"config":if(t==="get")o.status=d.OK,o.body=this.clone(this.config);else{let s=this.getJsonBody(e.req);Object.assign(this.config,s),this.passThruBackend=void 0,o.status=d.NO_CONTENT}break;default:o=this.createErrorResponseOptions(e.url,d.INTERNAL_SERVER_ERROR,`Unknown command "${r}"`)}return this.createResponse$(()=>o,!1)}createErrorResponseOptions(e,r,t){return{body:{error:`${t}`},url:e,headers:this.createHeaders({"Content-Type":"application/json"}),status:r}}createResponse$(e,r=!0){let t=this.createResponseOptions$(e),o=this.createResponse$fromResponseOptions$(t);return r?this.addDelay(o):o}createResponseOptions$(e){return new T(r=>{let t;try{t=e()}catch(s){let n=s.message||s;t=this.createErrorResponseOptions("",d.INTERNAL_SERVER_ERROR,`${n}`)}let o=t.status;try{t.statusText=o!=null?be(o):void 0}catch{}return o!=null&&ve(o)?(r.next(t),r.complete()):r.error(t),()=>{}})}delete({collection:e,collectionName:r,headers:t,id:o,url:s}){if(o==null)return this.createErrorResponseOptions(s,d.NOT_FOUND,`Missing "${r}" id`);let n=this.removeById(e,o);return{headers:t,status:n||!this.config.delete404?d.NO_CONTENT:d.NOT_FOUND}}findById(e,r){return e.find(t=>t.id===r)}genId(e,r){let t=this.bind("genId");if(t){let o=t(e,r);if(o!=null)return o}return this.genIdDefault(e,r)}genIdDefault(e,r){if(!this.isCollectionIdNumeric(e,r))throw new Error(`Collection '${r}' id type is non-numeric or unknown. Can only generate numeric ids.`);let t=0;return e.reduce((o,s)=>{t=Math.max(t,typeof s.id=="number"?s.id:t)},void 0),t+1}get({collection:e,collectionName:r,headers:t,id:o,query:s,url:n}){let c=e;return o!=null&&o!==""?c=this.findById(e,o):s&&(c=this.applyQuery(e,s)),c?{body:this.bodify(this.clone(c)),headers:t,status:d.OK}:this.createErrorResponseOptions(n,d.NOT_FOUND,`'${r}' with id='${o}' not found`)}getLocation(e){if(!e.startsWith("http")){let r=typeof document>"u"?void 0:document,t=r?r.location.protocol+"//"+r.location.host:"http://fake";e=e.startsWith("/")?t+e:t+"/"+e}return Te(e)}getPassThruBackend(){return this.passThruBackend?this.passThruBackend:this.passThruBackend=this.createPassThruBackend()}getRequestInfoUtils(){return{createResponse$:this.createResponse$.bind(this),findById:this.findById.bind(this),isCollectionIdNumeric:this.isCollectionIdNumeric.bind(this),getConfig:()=>this.config,getDb:()=>this.db,getJsonBody:this.getJsonBody.bind(this),getLocation:this.getLocation.bind(this),getPassThruBackend:this.getPassThruBackend.bind(this),parseRequestUrl:this.parseRequestUrl.bind(this)}}indexOf(e,r){return e.findIndex(t=>t.id===r)}parseId(e,r,t){if(!this.isCollectionIdNumeric(e,r))return t;let o=parseFloat(t);return isNaN(o)?t:o}isCollectionIdNumeric(e,r){return!!(e&&e[0])&&typeof e[0].id=="number"}parseRequestUrl(e){try{let r=this.getLocation(e),t=(this.config.rootPath||"").length,o="";r.host!==this.config.host&&(t=1,o=r.protocol+"//"+r.host+"/");let n=r.path.substring(t).split("/"),c=0,a;this.config.apiBase==null?a=n[c++]:(a=Oe(this.config.apiBase.trim()),a?c=a.split("/").length:c=0),a+="/";let p=n[c++];p=p&&p.split(".")[0];let f=n[c++],I=this.createQueryMap(r.query),v=o+a+p+"/";return{apiBase:a,collectionName:p,id:f,query:I,resourceUrl:v}}catch(r){let t=`unable to parse url '${e}'; original error: ${r.message}`;throw new Error(t)}}post({collection:e,collectionName:r,headers:t,id:o,req:s,resourceUrl:n,url:c}){let a=this.clone(this.getJsonBody(s));if(a.id==null)try{a.id=o||this.genId(e,r)}catch(I){let v=I.message||"";return/id type is non-numeric/.test(v)?this.createErrorResponseOptions(c,d.UNPROCESSABLE_ENTRY,v):this.createErrorResponseOptions(c,d.INTERNAL_SERVER_ERROR,`Failed to generate new id for '${r}'`)}if(o&&o!==a.id)return this.createErrorResponseOptions(c,d.BAD_REQUEST,"Request id does not match item.id");o=a.id;let p=this.indexOf(e,o),f=this.bodify(a);return p===-1?(e.push(a),t.set("Location",n+"/"+o),{headers:t,body:f,status:d.CREATED}):this.config.post409?this.createErrorResponseOptions(c,d.CONFLICT,`'${r}' item with id='${o} exists and may not be updated with POST; use PUT instead.`):(e[p]=a,this.config.post204?{headers:t,status:d.NO_CONTENT}:{headers:t,body:f,status:d.OK})}put({collection:e,collectionName:r,headers:t,id:o,req:s,url:n}){let c=this.clone(this.getJsonBody(s));if(c.id==null)return this.createErrorResponseOptions(n,d.NOT_FOUND,`Missing '${r}' id`);if(o&&o!==c.id)return this.createErrorResponseOptions(n,d.BAD_REQUEST,`Request for '${r}' id does not match item.id`);o=c.id;let a=this.indexOf(e,o),p=this.bodify(c);return a>-1?(e[a]=c,this.config.put204?{headers:t,status:d.NO_CONTENT}:{headers:t,body:p,status:d.OK}):this.config.put404?this.createErrorResponseOptions(n,d.NOT_FOUND,`'${r}' item with id='${o} not found and may not be created with PUT; use POST instead.`):(e.push(c),{headers:t,body:p,status:d.CREATED})}removeById(e,r){let t=this.indexOf(e,r);return t>-1?(e.splice(t,1),!0):!1}resetDb(e){this.dbReadySubject&&this.dbReadySubject.next(!1);let r=this.inMemDbService.createDb(e);return(r instanceof T?r:typeof r.then=="function"?M(r):U(r)).pipe(w()).subscribe(o=>{this.db=o,this.dbReadySubject&&this.dbReadySubject.next(!0)}),this.dbReady}},ye=(()=>{let e=class e extends F{constructor(t,o,s){super(t,o),this.xhrFactory=s}handle(t){try{return this.handleRequest(t)}catch(o){let s=o.message||o,n=this.createErrorResponseOptions(t.url,d.INTERNAL_SERVER_ERROR,`${s}`);return this.createResponse$(()=>n)}}getJsonBody(t){return t.body}getRequestMethod(t){return(t.method||"get").toLowerCase()}createHeaders(t){return new J(t)}createQueryMap(t){let o=new Map;if(t){let s=new X({fromString:t});s.keys().forEach(n=>o.set(n,s.getAll(n)||[]))}return o}createResponse$fromResponseOptions$(t){return t.pipe(A(o=>new z(o)))}createPassThruBackend(){try{return new ee(this.xhrFactory)}catch(t){throw t.message="Cannot create passThru404 backend; "+(t.message||""),t}}};e.\u0275fac=function(o){return new(o||e)(m(b),m(E,8),m(C))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let i=e;return i})();function Ce(i,e,r){return new ye(i,e,r)}var pe=(()=>{let e=class e{static forRoot(t,o){return{ngModule:e,providers:[{provide:b,useClass:t},{provide:E,useValue:o},{provide:W,useFactory:Ce,deps:[b,E,C]}]}}static forFeature(t,o){return e.forRoot(t,o)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=j({type:e}),e.\u0275inj=k({});let i=e;return i})();var le=(()=>{let e=class e{createDb(){return{projects:[{name:"Restaurant Menu Website",lang:"HTML,CSS,Javascript",desc:"This is a responsive restaurant menu website created for my Web Development class. It uses DOM to manipulate HTML elements, handle events, and update the content dynamically.",link:"https://github.com/dttncl/DagatRestaurant"},{name:"Villag\xF4 - Virtual Service Finder",lang:"HTML, CSS, Javascript, PHP, MySQL, API",desc:"It comes with a search feature, enabling users to find service providers that meet their specific needs and preferences, whether it's language, cultural background, or other criteria. It also features a map to locate nearby service providers, making it easy to find solutions within a specific distance. PHP is used for server-side processing such as interacting with database and processing form submissions.",link:"https://github.com/dttncl/villago"},{name:"Portfolio Website",lang:"Angular, TypeScript, SASS",desc:"A platform where you can explore my work, learn about my background, and get in touch. From web development to design, I thrive on turning ideas into reality.",link:"https://github.com/dttncl/portfolio"},{name:"MultiForm Windows",lang:"C#, Windows Forms",desc:"Developed as the final project for Object Oriented Programming using C# and Windows Forms, this application offers essential tools seamlessly integrated into a user-friendly interface. With the Number Generator, Calculator, Converters, and Validator modules, managing various tasks becomes effortless.",link:"https://github.com/dttncl/MultiWinFormsProject"}]}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var he={providers:[ne(de),oe(),q(te,pe.forRoot(le,{dataEncapsulation:!1}))]};var Ee={providers:[se()]},ue=Q(he,Ee);var Ie=()=>re(ae,ue),Ze=Ie;export{Ze as a};
