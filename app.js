(function(){
'use strict';

/* ---------- Casos de uso (plantilla repetible) ---------- */
var CASES=[
 {id:'c1',c:'var(--blue)',t:'Investigación de mercados',em:'mercados',s:'Tamaño de mercado, segmentos y demanda.',tags:['Encuestas','Censo','Segmentación'],k:[[24,'%','Cobertura de segmentos'],[3,'x','Velocidad de análisis'],[12,'','Zonas priorizadas']]},
 {id:'c2',c:'var(--teal)',t:'Análisis de la competencia',em:'competencia',s:'Oferta, posicionamiento y brechas del mercado.',tags:['Benchmark','Listados','Reseñas'],k:[[85,'%','Competidores mapeados'],[7,'','Brechas detectadas'],[18,'%','Ventaja potencial']]},
 {id:'c3',c:'var(--violet)',t:'Definición de precios óptimos',em:'precios',s:'Elasticidad, estacionalidad y optimización de ingresos.',tags:['Elasticidad','Optimización','Series de tiempo'],k:[[12,'%','Incremento de ingreso'],[5,'pts','Mejora de ocupación'],[92,'%','Precisión del pronóstico']]},
 {id:'c4',c:'var(--amber)',t:'Expansión geográfica',em:'geográfica',s:'Dónde abrir, con qué potencial y qué riesgo.',tags:['Geoespacial','Accesibilidad','Demografía'],k:[[40,'','Ubicaciones evaluadas'],[5,'','Candidatas finalistas'],[30,'%','Reducción de riesgo']]},
 {id:'c5',c:'var(--coral)',t:'Riesgos y oportunidades',em:'oportunidades',s:'Detección temprana de amenazas y espacios de crecimiento.',tags:['Alertas','Escenarios','Monitoreo'],k:[[15,'','Alertas activas'],[48,'h','Tiempo de detección'],[9,'','Oportunidades abiertas']]}
];
var mount=document.getElementById('casesMount'),html='';
CASES.forEach(function(x,i){
 var t=x.t.replace(x.em,'<em>'+x.em+'</em>');
 html+='<section class="slide content" id="'+x.id+'" data-sec="3" data-title="Caso '+(i+1)+' · '+x.t+'" data-theme="light">'+
 '<div class="crumb rv" style="--i:0">Casos de uso · Caso 0'+(i+1)+'</div><h2 class="rv" style="--i:1">'+t+'</h2><p class="lead rv" style="--i:2">'+x.s+'</p>'+
 '<div class="body" style="top:190px">'+
 '<div class="chevs rv" style="--i:3;height:120px">'+
  '<div class="chev sa" style="--c:var(--navy)" data-tip="Reto|Describir el requerimiento del cliente en este caso."><small>01</small><h4>Reto</h4></div>'+
  '<div class="chev sa" style="--c:'+x.c+'" data-tip="Método|Técnicas y fuentes de datos utilizadas."><small>02</small><h4>Método</h4></div>'+
  '<div class="chev sa" style="--c:var(--teal)" data-tip="Resultado|Hallazgos y decisión habilitada."><small>03</small><h4>Resultado</h4></div></div>'+
 '<div class="chev-notes rv" style="--i:4;margin-top:16px"><div>Situación y pregunta de negocio del cliente.</div><div>Datos y técnicas aplicadas al caso.</div><div>Qué se descubrió y qué decisión permitió.</div></div>'+
 '<div class="kpis rv" style="--i:5;margin-top:34px">'+x.k.map(function(k){return '<div class="kpi sa" style="--c:'+x.c+'" data-tip="Indicador|Cifra ilustrativa; se sustituirá con el dato real."><div class="v"><span data-count="'+k[0]+'">0</span><small>'+k[1]+'</small></div><p>'+k[2]+'</p></div>';}).join('')+'</div>'+
 '<div class="rv" style="--i:6;display:flex;align-items:center;justify-content:space-between;margin-top:6px"><div class="tags" style="padding:0">'+x.tags.map(function(g){return '<span class="tag">'+g+'</span>';}).join('')+'</div><a class="cta" href="#" target="_blank" rel="noopener">Ver proyecto →</a></div>'+
 '</div></section>';
});
mount.insertAdjacentHTML('beforebegin',html);mount.remove();

/* ---------- Estado y menú ---------- */
var slides=[].slice.call(document.querySelectorAll('.slide')),N=slides.length,cur=-1;
var groups=[];
slides.forEach(function(s,i){
 var g=+s.dataset.sec;
 if(!groups[g])groups[g]={name:g===0?'Inicio':'',items:[]};
 if(s.dataset.secname)groups[g].name=s.dataset.secname;
 groups[g].items.push(i);
});
var nav=document.getElementById('nav'),idxGrid=document.getElementById('idxGrid');
function pad(n){return n<10?'0'+n:''+n;}
groups.forEach(function(g,gi){
 var it=document.createElement('div');it.className='nav-item';it.dataset.g=gi;
 it.innerHTML='<button>'+g.name+'</button><div class="sub">'+g.items.map(function(i){return '<button data-i="'+i+'"><b>'+pad(i+1)+'</b>'+slides[i].dataset.title+'</button>';}).join('')+'</div>';
 nav.appendChild(it);
 var col=document.createElement('div');col.className='idx-col';
 col.innerHTML='<h4>'+g.name+'</h4>'+g.items.map(function(i){return '<button data-i="'+i+'"><b>'+pad(i+1)+'</b>'+slides[i].dataset.title+'</button>';}).join('');
 idxGrid.appendChild(col);
});
document.addEventListener('click',function(e){
 var b=e.target.closest('[data-i]');if(b){go(+b.dataset.i);closeIdx();return;}
 var l=e.target.closest('[data-go]');if(l){e.preventDefault();var t=document.getElementById(l.dataset.go);if(t)go(slides.indexOf(t));return;}
 var nb=e.target.closest('.nav-item>button');if(nb){go(groups[+nb.parentNode.dataset.g].items[0]);}
});

/* ---------- Navegación ---------- */
slides.forEach(function(s){[].slice.call(s.querySelectorAll('.rv')).forEach(function(el,j){if(!el.style.getPropertyValue('--i'))el.style.setProperty('--i',j);});});
function go(i){
 i=Math.max(0,Math.min(N-1,i));if(i===cur)return;
 if(cur>=0)slides[cur].classList.remove('active');
 cur=i;var s=slides[i];s.classList.add('active');
 document.body.dataset.theme=s.dataset.theme;
 document.getElementById('pager').innerHTML='<b>'+pad(i+1)+'</b> / '+pad(N);
 document.getElementById('progress').style.width=((i+1)/N*100)+'%';
 var g=groups[+s.dataset.sec];
 document.getElementById('crumbs').innerHTML=(+s.dataset.sec>0?'<b>'+g.name+'</b> &nbsp;·&nbsp; ':'')+s.dataset.title;
 [].forEach.call(document.querySelectorAll('.nav-item'),function(n){n.classList.toggle('cur',+n.dataset.g===+s.dataset.sec);});
 [].forEach.call(document.querySelectorAll('[data-i]'),function(b){b.classList.toggle('cur',+b.dataset.i===i);});
 countUp(s);
 history.replaceState(null,'','#'+(i+1));
 hideTip();
}
function countUp(s){
 [].forEach.call(s.querySelectorAll('[data-count]'),function(el){
  var to=+el.dataset.count,t0=performance.now(),d=1400;
  (function f(t){var p=Math.min(1,(t-t0)/d);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);})(t0);
 });
}
document.getElementById('prev').onclick=function(){go(cur-1);};
document.getElementById('next').onclick=function(){go(cur+1);};
var idx=document.getElementById('index');
function openIdx(){idx.classList.add('on');}function closeIdx(){idx.classList.remove('on');}
document.getElementById('idxBtn').onclick=openIdx;document.getElementById('idxClose').onclick=closeIdx;
document.addEventListener('keydown',function(e){
 var k=e.key;
 if(k==='ArrowRight'||k==='PageDown'||k===' '){e.preventDefault();go(cur+1);}
 else if(k==='ArrowLeft'||k==='PageUp'){e.preventDefault();go(cur-1);}
 else if(k==='Home')go(0);else if(k==='End')go(N-1);
 else if(k==='m'||k==='M'){idx.classList.contains('on')?closeIdx():openIdx();}
 else if(k==='Escape')closeIdx();
 else if(k==='f'||k==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();}
});
var tx=null;
document.addEventListener('touchstart',function(e){tx=e.touches[0].clientX;},{passive:true});
document.addEventListener('touchend',function(e){if(tx===null)return;var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)go(cur+(d<0?1:-1));tx=null;});
var wl=0;
document.addEventListener('wheel',function(e){var n=Date.now();if(n-wl<700||idx.classList.contains('on')||Math.abs(e.deltaY)<30)return;wl=n;go(cur+(e.deltaY>0?1:-1));},{passive:true});

/* ---------- Escala del escenario ---------- */
var stage=document.getElementById('stage');
function fit(){
 var top=56,bot=46,w=innerWidth,h=innerHeight-top-bot;
 var s=Math.min(w/1280,h/720)*.97;
 stage.style.transform='translate(-50%,-50%) scale('+s+')';
 stage.style.top=(top+h/2)+'px';
}
addEventListener('resize',fit);fit();

/* ---------- Tooltips y resaltado enlazado ---------- */
var tip=document.getElementById('tip');
function hideTip(){tip.classList.remove('on');}
document.addEventListener('mouseover',function(e){
 var t=e.target.closest('[data-tip]');
 if(t){var p=t.dataset.tip.split('|');tip.innerHTML='<b>'+p[0]+'</b><span>'+(p[1]||'')+'</span>';tip.classList.add('on');}
 else hideTip();
 var g=e.target.closest('[data-g]');
 [].forEach.call(document.querySelectorAll('.hl'),function(x){x.classList.remove('hl');});
 if(g)[].forEach.call(document.querySelectorAll('[data-g="'+g.dataset.g+'"]'),function(x){x.classList.add('hl');});
});
document.addEventListener('mousemove',function(e){
 if(!tip.classList.contains('on'))return;
 var x=e.clientX+18,y=e.clientY+18;
 if(x+300>innerWidth)x=e.clientX-310;if(y+110>innerHeight)y=e.clientY-100;
 tip.style.left=x+'px';tip.style.top=y+'px';
});

addEventListener('hashchange',function(){var n=parseInt(location.hash.slice(1),10);if(!isNaN(n))go(n-1);});
var start=parseInt(location.hash.slice(1),10);
go(isNaN(start)?0:start-1);
})();
