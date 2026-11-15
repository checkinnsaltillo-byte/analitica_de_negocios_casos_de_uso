(function(){
'use strict';

/* ================= Datos de los casos ================= */
var BLOCKS=[
 {n:'Ventas',s:'Ventas',c:'var(--blue)'},
 {n:'Expansión geográfica',s:'Expansión',c:'var(--amber)'},
 {n:'Entorno socioeconómico',s:'Socioeconómico',c:'var(--violet)'},
 {n:'Entorno urbano',s:'Urbano',c:'var(--teal)'},
 {n:'Entorno ambiental',s:'Ambiental',c:'var(--green)'}
];
var CASES=[
 {id:'k1',bi:0,n:1,t:'Preferencias del consumidor',em:'consumidor',sub:'Qué valora el cliente y qué lo deja satisfecho · Refaccionaria',
  q:'¿Qué atributos —precio, disponibilidad, atención, ubicación— prefieren los clientes y cuáles explican su satisfacción?',
  h:'La satisfacción depende de pocos atributos clave, y los clientes no son iguales: cada perfil valora distinto.',
  m:[['Conjoint basado en elección','Pide elegir entre paquetes de atributos para descubrir cuánto pesa cada uno.'],['Clases latentes','Encuentra grupos ocultos con preferencias parecidas.'],['Correspondencias múltiples (MCA)','Resume varias variables categóricas en un mapa de perfiles.'],['Logit ordinal','Modela una calificación ordenada (muy mal … muy bien) según sus causas.'],['Imputación de faltantes','Rellena respuestas vacías con ecuaciones encadenadas.']],
  k:[[76,'%','opinión buena o muy buena'],[5,'%','opinión negativa'],[3,'','perfiles de cliente']],
  l:'No existe «el cliente promedio»: el mensaje de precio o promoción debe hablarle a cada perfil.',
  ev:{t:'Evidencia: tres perfiles de cliente',imgs:[['cons-mca','Mapa de correspondencias: grupos A, B y C de clientes']],
   r:['Cada punto es un taller; los puntos cercanos tienen perfiles parecidos.','Jóvenes/pequeños, maduros/medianos y adultos/grandes responden distinto.','Fortalezas: disponibilidad, calidad y atención. Debilidad: precio.'],
   w:'Lo que la gente dice en una encuesta no siempre coincide con lo que realmente compra.'}},
 {id:'k2',bi:0,n:2,t:'Predicción de ventas de una tienda nueva',em:'tienda nueva',sub:'¿Cuánto venderá algo que aún no existe?',
  q:'¿Cuánto venderá una tienda que todavía no existe?',
  h:'Las tiendas parecidas en tipo, entorno y ubicación venden parecido, así que se puede estimar por similitud.',
  m:[['Coeficiente de Gower','Mide qué tan parecidas son dos tiendas aunque sus variables sean numéricas y categóricas.'],['Escalamiento multidimensional','Convierte las similitudes en un mapa donde la cercanía significa parecido.'],['Agrupamiento k-means','Separa las tiendas en grupos (aquí, 5 segmentos).'],['Modelo de pronóstico por grupo','Cada segmento tiene su propio modelo de ventas.']],
  k:[[2943,'','tiendas de referencia'],[5,'','segmentos de tiendas'],[12,'meses','de historial por tienda']],
  l:'Una cifra de ventas es una estimación: se comunica con su margen de error, no como certeza.',
  ev:{t:'Evidencia: el mapa de similitud y la predicción',imgs:[['pred-mds','Cada punto es una tienda; cercanía = parecido'],['pred-cancun','Ventas reales vs. predichas (plaza Cancún)']],
   r:['Las variables mezcladas se convierten en «distancias» entre tiendas.','Los puntos cercanos se agrupan en segmentos, cada uno con su modelo.','Cuanto más cerca de la diagonal, mejor la predicción: error de clasificación de 0 % en Cancún y 4.8 % en Acapulco.'],
   w:'Es muy sensible a datos inconsistentes de la tienda nueva: si sus variables no son coherentes, la predicción se desvía.'}},
 {id:'k3',bi:1,n:3,t:'Competencia y zonas de influencia',em:'competencia',sub:'¿Qué tan competido está el mercado en cada zona?',
  q:'¿Qué tan competido está el mercado en cada zona y dónde queda población con una sola opción?',
  h:'El número y la concentración de competidores cercanos cambian el volumen y el monto de transacciones de una tienda.',
  m:[['Polígonos de influencia','Zonas alrededor de cada tienda: radio de 500 m, tiempo de traslado (isócronas) o AGEB del INEGI.'],['Índice Herfindahl-Hirschman','Mide concentración: más alto = menos competencia.'],['Contrastes de hipótesis y ANOVA','Comprueban si las diferencias entre zonas son reales o casualidad.'],['Regresión y machine learning','Cuantifican qué factores pesan más y con qué capacidad predictiva.']],
  k:[[46,'','redes de competidores'],[22790,'','tiendas analizadas'],[80528,'','ubicaciones únicas']],
  l:'Un índice resume la competencia en un número; hay que explicar qué mide y qué no.',
  ev:{t:'Evidencia: concentración y zonas de influencia',imgs:[['comp-hhi','Índice HHI: sin y con presencia de la tienda'],['comp-isocronas','Isócronas: zonas por minutos de traslado']],
   r:['A mayor HHI, más concentrado el mercado (menos competencia).','La zona de influencia puede ser un círculo, un tiempo de traslado o un AGEB.','La oportunidad aparece donde la población tiene una sola alternativa.'],
   w:'Las distancias en línea recta ignoran calles, barreras y movilidad real.'}},
 {id:'k4',bi:2,n:4,t:'Impacto socioeconómico de una empresa',em:'socioeconómico',sub:'Derrama, empleo, impuestos y pequeños comercios',
  q:'¿Qué derrama económica genera la empresa y afecta a los pequeños comercios («changarros»)?',
  h:'La expansión de la cadena no desplaza directamente a los pequeños comercios: el efecto depende del entorno económico local.',
  m:[['Series de tiempo económicas','Siguen natalidad y mortalidad de negocios junto con variables económicas.'],['Índices de concentración','IC, ICE e ICEF: combinan establecimientos, empleo, gasto e ingreso.'],['Polígonos de influencia (Voronoi)','Dividen el territorio según la tienda más cercana.'],['Fuentes oficiales y gremiales','INEGI (DENUE, censos, encuestas) y ANTAD.']],
  k:[[767,'','municipios con presencia'],[77199,'','empleos directos en tienda'],[33,'×','impuestos 2014 vs. programa federal para changarros']],
  l:'Un hallazgo matizado («no afecta directamente, aunque hay relación inversa de largo plazo») comunica mejor que un sí o un no.',
  ev:{t:'Evidencia: áreas de influencia y cinco dimensiones',imgs:[['soc-voronoi','Polígonos de influencia: cada área, la tienda más cercana']],
   r:['Cinco dimensiones: competitividad, bienestar social, derrama, contribución fiscal e inclusión financiera.','Se compara el polígono contra el municipio, el estado y el país.','La relación inversa observada puede ser coyuntural: correlación no es causalidad.'],
   w:'Datos de 2014: las conclusiones deben actualizarse antes de usarse hoy.'}},
 {id:'k5',bi:2,n:5,t:'Percepción social: medios y redes',em:'medios y redes',sub:'¿Cómo se habla de nosotros y cuándo cambia la conversación?',
  q:'¿Cómo se habla de nuestra organización y cuándo cambia la conversación?',
  h:'La percepción pública responde a los acontecimientos y puede medirse, compararse y anticiparse con monitoreo continuo.',
  m:[['Procesamiento de lenguaje natural','Enseña a la computadora a leer y entender texto.'],['Minería de textos','Extrae temas y patrones de miles de noticias.'],['Análisis de sentimiento','Clasifica el tono: positivo, neutral o negativo.'],['Clasificación automática','Agrupa noticias por tema sin etiquetas previas (no supervisado).']],
  k:[[650,'+','fuentes periodísticas digitales'],[5,'','etapas: del texto a la alerta'],[3,'','preguntas: percepción, tendencia, comparación']],
  l:'Es el puente directo con tu carrera: escuchar al entorno y llevar esa información a quien decide.',
  ev:{t:'Evidencia: del texto a la alerta',imgs:[['med-textmining','Minería de textos'],['med-red','Red de temas y entidades'],['med-sentimiento','Tono: negativo, neutral, positivo']],
   r:['Se extraen noticias, se clasifican por tema y se mide el tono.','Las alertas por correo avisan cuando un tema empieza a crecer.','Se pueden comparar dos entidades por los conceptos con que se asocian.'],
   w:'El tono automático puede fallar con ironía o contexto: se valida con revisión humana.'}},
 {id:'k6',bi:3,n:6,t:'Movilidad urbana: flujo vehicular',em:'flujo vehicular',sub:'¿Cuánto tránsito pasa frente a cada tienda?',
  q:'¿Cuántos vehículos pasan frente a cada tienda en horas laborales y eso explica sus ventas?',
  h:'Un mayor flujo potencial frente a la tienda se asocia con mayores ventas, y existen horas críticas de congestión.',
  m:[['Tráfico en vivo (Google)','Tiempos de recorrido reales por vialidad y hora.'],['Velocidad = distancia / tiempo','Cada tramo vial tiene su velocidad según la hora.'],['Flujo = carriles × velocidad','Estima cuántos vehículos pueden pasar por un tramo.'],['Agrupamiento de tiendas','Perfila tiendas por su dinámica vial y entorno.']],
  k:[[3,'','niveles de vialidad analizados'],[24,'h','curva diaria de velocidad'],[7,'días','de patrón semanal']],
  l:'Los datos masivos de tráfico convierten «hay mucho tránsito» en un indicador comparable.',
  ev:{t:'Evidencia: la velocidad cambia con la hora',imgs:[['vial-velocidad','Velocidad por hora y vialidad (línea resaltada: un día)']],
   r:['La velocidad cae en horas pico: ahí están las horas críticas.','Cada panel es una vialidad; las líneas tenues son el resto de la semana.','Con carriles y velocidad se estima el flujo potencial de vehículos.'],
   w:'Es un flujo potencial estimado, no un conteo real de vehículos.'}},
 {id:'k7',bi:4,n:7,t:'Entorno ambiental: residuos sólidos',em:'residuos sólidos',sub:'¿Cuánta basura se genera y dónde conviene disponerla?',
  q:'¿Cuánta basura se genera, dónde conviene disponerla y dónde aparecen basureros clandestinos?',
  h:'Factores sociales, económicos y urbanos explican el deterioro ambiental y permiten anticipar dónde aparecerán basureros clandestinos.',
  m:[['Estimación de residuos','Cuánta basura genera cada municipio, de qué tipo y de dónde viene.'],['Análisis multicriterio','Evalúa sitios contra los requisitos de la normatividad.'],['Agrupamiento geográfico','Reúne sitios cercanos para ver carencias por región.'],['Imágenes satelitales e IA','Detectan patrones asociados a basureros clandestinos.']],
  k:[[4,'','módulos: calculadora, evaluación, ubicación y detección'],[15,'años','de un sitio observado (2004–2019)'],[1,'','normativa que se debe cumplir']],
  l:'Para reportar sostenibilidad y gobernar el entorno, la evidencia visual y cuantitativa vuelve creíble el mensaje.',
  ev:{t:'Evidencia: un sitio a través del tiempo',imgs:[['amb-2004','2004: comienza la alteración del entorno'],['amb-2007','2007: aumenta la extracción y los jales'],['amb-2019','2019: acumulación mezclada con residuos'],['amb-deteccion','Detección automática (en verde)']],
   r:['Las imágenes satelitales muestran cómo cambia un sitio en 15 años.','Un modelo de IA señala patrones compatibles con basureros clandestinos.','El análisis multicriterio indica qué sitios cumplen o no la norma.'],
   w:'La detección por imagen no sustituye la verificación en campo.'}}
];
var BRIDGES=[
 {after:'k2',from:0,to:1,s:'Ya sabemos qué valora el cliente y cuánto puede vender una tienda.',a:'¿<em>Dónde</em> conviene abrir la siguiente?'},
 {after:'k3',from:1,to:2,s:'Abrir tiendas también transforma el entorno donde operamos.',a:'¿Qué <em>efecto</em> tenemos y cómo nos perciben?'},
 {after:'k5',from:2,to:3,s:'La sociedad vive en ciudades, y las ciudades se mueven.',a:'¿Cómo influye la <em>movilidad</em> en la operación?'},
 {after:'k6',from:3,to:4,s:'La ciudad también deja huella en el ambiente.',a:'¿Cómo medimos y reducimos el <em>impacto ambiental</em>?'}
];
var BID={k1:'',k3:'b1',k4:'b2',k6:'b3',k7:'b4'};

function thread(bi){
 return '<div class="thread" style="--c:'+BLOCKS[bi].c+'">'+BLOCKS.map(function(b,i){return '<span class="'+(i===bi?'on':i<bi?'done':'')+'">'+b.s+'</span>';}).join('')+'</div>';
}
function ficha(x){
 var B=BLOCKS[x.bi],t=x.t.replace(x.em,'<em>'+x.em+'</em>');
 return '<section class="slide content" '+(BID[x.id]?'id="'+BID[x.id]+'" ':'')+'data-sec="3" data-block="'+B.n+'" data-bi="'+x.bi+'" data-title="Caso '+x.n+' · '+x.t+'" data-theme="light" style="--c:'+B.c+'">'+
 '<div class="crumb rv" style="--i:0">'+B.n+' · Caso '+x.n+'</div>'+thread(x.bi)+
 '<h2 class="rv" style="--i:1">'+t+'</h2><p class="lead rv" style="--i:2">'+x.sub+'</p>'+
 '<div class="fiche"><div class="l">'+
  '<div class="pq q rv" style="--i:3"><small>PREGUNTA</small><p>'+x.q+'</p></div>'+
  '<div class="pq h rv" style="--i:4"><small>HIPÓTESIS</small><p>'+x.h+'</p></div></div>'+
 '<div class="r"><div class="rv" style="--i:5"><div class="lbl">MÉTODOS</div><div class="mets">'+x.m.map(function(m){return '<div class="met" data-tip="'+m[0]+'|'+m[1]+'"><i></i>'+m[0]+'</div>';}).join('')+'</div></div>'+
 '<div class="rv" style="--i:6"><div class="lbl">EJEMPLO DE RESULTADO</div><div class="kpis">'+x.k.map(function(k){return '<div class="kpi sa" style="--c:'+B.c+'"><div class="v"><span data-count="'+k[0]+'">0</span><small>'+k[1]+'</small></div><p>'+k[2]+'</p></div>';}).join('')+'</div></div></div></div>'+
 '<div class="strip rv" style="--i:7"><b>LECTURA PARA EL COMUNICADOR</b><span>'+x.l+'</span></div></section>';
}
function evid(x){
 var B=BLOCKS[x.bi],e=x.ev,n=e.imgs.length;
 return '<section class="slide content" data-sec="3" data-block="'+B.n+'" data-bi="'+x.bi+'" data-title="Caso '+x.n+' · evidencia" data-theme="light" style="--c:'+B.c+'">'+
 '<div class="crumb rv" style="--i:0">'+B.n+' · Caso '+x.n+' · Evidencia</div>'+thread(x.bi)+
 '<h2 class="rv" style="--i:1;font-size:32px">'+e.t+'</h2>'+
 '<div class="evid" style="top:130px"><div class="shots n'+n+' rv" style="--i:3">'+e.imgs.map(function(i){return '<figure class="shot"><div class="img"><img src="assets/'+i[0]+'.jpg" alt="'+i[1]+'"></div><figcaption>'+i[1]+'</figcaption></figure>';}).join('')+'</div>'+
 '<div class="read"><div class="lbl rv" style="--i:4;margin:0">CÓMO SE LEE</div>'+e.r.map(function(r,i){return '<div class="rd sa rv" style="--i:'+(5+i)+'"><b>'+(i+1)+'</b><span>'+r+'</span></div>';}).join('')+
 '<div class="warn rv" style="--i:9"><b>CUIDADO</b>'+e.w+'</div></div></div></section>';
}
function bridge(b){
 var f=BLOCKS[b.from],t=BLOCKS[b.to];
 return '<section class="slide content bridge" data-sec="3" data-block="Enlace" data-bi="'+b.to+'" data-title="Enlace · '+f.s+' → '+t.s+'" data-theme="light" style="--c:'+t.c+'">'+thread(b.to)+
 '<div class="from rv" style="--i:1">'+b.s+'</div><div class="ask rv" style="--i:2">'+b.a+'</div><div class="nxt rv" style="--i:3">SIGUIENTE BLOQUE · '+t.n.toUpperCase()+' →</div></section>';
}
var stream='';
stream+=document.getElementById('tplTheory').innerHTML;
CASES.forEach(function(x){
 stream+=ficha(x)+evid(x);
 BRIDGES.forEach(function(b){if(b.after===x.id)stream+=bridge(b);});
});
var mount=document.getElementById('casesMount');
mount.insertAdjacentHTML('beforebegin',stream);mount.remove();
// el puente teórico necesita su rastreador
[].forEach.call(document.querySelectorAll('.thread[data-bi]'),function(t){var bi=+t.dataset.bi;t.outerHTML=thread(bi).replace('class="thread"','class="thread"');});

/* ================= Estado y menú ================= */
var slides=[].slice.call(document.querySelectorAll('.slide')),N=slides.length,cur=-1;
var groups=[];
slides.forEach(function(s,i){
 var g=+s.dataset.sec;
 if(!groups[g])groups[g]={name:g===0?'Inicio':'',items:[]};
 if(s.dataset.secname)groups[g].name=s.dataset.secname;
 groups[g].items.push(i);
});
function pad(n){return n<10?'0'+n:''+n;}
function listHTML(g){
 var last='',h='';
 g.items.forEach(function(i){
  var s=slides[i],b=s.dataset.block;
  if(b&&b!==last&&b!=='Enlace'){last=b;h+='<div class="subh" style="--c:'+BLOCKS[+s.dataset.bi].c+'"><i></i>'+b+'</div>';}
  h+='<button data-i="'+i+'"><b>'+pad(i+1)+'</b>'+s.dataset.title+'</button>';
 });
 return h;
}
var nav=document.getElementById('nav'),idxGrid=document.getElementById('idxGrid');
groups.forEach(function(g,gi){
 var it=document.createElement('div');it.className='nav-item';it.dataset.g=gi;
 it.innerHTML='<button>'+g.name+'</button><div class="sub">'+listHTML(g)+'</div>';
 nav.appendChild(it);
 var col=document.createElement('div');col.className='idx-col';
 col.innerHTML='<h4>'+g.name+'</h4>'+listHTML(g);
 idxGrid.appendChild(col);
});
document.addEventListener('click',function(e){
 var b=e.target.closest('[data-i]');if(b){go(+b.dataset.i);closeIdx();return;}
 var l=e.target.closest('[data-go]');if(l){e.preventDefault();var t=document.getElementById(l.dataset.go);if(t)go(slides.indexOf(t));return;}
 var nb=e.target.closest('.nav-item>button');if(nb){go(groups[+nb.parentNode.dataset.g].items[0]);}
});

/* ================= Navegación ================= */
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
  (function f(t){var p=Math.min(1,(t-t0)/d);el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(f);})(t0);
 });
}
document.getElementById('prev').onclick=function(){go(cur-1);};
document.getElementById('next').onclick=function(){go(cur+1);};
var idx=document.getElementById('index');
function openIdx(){idx.classList.add('on');}function closeIdx(){idx.classList.remove('on');}
document.getElementById('idxBtn').onclick=openIdx;document.getElementById('idxClose').onclick=closeIdx;
document.addEventListener('keydown',function(e){
 if(/INPUT|TEXTAREA/.test(e.target.tagName)&&e.key!=='Escape')return;
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
document.addEventListener('wheel',function(e){var n=Date.now();if(n-wl<700||idx.classList.contains('on')||e.target.closest('.sub')||Math.abs(e.deltaY)<30)return;wl=n;go(cur+(e.deltaY>0?1:-1));},{passive:true});

/* ================= Escala del escenario ================= */
var stage=document.getElementById('stage');
function fit(){
 var top=56,bot=46,w=innerWidth,h=innerHeight-top-bot;
 var s=Math.min(w/1280,h/720)*.97;
 stage.style.transform='translate(-50%,-50%) scale('+s+')';
 stage.style.top=(top+h/2)+'px';
}
addEventListener('resize',fit);fit();

/* ================= Tooltips y resaltado ================= */
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

/* ================= Widgets interactivos ================= */
// 1) Utilidad → probabilidad (logit multinomial)
(function(){
 var sP=document.getElementById('sP'),sQ=document.getElementById('sQ');if(!sP)return;
 var b={p:-1.5,q:0.625,m:1.375};
 function U(p,q,m){return b.p*p+b.q*q+b.m*m;}
 function upd(){
  var pB=+sP.value,qB=+sQ.value;
  var u=[U(3,4,0),U(pB,qB,1),U(4,5,1)];
  var ex=u.map(Math.exp),sum=ex[0]+ex[1]+ex[2],p=ex.map(function(v){return v/sum;});
  ['A','B','C'].forEach(function(k,i){
   document.getElementById('p'+k).style.width=(p[i]*100)+'%';
   document.getElementById('t'+k).textContent=(p[i]*100).toFixed(1)+'%';
   document.querySelector('#u'+k+' .u').textContent=u[i].toFixed(1).replace('-','–');
  });
  document.getElementById('vPB').textContent=pB;document.getElementById('vQB').textContent=qB;
  var mx=u.indexOf(Math.max.apply(null,u));
  ['A','B','C'].forEach(function(k,i){document.getElementById('u'+k).className=i===mx?'win':'';});
 }
 sP.oninput=upd;sQ.oninput=upd;upd();
})();
// 2) Eje truncado
(function(){
 var box=document.getElementById('vbars');if(!box)return;
 var vals=[96,98,101,104];
 box.innerHTML=vals.map(function(v){return '<div class="vb"><span>'+v+'</span></div>';}).join('');
 var bars=[].slice.call(box.children),txt=document.getElementById('axTxt');
 function set(min){
  var max=108;
  bars.forEach(function(b,i){b.style.height=((vals[i]-min)/(max-min)*100)+'%';});
  document.getElementById('ax0').classList.toggle('on',min===0);document.getElementById('ax90').classList.toggle('on',min===90);
  txt.innerHTML=min===0?'«Ventas <b style="font-weight:500">crecen de forma moderada</b>».':'«Ventas <b style="font-weight:500;color:var(--coral)">se disparan</b>».';
 }
 document.getElementById('ax0').onclick=function(){set(0);};document.getElementById('ax90').onclick=function(){set(90);};
 setTimeout(function(){set(90);},50);
})();
// 3) Limpieza de datos
(function(){
 var t=document.getElementById('dtbl');if(!t)return;
 var mv=document.getElementById('meanV'),mt=document.getElementById('meanTxt');
 document.getElementById('clean').onclick=function(){t.className='dtbl tidy';mv.textContent='1,225';mt.textContent='Con unidades homogéneas, sin duplicados y sin el valor atípico, el promedio refleja lo que realmente vende una tienda típica.';};
 document.getElementById('dirty').onclick=function(){t.className='dtbl dirty';mv.textContent='25,125';mt.textContent='Con los datos crudos, un solo valor atípico y los duplicados inflan el promedio muy por encima de lo que vende cualquier tienda.';};
})();

addEventListener('hashchange',function(){var n=parseInt(location.hash.slice(1),10);if(!isNaN(n))go(n-1);});
var start=parseInt(location.hash.slice(1),10);
go(isNaN(start)?0:start-1);
})();
