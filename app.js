(function(){
'use strict';

/* ================= Datos de los casos ================= */
/* ================= Íconos de tarjetas ================= */
var P={
 store:'<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9"/><path d="M5 12v8h14v-8M10 20v-5h4v5"/>',
 car:'<path d="M4 15v-3l2-5h12l2 5v3z"/><circle cx="8" cy="16.5" r="1.8"/><circle cx="16" cy="16.5" r="1.8"/><path d="M4 12h16"/>',
 bin:'<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v6M14 11v6"/>',
 chat:'<path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',
 trend:'<polyline points="3,17 9,11 13,15 21,6"/><polyline points="15,6 21,6 21,12"/>',
 tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
 pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 8v5"/><circle cx="12" cy="16" r=".6"/>',
 leaf:'<path d="M5 19C5 11 10 5 20 5c0 10-6 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6"/><circle cx="17" cy="9" r="2.2"/><path d="M16 14c3 0 5 2 5 5"/>',
 bars:'<rect x="4" y="12" width="3" height="8"/><rect x="10.5" y="7" width="3" height="13"/><rect x="17" y="3" width="3" height="17"/>',
 mega:'<path d="M3 10v4h3l7 4V6L6 10z"/><path d="M16 9c1.5 1 1.5 5 0 6"/>',
 eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7"/>',
 scale:'<path d="M12 4v16M6 20h12M5 7h14"/><path d="M5 7l-3 7h6zM19 7l-3 7h6z"/>',
 cluster:'<circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M8 7h8M7 9l4 6M17 9l-4 6"/>',
 map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
 text:'<path d="M4 6h16M4 11h16M4 16h10"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
 line:'<path d="M3 19L21 5"/><circle cx="6" cy="16" r="1.3"/><circle cx="11" cy="14" r="1.3"/><circle cx="14" cy="9" r="1.3"/><circle cx="19" cy="7" r="1.3"/>',
 split:'<circle cx="12" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M12 7v4M12 11L6 17M12 11l6 6"/>',
 q:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7"/><circle cx="12" cy="17" r=".7"/>',
 flag:'<path d="M5 21V4M5 5h13l-2 4 2 4H5"/>'
};

var BLOCKS=[
 {n:'Ventas',s:'Ventas',c:'var(--blue)'},
 {n:'Expansión geográfica',s:'Expansión',c:'var(--amber)'},
 {n:'Entorno socioeconómico',s:'Socioeconómico',c:'var(--violet)'},
 {n:'Entorno urbano',s:'Urbano',c:'var(--teal)'},
 {n:'Entorno ambiental',s:'Ambiental',c:'var(--green)'}
];
var CASES=[
 {id:'k1',b:['people','tag','q'],bi:0,n:1,t:'Preferencias del consumidor',em:'consumidor',sub:'Qué valora el cliente y qué lo deja satisfecho · Refaccionaria',
  q:'¿Qué atributos —precio, disponibilidad, atención, ubicación— prefieren los clientes y cuáles explican su satisfacción?',
  h:'La satisfacción depende de pocos atributos clave, y los clientes no son iguales: cada perfil valora distinto.',
  m:[['Conjoint basado en elección','Pide elegir entre paquetes de atributos para descubrir cuánto pesa cada uno.'],['Clases latentes','Encuentra grupos ocultos con preferencias parecidas.'],['Correspondencias múltiples (MCA)','Resume varias variables categóricas en un mapa de perfiles.'],['Logit ordinal','Modela una calificación ordenada (muy mal … muy bien) según sus causas.'],['Imputación de faltantes','Rellena respuestas vacías con ecuaciones encadenadas.']],
  k:[[76,'%','opinión buena o muy buena'],[5,'%','opinión negativa'],[3,'','perfiles de cliente']],
  l:'No existe «el cliente promedio»: el mensaje de precio o promoción debe hablarle a cada perfil.',
  ev:{t:'Evidencia: tres perfiles de cliente',imgs:[['cons-mca','Mapa de correspondencias: grupos A, B y C de clientes']],
   r:['Cada punto es un taller; los puntos cercanos tienen perfiles parecidos.','Jóvenes/pequeños, maduros/medianos y adultos/grandes responden distinto.','Fortalezas: disponibilidad, calidad y atención. Debilidad: precio.'],
   w:'Lo que la gente dice en una encuesta no siempre coincide con lo que realmente compra.'}},
 {id:'k2',b:['store','trend','cluster'],bi:0,n:2,t:'Predicción de ventas de una tienda nueva',em:'tienda nueva',sub:'¿Cuánto venderá algo que aún no existe?',
  q:'¿Cuánto venderá una tienda que todavía no existe?',
  h:'Las tiendas parecidas en tipo, entorno y ubicación venden parecido, así que se puede estimar por similitud.',
  m:[['Coeficiente de Gower','Mide qué tan parecidas son dos tiendas aunque sus variables sean numéricas y categóricas.'],['Escalamiento multidimensional','Convierte las similitudes en un mapa donde la cercanía significa parecido.'],['Agrupamiento k-means','Separa las tiendas en grupos (aquí, 5 segmentos).'],['Modelo de pronóstico por grupo','Cada segmento tiene su propio modelo de ventas.']],
  k:[[2943,'','tiendas de referencia'],[5,'','segmentos de tiendas'],[12,'meses','de historial por tienda']],
  l:'Una cifra de ventas es una estimación: se comunica con su margen de error, no como certeza.',
  ev:{t:'Evidencia: el mapa de similitud y la predicción',imgs:[['pred-mds','Cada punto es una tienda; cercanía = parecido'],['pred-cancun','Ventas reales vs. predichas (plaza Cancún)']],
   r:['Las variables mezcladas se convierten en «distancias» entre tiendas.','Los puntos cercanos se agrupan en segmentos, cada uno con su modelo.','Cuanto más cerca de la diagonal, mejor la predicción: error de clasificación de 0 % en Cancún y 4.8 % en Acapulco.'],
   w:'Es muy sensible a datos inconsistentes de la tienda nueva: si sus variables no son coherentes, la predicción se desvía.'}},
 {id:'k3',b:['pin','target','map'],bi:1,n:3,t:'Competencia y zonas de influencia',em:'competencia',sub:'¿Qué tan competido está el mercado en cada zona?',
  q:'¿Qué tan competido está el mercado en cada zona y dónde queda población con una sola opción?',
  h:'El número y la concentración de competidores cercanos cambian el volumen y el monto de transacciones de una tienda.',
  m:[['Polígonos de influencia','Zonas alrededor de cada tienda: radio de 500 m, tiempo de traslado (isócronas) o AGEB del INEGI.'],['Índice Herfindahl-Hirschman','Mide concentración: más alto = menos competencia.'],['Contrastes de hipótesis y ANOVA','Comprueban si las diferencias entre zonas son reales o casualidad.'],['Regresión y machine learning','Cuantifican qué factores pesan más y con qué capacidad predictiva.']],
  k:[[46,'','redes de competidores'],[22790,'','tiendas analizadas'],[80528,'','ubicaciones únicas']],
  l:'Un índice resume la competencia en un número; hay que explicar qué mide y qué no.',
  ev:{t:'Evidencia: concentración y zonas de influencia',imgs:[['comp-hhi','Índice HHI: sin y con presencia de la tienda'],['comp-isocronas','Isócronas: zonas por minutos de traslado']],
   r:['A mayor HHI, más concentrado el mercado (menos competencia).','La zona de influencia puede ser un círculo, un tiempo de traslado o un AGEB.','La oportunidad aparece donde la población tiene una sola alternativa.'],
   w:'Las distancias en línea recta ignoran calles, barreras y movilidad real.'}},
 {id:'k4',b:['people','doc','scale'],bi:2,n:4,t:'Impacto socioeconómico de una empresa',em:'socioeconómico',sub:'Derrama, empleo, impuestos y pequeños comercios',
  q:'¿Qué derrama económica genera la empresa y afecta a los pequeños comercios («changarros»)?',
  h:'La expansión de la cadena no desplaza directamente a los pequeños comercios: el efecto depende del entorno económico local.',
  m:[['Series de tiempo económicas','Siguen natalidad y mortalidad de negocios junto con variables económicas.'],['Índices de concentración','IC, ICE e ICEF: combinan establecimientos, empleo, gasto e ingreso.'],['Polígonos de influencia (Voronoi)','Dividen el territorio según la tienda más cercana.'],['Fuentes oficiales y gremiales','INEGI (DENUE, censos, encuestas) y ANTAD.']],
  k:[[767,'','municipios con presencia'],[77199,'','empleos directos en tienda'],[33,'×','impuestos 2014 vs. programa federal para changarros']],
  l:'Un hallazgo matizado («no afecta directamente, aunque hay relación inversa de largo plazo») comunica mejor que un sí o un no.',
  ev:{t:'Evidencia: áreas de influencia y cinco dimensiones',imgs:[['soc-voronoi','Polígonos de influencia: cada área, la tienda más cercana']],
   r:['Cinco dimensiones: competitividad, bienestar social, derrama, contribución fiscal e inclusión financiera.','Se compara el polígono contra el municipio, el estado y el país.','La relación inversa observada puede ser coyuntural: correlación no es causalidad.'],
   w:'Datos de 2014: las conclusiones deben actualizarse antes de usarse hoy.'}},
 {id:'k5',b:['mega','chat','text'],bi:2,n:5,t:'Percepción social: medios y redes',em:'medios y redes',sub:'¿Cómo se habla de nosotros y cuándo cambia la conversación?',
  q:'¿Cómo se habla de nuestra organización y cuándo cambia la conversación?',
  h:'La percepción pública responde a los acontecimientos y puede medirse, compararse y anticiparse con monitoreo continuo.',
  m:[['Procesamiento de lenguaje natural','Enseña a la computadora a leer y entender texto.'],['Minería de textos','Extrae temas y patrones de miles de noticias.'],['Análisis de sentimiento','Clasifica el tono: positivo, neutral o negativo.'],['Clasificación automática','Agrupa noticias por tema sin etiquetas previas (no supervisado).']],
  k:[[650,'+','fuentes periodísticas digitales'],[5,'','etapas: del texto a la alerta'],[3,'','preguntas: percepción, tendencia, comparación']],
  l:'Es el puente directo con tu carrera: escuchar al entorno y llevar esa información a quien decide.',
  ev:{t:'Evidencia: del texto a la alerta',imgs:[['med-textmining','Minería de textos'],['med-red','Red de temas y entidades'],['med-sentimiento','Tono: negativo, neutral, positivo']],
   r:['Se extraen noticias, se clasifican por tema y se mide el tono.','Las alertas por correo avisan cuando un tema empieza a crecer.','Se pueden comparar dos entidades por los conceptos con que se asocian.'],
   w:'El tono automático puede fallar con ironía o contexto: se valida con revisión humana.'}},
 {id:'k6',b:['car','map','trend'],bi:3,n:6,t:'Movilidad urbana: flujo vehicular',em:'flujo vehicular',sub:'¿Cuánto tránsito pasa frente a cada tienda?',
  q:'¿Cuántos vehículos pasan frente a cada tienda en horas laborales y eso explica sus ventas?',
  h:'Un mayor flujo potencial frente a la tienda se asocia con mayores ventas, y existen horas críticas de congestión.',
  m:[['Tráfico en vivo (Google)','Tiempos de recorrido reales por vialidad y hora.'],['Velocidad = distancia / tiempo','Cada tramo vial tiene su velocidad según la hora.'],['Flujo = carriles × velocidad','Estima cuántos vehículos pueden pasar por un tramo.'],['Agrupamiento de tiendas','Perfila tiendas por su dinámica vial y entorno.']],
  k:[[3,'','niveles de vialidad analizados'],[24,'h','curva diaria de velocidad'],[7,'días','de patrón semanal']],
  l:'Los datos masivos de tráfico convierten «hay mucho tránsito» en un indicador comparable.',
  ev:{t:'Evidencia: la velocidad cambia con la hora',imgs:[['vial-velocidad','Velocidad por hora y vialidad (línea resaltada: un día)']],
   r:['La velocidad cae en horas pico: ahí están las horas críticas.','Cada panel es una vialidad; las líneas tenues son el resto de la semana.','Con carriles y velocidad se estima el flujo potencial de vehículos.'],
   w:'Es un flujo potencial estimado, no un conteo real de vehículos.'}},
 {id:'k7',b:['leaf','bin','pin'],bi:4,n:7,t:'Entorno ambiental: residuos sólidos',em:'residuos sólidos',sub:'¿Cuánta basura se genera y dónde conviene disponerla?',
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
 {after:'k2',art:'pin',from:0,to:1,s:'Ya sabemos qué valora el cliente y cuánto puede vender una tienda.',a:'¿<em>Dónde</em> conviene abrir la siguiente?'},
 {after:'k3',art:'net',from:1,to:2,s:'Abrir tiendas también transforma el entorno donde operamos.',a:'¿Qué <em>efecto</em> tenemos y cómo nos perciben?'},
 {after:'k5',art:'road',from:2,to:3,s:'La sociedad vive en ciudades, y las ciudades se mueven.',a:'¿Cómo influye la <em>movilidad</em> en la operación?'},
 {after:'k6',art:'leaf',from:3,to:4,s:'La ciudad también deja huella en el ambiente.',a:'¿Cómo medimos y reducimos el <em>impacto ambiental</em>?'}
];
var BID={k1:'',k3:'b1',k4:'b2',k6:'b3',k7:'b4'};


function siteMap(){
 var s=7,r=function(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;},h='',i,cols=['#2F6BFF','#14A39A','#F5A524','#7C5CFF','#F26B5B'];
 h+='<rect width="750" height="200" fill="#E9EFF9"/>';
 h+='<path d="M0 150 C120 120 200 175 330 150 S560 120 750 160 L750 200 L0 200Z" fill="#D5E4F7"/>';
 h+='<rect x="520" y="14" width="120" height="58" rx="14" fill="#D8EBDD"/>';
 for(i=0;i<9;i++)for(var j=0;j<3;j++)h+='<rect x="'+(18+i*82)+'" y="'+(12+j*58)+'" width="64" height="40" rx="5" fill="#F6F8FC"/>';
 var rd=[[0,50,750,50],[0,108,750,108],[0,166,750,166]];
 rd.forEach(function(l){h+='<line x1="'+l[0]+'" y1="'+l[1]+'" x2="'+l[2]+'" y2="'+l[3]+'" stroke="#fff" stroke-width="9"/>';});
 for(i=0;i<9;i++)h+='<line x1="'+(9+i*82)+'" y1="0" x2="'+(9+i*82)+'" y2="200" stroke="#fff" stroke-width="7"/>';
 h+='<path d="M0 80 L750 30" stroke="#fff" stroke-width="12" opacity=".9"/>';
 var st=[];
 for(i=0;i<46;i++){var x=14+r()*722,y=10+r()*150;st.push([x,y,Math.floor(r()*5)]);}
 var T=[470,86],near=st.slice().sort(function(p,q){return Math.hypot(p[0]-T[0],p[1]-T[1])-Math.hypot(q[0]-T[0],q[1]-T[1]);}).slice(0,3);
 near.forEach(function(p,k){h+='<line x1="'+T[0]+'" y1="'+T[1]+'" x2="'+p[0]+'" y2="'+p[1]+'" stroke="#0B1F44" stroke-width="1.6" stroke-dasharray="4 4" opacity=".7"/>';});
 st.forEach(function(p){var n=near.indexOf(p)>=0;h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(n?6.5:4.6)+'" fill="'+cols[p[2]]+'" stroke="#fff" stroke-width="1.6" opacity="'+(n?1:.85)+'"/>';});
 [[170,128],[610,132]].forEach(function(p){h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="13" fill="none" stroke="#667085" stroke-width="1.6" stroke-dasharray="3 3"/><text x="'+p[0]+'" y="'+(p[1]+4)+'" font-size="12" fill="#667085" text-anchor="middle">?</text>';});
 h+='<circle cx="'+T[0]+'" cy="'+T[1]+'" r="20" fill="none" stroke="#F26B5B" stroke-width="2"><animate attributeName="r" values="14;30" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;0" dur="2s" repeatCount="indefinite"/></circle>';
 h+='<path d="M'+T[0]+' '+(T[1]+2)+' c-12 -14 -14 -20 -14 -26 a14 14 0 1 1 28 0 c0 6 -2 12 -14 26z" fill="#F26B5B" stroke="#fff" stroke-width="2"/><circle cx="'+T[0]+'" cy="'+(T[1]-24)+'" r="5" fill="#fff"/>';
 h+='<g transform="translate(496 38)"><rect width="150" height="34" rx="9" fill="#0B1F44"/><text x="10" y="15" font-size="10.5" fill="#fff" font-weight="600">Punto elegido</text><text x="10" y="28" font-size="9.5" fill="#9FB4DA">se parece a 3 tiendas actuales</text></g>';
 h+='<g transform="translate(14 176)"><rect width="262" height="18" rx="9" fill="#fff" opacity=".92"/><circle cx="12" cy="9" r="4" fill="#2F6BFF"/><circle cx="24" cy="9" r="4" fill="#14A39A"/><circle cx="36" cy="9" r="4" fill="#F5A524"/><text x="46" y="12.5" font-size="9.5" fill="#475467">segmentos de tiendas</text><circle cx="146" cy="9" r="5.5" fill="none" stroke="#667085" stroke-dasharray="2 2"/><text x="156" y="12.5" font-size="9.5" fill="#475467">candidatos</text></g>';
 return '<figure class="pic kpic mapfig rv" style="--i:5"><svg viewBox="0 0 750 200" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block">'+h+'</svg></figure>';
}

var CJ={A:[['Precio',['$38','$52','$68']],['Marca',['Local','Conocida','Premium']],['Ingrediente',['Clásico','Integral','Con fruta']],['Empaque',['Bolsa','Caja','Individual']]],
 L9:[[0,0,0,0],[0,1,1,1],[0,2,2,2],[1,0,1,2],[1,1,2,0],[1,2,0,1],[2,0,2,1],[2,1,0,2],[2,2,1,0]],
 T:[[1,3,4],[1,4,5],[3,5,8],[0,2,7],[0,6,7],[2,6,8]],COL:['#F26B5B','#2F6BFF','#14A39A','#F5A524']};
function conjHead(t,crumb){var B=BLOCKS[0];return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="0" data-title="Caso 1 · '+t+'" data-theme="light" style="--c:'+B.c+'"><div class="crumb rv" style="--i:0">'+B.n+' · Caso 1 · '+crumb+'</div>'+thread(0);}
function conjoint(){
 var adv=[['Se parece a comprar de verdad','Elegir entre productos completos es más natural que calificar atributos sueltos.','var(--blue)'],
  ['Mide los intercambios','Revela cuánto precio se acepta a cambio de una mejor marca o un mejor ingrediente.','var(--teal)'],
  ['Pesa cada atributo','La importancia relativa sale de lo que la persona elige, no de lo que dice que valora.','var(--violet)'],
  ['Valora cada nivel','Sabe si prefiere $38 o $52, empaque en caja o en bolsa: utilidad por nivel.','var(--amber)'],
  ['Simula antes de lanzar','Con las utilidades se estima la cuota de un producto nuevo o de un cambio de precio.','var(--coral)'],
  ['Descubre perfiles','Agrupa a quienes eligen parecido: cazadores de oferta, leales a la marca, etc.','var(--green)']];
 var s1=conjHead('Conjoint: ventajas','Conjoint')+
 '<h2 class="rv" style="--i:1">Por qué usar <em>conjoint</em></h2><p class="lead rv" style="--i:2">En lugar de preguntar «¿qué es importante para ti?», se observa qué eliges cuando todo cambia a la vez.</p>'+
 '<div class="body" style="top:200px;display:grid;grid-template-columns:1.5fr 1fr;gap:24px"><div class="cards" style="grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr);gap:14px">'+
 adv.map(function(x,i){return '<div class="card sm sa rv" style="--c:'+x[2]+';--i:'+(3+i)+'"><div class="n">0'+(i+1)+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>';}).join('')+'</div>'+
 '<div class="panel rv" style="--i:5"><div class="lbl">DISEÑO ORTOGONAL · 9 PRODUCTOS, 4 ATRIBUTOS</div><div id="orthoMx"></div><p class="orthoTx" id="orthoTx"></p></div></div></section>';
 var s2=conjHead('Conjoint: simulador','Simulador conjoint')+
 '<h2 class="rv" style="--i:1">Elige y descubre tu <em>perfil</em></h2><p class="lead rv" style="--i:2">Seis rondas de tres productos que cambian en todos sus atributos a la vez. Tus elecciones se traducen en un perfil.</p>'+
 '<div class="body" style="top:200px"><div class="demo rv" style="--i:3;grid-template-columns:1.3fr 1fr;gap:24px"><div class="panel"><div class="selrow"><div class="lbl">RONDA <b id="cjR">1</b> DE 6 · ¿CUÁL COMPRARÍAS?</div><button class="btn alt" id="cjReset">Reiniciar</button></div><div class="cjcards" id="cjCards"></div><div class="cjprog" id="cjProg"></div></div>'+
 '<div class="panel"><div class="lbl">IMPORTANCIA DE CADA ATRIBUTO</div><div id="cjBars"></div><div class="cjperf" id="cjPerf"></div><div class="lbl" style="margin-top:12px">ORTOGONALIDAD · PRODUCTOS MOSTRADOS</div><div id="cjMx"></div></div></div></div></section>';
 return s1+s2;
}
function thread(bi){
 return '<div class="thread" style="--c:'+BLOCKS[bi].c+'">'+BLOCKS.map(function(b,i){return '<span class="'+(i===bi?'on':i<bi?'done':'')+'">'+b.s+'</span>';}).join('')+'</div>';
}
function ficha(x){
 var B=BLOCKS[x.bi],t=x.t.replace(x.em,'<em>'+x.em+'</em>');
 return '<section class="slide content" '+(BID[x.id]?'id="'+BID[x.id]+'" ':'')+'data-sec="4" data-block="'+B.n+'" data-bi="'+x.bi+'" data-title="Caso '+x.n+' · '+x.t+'" data-theme="light" style="--c:'+B.c+'">'+
 '<div class="crumb rv" style="--i:0">'+B.n+' · Caso '+x.n+'</div>'+thread(x.bi)+
 '<h2 class="rv" style="--i:1">'+t+'</h2><p class="lead rv" style="--i:2">'+x.sub+'</p>'+
 '<div class="fiche"><div class="l">'+
  '<div class="pq q rv" style="--i:3"><small>PREGUNTA</small><p>'+x.q+'</p></div>'+
  '<div class="pq h rv" style="--i:4"><small>HIPÓTESIS</small><p>'+x.h+'</p></div>'+
  (x.id==='k2'?siteMap():'<figure class="pic kpic rv" style="--i:5" data-ph="'+x.id+'"></figure>')+'</div>'+
 '<div class="r"><div class="rv" style="--i:5"><div class="lbl">MÉTODOS</div><div class="mets">'+x.m.map(function(m){return '<div class="met" data-tip="'+m[0]+'|'+m[1]+'"><i></i>'+m[0]+'</div>';}).join('')+'</div></div>'+
 '<div class="rv" style="--i:6"><div class="lbl">EJEMPLO DE RESULTADO</div><div class="kpis">'+x.k.map(function(k){return '<div class="kpi sa" style="--c:'+B.c+'"><div class="v"><span data-count="'+k[0]+'">0</span><small>'+k[1]+'</small></div><p>'+k[2]+'</p></div>';}).join('')+'</div></div></div></div>'+
 '<div class="strip rv" style="--i:7"><b>LECTURA PARA EL COMUNICADOR</b><span>'+x.l+'</span></div></section>';
}
function evid(x){
 var B=BLOCKS[x.bi],e=x.ev,n=e.imgs.length;
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="'+x.bi+'" data-title="Caso '+x.n+' · evidencia" data-theme="light" style="--c:'+B.c+'">'+
 '<div class="crumb rv" style="--i:0">'+B.n+' · Caso '+x.n+' · Evidencia</div>'+thread(x.bi)+
 '<h2 class="rv" style="--i:1;font-size:32px">'+e.t+'</h2>'+
 '<div class="evid" style="top:130px"><div class="shots n'+n+' rv" style="--i:3">'+e.imgs.map(function(i){return '<figure class="shot"><div class="img"><img src="assets/'+i[0]+'.jpg" alt="'+i[1]+'"></div><figcaption>'+i[1]+'</figcaption></figure>';}).join('')+'</div>'+
 '<div class="read"><div class="lbl rv" style="--i:4;margin:0">CÓMO SE LEE</div>'+e.r.map(function(r,i){return '<div class="rd sa rv" style="--i:'+(5+i)+'"><b>'+(i+1)+'</b><span>'+r+'</span></div>';}).join('')+
 '<div class="warn rv" style="--i:9"><b>CUIDADO</b>'+e.w+'</div></div></div></section>';
}
function bridge(b){
 var f=BLOCKS[b.from],t=BLOCKS[b.to];
 return '<section class="slide content bridge" data-sec="4" data-block="Enlace" data-bi="'+b.to+'" data-title="Enlace · '+f.s+' → '+t.s+'" data-theme="light" style="--c:'+t.c+'">'+thread(b.to)+
 '<div class="bart" data-bart="'+b.art+'"></div><div class="from rv" style="--i:1">'+b.s+'</div><div class="ask rv" style="--i:2">'+b.a+'</div><div class="nxt rv" style="--i:3">SIGUIENTE BLOQUE · '+t.n.toUpperCase()+' →</div></section>';
}
var stream='';
stream+=document.getElementById('tplTheory').innerHTML;
CASES.forEach(function(x){
 stream+=ficha(x)+evid(x);if(x.id==='k1')stream+=conjoint();
 BRIDGES.forEach(function(b){if(b.after===x.id)stream+=bridge(b);});
});
var mount=document.getElementById('casesMount');
mount.insertAdjacentHTML('beforebegin',stream);mount.remove();
// el puente teórico necesita su rastreador
[].forEach.call(document.querySelectorAll('.thread[data-bi]'),function(t){var bi=+t.dataset.bi;t.outerHTML=thread(bi).replace('class="thread"','class="thread"');});


var ICMAP={'¿Cómo vender más?':'trend','¿A qué precio?':'tag','¿Dónde abrir?':'pin','¿Qué puede salir mal?':'shield','¿Qué pasará?':'bars','¿Qué impacto dejamos?':'leaf',
 'En una crisis':'shield','Al reportar impacto':'doc','Ante autoridades':'scale','Al planear':'bars',
 'Series de tiempo':'trend','Modelos predictivos':'line','Clasificación':'split','Segmentación':'cluster','Geoespacial':'map','Texto y lenguaje':'text','Optimización':'target','Escenarios':'q',
 'Introducción':'eye','Enfoque analítico':'target','Casos de uso':'map','Visualizar y comunicar':'bars','El reto de los datos':'cluster','Cierre':'flag',
 'Pregunta primero':'q','Hipótesis explícita':'doc','Incertidumbre honesta':'scale','Comunicar con rigor':'mega',
 'Oficiales':'doc','Del sector':'people','Encuestas':'text','Digitales':'eye','Geoespaciales':'map'};
[].forEach.call(document.querySelectorAll('.card h3'),function(h){
 var k=ICMAP[h.textContent.trim()];if(!k||h.parentNode.querySelector('.ic'))return;
 var card=h.closest('.card');
 card.insertAdjacentHTML('afterbegin','<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+P[k]+'</svg>');
});


/* ================= Ilustraciones propias ================= */
function sv(inner,id,dark){return '<svg viewBox="0 0 500 500">'+(dark?'<defs><linearGradient id="'+id+'" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="500" y2="500"><stop offset="0" stop-color="#6FA2FF"/><stop offset="1" stop-color="#3FE0C9"/></linearGradient></defs>':'')+inner+'</svg>';}
function dp(d,n,col,w){return '<path class="dr" pathLength="1" d="'+d+'" style="--d:'+n+'" stroke="'+col+'" stroke-width="'+(w||2)+'" stroke-linecap="round" stroke-linejoin="round"/>';}
function de(cx,cy,rx,ry,n,col,rot){return '<ellipse class="dr" pathLength="1" cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" style="--d:'+n+'" stroke="'+col+'" stroke-width="1.6"'+(rot?' transform="rotate('+rot+' '+cx+' '+cy+')"':'')+'/>';}
function dot(cx,cy,r,n,col){return '<circle class="pop" cx="'+cx+'" cy="'+cy+'" r="'+r+'" style="--d:'+n+'" fill="'+col+'"/>';}
function rc(x,y,w,h,n,col){return '<rect class="dr" pathLength="1" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="5" style="--d:'+n+'" stroke="'+col+'" stroke-width="1.6"/>';}
var G='url(#gx)';
var ART={
 sim:function(){var g='url(#gsim)',o='';
  o+=dp('M40 450H470',0,g,2)+dp('M40 450V70',0,g,2)+dp('M40 330C140 320 190 300 250 280',1,g,3.2);
  [[330,170,2],[330,230,3],[330,285,4],[330,350,5],[330,410,6]].forEach(function(c){o+=dp('M250 280C290 262 300 '+(c[1]+20)+' 440 '+c[1]+'',c[2],g,c[2]===4?3:1.6);});
  o+=dot(250,280,9,2,g)+dot(440,170,7,6,g)+dot(440,230,7,6,g)+dot(440,285,10,7,g)+dot(440,350,7,6,g)+dot(440,410,7,6,g);
  o+=dp('M40 330C80 326 110 322 140 318',1,g,3.2);
  return sv(o,'gsim',1);},
 cover:function(){var g='url(#gcover)',o='';
  o+=dp('M20 330C110 330 130 170 230 190S360 330 480 120',0,g,2.4)+dp('M20 400C120 400 160 260 250 280S380 380 480 230',1,g,2)+dp('M20 260C100 260 150 120 260 120S400 220 480 60',2,g,1.6);
  [[230,190],[480,120],[250,280],[480,230],[260,120]].forEach(function(c,i){o+=dot(c[0],c[1],7,i+3,g);});
  for(var i=0;i<7;i++){var h=40+((i*53)%120);o+=rc(40+i*64,490-h,28,h,i,g);}
  [[90,70],[170,40],[330,60],[420,320],[60,170]].forEach(function(c,i){o+='<circle class="fl" cx="'+c[0]+'" cy="'+c[1]+'" r="3" fill="#6FA2FF" opacity=".6" style="animation-delay:'+i*0.7+'s"/>';});
  return sv(o,'gcover',1);},
 qmark:function(){var g='url(#gq)',o='';
  o+=dp('M170 180C170 80 340 80 340 175C340 240 252 238 252 305L252 330',0,g,3.2)+dot(252,385,15,3,g);
  o+=de(250,250,215,215,1,g)+de(250,250,160,160,2,g,30);
  [[60,250],[440,250],[250,40],[110,120],[400,380]].forEach(function(c,i){o+=dot(c[0],c[1],6+i%3*2,i+2,g);});
  return sv(o,'gq',1);},
 tree:function(){var g='url(#gt)',o='';
  o+=dp('M250 455L250 335',0,g,3)+dp('M250 335C250 275 120 285 120 205',1,g,2.4)+dp('M250 335C250 260 250 240 250 170',1,g,2.4)+dp('M250 335C250 275 380 285 380 205',1,g,2.4);
  o+=dp('M120 205C120 165 80 155 80 115',2,g,2)+dp('M120 205C120 165 160 155 160 115',2,g,2)+dp('M380 205C380 165 340 155 340 115',2,g,2)+dp('M380 205C380 165 420 155 420 115',2,g,2)+dp('M250 170L250 95',2,g,2);
  [[250,455,9],[120,205,8],[250,170,8],[380,205,8],[80,115,10],[160,115,10],[250,95,10],[340,115,10],[420,115,10]].forEach(function(c,i){o+=dot(c[0],c[1],c[2],i%5+3,g);});
  return sv(o,'gt',1);},
 map:function(){var g='url(#gm)',o='';
  [[200,130],[150,98],[100,66],[52,36]].forEach(function(r,i){o+=de(250,260,r[0],r[1],i,g,-15);});
  o+=dp('M30 400L470 120',3,g,1.4)+dp('M60 140L440 400',3,g,1.4)+dp('M250 40L250 480',4,g,1)+dp('M20 260L480 260',4,g,1);
  function pin(x,y,k,n){return '<g class="pop" style="--d:'+n+'" transform="translate('+x+' '+y+') scale('+k+')"><path d="M0 40c-18-22-30-38-30-56a30 30 0 0 1 60 0c0 18-12 34-30 56z" fill="'+g+'"/><circle cx="0" cy="-16" r="10" fill="#08142B"/></g>';}
  o+=pin(250,265,1.2,5)+pin(130,350,.7,6)+pin(390,175,.7,7);
  return sv(o,'gm',1);},
 chart:function(){var g='url(#gc)',o='';
  o+=dp('M50 450H460',0,g,2)+dp('M50 450V60',0,g,2);
  [90,150,120,230,300].forEach(function(h,i){o+=rc(90+i*80,450-h,50,h,i+1,g);});
  o+=dp('M115 330L195 270L275 300L355 190L435 120',3,g,3);
  [[115,330],[195,270],[275,300],[355,190],[435,120]].forEach(function(c,i){o+=dot(c[0],c[1],8,i+4,g);});
  o+=dp('M410 100L450 100L450 140',4,g,2.4);
  return sv(o,'gc',1);},
 clean:function(){var g='url(#gl)',o='';
  var sc=[[40,80],[95,160],[60,260],[130,310],[30,380],[110,420],[170,110],[190,230],[150,350],[70,50],[200,400],[180,30]];
  sc.forEach(function(c,i){o+='<circle class="fl" cx="'+c[0]+'" cy="'+c[1]+'" r="'+(4+i%3*2)+'" fill="#F2685B" opacity=".75" style="animation-delay:'+i*0.4+'s"/>';});
  o+=dp('M215 250H300',1,g,2.6)+dp('M282 232L302 250L282 268',2,g,2.6);
  for(var r=0;r<5;r++)for(var c=0;c<4;c++)o+=dot(340+c*46,150+r*46,8,r+c+2,g);
  return sv(o,'gl',1);}
};
var BART={
 pin:function(){var c='currentColor',o='';
  o+=de(200,190,170,100,0,c,-12)+de(200,190,110,64,1,c,-12)+de(200,190,52,30,2,c,-12)+dp('M20 270L380 70',2,c,1.3)+dp('M40 80L360 270',3,c,1.3);
  o+='<g class="pop" style="--d:4" transform="translate(200 200) scale(1.5)"><path d="M0 40c-18-22-30-38-30-56a30 30 0 0 1 60 0c0 18-12 34-30 56z" fill="currentColor"/><circle cx="0" cy="-16" r="10" fill="#fff"/></g>';
  return '<svg viewBox="0 0 400 320">'+o+'</svg>';},
 net:function(){var c='currentColor',o='',n=[[200,160],[90,90],[310,80],[70,220],[330,230],[200,280],[200,50],[140,200],[270,170]];
  [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[1,3],[2,4],[3,7],[7,5],[8,4],[8,2],[0,7],[0,8]].forEach(function(l,i){o+=dp('M'+n[l[0]][0]+' '+n[l[0]][1]+'L'+n[l[1]][0]+' '+n[l[1]][1],i%4,c,1.3);});
  n.forEach(function(p,i){o+=dot(p[0],p[1],i===0?16:9,i+3,c);});
  return '<svg viewBox="0 0 400 320">'+o+'</svg>';},
 road:function(){var c='currentColor',o='';
  o+=dp('M40 300L170 30',0,c,2.4)+dp('M360 300L230 30',0,c,2.4)+dp('M200 300L200 30',1,c,1.4)+dp('M110 300L185 30',2,c,1)+dp('M290 300L215 30',2,c,1);
  o+='<g class="pop" style="--d:4"><rect x="165" y="205" width="46" height="70" rx="12" fill="currentColor"/><rect x="175" y="215" width="26" height="20" rx="5" fill="#fff" opacity=".8"/></g>';
  o+='<g class="pop" style="--d:6"><rect x="205" y="110" width="30" height="46" rx="9" fill="currentColor" opacity=".55"/></g>';
  return '<svg viewBox="0 0 400 320">'+o+'</svg>';},
 leaf:function(){var c='currentColor',o='';
  o+=dp('M110 260C100 130 190 60 330 60C330 195 250 265 120 262',0,c,3)+dp('M110 262C170 180 230 120 300 88',1,c,2);
  o+=dp('M70 290C70 330 120 330 150 305',2,c,2)+dp('M128 296L152 304L146 278',3,c,2)+dp('M350 250C350 220 320 200 295 215',3,c,2)+dp('M300 196L292 218L316 222',4,c,2);
  [[330,60],[110,262]].forEach(function(p,i){o+=dot(p[0],p[1],8,i+5,c);});
  return '<svg viewBox="0 0 400 320">'+o+'</svg>';}
};
[].forEach.call(document.querySelectorAll('.art[data-art]'),function(e){e.innerHTML=ART[e.dataset.art]();});
[].forEach.call(document.querySelectorAll('.bart[data-bart]'),function(e){e.innerHTML=BART[e.dataset.bart]();});


/* ================= Fotos libres y créditos ================= */
/*PH_START*/var PH={"esc1": {"t": "PRESS CONFERENCE 2016-07-19", "a": "EU2016 SK", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:PRESS_CONFERENCE_2016-07-19_Informal_Meeting_of_Ministers_Responsible_for_Competitiveness_(28410298625).jpg", "w": "Rueda de prensa", "p": "center"}, "esc2": {"t": "Albany wind farm", "a": "Leon Brooks", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Albany_wind_farm_against_the_sunset_western_Australia.jpg", "w": "Parque eólico al atardecer", "p": "center"}, "esc3": {"t": "FEMA City Council meeting", "a": "Marvin Nauman / FEMA", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:FEMA_-_32884_-_FEMA_Community_Relations_worker_speaks_at_City_Council_meeting_in_Oklahoma.jpg", "w": "Reunión de un concejo municipal", "p": "center"}, "esc4": {"t": "Southern Monterrey skyline", "a": "Rick González", "l": "CC BY 2.0", "u": "https://commons.wikimedia.org/wiki/File:Southern_Monterrey_skyline.jpg", "w": "Horizonte de Monterrey", "p": "center"}, "q1": {"t": "REMA 1000 Supermarket interior grocery store Tønsberg, Norway 2017-11-03 cashier", "a": "Wolfmann", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:REMA_1000_Supermarket_interior_grocery_store_T%C3%B8nsberg,_Norway_2017-11-03_cashier_checkout_a.jpg", "w": "Caja de supermercado", "p": "center"}, "q2": {"t": "Moscow, Paveletskaya Plaza Feb.2025 - turkey 01.jpg", "a": "Retired electrician", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:Moscow,_Paveletskaya_Plaza_Feb.2025_-_turkey_01.jpg", "w": "Precios en un anaquel con etiquetas electrónicas", "p": "center"}, "q3": {"t": "Storefronts on Bridgeway, Sausalito-L1003865.jpg", "a": "Frank Schulenburg", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Storefronts_on_Bridgeway,_Sausalito-L1003865.jpg", "w": "Locales comerciales en una calle", "p": "center"}, "q4": {"t": "DSC06451 Explosion Hazard Folding Sign, Wiener Netze, 2023-10.jpg", "a": "Aciarium", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:DSC06451_Explosion_Hazard_Folding_Sign,_Wiener_Netze,_2023-10.jpg", "w": "Señal de advertencia de peligro", "p": "center"}, "q5": {"t": "2016-09-11 19 30 20 Sunset at the NEXRAD WSR-88D Doppler Radar at the National W", "a": "Famartin", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:2016-09-11_19_30_20_Sunset_at_the_NEXRAD_WSR-88D_Doppler_Radar_at_the_National_Weather_Service%27s_Baltimore-Washington_Weather_Forecast_Office_in_Sterling,_Loudoun_County,_Virginia.jpg", "w": "Radar meteorológico al atardecer", "p": "center"}, "q6": {"t": "Kabul City Factory Smoke.jpg", "a": "Pm4gis", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Kabul_City_Factory_Smoke.jpg", "w": "Vista aérea de chimeneas y humo industrial", "p": "center"}, "k1": {"t": "The interior of an Advance Auto Parts store in Murphy, North Carolina 06.jpg", "a": "Harrison Keely", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:The_interior_of_an_Advance_Auto_Parts_store_in_Murphy,_North_Carolina_06.jpg", "w": "Interior de una refaccionaria", "p": "center"}, "k3": {"t": "Sclater Street Yard market, Brick Lane Market London E1 o.jpg", "a": "Acabashi", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Sclater_Street_Yard_market,_Brick_Lane_Market_London_E1_o.jpg", "w": "Mercado callejero", "p": "center"}, "k5": {"t": "Man reading a newspaper at a café terrace in Athens, Greece - 1979.jpg", "a": "Jean-Louis Debaize / European Communitie", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:Man_reading_a_newspaper_at_a_caf%C3%A9_terrace_in_Athens,_Greece_-_1979.jpg", "w": "Lector de periódico en un café", "p": "center"}, "k6": {"t": "Traffic jam Bangkok.JPG", "a": "Sky 269", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Traffic_jam_Bangkok.JPG", "w": "Congestión vehicular", "p": "center"}, "k7": {"t": "Waste landfill in Derhachi.jpg", "a": "I.Shevtsov", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Waste_landfill_in_Derhachi.jpg", "w": "Relleno sanitario", "p": "center"}, "d4": {"t": "Solar Data Analyst at Work in Kenya.jpg", "a": "Dwalsh3", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Solar_Data_Analyst_at_Work_in_Kenya.jpg", "w": "Analista de datos en su estación de trabajo", "p": "center"}, "d5": {"t": "Earth's City Lights by DMSP, 1994-1995 (large).jpg", "a": "Data: Marc Imhoff/NASA GSFC, Christopher", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Earth%27s_City_Lights_by_DMSP,_1994-1995_(large).jpg", "w": "Imagen satelital: luces nocturnas de la Tierra", "p": "center"}, "s1": {"t": "Cockpit Motion Facility.jpg", "a": "NASA", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Cockpit_Motion_Facility.jpg", "w": "Simulador de vuelo", "p": "center"}, "s2": {"t": "This image shows VINCI (VLT INterferometer Commissioning Instrument), the \"test ", "a": "ESO", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:This_image_shows_VINCI_(VLT_INterferometer_Commissioning_Instrument),_the_%22test_camera%22_of_the_Very_Large_Telescope_Interferometer_(VLTI),_and_LEONARDO,_its_calibration_source_(vlt1_02-dez2000).jpg", "w": "Instrumentos de laboratorio de precisión", "p": "center"}, "s3": {"t": "New York Stock Exchange trading floor on Wall Street, New York, New York LCCN201", "a": "Carol M. Highsmith", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:New_York_Stock_Exchange_trading_floor_on_Wall_Street,_New_York,_New_York_LCCN2011634218.tif", "w": "Bolsa de valores de Nueva York", "p": "center"}, "k4": {"t": "Tienda de abarrotes, Mercado Michoacán.jpg", "a": "Xanyssel", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Tienda_de_abarrotes,_Mercado_Michoac%C3%A1n.jpg", "w": "Tienda de abarrotes de barrio", "p": "center"}, "d1": {"t": "Edificio del Instituto Nacional de Estadística, Geografía e Informática.JPG", "a": "Luisalvaz", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Edificio_del_Instituto_Nacional_de_Estad%C3%ADstica,_Geograf%C3%ADa_e_Inform%C3%A1tica.JPG", "w": "Edificio del INEGI, fuente oficial de estadística", "p": "center"}, "d2": {"t": "Logistics Specialist 2nd Class Jarred Stone checks cargo inventory (6172589).jpg", "a": "U.S. Navy photo by Petty Officer 2nd Cla", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Logistics_Specialist_2nd_Class_Jarred_Stone_checks_cargo_inventory_(6172589).jpg", "w": "Control de inventario: datos internos de una operación", "p": "center"}, "d3": {"t": "Deb Haaland at New Mexico Counts 2020 event in 2019. 02.jpg", "a": "Deb Haaland", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Deb_Haaland_at_New_Mexico_Counts_2020_event_in_2019._02.jpg", "w": "Evento público de participación en el censo", "p": "center"}, "cA": {"t": "Liat Portal for Foodie Disorder - Cornflakes with Milk.jpg", "a": "HaJunkiyada", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Cornflakes_with_Milk.jpg", "w": "Cereal de hojuelas con leche", "p": "center"}, "cB": {"t": "Chocolate-muesli.jpg", "a": "MartinThoma", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:Chocolate-muesli.jpg", "w": "Muesli con chocolate", "p": "center"}, "cC": {"t": "Bowl of whole wheat cereal with banana.jpg", "a": "RebecaLR", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Bowl_of_whole_wheat_cereal_with_banana.jpg", "w": "Cereal integral con plátano", "p": "center"}, "v1": {"t": "Business Presentation by ZERO-Ko Student.jpg", "a": "Penguin0028", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Business_Presentation_by_ZERO-Ko_Student.jpg", "w": "Presentación de resultados ante un grupo", "p": "center"}};/*PH_END*/
var PHMAP={'¿Cómo vender más?':'q1','¿A qué precio?':'q2','¿Dónde abrir?':'q3','¿Qué puede salir mal?':'q4','¿Qué pasará?':'q5','¿Qué impacto dejamos?':'q6','Oficiales':'d1','Del sector':'d2','Encuestas':'d3','Digitales':'d4','Geoespaciales':'d5'};
function phCredit(k){var x=PH[k];return x?'Foto: '+x.a+' · '+x.l:'';}
[].forEach.call(document.querySelectorAll('.card h3'),function(h){
 var k=PHMAP[h.textContent.trim()],card=h.closest('.card');
 if(!k||!PH[k]||card.querySelector('.ph'))return;
 card.classList.add('withph','phs');
 card.insertAdjacentHTML('afterbegin','<div class="ph" style="background-image:url(assets/ph-'+k+'.jpg);background-position:'+(PH[k].p||'center')+'"><small>'+phCredit(k)+'</small></div>');
});
[].forEach.call(document.querySelectorAll('.pic[data-ph]'),function(f){
 var k=f.dataset.ph;if(!PH[k]){f.remove();return;}
 f.innerHTML='<img src="assets/ph-'+k+'.jpg" alt="" style="object-position:'+(PH[k].p||'center')+'"><small>'+phCredit(k)+'</small>';
});
var cr=document.getElementById('credits');
if(cr){cr.innerHTML=Object.keys(PH).map(function(k){var x=PH[k];return '<a href="'+x.u+'" target="_blank" rel="noopener" data-tip="'+x.t.replace(/"/g,'')+'|'+x.l+'"><b>'+x.a+'</b> · '+x.l+'<i>'+x.w+'</i></a>';}).join('');}

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
 var sP=document.getElementById('sP'),sQ=document.getElementById('sQ'),sel=document.getElementById('sSel');if(!sP)return;
 var b={p:-1.5,q:0.625,m:1.375},K=['A','B','C'],COL={A:'#2F6BFF',B:'#14A39A',C:'#F5A524'};
 var o={A:{p:3,q:4,m:0},B:{p:2,q:5,m:1},C:{p:4,q:5,m:1}};
 function U(x,p,q){return b.p*p+b.q*q+b.m*x.m;}
 function fmt(v){return v.toFixed(1).replace('-','–');}
 function upd(){
  var k=sel.value;o[k].p=+sP.value;o[k].q=+sQ.value;
  var u=K.map(function(n){return U(o[n],o[n].p,o[n].q);});
  var ex=u.map(Math.exp),sum=ex[0]+ex[1]+ex[2],p=ex.map(function(v){return v/sum;});
  K.forEach(function(n,i){
   document.getElementById('p'+n).style.width=(p[i]*100)+'%';
   document.getElementById('t'+n).textContent=(p[i]*100).toFixed(1)+'%';
   document.querySelector('#u'+n+' .u').textContent=fmt(u[i]);
   document.getElementById('vP'+n).textContent=o[n].p;document.getElementById('vQ'+n).textContent=o[n].q;
  });
  var mx=u.indexOf(Math.max.apply(null,u)),ki=K.indexOf(k);
  K.forEach(function(n,i){var r=document.getElementById('u'+n);r.className=(i===mx?'win':'')+(n===k?' sel':'');});
  document.getElementById('winName').textContent=K[mx];document.getElementById('selName').textContent=k;
  var us=document.getElementById('ucSvg'),ps=document.getElementById('pcSvg'),pB=o[k].p,qB=o[k].q,col=COL[k],s,pp,e;
  var X=function(v){return 40+(v-1)/7*500;},Y=function(v){return 12+(5-v)/15*136;};
  s='<line x1="40" y1="'+Y(0)+'" x2="540" y2="'+Y(0)+'" stroke="#e1e7f2"/><line x1="40" y1="12" x2="40" y2="148" stroke="#cfd8e8"/><line x1="40" y1="148" x2="540" y2="148" stroke="#cfd8e8"/>';
  K.forEach(function(n,i){if(n===k)return;s+='<line x1="40" y1="'+Y(u[i])+'" x2="540" y2="'+Y(u[i])+'" stroke="'+COL[n]+'" stroke-width="2"/><text x="544" y="'+(Y(u[i])+4)+'" font-size="11" fill="'+COL[n]+'">'+n+'</text>';});
  s+='<line x1="'+X(1)+'" y1="'+Y(U(o[k],1,qB))+'" x2="'+X(8)+'" y2="'+Y(U(o[k],8,qB))+'" stroke="'+col+'" stroke-width="3.4" stroke-linecap="round"/><text x="544" y="'+(Y(U(o[k],8,qB))+4)+'" font-size="11" font-weight="600" fill="'+col+'">'+k+'</text>';
  s+='<circle cx="'+X(pB)+'" cy="'+Y(u[ki])+'" r="6.5" fill="'+col+'" stroke="#fff" stroke-width="2.5"/>';
  s+='<text x="40" y="164" font-size="10.5" fill="#667085">Precio de '+k+' →  1</text><text x="540" y="164" font-size="10.5" fill="#667085" text-anchor="end">8</text><text x="44" y="10" font-size="10.5" fill="#667085">Utilidad</text>';
  us.innerHTML=s;
  var pts=[];for(pp=1;pp<=8.001;pp+=0.25){e=u.map(function(v,i){return i===ki?Math.exp(U(o[k],pp,qB)):Math.exp(v);});pts.push(X(pp)+','+(130-e[ki]/(e[0]+e[1]+e[2])*115));}
  s='<line x1="40" y1="130" x2="540" y2="130" stroke="#cfd8e8"/><line x1="40" y1="15" x2="40" y2="130" stroke="#cfd8e8"/><text x="44" y="12" font-size="10.5" fill="#667085">P('+k+') 100 %</text><text x="540" y="146" font-size="10.5" fill="#667085" text-anchor="end">Precio de '+k+'</text>';
  s+='<polyline points="'+pts.join(' ')+'" fill="none" stroke="'+col+'" stroke-width="3.2" stroke-linejoin="round"/><circle cx="'+X(pB)+'" cy="'+(130-p[ki]*115)+'" r="6.5" fill="'+col+'" stroke="#fff" stroke-width="2.5"/>';
  ps.innerHTML=s;
 }
 sel.onchange=function(){var k=sel.value;sP.value=o[k].p;sQ.value=o[k].q;upd();};
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


// 4) Ajuste polinomial: sub-ajuste / robusto / sobre-ajuste
(function(){
 var svg=document.getElementById('polySvg');if(!svg)return;
 var seed=7;function rnd(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296;}
 function gau(){var u=rnd()||1e-9,v=rnd();return Math.sqrt(-2*Math.log(u))*Math.cos(6.283185*v);}
 function f(x){return 1.2*Math.sin(1.1*x)+0.35*x;}
 var tr=[],te=[],i;
 for(i=0;i<14;i++){var x=0.2+i*5.6/13+(rnd()-.5)*.25;tr.push([x,f(x)+0.5*gau()]);}
 for(i=0;i<40;i++){var x2=0.1+rnd()*5.8;te.push([x2,f(x2)+0.5*gau()]);}
 function fit(d){var n=d+1,A=[],b=[],r,c,k;
  for(r=0;r<n;r++){A.push(new Array(n).fill(0));b.push(0);}
  tr.forEach(function(p){var u=(p[0]-3)/3,pw=[];for(k=0;k<n;k++)pw.push(Math.pow(u,k));
   for(r=0;r<n;r++){b[r]+=pw[r]*p[1];for(c=0;c<n;c++)A[r][c]+=pw[r]*pw[c];}});
  for(r=0;r<n;r++)A[r][r]+=1e-9;
  for(var col=0;col<n;col++){var piv=col;for(r=col+1;r<n;r++)if(Math.abs(A[r][col])>Math.abs(A[piv][col]))piv=r;
   var t=A[col];A[col]=A[piv];A[piv]=t;var tb=b[col];b[col]=b[piv];b[piv]=tb;
   for(r=col+1;r<n;r++){var m=A[r][col]/A[col][col];for(c=col;c<n;c++)A[r][c]-=m*A[col][c];b[r]-=m*b[col];}}
  var w=new Array(n).fill(0);
  for(r=n-1;r>=0;r--){var sm=b[r];for(c=r+1;c<n;c++)sm-=A[r][c]*w[c];w[r]=sm/A[r][r];}
  return function(x){var u=(x-3)/3,y=0;for(var k2=0;k2<n;k2++)y+=w[k2]*Math.pow(u,k2);return y;};}
 function rmse(m,D){var s2=0;D.forEach(function(p){var e=m(p[0])-p[1];s2+=e*e;});return Math.sqrt(s2/D.length);}
 var X=function(x){return 30+x/6*510;},Y=function(y){return 300-(Math.max(-1.6,Math.min(4.2,y))+1.6)/5.8*280;};
 var ds=document.getElementById('degS');
 function upd(){
  var d=+ds.value,m=fit(d),eT=rmse(m,tr),eV=rmse(m,te);
  document.getElementById('degV').textContent=d;
  var h='<line x1="30" y1="300" x2="545" y2="300" stroke="#cfd8e8"/><line x1="30" y1="20" x2="30" y2="300" stroke="#cfd8e8"/>';
  var path='';for(var x=0;x<=6.001;x+=.05){path+=(x===0?'M':'L')+X(x).toFixed(1)+' '+Y(m(x)).toFixed(1);}
  h+='<path d="'+path+'" fill="none" stroke="#2F6BFF" stroke-width="3" stroke-linecap="round"/>';
  te.forEach(function(p){h+='<circle cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="4" fill="#fff" stroke="#F5A524" stroke-width="1.8"/>';});
  tr.forEach(function(p){h+='<circle cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="5" fill="#2F6BFF"/>';});
  svg.innerHTML=h;
  var tag=document.getElementById('polyTag'),txt=document.getElementById('polyTxt');
  document.getElementById('eTr').style.width=Math.min(100,eT/2.5*100)+'%';document.getElementById('eTe').style.width=Math.min(100,eV/2.5*100)+'%';
  document.getElementById('eTrV').textContent=eT.toFixed(2);document.getElementById('eTeV').textContent=eV>9?'>9':eV.toFixed(2);
  if(d<=2){tag.textContent='SUB-AJUSTADO';tag.style.background='#F5A524';txt.textContent='El modelo es demasiado simple: no captura la forma de los datos. Falla tanto en entrenamiento como en prueba.';}
  else if(d<=4){tag.textContent='ROBUSTO';tag.style.background='#2FA56B';txt.textContent='Buen equilibrio: el error de entrenamiento y el de prueba son parecidos y bajos. Generaliza bien.';}
  else{tag.textContent='SOBRE-AJUSTADO';tag.style.background='#F26B5B';txt.textContent='Memoriza el ruido: el error de entrenamiento baja, pero el de prueba sube. Predecirá mal casos nuevos.';}
 }
 ds.value=3;ds.oninput=upd;upd();
})();
// 5) Simulador de escenarios
(function(){
 var xP=document.getElementById('xP');if(!xP)return;
 var xA=document.getElementById('xA'),xC=document.getElementById('xC'),base=120-4.5*10+2.1*20-3.2*4,sig=6;
 function upd(){
  var P=+xP.value,A=+xA.value,C=+xC.value;
  document.getElementById('xPv').textContent=P;document.getElementById('xAv').textContent=A;document.getElementById('xCv').textContent=C;
  var cp=-4.5*P,ca=2.1*A,cc=-3.2*C,y=120+cp+ca+cc;
  document.getElementById('yHat').textContent=y.toFixed(1);
  var dl=(y/base-1)*100,de=document.getElementById('yDelta');
  de.textContent=(dl>=0?'+':'')+dl.toFixed(1)+'% vs. hoy';de.style.color=dl>=0.05?'#1c7a4a':dl<-0.05?'#B3261E':'#667085';
  var lo=y-1.96*sig,hi=y+1.96*sig,sc=160;
  var cb=document.getElementById('ciBar');cb.style.left=Math.max(0,lo/sc*100)+'%';cb.style.width=Math.max(2,(hi-lo)/sc*100)+'%';
  document.getElementById('ciTxt').textContent='Intervalo de predicción 95 %: de '+lo.toFixed(1)+' a '+hi.toFixed(1);
  (function(){
   var a=120+2.1*A-3.2*C,a0=120+2.1*20-3.2*4,svg=document.getElementById('dcSvg');if(!svg)return;
   var X=function(q){return 44+q/200*500;},Y=function(p){return 214-p/22*196;};
   function line(a_,col,w,dash){var p0=Math.max(0,(a_-200)/4.5),p1=Math.min(22,a_/4.5);return '<line x1="'+X(a_-4.5*p0)+'" y1="'+Y(p0)+'" x2="'+X(a_-4.5*p1)+'" y2="'+Y(p1)+'" stroke="'+col+'" stroke-width="'+w+'"'+(dash?' stroke-dasharray="6 5"':'')+' stroke-linecap="round"/>';}
   var s='<line x1="44" y1="214" x2="544" y2="214" stroke="#cfd8e8"/><line x1="44" y1="18" x2="44" y2="214" stroke="#cfd8e8"/>';
   s+='<text x="48" y="14" font-size="11" fill="#667085">Precio ($)</text><text x="544" y="232" font-size="11" fill="#667085" text-anchor="end">Unidades (miles)</text>';
   s+=line(a0,'#9AA7BD',2,true)+line(a,'#2F6BFF',3.4,false);
   var pu=a/9;if(pu>0&&pu<22)s+='<circle cx="'+X(a/2)+'" cy="'+Y(pu)+'" r="4" fill="#fff" stroke="#F5A524" stroke-width="2"/><text x="'+(X(a/2)+8)+'" y="'+(Y(pu)-6)+'" font-size="10.5" fill="#B7791F">ε = −1</text>';
   if(y>0){s+='<line x1="44" y1="'+Y(P)+'" x2="'+X(y)+'" y2="'+Y(P)+'" stroke="#2F6BFF" stroke-dasharray="3 4" opacity=".5"/><line x1="'+X(y)+'" y1="'+Y(P)+'" x2="'+X(y)+'" y2="214" stroke="#2F6BFF" stroke-dasharray="3 4" opacity=".5"/><circle cx="'+X(y)+'" cy="'+Y(P)+'" r="6.5" fill="#2F6BFF" stroke="#fff" stroke-width="2.5"/>';}
   s+='<text x="'+(X(Math.min(a0-4.5*1,195))-4)+'" y="'+(Y(1)-6)+'" font-size="10.5" fill="#9AA7BD" text-anchor="end">hoy</text>';
   svg.innerHTML=s;
   var e=y>0?-4.5*P/y:-99,ev=document.getElementById('eVal'),tg=document.getElementById('eTag'),ab=Math.abs(e),R=P*y;
   ev.textContent=y>0?e.toFixed(2).replace('-','−'):'—';
   var k=ab>1.05?['ELÁSTICA','#F26B5B','Subir 1 % el precio reduce las unidades ≈ '+ab.toFixed(1)+' %: el ingreso cae. Los clientes reaccionan mucho al precio.']:ab<0.95?['INELÁSTICA','#2FA56B','Subir 1 % el precio reduce las unidades solo ≈ '+ab.toFixed(1)+' %: el ingreso sube. Los clientes reaccionan poco al precio.']:['UNITARIA','#F5A524','Subir 1 % el precio reduce las unidades ≈ 1 %: el ingreso casi no cambia. Es el precio que maximiza el ingreso.'];
   tg.textContent=k[0];tg.style.background=k[1];document.getElementById('eTxt').innerHTML=k[2]+'<br><b>Ingreso = P × Q = '+R.toFixed(0)+'</b>';
  })();
  var rows=[['Base (β₀)',120,'#9AA7BD'],['Precio',cp,cp>=0?'#2FA56B':'#F26B5B'],['Publicidad',ca,ca>=0?'#2FA56B':'#F26B5B'],['Competidores',cc,cc>=0?'#2FA56B':'#F26B5B'],['Ventas pronosticadas',y,'#2F6BFF']];
  document.getElementById('wf').innerHTML=rows.map(function(r){return '<div class="wfr"><span>'+r[0]+'</span><div class="t"><div class="f" style="width:'+Math.min(100,Math.abs(r[1])/160*100)+'%;background:'+r[2]+'"></div></div><b>'+(r[1]>0&&r[0]!=='Base (β₀)'&&r[0]!=='Ventas pronosticadas'?'+':'')+r[1].toFixed(1)+'</b></div>';}).join('');
 }
 [xP,xA,xC].forEach(function(e){e.oninput=function(){[].forEach.call(document.querySelectorAll('.scn .btn'),function(b){b.classList.remove('on');});upd();};});
 [].forEach.call(document.querySelectorAll('.scn .btn'),function(b){b.onclick=function(){var v=b.dataset.s.split(',');xP.value=v[0];xA.value=v[1];xC.value=v[2];[].forEach.call(document.querySelectorAll('.scn .btn'),function(q){q.classList.remove('on');});b.classList.add('on');upd();};});
 upd();
})();

// 7) Conjoint: ortogonalidad y simulador
(function(){
 var mx=document.getElementById('orthoMx');if(!mx)return;
 var L=CJ.L9,names=CJ.A.map(function(x){return x[0];}),tint=['#DCE6FF','#C9F0EA','#FFE9C2'];
 function grid(el,hi,small){
  var h='<table class="mxt'+(small?' sm':'')+'"><thead><tr><th></th>'+names.map(function(n){return '<th>'+n.slice(0,small?4:12)+'</th>';}).join('')+'</tr></thead><tbody>';
  L.forEach(function(r,i){h+='<tr'+(hi&&hi.indexOf(i)>=0?' class="hi"':'')+'><th>P'+(i+1)+'</th>'+r.map(function(v,a){return '<td style="background:'+tint[v]+'">'+CJ.A[a][1][v]+'</td>';}).join('')+'</tr>';});
  return el.innerHTML=h+'</tbody></table>';
 }
 grid(mx,null,false);
 function corr(x,y){var n=x.length,mx_=x.reduce(function(p,q){return p+q;},0)/n,my=y.reduce(function(p,q){return p+q;},0)/n,sxy=0,sxx=0,syy=0;x.forEach(function(v,i){sxy+=(v-mx_)*(y[i]-my);sxx+=Math.pow(v-mx_,2);syy+=Math.pow(y[i]-my,2);});return sxy/Math.sqrt(sxx*syy);}
 var m=0,i,j;for(i=0;i<4;i++)for(j=i+1;j<4;j++)m=Math.max(m,Math.abs(corr(L.map(function(r){return r[i];}),L.map(function(r){return r[j];}))));
 document.getElementById('orthoTx').innerHTML='Cada nivel aparece <b>3 veces</b> y la correlación máxima entre atributos es <b>'+m.toFixed(2)+'</b>. Así el efecto de cada atributo se puede separar de los demás con pocas preguntas.';
 // simulador
 var box=document.getElementById('cjCards');if(!box)return;
 var round,shown,chosen,PIC=['cA','cB','cC'];
 var PERF={0:['Cazador de ofertas','Decide por el precio: responde a promociones y descuentos.'],1:['Leal a la marca','Paga por confianza y reconocimiento.'],2:['Buscador de calidad','Se fija en lo que contiene: sabor, salud, ingredientes.'],3:['Práctico','Valora la conveniencia y la presentación.']};
 function stats(){
  var sc=CJ.A.map(function(at){return at[1].map(function(){return [0,0];});});
  chosen.forEach(function(c,r){CJ.T[r].forEach(function(pi,k){L[pi].forEach(function(lv,a){sc[a][lv][1]++;if(k===c)sc[a][lv][0]++;});});});
  return sc.map(function(ar){return ar.map(function(v){return v[1]?v[0]/v[1]:0;});});
 }
 function render(){
  var done=round>=6;
  document.getElementById('cjR').textContent=done?6:round+1;
  box.innerHTML=done?'<div class="cjdone"><b>¡Listo!</b><span>Con seis elecciones ya se ve qué pesa más en tu decisión. A más personas, más claro el patrón.</span></div>':CJ.T[round].map(function(pi,k){
   return '<div class="cjc" data-k="'+k+'"><div class="ph"><img src="assets/ph-'+PIC[k]+'.jpg" alt=""></div><h4>Producto '+(k+1)+'</h4>'+L[pi].map(function(lv,a){return '<div class="at"><span>'+CJ.A[a][0]+'</span><b>'+CJ.A[a][1][lv]+'</b></div>';}).join('')+'<button class="btn">Elegir</button></div>';}).join('');
  document.getElementById('cjProg').innerHTML=[0,1,2,3,4,5].map(function(r){return '<i class="'+(r<round?'d':r===round?'c':'')+'"></i>';}).join('');
  [].forEach.call(box.querySelectorAll('.cjc'),function(el){el.onclick=function(){chosen.push(+el.dataset.k);round++;render();};});
  var bars=document.getElementById('cjBars'),perf=document.getElementById('cjPerf');
  if(!chosen.length){bars.innerHTML='<p class="cjhint">Elige un producto en cada ronda: aquí aparecerá qué atributo pesa más.</p>';perf.innerHTML='';}
  else{
   var sc=stats(),rg=sc.map(function(ar){return Math.max.apply(null,ar)-Math.min.apply(null,ar);}),sum=rg.reduce(function(p,q){return p+q;},0)||1,top=rg.indexOf(Math.max.apply(null,rg));
   bars.innerHTML=CJ.A.map(function(at,a){var best=sc[a].indexOf(Math.max.apply(null,sc[a]));return '<div class="pbar" style="--c:'+CJ.COL[a]+';grid-template-columns:96px 1fr 120px"><span>'+at[0]+'</span><div class="t"><div class="f" style="width:'+(rg[a]/sum*100)+'%"></div></div><b style="font-size:12.5px">'+Math.round(rg[a]/sum*100)+'% · '+at[1][best]+'</b></div>';}).join('');
   perf.innerHTML=(done?'<small>TU PERFIL</small><b>'+PERF[top][0]+'</b><span>'+PERF[top][1]+'</span>':'<small>PERFIL PROVISIONAL</small><b>'+PERF[top][0]+'</b><span>Se afina con cada ronda.</span>');
  }
  grid(document.getElementById('cjMx'),done?null:CJ.T[round].slice(),true);
 }
 function reset(){round=0;chosen=[];render();}
 document.getElementById('cjReset').onclick=reset;reset();
})();
// 6) Deriva del modelo y re-entrenamiento
(function(){
 var svg=document.getElementById('driftSvg');if(!svg)return;
 var seed=11;function rnd(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296;}
 var d=[],t;for(t=1;t<=52;t++){var base=t<=30?40+1.0*t:70-1.0*(t-30);d.push([t,base+(rnd()-.5)*6]);}
 function ols(a,b){var pts=d.filter(function(p){return p[0]>=a&&p[0]<=b;}),n=pts.length,sx=0,sy=0,sxx=0,sxy=0;
  pts.forEach(function(p){sx+=p[0];sy+=p[1];sxx+=p[0]*p[0];sxy+=p[0]*p[1];});var m=(n*sxy-sx*sy)/(n*sxx-sx*sx);return [m,(sy-m*sx)/n];}
 function mae(l){var s=0,c=0;d.forEach(function(p){if(p[0]>30){s+=Math.abs(l[0]*p[0]+l[1]-p[1]);c++;}});return s/c;}
 var old=ols(1,30),nw=ols(38,52),mo=mae(old),mn=mae(nw);
 var X=function(x){return 36+(x-1)/51*540;},Y=function(y){return 270-y/110*250;};
 var trained=false;
 function draw(){
  var h='<line x1="36" y1="270" x2="580" y2="270" stroke="#cfd8e8"/><line x1="36" y1="14" x2="36" y2="270" stroke="#cfd8e8"/>';
  h+='<line x1="'+X(30.5)+'" y1="14" x2="'+X(30.5)+'" y2="270" stroke="#F26B5B" stroke-dasharray="5 5"/><text x="'+(X(30.5)+6)+'" y="28" font-size="11" fill="#F26B5B">Cambio de mercado</text>';
  h+='<line x1="'+X(1)+'" y1="'+Y(old[0]+old[1])+'" x2="'+X(52)+'" y2="'+Y(old[0]*52+old[1])+'" stroke="#7C5CFF" stroke-width="2.4" stroke-dasharray="7 5"/>';
  if(trained)h+='<line class="dr" pathLength="1" x1="'+X(31)+'" y1="'+Y(nw[0]*31+nw[1])+'" x2="'+X(52)+'" y2="'+Y(nw[0]*52+nw[1])+'" stroke="#2FA56B" stroke-width="3.4" style="stroke-dasharray:1;stroke-dashoffset:1;animation:draw 1.2s ease forwards"/>';
  d.forEach(function(p){h+='<circle cx="'+X(p[0])+'" cy="'+Y(p[1])+'" r="3.6" fill="'+(p[0]<=30?'#6FA2FF':'#F26B5B')+'"/>';});
  h+='<text x="40" y="288" font-size="10.5" fill="#667085">semana 1</text><text x="545" y="288" font-size="10.5" fill="#667085">52</text>';
  svg.innerHTML=h;
  var mx=Math.max(mo,1);
  document.getElementById('mOld').style.width=Math.min(100,mo/mx*100)+'%';document.getElementById('mOldV').textContent=mo.toFixed(1);
  document.getElementById('mNew').style.width=trained?Math.min(100,mn/mx*100)+'%':'0';document.getElementById('mNewV').textContent=trained?mn.toFixed(1):'—';
  document.getElementById('drTxt').textContent=trained?'Con las últimas 15 semanas, el modelo recupera la tendencia nueva: el error baja. Mañana el mercado volverá a moverse y habrá que repetirlo.':'Hasta la semana 30 el modelo acierta. Luego llega un competidor nuevo y las ventas empiezan a caer: el modelo sigue proyectando el pasado.';
 }
 document.getElementById('retrain').onclick=function(){trained=true;draw();};
 document.getElementById('resetDrift').onclick=function(){trained=false;draw();};
 draw();
})();

addEventListener('hashchange',function(){var n=parseInt(location.hash.slice(1),10);if(!isNaN(n))go(n-1);});
var start=parseInt(location.hash.slice(1),10);
go(isNaN(start)?0:start-1);
})();
