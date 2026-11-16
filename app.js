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
  k:[[14,'meses','Periodo de Recuperación de la Inversión (PRI)'],[5,'','segmentos de tiendas identificados']],
  l:'Una cifra de ventas es una estimación: se comunica con su margen de error, no como certeza.',
  ev:{t:'Evidencia: el mapa de similitud y la predicción',imgs:[['svg:mds','Cada punto es una tienda; cercanía = parecido (ilustración)'],['svg:fit','Ventas reales vs. estimadas y aciertos por clase (ilustración)']],
   r:['Las variables mezcladas se convierten en «distancias» entre tiendas.','Los puntos cercanos se agrupan en segmentos, cada uno con su modelo.','Cuanto más cerca de la diagonal, mejor la predicción: error de clasificación de 0 % en Cancún y 4.8 % en Acapulco.'],
   w:'Es muy sensible a datos inconsistentes de la tienda nueva: si sus variables no son coherentes, la predicción se desvía.'}},
 {id:'k3',b:['pin','target','map'],bi:1,n:3,t:'Dinamismo económico y Competencia',em:'Competencia',sub:'¿Qué tan dinámica y qué tan competida está cada zona?',
  q:'¿Qué zonas presentan alto dinamismo económico y qué tan competido están?',
  h:'Las condiciones económicas y la concentración de competidores cercanos cambian el volumen y el monto de transacciones de una tienda.',
  m:[['Polígonos de influencia','Zonas alrededor de cada tienda: radio de 500 m, tiempo de traslado (isócronas) o AGEB del INEGI.'],['Índice Herfindahl-Hirschman','Mide concentración: más alto = menos competencia.'],['Contrastes de hipótesis y ANOVA','Comprueban si las diferencias entre zonas son reales o casualidad.'],['Regresión y machine learning','Cuantifican qué factores pesan más y con qué capacidad predictiva.']],
  k:[[46,'','redes de competidores'],[22790,'','tiendas analizadas'],[80528,'','ubicaciones únicas']],
  l:'Un índice resume la competencia en un número; hay que explicar qué mide y qué no.',
  ev:{t:'Evidencia: concentración y zonas de influencia',imgs:[['map:comp','Coropleta (concentración por zona) y teselación de Voronoi (un polígono por sucursal) · datos simulados'],['map:zonas','Isócronas (minutos de traslado) y radios de influencia · datos simulados']],
   r:['A mayor HHI, más concentrado el mercado (menos competencia).','La zona de influencia puede ser un círculo, un tiempo de traslado o un AGEB.','La oportunidad aparece donde la población tiene una sola alternativa.'],
   w:'Las distancias en línea recta ignoran calles, barreras y movilidad real.'}},
 {id:'k4a',b:['people','scale','doc'],bi:2,n:'4A',t:'Impacto en los changarros',em:'changarros',sub:'Enfoque microrregional: ¿desplaza la tienda al comercio de barrio?',
  q:'¿La presencia de las tiendas de la cadena desplaza a los pequeños comercios («changarros») de su zona de influencia?',
  h:['La expansión de la cadena no desplaza directamente a los changarros: el efecto depende del entorno económico local.','El nacimiento de changarros responde al ciclo económico regional: ante el desempleo, abrir un negocio propio es una alternativa de ingreso.'],
  m:[['Polígonos de influencia (Voronoi)','Dividen el territorio según la tienda más cercana y reúnen los changarros de cada zona.'],['Índices de concentración','IC, ICE e ICEF: combinan establecimientos, empleo, gasto e ingreso.'],['Natalidad y mortalidad de negocios','Mide cuántos negocios de 1 a 10 empleados nacen y cuántos cierran.'],['Series de tiempo económicas','Relacionan esa dinámica con la economía local: actividad, inflación, compras.']],
  k:[[3,'','índices de concentración (IC, ICE, ICEF)'],[2,'','censos comparados (2009 y 2014)'],[10,'','empleados o menos: negocios estudiados']],
  l:'Un hallazgo matizado («no afecta directamente, aunque hay relación inversa de largo plazo») comunica mejor que un sí o un no.',
  ev:{t:'Evidencia: polígonos de influencia y economía local',imgs:[['map:chang','Changarros dentro del polígono de cada tienda y su relación con la economía · datos simulados']],
   r:['Cada polígono reúne los changarros más cercanos a una tienda de la cadena.','Donde la economía del estado va bien, la mortalidad de los negocios chicos baja.','La relación inversa de largo plazo puede ser coyuntural: correlación no es causalidad.'],
   w:'Los polígonos suponen distancias en línea recta y compradores indiferentes: no consideran vialidades ni movilidad social.'}},
 {id:'k4',b:['people','doc','scale'],bi:2,n:'4B',t:'Impacto en la economía regional y nacional',em:'economía regional y nacional',sub:'Derrama, empleo, impuestos e inclusión financiera',
  q:'¿Qué derrama económica genera la empresa en las regiones y en el país?',
  h:'La actividad de la empresa genera beneficios medibles —empleo, recaudación e inclusión financiera— mayores que su peso relativo en el sector.',
  m:[['Creación de índices e indicadores','Reúnen empleo, impuestos, cobertura e inclusión financiera por municipio, estado y país.'],['Series de tiempo económicas','Siguen variables económicas y de negocios a lo largo del tiempo.'],['Comparativos fiscales y de empleo','Ponen los impuestos y el empleo de la empresa junto a programas y subsectores de referencia.'],['Fuentes oficiales y gremiales','INEGI (DENUE, censos, encuestas), ENIF, CNBV y ANTAD.']],
  k:[[767,'','municipios con presencia'],[77199,'','empleos directos en tienda'],[33,'×','impuestos 2014 vs. programa federal para changarros']],
  l:'Comparar con algo conocido —un programa federal, el presupuesto de un estado— vuelve tangible una cifra de impuestos o empleo.',
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
var BID={k1:'',k3:'b1',k4a:'b2',k4:'',k6:'b3',k7:'b4'};


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
 '<div class="panel rv" style="--i:5"><div class="lbl">DISEÑO ORTOGONAL · 9 PRODUCTOS, 4 ATRIBUTOS</div><div id="orthoMx"></div><p class="orthoTx" id="orthoTx"></p><div class="lbl" style="margin-top:16px">ASÍ SE LE PRESENTA AL ENCUESTADO</div><div class="excard"><div class="ph"><img src="assets/ph-cA.jpg" alt=""></div><div class="bd"><h4>Producto 1</h4><div class="g"><div><span>Precio</span><b>$38</b></div><div><span>Marca</span><b>Local</b></div><div><span>Ingrediente</span><b>Clásico</b></div><div><span>Empaque</span><b>Bolsa</b></div></div></div><div class="pick">¿Lo comprarías?<i>Elegir</i></div></div></div></div></section>';
 var s2=conjHead('Conjoint: simulador','Simulador conjoint')+
 '<h2 class="rv" style="--i:1">Elige y descubre tu <em>perfil</em></h2><p class="lead rv" style="--i:2">Seis rondas de tres productos que cambian en todos sus atributos a la vez. Tus elecciones se traducen en un perfil.</p>'+
 '<div class="body" style="top:200px"><div class="demo rv" style="--i:3;grid-template-columns:1.3fr 1fr;gap:24px"><div class="panel"><div class="selrow"><div class="lbl">RONDA <b id="cjR">1</b> DE 6 · ¿CUÁL COMPRARÍAS?</div><button class="btn alt" id="cjReset">Reiniciar</button></div><div class="cjcards" id="cjCards"></div><div class="cjprog" id="cjProg"></div></div>'+
 '<div class="panel"><div class="lbl">IMPORTANCIA DE CADA ATRIBUTO</div><div id="cjBars"></div><div class="cjperf" id="cjPerf"></div><div class="lbl" style="margin-top:12px">ORTOGONALIDAD · PRODUCTOS MOSTRADOS</div><div id="cjMx"></div></div></div></div></section>';
 return s1+s2;
}

function mirror(){
 var B=BLOCKS[0];
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="0" data-title="Caso 2 · Tiendas espejo" data-theme="light" style="--c:'+B.c+'"><div class="crumb rv" style="--i:0">'+B.n+' · Caso 2 · Tiendas espejo</div>'+thread(0)+
 '<h2 class="rv" style="--i:1">Predecir con <em>tiendas espejo</em></h2><p class="lead rv" style="--i:2">Una cadena con miles de sucursales ya tiene la respuesta: las que se parecen a la nueva. Su pasado es el futuro más probable de la nueva tienda.</p>'+
 '<div class="body" style="top:200px"><div class="demo rv" style="--i:3;grid-template-columns:1.45fr 1fr;gap:24px"><div class="panel" style="padding:14px 16px"><div class="lbl">MAPA DE SIMILITUD · CADA PUNTO ES UNA SUCURSAL (320)</div><svg id="mrSvg" viewBox="0 0 600 330" style="width:100%;height:330px"></svg></div>'+
 '<div class="panel"><div class="selrow"><div class="lbl">TIENDA NUEVA EN</div><select id="mrSel" class="cbx"><option value="0">Zona comercial central</option><option value="1">Colonia residencial</option><option value="2">Periferia en crecimiento</option></select></div>'+
 '<div class="row2" style="margin-top:10px"><label style="min-width:110px">Espejos (k)</label><input type="range" id="mrK" min="3" max="25" step="1" value="8"><b id="mrKv" class="xv">8</b></div>'+
 '<div class="lbl" style="margin-top:8px">VENTAS MENSUALES ESPERADAS</div><div class="big2"><span id="mrY">—</span><small> miles de pesos</small></div><div class="ci"><div class="cib"><div id="mrBar"></div></div><span id="mrTxt"></span></div>'+
 '<ol class="mrsteps"><li><b>Describe</b> el sitio: tipo, entorno, ubicación.</li><li><b>Busca</b> las sucursales más parecidas (distancia de Gower).</li><li><b>Mira</b> cuánto vendieron esas tiendas «espejo».</li><li><b>Estima</b> con su promedio y su rango, no con una sola cifra.</li></ol></div></div></div></section>';
}


var MAPSN=0;
function MAPS2(kinds,meet){
 var PW=316,PH=215,UID='m'+(++MAPSN);
 function rng(s){return function(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;};}
 function clip(poly,nx,ny,c){var out=[],i,n=poly.length;for(i=0;i<n;i++){var p=poly[i],q=poly[(i+1)%n],dp=nx*p[0]+ny*p[1]-c,dq=nx*q[0]+ny*q[1]-c;if(dp<=0)out.push(p);if((dp<0&&dq>0)||(dp>0&&dq<0)){var t=dp/(dp-dq);out.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])]);}}return out;}
 function vor(S){return S.map(function(s,i){var poly=[[0,0],[PW,0],[PW,PH],[0,PH]];S.forEach(function(o,j){if(i===j||!poly.length)return;var nx=o[0]-s[0],ny=o[1]-s[1],mx=(o[0]+s[0])/2,my=(o[1]+s[1])/2;poly=clip(poly,nx,ny,nx*mx+ny*my);});return poly;});}
 function pts(poly){return poly.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ');}
 function spread(r,n,min,m){var S=[],t=0;while(S.length<n&&t<4000){t++;var p=[m+r()*(PW-2*m),m+r()*(PH-2*m)];if(S.every(function(q){return Math.hypot(q[0]-p[0],q[1]-p[1])>=min;}))S.push(p);}return S;}
 function ramp(v,cs){var f=Math.min(.999,Math.max(0,v))*(cs.length-1),i=Math.floor(f),t=f-i,h=function(c,k){return parseInt(c.substr(1+2*k,2),16);};return 'rgb('+[0,1,2].map(function(k){return Math.round(h(cs[i],k)*(1-t)+h(cs[i+1],k)*t);}).join(',')+')';}
 function chip(t){return '<g><rect x="8" y="8" width="'+(t.length*5.6+16)+'" height="19" rx="9.5" fill="#fff" opacity=".94"/><text x="16" y="21" font-size="10.5" font-weight="600" fill="#0B1F44">'+t+'</text></g>';}
 function road(r){var h='<rect width="'+PW+'" height="'+PH+'" fill="#EEF2F8"/>',i;for(i=0;i<7;i++){var y=r()*PH,y2=r()*PH;h+='<path d="M0 '+y+' L'+PW+' '+y2+'" stroke="#fff" stroke-width="'+(2+r()*3)+'" opacity=".85"/>';}for(i=0;i<6;i++){var x=r()*PW,x2=r()*PW;h+='<path d="M'+x+' 0 L'+x2+' '+PH+'" stroke="#fff" stroke-width="'+(2+r()*3)+'" opacity=".85"/>';}return h;}
 function branch(p,c){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="5.2" fill="'+(c||'#2F6BFF')+'" stroke="#fff" stroke-width="1.8"/>';}
 function comp(p){return '<rect x="'+(p[0]-3)+'" y="'+(p[1]-3)+'" width="6" height="6" fill="#0B1F44" stroke="#fff" stroke-width="1" transform="rotate(45 '+p[0]+' '+p[1]+')"/>';}
 var P={
  coropleta:function(){var r=rng(11),S=spread(r,46,26,4),cs=['#FFF4DC','#F8C46A','#F26B5B','#B4301F'],G=[[70,60,70],[240,150,80],[160,110,60]],h='',V=vor(S);
   S.forEach(function(s,i){var v=0;G.forEach(function(g){v+=Math.exp(-(Math.pow(s[0]-g[0],2)+Math.pow(s[1]-g[1],2))/(2*g[2]*g[2]));});v=Math.min(1,v*.5+r()*.22);h+='<polygon points="'+pts(V[i])+'" fill="'+ramp(v,cs)+'" stroke="#fff" stroke-width="1.2"/>';});
   var B=spread(r,12,34,10);B.forEach(function(p){h+=branch(p);});for(var i=0;i<30;i++)h+=comp([8+r()*(PW-16),8+r()*(PH-16)]);
   h+=chip('Coropleta: concentración (HHI)')+'<g transform="translate(10 190)"><rect width="140" height="18" rx="9" fill="#fff" opacity=".94"/><defs><linearGradient id="'+UID+'g"><stop offset="0" stop-color="#FFF4DC"/><stop offset=".5" stop-color="#F26B5B"/><stop offset="1" stop-color="#B4301F"/></linearGradient></defs><rect x="8" y="6" width="42" height="6" rx="3" fill="url(#'+UID+'g)"/><text x="55" y="13" font-size="8.5" fill="#475467">baja → alta</text><circle cx="108" cy="9" r="3.6" fill="#2F6BFF"/><text x="114" y="12.5" font-size="8.5" fill="#475467">propia</text></g><g transform="translate(152 190)"><rect width="64" height="18" rx="9" fill="#fff" opacity=".94"/><rect x="8" y="6.5" width="5" height="5" fill="#0B1F44" transform="rotate(45 10.5 9)"/><text x="18" y="12.5" font-size="8.5" fill="#475467">competidor</text></g>';
   return h;},
  voronoi:function(){var r=rng(23),S=spread(r,10,52,22),V=vor(S),C=[],cnt=S.map(function(){return 0;}),h='',i;
   for(i=0;i<30;i++){var p=[8+r()*(PW-16),8+r()*(PH-16)];C.push(p);var b=0,bd=1e9;S.forEach(function(s,j){var d=Math.hypot(s[0]-p[0],s[1]-p[1]);if(d<bd){bd=d;b=j;}});cnt[b]++;}
   var mx=Math.max.apply(null,cnt)||1;
   S.forEach(function(s,j){h+='<polygon points="'+pts(V[j])+'" fill="'+ramp(cnt[j]/mx,['#EAF1FF','#9DB9FF','#2F6BFF'])+'" fill-opacity=".85" stroke="#0B1F44" stroke-width="1.3"/>';});
   C.forEach(function(p){h+=comp(p);});
   S.forEach(function(s,j){h+=branch(s,'#0B1F44');h+='<text x="'+(s[0]+8)+'" y="'+(s[1]+4)+'" font-size="10.5" font-weight="700" fill="#0B1F44" stroke="#fff" stroke-width="3" paint-order="stroke">'+cnt[j]+'</text>';});
   h+=chip('Voronoi: un polígono por sucursal')+'<g transform="translate(10 190)"><rect width="206" height="18" rx="9" fill="#fff" opacity=".94"/><circle cx="14" cy="9" r="4" fill="#0B1F44"/><text x="22" y="12.5" font-size="8.5" fill="#475467">sucursal</text><rect x="66" y="6.5" width="5" height="5" fill="#0B1F44" transform="rotate(45 68.5 9)"/><text x="76" y="12.5" font-size="8.5" fill="#475467">competidor</text><text x="126" y="12.5" font-size="8.5" fill="#475467">n = competidores dentro</text></g>';
   return h;},
  isocronas:function(){var r=rng(5),h=road(r),cx=150,cy=118,i,k,cols=['#FFE9C2','#FFD08A','#F9A66B','#F26B5B','#B4301F'],txt=['25','20','15','10','5'];
   for(k=5;k>=1;k--){var d='';for(i=0;i<=72;i++){var t=i/72*Math.PI*2,rr=(1+.38*Math.cos(2*t-.5)+.2*Math.cos(3*t+1)+.12*Math.cos(5*t))*(1+.06*Math.sin(7*t+k))*k*21;d+=(i?'L':'M')+(cx+rr*Math.cos(t)).toFixed(1)+' '+(cy+rr*Math.sin(t)).toFixed(1);}
    h+='<path d="'+d+'Z" fill="'+cols[5-k]+'" fill-opacity=".78" stroke="#fff" stroke-width="1.4"/>';}
   for(k=1;k<=5;k++){var t0=-.35,rr0=(1+.38*Math.cos(2*t0-.5)+.2*Math.cos(3*t0+1)+.12*Math.cos(5*t0))*k*21;h+='<text x="'+(cx+rr0*Math.cos(t0)-8)+'" y="'+(cy+rr0*Math.sin(t0)+3)+'" font-size="8.5" font-weight="600" fill="#0B1F44">'+k*5+'′</text>';}
   h+=branch([cx,cy])+chip('Isócronas: minutos de traslado');return h;},
  radios:function(){var r=rng(17),h=road(r),S=[[78,84],[148,120],[226,88],[120,176],[232,168]],i;
   S.forEach(function(s,i){h+='<circle cx="'+s[0]+'" cy="'+s[1]+'" r="62" fill="#F5A524" fill-opacity=".16" stroke="#F5A524" stroke-width="1.2" stroke-dasharray="4 3"/>';});
   S.forEach(function(s){h+='<circle cx="'+s[0]+'" cy="'+s[1]+'" r="31" fill="#2F6BFF" fill-opacity=".2" stroke="#2F6BFF" stroke-width="1.4"/>';});
   S.forEach(function(s){h+=branch(s);});
   h+='<text x="'+(S[0][0]+33)+'" y="'+(S[0][1]-33)+'" font-size="9" fill="#2F6BFF" font-weight="600">1 km</text><text x="'+(S[0][0]-60)+'" y="'+(S[0][1]+62)+'" font-size="9" fill="#B7791F" font-weight="600">2 km</text>';
   h+=chip('Radios: 1 km y 2 km')+'<g transform="translate(10 190)"><rect width="150" height="18" rx="9" fill="#fff" opacity=".94"/><text x="10" y="12.5" font-size="8.5" fill="#475467">Donde se traslapan: se canibalizan</text></g>';return h;},

  chang:function(){var r=rng(41),S=spread(r,7,60,26),V=vor(S),C=[],cnt=S.map(function(){return 0;}),h='',i;
   for(i=0;i<64;i++){var p=[8+r()*(PW-16),30+r()*(PH-40)];C.push(p);var b=0,bd=1e9;S.forEach(function(s,j){var d=Math.hypot(s[0]-p[0],s[1]-p[1]);if(d<bd){bd=d;b=j;}});cnt[b]++;}
   var mx=Math.max.apply(null,cnt)||1;
   S.forEach(function(s,j){h+='<polygon points="'+pts(V[j])+'" fill="'+ramp(cnt[j]/mx,['#FFF4DC','#F8C46A','#E5951A'])+'" fill-opacity=".8" stroke="#0B1F44" stroke-width="1.2"/>';});
   C.forEach(function(p){h+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2.6" fill="#7C5CFF" stroke="#fff" stroke-width=".8"/>';});
   S.forEach(function(s,j){h+='<rect x="'+(s[0]-5)+'" y="'+(s[1]-5)+'" width="10" height="10" rx="2.5" fill="#0B1F44" stroke="#fff" stroke-width="1.6"/><text x="'+(s[0]+9)+'" y="'+(s[1]+4)+'" font-size="10.5" font-weight="700" fill="#0B1F44" stroke="#fff" stroke-width="3" paint-order="stroke">'+cnt[j]+'</text>';});
   h+=chip('Polígonos de influencia')+'<g transform="translate(10 190)"><rect width="196" height="18" rx="9" fill="#fff" opacity=".94"/><rect x="8" y="5" width="8" height="8" rx="2" fill="#0B1F44"/><text x="20" y="12.5" font-size="8.5" fill="#475467">tienda</text><circle cx="62" cy="9" r="3" fill="#7C5CFF"/><text x="68" y="12.5" font-size="8.5" fill="#475467">changarro</text><text x="116" y="12.5" font-size="8.5" fill="#475467">n = changarros en el polígono</text></g>';
   return h;},
  serie:function(){var r=rng(7),h='<rect width="'+PW+'" height="'+PH+'" fill="#fff"/>',i,N=40,e=[],m=[];
   for(i=0;i<N;i++){var t=i/(N-1);e.push(.35+.45*t+.1*Math.sin(t*9)+(r()-.5)*.05);}
   for(i=0;i<N;i++){m.push(1.08-e[i]*.9+(r()-.5)*.07);}
   var X=function(i){return 24+i/(N-1)*(PW-40);},Y=function(v){return 190-v*140;};
   for(i=0;i<5;i++)h+='<line x1="24" y1="'+(50+i*35)+'" x2="'+(PW-16)+'" y2="'+(50+i*35)+'" stroke="#EEF1F7"/>';
   h+='<line x1="24" y1="190" x2="'+(PW-16)+'" y2="190" stroke="#cfd8e8"/><line x1="24" y1="36" x2="24" y2="190" stroke="#cfd8e8"/>';
   function line(a,c){return '<polyline points="'+a.map(function(v,i){return X(i).toFixed(1)+','+Y(v).toFixed(1);}).join(' ')+'" fill="none" stroke="'+c+'" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"/>';}
   h+=line(e,'#2F6BFF')+line(m,'#F26B5B')+chip('Economía vs. mortalidad de negocios');
   h+='<g transform="translate(10 194)"><rect x="0" y="-2" width="296" height="18" rx="9" fill="#fff" opacity=".94"/><line x1="10" y1="7" x2="26" y2="7" stroke="#2F6BFF" stroke-width="3"/><text x="31" y="10" font-size="8.5" fill="#475467">indicador económico del estado</text><line x1="160" y1="7" x2="176" y2="7" stroke="#F26B5B" stroke-width="3"/><text x="181" y="10" font-size="8.5" fill="#475467">mortalidad de negocios chicos</text></g>';
   h+='<text x="'+(PW-18)+'" y="52" font-size="9" fill="#667085" text-anchor="end">tiempo →</text>';
   return h;}
 };
 var out='<svg viewBox="0 0 '+(PW*2+8)+' '+PH+'" style="width:100%;height:100%" preserveAspectRatio="xMidYMid '+(meet?'meet':'slice')+'"><defs><clipPath id="'+UID+'"><rect width="'+PW+'" height="'+PH+'" rx="10"/></clipPath></defs>';
 kinds.forEach(function(k,i){out+='<g transform="translate('+(i*(PW+8))+' 0)" clip-path="url(#'+UID+')">'+P[k]()+'</g>';});
 return out+'</svg>';
}
var EVSVG={
 mds:function(){
  var s=3,r=function(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;},g=function(){return (r()+r()+r()-1.5)/1.5;};
  var X=function(v){return 44+(v+0.2)/0.7*380;},Y=function(v){return 232-(v+0.25)/0.5*212;},h='<rect width="460" height="270" fill="#fff"/>',i,t;
  for(t=-0.2;t<=0.5001;t+=0.1)h+='<line x1="'+X(t)+'" y1="20" x2="'+X(t)+'" y2="232" stroke="#eef1f7"/><text x="'+X(t)+'" y="248" font-size="10" fill="#667085" text-anchor="middle">'+t.toFixed(1)+'</text>';
  for(t=-0.25;t<=0.2501;t+=0.05)h+='<line x1="44" y1="'+Y(t)+'" x2="424" y2="'+Y(t)+'" stroke="#eef1f7"/><text x="38" y="'+(Y(t)+3)+'" font-size="10" fill="#667085" text-anchor="end">'+t.toFixed(2)+'</text>';
  h+='<rect x="44" y="20" width="380" height="212" fill="none" stroke="#cfd8e8"/>';
  function blob(cx,cy,sx,sy,n,col){for(var k=0;k<n;k++)h+='<circle cx="'+X(cx+g()*sx)+'" cy="'+Y(cy+g()*sy)+'" r="2.2" fill="'+col+'" opacity=".7"/>';}
  blob(-0.09,0.105,0.06,0.09,260,'#0B1F44');blob(-0.09,-0.085,0.07,0.07,260,'#0B1F44');blob(-0.08,0.0,0.05,0.06,70,'#0B1F44');blob(-0.04,0.14,0.05,0.025,40,'#0B1F44');
  blob(0.22,0.07,0.07,0.06,260,'#F26B5B');blob(0.15,-0.13,0.05,0.06,220,'#F26B5B');blob(0.17,-0.02,0.025,0.1,70,'#F26B5B');blob(0.1,-0.17,0.03,0.04,15,'#F26B5B');
  h+='<rect x="236" y="26" width="182" height="40" rx="4" fill="#fff" stroke="#cfd8e8"/><circle cx="248" cy="39" r="3.2" fill="#F26B5B"/><text x="258" y="42" font-size="10.5" fill="#243350">tiendas de la plaza Norte</text><circle cx="248" cy="56" r="3.2" fill="#0B1F44"/><text x="258" y="59" font-size="10.5" fill="#243350">tiendas de la plaza Sur</text>';
  h+='<text x="234" y="264" font-size="10.5" fill="#667085" text-anchor="middle">Dimensión 1</text><text x="10" y="126" font-size="10.5" fill="#667085" transform="rotate(-90 10 126)" text-anchor="middle">Dimensión 2</text>';
  return '<svg viewBox="0 0 460 270" style="width:100%;height:100%" preserveAspectRatio="xMidYMid meet">'+h+'</svg>';
 },
 fit:function(){
  var s=9,r=function(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;},h='<rect width="640" height="290" fill="#fff"/>',i,t;
  var X=function(v){return 62+(v-300)/1200*250;},Y=function(v){return 232-(v-350)/1150*190;};
  h+='<text x="190" y="18" font-size="12.5" font-weight="600" text-anchor="middle" fill="#0B1F44">Ajuste en la plaza A</text><rect x="62" y="32" width="250" height="200" fill="none" stroke="#cfd8e8"/>';
  [400,600,800,1000,1200,1400].forEach(function(v){h+='<line x1="62" y1="'+Y(v)+'" x2="312" y2="'+Y(v)+'" stroke="#eef1f7"/><text x="56" y="'+(Y(v)+3)+'" font-size="9.5" fill="#667085" text-anchor="end">'+v+'</text>';});
  [400,600,800,1000,1200,1400].forEach(function(v){h+='<text x="'+X(v)+'" y="246" font-size="9.5" fill="#667085" text-anchor="middle">'+v+'</text>';});
  h+='<line x1="'+X(330)+'" y1="'+Y(330)+'" x2="'+X(1450)+'" y2="'+Y(1450)+'" stroke="#F26B5B" stroke-width="1.6"/>';
  for(i=0;i<53;i++){var v=380+Math.pow(r(),1.3)*1060,e=v+(r()-.5)*40;h+='<circle cx="'+X(v)+'" cy="'+Y(e)+'" r="2.6" fill="#0B1F44"/>';if(i%6===0)h+='<text x="'+(X(v)+3)+'" y="'+(Y(e)-4)+'" font-size="5.5" fill="#667085">T'+(100+i)+'</text>';}
  h+='<text x="187" y="268" font-size="11" fill="#667085" text-anchor="middle">Ventas estimadas</text><text x="14" y="132" font-size="11" fill="#667085" transform="rotate(-90 14 132)" text-anchor="middle">Ventas reales</text>';
  var m=[[13,0,0],[0,11,0],[0,0,29]],cx=410,cy=70,w=62,hh=44;
  h+='<text x="500" y="18" font-size="12.5" font-weight="600" text-anchor="middle" fill="#0B1F44">Error = 0</text>';
  for(i=0;i<3;i++){h+='<text x="'+(cx+w*i+w/2+20)+'" y="'+(cy-8)+'" font-size="11" fill="#F26B5B" text-anchor="middle">'+(i+1)+'</text><text x="'+(cx+6)+'" y="'+(cy+hh*i+hh/2+4)+'" font-size="11" fill="#F26B5B" text-anchor="middle">'+(i+1)+'</text>';}
  for(i=0;i<3;i++)for(var j=0;j<3;j++){var d=i===j;h+='<rect x="'+(cx+20+w*j)+'" y="'+(cy+hh*i)+'" width="'+w+'" height="'+hh+'" fill="'+(d?'#DCE6FF':'#fff')+'" stroke="#cfd8e8"/><text x="'+(cx+20+w*j+w/2)+'" y="'+(cy+hh*i+hh/2+5)+'" font-size="'+(d?16:13)+'" fill="'+(d?'#2F6BFF':'#98A2B3')+'" font-weight="'+(d?600:400)+'" text-anchor="middle">'+m[i][j]+'</text>';}
  h+='<text x="500" y="244" font-size="11" fill="#667085" text-anchor="middle">Clase estimada</text><text x="372" y="140" font-size="11" fill="#667085" transform="rotate(-90 372 140)" text-anchor="middle">Clase real</text>';
  return '<svg viewBox="0 0 640 290" style="width:100%;height:100%" preserveAspectRatio="xMidYMid meet">'+h+'</svg>';
 }
 ,chang:function(){return MAPS2(['chang','serie'],true);},
 comp:function(){return MAPS2(['coropleta','voronoi']);},
 zonas:function(){return MAPS2(['isocronas','radios']);}

};

var GM={G:[['Zona comercial central','#7C5CFF',[22,16,30,150,55],80,[5.5,12,1.8,1.2,-2.6]],['Colonia residencial','#2F6BFF',[18,5,10,40,35],90,[9,6,1.2,2.5,-2.2]],['Periferia en crecimiento','#F5A524',[8,2,12,15,20],60,[10,5,4.5,3,-3]],['Corredor vial','#14A39A',[12,4,38,60,40],70,[4,6,5,2,-2]],['Zona turística','#F26B5B',[10,18,20,110,60],50,[3,16,2,2.2,-3.5]]],
 V:[['PEA','Población económicamente activa (miles)',0,40,1],['Peatonal','Afluencia peatonal (miles/día)',0,25,1],['Vehicular','Afluencia vehicular (miles/día)',0,50,1],['Establ.','Establecimientos comerciales',0,250,5],['Compet.','Concentración de la competencia (0–100)',0,100,1]]};
function mirror2(){
 var B=BLOCKS[0];
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="0" data-title="Caso 2 · Un modelo por grupo" data-theme="light" style="--c:'+B.c+'"><div class="crumb rv" style="--i:0">'+B.n+' · Caso 2 · Un modelo por grupo</div>'+thread(0)+
 '<h2 class="rv" style="--i:1">Un <em>modelo</em> para cada grupo</h2>'+
 '<div class="gmpick rv" style="--i:2"><span>1 · ELIGE EL GRUPO DE TIENDAS</span><i id="gmDot" class="gdot"></i><select id="gmSel" class="cbx">'+GM.G.map(function(g,i){return '<option value="'+i+'">'+g[0]+'</option>';}).join('')+'</select><span style="margin-left:14px">2 · SU MODELO AJUSTADO</span></div><div class="fm sm xs rv" style="--i:2" id="gmF"></div>'+
 '<div class="body" style="top:270px"><div class="demo rv" style="--i:3;grid-template-columns:1.1fr 1fr;gap:24px"><div class="panel">'+
 '<div class="lbl">VARIABLES INDEPENDIENTES (HIPOTÉTICAS)</div>'+GM.V.map(function(v,i){return '<div class="row2"><label style="min-width:210px;font-size:13px">'+v[1]+'</label><input type="range" class="gmR" data-i="'+i+'" min="'+v[2]+'" max="'+v[3]+'" step="'+v[4]+'"><b class="xv" id="gmv'+i+'"></b></div>';}).join('')+
 '<div class="scn" style="margin-top:8px"><button class="btn alt" id="gmAvg">Tienda promedio del grupo</button><button class="btn alt" id="gmUp">Zona más concurrida (+30 %)</button></div><div class="gmfit" id="gmFit"></div></div>'+
 '<div class="panel"><div class="lbl">VENTAS PRONOSTICADAS PARA ESTE GRUPO</div><div class="big2"><span id="gmY">—</span><small> miles de pesos / mes</small><em id="gmD"></em></div><div class="ci"><div class="cib"><div id="gmBar"></div></div><span id="gmTxt"></span></div><div class="lbl" style="margin-top:14px">CONTRIBUCIÓN DE CADA VARIABLE</div><div id="gmWf"></div></div></div></div></section>';
}

function impacto(){
 var B=BLOCKS[2];
 function bar(l,v,w,col){return '<div class="ibar"><span>'+l+'</span><div class="t"><div class="f" style="width:'+w+'%;background:'+col+'"></div></div><b>'+v+'</b></div>';}
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="2" data-title="Caso 4B · Impactos positivos" data-theme="light" style="--c:'+B.c+'"><div class="crumb rv" style="--i:0">'+B.n+' · Caso 4B · Impactos positivos</div>'+thread(2)+
 '<h2 class="rv" style="--i:1">Lo que la empresa <em>aporta</em> al territorio</h2><p class="lead rv" style="--i:2">Resultados del estudio (datos 2014): empleo, recaudación, inclusión financiera y presencia en el país.</p>'+
 '<div class="body" style="top:196px;bottom:44px"><div class="imp">'+
 '<div class="ipn rv" style="--c:#14A39A;--i:3"><div class="ih"><i>👥</i><b>Empleo</b></div><div class="bigr"><span data-count="77199">0</span><small>empleos directos en tienda</small></div>'+
 '<div class="chips2"><span><b data-count="113615">0</b> personas beneficiadas en total <em>(0.47 adicionales por empleado)</em></span><span><b>1.6</b> salarios mínimos del comercio <em>(≈ 2 mínimos nacional)</em></span><span><b>≈ 5 %</b> de los empleos del subsector «Abarrotes y alimentos»</span></div></div>'+
 '<div class="ipn rv" style="--c:#2F6BFF;--i:4"><div class="ih"><i>🏛️</i><b>Recaudación de impuestos</b></div><div class="bigr"><span>33</span><small>× el programa federal para 6,000 «changarros» ($85 M)</small></div>'+
 bar('Programa federal','1×',3,'#9DB9FF')+bar('Impuestos pagados','33×',100,'#2F6BFF')+bar('Ingresos del subsector «Abarrotes y alimentos»','7×',21,'#14A39A')+
 '<div class="chips2"><span><b>½</b> del presupuesto de un estado (Baja California Sur)</span><span>Pagaría el salario mínimo a <b>97 %</b> de los trabajadores del subsector «Bebidas, hielo y tabaco» por un año</span></div></div>'+
 '<div class="ipn rv" style="--c:#7C5CFF;--i:5"><div class="ih"><i>💳</i><b>Inclusión financiera</b></div><p class="ip">Depósitos, retiros y pagos al alcance de quien vive lejos de una sucursal bancaria.</p><div class="chips2"><span>Cobertura de <b>corresponsalías</b></span><span>Cobertura de <b>terminales (TPV)</b></span><span>Municipios con presencia</span></div><p class="ip2">Se mide con indicadores propios y fuentes como la ENIF y la CNBV.</p></div>'+
 '<div class="ipn rv" style="--c:#F5A524;--i:6"><div class="ih"><i>🗺️</i><b>Presencia en el país</b></div><div class="bigr"><span data-count="767">0</span><small>municipios, una tercera parte del total</small></div><div class="chips2"><span><b>+10 %</b> anual en tiendas</span><span><b>1.2</b> municipios nuevos cada mes</span><span><b>1.5 %</b> de los negocios del subsector</span></div></div>'+
 '</div></div><div class="strip rv" style="--i:7"><b>Y LOS PEQUEÑOS COMERCIOS</b><span>No hay efecto directo; donde la economía va bien, los negocios chicos mueren más lento.</span></div></section>';
}

function ripple(){
 var h='<rect width="750" height="200" fill="#F3F0FF"/>',i,cx=375,cy=100;
 for(i=3;i>=1;i--)h+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(i*34)+'" fill="#7C5CFF" opacity="'+(.07+.05*(4-i))+'"/>';
 h+='<circle cx="'+cx+'" cy="'+cy+'" r="30" fill="none" stroke="#7C5CFF" stroke-width="2"><animate attributeName="r" values="30;112" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;0" dur="3s" repeatCount="indefinite"/></circle>';
 h+='<circle cx="'+cx+'" cy="'+cy+'" r="26" fill="#0B1F44" stroke="#fff" stroke-width="3"/><text x="'+cx+'" y="'+(cy+4)+'" font-size="11" font-weight="600" fill="#fff" text-anchor="middle">Empresa</text>';
 var L=[[110,48,'Empleo','#14A39A',-1],[110,152,'Impuestos','#2F6BFF',-1],[640,48,'Inclusión financiera','#7C5CFF',1],[640,152,'Presencia en municipios','#F5A524',1]];
 L.forEach(function(l){var w=l[2].length*7.2+26;h+='<line x1="'+cx+'" y1="'+cy+'" x2="'+l[0]+'" y2="'+l[1]+'" stroke="'+l[3]+'" stroke-width="1.6" stroke-dasharray="4 4" opacity=".7"/><rect x="'+(l[0]-w/2)+'" y="'+(l[1]-14)+'" width="'+w+'" height="28" rx="14" fill="#fff" stroke="'+l[3]+'" stroke-width="1.8"/><text x="'+l[0]+'" y="'+(l[1]+4.5)+'" font-size="12.5" font-weight="600" fill="'+l[3]+'" text-anchor="middle">'+l[2]+'</text>';});
 h+='<text x="14" y="190" font-size="11" fill="#667085">Derrama económica: de la tienda a la región y al país</text>';
 return '<figure class="pic kpic mapfig rv" style="--i:5"><svg viewBox="0 0 750 200" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block">'+h+'</svg></figure>';
}

var MM={
 n1:function(){return '<rect x="8" y="14" width="134" height="26" rx="7" fill="#FFE5E0"/><text x="75" y="31" font-size="12" fill="#B3261E" text-anchor="middle" text-decoration="line-through">¡¡HOY!! Pandemia…</text><path d="M75 44v10m-5-5l5 6 5-6" stroke="#667085" stroke-width="2" fill="none"/><rect x="8" y="60" width="134" height="26" rx="7" fill="#D7F3EF"/><text x="75" y="77" font-size="12" fill="#0c8f82" text-anchor="middle">hoy pandemia</text>';},
 n2:function(){var w=[['el','#E1E8FF',20],['gobierno','#D7F3EF',52],['anunció','#FFE9C2',44],['nuevas','#EBE3FF',40],['obras','#FFE5E0',34]],x=8,y=16,h='';w.forEach(function(t){if(x+t[2]>142){x=8;y+=30;}h+='<rect x="'+x+'" y="'+y+'" width="'+t[2]+'" height="22" rx="11" fill="'+t[1]+'"/><text x="'+(x+t[2]/2)+'" y="'+(y+15)+'" font-size="10.5" fill="#243350" text-anchor="middle">'+t[0]+'</text>';x+=t[2]+6;});return h+'<text x="75" y="92" font-size="9.5" fill="#667085" text-anchor="middle">una nota → palabras</text>';},
 n3:function(){var h='',r=0,s=3,i,j;function q(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;}for(i=0;i<5;i++)for(j=0;j<8;j++){var v=q()<.35?q():0;h+='<rect x="'+(10+j*16)+'" y="'+(10+i*15)+'" width="14" height="13" rx="2.5" fill="'+(v?'rgba(47,107,255,'+(.2+v*.8).toFixed(2)+')':'#EEF2F8')+'"/>';}return h+'<text x="75" y="96" font-size="9.5" fill="#667085" text-anchor="middle">notas × términos</text>';},
 n4:function(){var N=[[30,30,'#7C5CFF'],[75,18,'#F26B5B'],[118,34,'#14A39A'],[50,66,'#F5A524'],[100,70,'#2F6BFF'],[75,48,'#0B1F44']],E=[[0,5],[1,5],[2,5],[3,5],[4,5],[0,3],[2,4],[1,2]],h='';E.forEach(function(e){h+='<line x1="'+N[e[0]][0]+'" y1="'+N[e[0]][1]+'" x2="'+N[e[1]][0]+'" y2="'+N[e[1]][1]+'" stroke="#c3cbdc" stroke-width="1.4"/>';});N.forEach(function(n,i){h+='<circle cx="'+n[0]+'" cy="'+n[1]+'" r="'+(i===5?9:6.5)+'" fill="'+n[2]+'" stroke="#fff" stroke-width="2"/>';});return h+'<text x="75" y="96" font-size="9.5" fill="#667085" text-anchor="middle">personas · lugares · orgs.</text>';},
 n5:function(){var h='<rect x="6" y="6" width="138" height="78" rx="8" fill="#EEF2F8"/><path d="M6 30L144 52M6 66L144 24M50 6L66 84M104 6L92 84" stroke="#fff" stroke-width="5"/>';[[42,36],[78,50],[110,28],[96,66],[60,70]].forEach(function(p){h+='<path d="M'+p[0]+' '+(p[1]+2)+' c-6 -7 -7 -10 -7 -13 a7 7 0 1 1 14 0 c0 3 -1 6 -7 13z" fill="#F26B5B" stroke="#fff" stroke-width="1.4"/>';});return h+'<text x="75" y="96" font-size="9.5" fill="#667085" text-anchor="middle">cada nota, un lugar</text>';},
 n6:function(){var s=9,h='<line x1="14" y1="40" x2="136" y2="22" stroke="#0B1F44" stroke-width="1.6" stroke-dasharray="4 4"/><line x1="14" y1="62" x2="136" y2="84" stroke="#0B1F44" stroke-width="1.6" stroke-dasharray="4 4"/>',i;function q(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;}[['#F26B5B',0,8],['#F5A524',34,50],['#14A39A',68,84]].forEach(function(g){for(i=0;i<10;i++)h+='<circle cx="'+(20+q()*110)+'" cy="'+(g[1]+q()*(g[2]-g[1])*.55+8)+'" r="3.4" fill="'+g[0]+'"/>';});return h+'<text x="75" y="97" font-size="9.5" fill="#667085" text-anchor="middle">tema por nota</text>';},
 n7:function(){return '<path d="M20 74a55 55 0 0 1 110 0" stroke="#F26B5B" stroke-width="14" fill="none" stroke-dasharray="58 400"/><path d="M20 74a55 55 0 0 1 110 0" stroke="#F5C242" stroke-width="14" fill="none" stroke-dasharray="58 400" stroke-dashoffset="-58"/><path d="M20 74a55 55 0 0 1 110 0" stroke="#2FA56B" stroke-width="14" fill="none" stroke-dasharray="58 400" stroke-dashoffset="-116"/><line x1="75" y1="74" x2="105" y2="46" stroke="#0B1F44" stroke-width="3.4" stroke-linecap="round"/><circle cx="75" cy="74" r="6" fill="#0B1F44"/><text x="75" y="94" font-size="9.5" fill="#667085" text-anchor="middle">negativo · neutral · positivo</text>';}
};

function mChart(k){
 var s=5,h='',i,j;function q(){s=(s*1664525+1013904223)%4294967296;return s/4294967296;}
 if(k==='bars'){var T=['Ambiental','Económico','Laboral','Legal','Político','Seguridad','Social'],C=['#14A39A','#2F6BFF','#F5A524','#7C5CFF','#F26B5B','#0B1F44','#2FA56B'];T.forEach(function(t,i){var v=20+q()*62;h+='<rect x="'+(14+i*40)+'" y="'+(84-v)+'" width="28" height="'+v+'" rx="4" fill="'+C[i]+'"/><text x="'+(28+i*40)+'" y="96" font-size="7.5" fill="#667085" text-anchor="middle">'+t.slice(0,6)+'.</text>';});}
 if(k==='lines'){[['#2FA56B',.25],['#F5C242',.5],['#F26B5B',.78]].forEach(function(l){var d='';for(i=0;i<14;i++){var y=100-(l[1]*72+10+Math.sin(i*.7+l[1]*9)*12+q()*6);d+=(i?'L':'M')+(14+i*20)+' '+y.toFixed(1);}h+='<path d="'+d+'" fill="none" stroke="'+l[0]+'" stroke-width="2.4" stroke-linejoin="round"/>';});h+='<line x1="10" y1="88" x2="292" y2="88" stroke="#cfd8e8"/>';}
 if(k==='cloud'){[['empleo',22,'#2F6BFF',20,34],['economía',26,'#F26B5B',92,40],['obras',16,'#14A39A',212,24],['seguridad',19,'#7C5CFF',160,70],['precios',15,'#F5A524',20,62],['gobierno',17,'#0B1F44',98,76],['salario',14,'#2FA56B',226,62],['reforma',13,'#F26B5B',204,86],['apoyo',12,'#667085',22,88]].forEach(function(w){h+='<text x="'+w[3]+'" y="'+w[4]+'" font-size="'+w[1]+'" fill="'+w[2]+'" font-weight="500">'+w[0]+'</text>';});}
 return '<svg viewBox="0 0 300 100" style="width:100%;height:100%" preserveAspectRatio="xMidYMid meet">'+h+'</svg>';
}
function medios(){
 var B=BLOCKS[2],M=[['1','Normalización','Limpia el texto: minúsculas, sin ruido ni símbolos.','n1','A'],['2','Tokenización','Separa el texto en palabras o frases.','n2','A'],['3','Representación de documentos','Convierte cada nota en números (matriz documento-término).','n3','A'],['4','Reconocimiento de entidades','Detecta personas, lugares y organizaciones.','n4','B'],['5','Georreferenciación','Ubica cada noticia en el mapa.','n5','B'],['6','Clasificación','Asigna temas automáticamente a cada nota.','n6','B'],['7','Análisis de sentimientos','Mide el tono: negativo, neutral o positivo.','n7','B']];
 function card(m,i){return '<div class="mcard sa rv '+m[4]+'" style="--i:'+(4+i)+'" data-tip="'+m[1]+'|'+m[2]+'"><div class="mt"><b>'+m[0]+'</b>'+m[1]+'</div><svg viewBox="0 0 150 100" class="mv">'+MM[m[3]]()+'</svg><p>'+m[2]+'</p></div>';}
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="2" data-title="Caso 5 · Métodos del monitor de medios" data-theme="light" style="--c:'+B.c+'"><div class="crumb rv" style="--i:0">'+B.n+' · Caso 5 · Métodos</div>'+thread(2)+
 '<h2 class="rv" style="--i:1">Del texto al dato: los <em>métodos</em> del monitor</h2><p class="lead rv" style="--i:2">¿Cuáles son las noticias de interés y qué clasificación automática recibe cada una? Siete pasos en dos etapas.</p>'+
 '<div class="body" style="top:196px;bottom:44px"><div class="mgr rv" style="--i:3"><div class="mgh A">A · Pre-procesamiento <small>preparar el texto</small></div><div class="mgh B">B · Análisis <small>extraer significado</small></div></div><div class="mrow7">'+M.map(card).join('')+'</div>'+
 '<div class="lbl rv" style="--i:10;margin:12px 0 6px">QUÉ SE OBTIENE · GRÁFICAS GENÉRICAS</div><div class="rch rv" style="--i:10"><figure><div>'+mChart('bars')+'</div><figcaption>Notas por tema</figcaption></figure><figure><div>'+mChart('lines')+'</div><figcaption>Tono en el tiempo</figcaption></figure><figure><div>'+mChart('cloud')+'</div><figcaption>Palabras más frecuentes</figcaption></figure></div>'+
 '<div class="lbl rv" style="--i:11;margin:10px 0 6px">MÉTODOS ANALÍTICOS</div><div class="pills4 rv" style="--i:11"><span>Procesamiento de lenguaje natural</span><span>Minería de textos</span><span>Análisis multivariado</span><span>Modelación estadística</span></div></div></section>';
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
  '<div class="pq h rv" style="--i:4"><small>HIPÓTESIS</small><p>'+(Array.isArray(x.h)?x.h.join('</p><p class="h2">'):x.h)+'</p></div>'+
  (x.id==='k2'?siteMap():(x.id==='k4'?ripple():'<figure class="pic kpic rv" style="--i:5" data-ph="'+x.id+'"></figure>'))+'</div>'+
 '<div class="r"><div class="rv" style="--i:5"><div class="lbl">MÉTODOS</div><div class="mets">'+x.m.map(function(m){return '<div class="met" data-tip="'+m[0]+'|'+m[1]+'"><i></i>'+m[0]+'</div>';}).join('')+'</div></div>'+
 '<div class="rv" style="--i:6"><div class="lbl">EJEMPLO DE RESULTADO</div><div class="kpis">'+x.k.map(function(k){return '<div class="kpi sa" style="--c:'+B.c+'"><div class="v"><span data-count="'+k[0]+'">0</span><small>'+k[1]+'</small></div><p>'+k[2]+'</p></div>';}).join('')+'</div></div></div></div>'+
 '<div class="strip rv" style="--i:7"><b>LECTURA PARA EL COMUNICADOR</b><span>'+x.l+'</span></div></section>';
}
function evid(x){
 var B=BLOCKS[x.bi],e=x.ev,n=e.imgs.length;
 return '<section class="slide content" data-sec="4" data-block="'+B.n+'" data-bi="'+x.bi+'" data-title="Caso '+x.n+' · evidencia" data-theme="light" style="--c:'+B.c+'">'+
 '<div class="crumb rv" style="--i:0">'+B.n+' · Caso '+x.n+' · Evidencia</div>'+thread(x.bi)+
 '<h2 class="rv" style="--i:1;font-size:32px">'+e.t+'</h2>'+
 '<div class="evid'+(e.imgs[0][0].indexOf('svg:')===0||(n===1&&e.imgs[0][0].indexOf('map:')===0)?' wide':'')+'" style="top:130px"><div class="shots n'+n+' rv" style="--i:3">'+e.imgs.map(function(i){return '<figure class="shot"><div class="img">'+(/^(svg|map):/.test(i[0])?EVSVG[i[0].split(':')[1]]():'<img src="assets/'+i[0]+'.jpg" alt="'+i[1]+'">')+'</div><figcaption>'+i[1]+'</figcaption></figure>';}).join('')+'</div>'+
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
 stream+=ficha(x)+(x.id==='k4'?'':evid(x));if(x.id==='k1')stream+=conjoint();if(x.id==='k2')stream+=mirror()+mirror2();if(x.id==='k4')stream+=impacto();if(x.id==='k5')stream+=medios();
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
/*PH_START*/var PH={"esc1": {"t": "PRESS CONFERENCE 2016-07-19", "a": "EU2016 SK", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:PRESS_CONFERENCE_2016-07-19_Informal_Meeting_of_Ministers_Responsible_for_Competitiveness_(28410298625).jpg", "w": "Rueda de prensa", "p": "center"}, "esc2": {"t": "Albany wind farm", "a": "Leon Brooks", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Albany_wind_farm_against_the_sunset_western_Australia.jpg", "w": "Parque eólico al atardecer", "p": "center"}, "esc3": {"t": "FEMA City Council meeting", "a": "Marvin Nauman / FEMA", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:FEMA_-_32884_-_FEMA_Community_Relations_worker_speaks_at_City_Council_meeting_in_Oklahoma.jpg", "w": "Reunión de un concejo municipal", "p": "center"}, "esc4": {"t": "Southern Monterrey skyline", "a": "Rick González", "l": "CC BY 2.0", "u": "https://commons.wikimedia.org/wiki/File:Southern_Monterrey_skyline.jpg", "w": "Horizonte de Monterrey", "p": "center"}, "q1": {"t": "REMA 1000 Supermarket interior grocery store Tønsberg, Norway 2017-11-03 cashier", "a": "Wolfmann", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:REMA_1000_Supermarket_interior_grocery_store_T%C3%B8nsberg,_Norway_2017-11-03_cashier_checkout_a.jpg", "w": "Caja de supermercado", "p": "center"}, "q2": {"t": "Moscow, Paveletskaya Plaza Feb.2025 - turkey 01.jpg", "a": "Retired electrician", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:Moscow,_Paveletskaya_Plaza_Feb.2025_-_turkey_01.jpg", "w": "Precios en un anaquel con etiquetas electrónicas", "p": "center"}, "q3": {"t": "Storefronts on Bridgeway, Sausalito-L1003865.jpg", "a": "Frank Schulenburg", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Storefronts_on_Bridgeway,_Sausalito-L1003865.jpg", "w": "Locales comerciales en una calle", "p": "center"}, "q4": {"t": "DSC06451 Explosion Hazard Folding Sign, Wiener Netze, 2023-10.jpg", "a": "Aciarium", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:DSC06451_Explosion_Hazard_Folding_Sign,_Wiener_Netze,_2023-10.jpg", "w": "Señal de advertencia de peligro", "p": "center"}, "q5": {"t": "2016-09-11 19 30 20 Sunset at the NEXRAD WSR-88D Doppler Radar at the National W", "a": "Famartin", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:2016-09-11_19_30_20_Sunset_at_the_NEXRAD_WSR-88D_Doppler_Radar_at_the_National_Weather_Service%27s_Baltimore-Washington_Weather_Forecast_Office_in_Sterling,_Loudoun_County,_Virginia.jpg", "w": "Radar meteorológico al atardecer", "p": "center"}, "q6": {"t": "Kabul City Factory Smoke.jpg", "a": "Pm4gis", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Kabul_City_Factory_Smoke.jpg", "w": "Vista aérea de chimeneas y humo industrial", "p": "center"}, "k1": {"t": "The interior of an Advance Auto Parts store in Murphy, North Carolina 06.jpg", "a": "Harrison Keely", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:The_interior_of_an_Advance_Auto_Parts_store_in_Murphy,_North_Carolina_06.jpg", "w": "Interior de una refaccionaria", "p": "center"}, "k3": {"t": "Sclater Street Yard market, Brick Lane Market London E1 o.jpg", "a": "Acabashi", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Sclater_Street_Yard_market,_Brick_Lane_Market_London_E1_o.jpg", "w": "Mercado callejero", "p": "center"}, "k5": {"t": "Man reading a newspaper at a café terrace in Athens, Greece - 1979.jpg", "a": "Jean-Louis Debaize / European Communitie", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:Man_reading_a_newspaper_at_a_caf%C3%A9_terrace_in_Athens,_Greece_-_1979.jpg", "w": "Lector de periódico en un café", "p": "center"}, "k6": {"t": "Traffic jam Bangkok.JPG", "a": "Sky 269", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Traffic_jam_Bangkok.JPG", "w": "Congestión vehicular", "p": "center"}, "k7": {"t": "Waste landfill in Derhachi.jpg", "a": "I.Shevtsov", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Waste_landfill_in_Derhachi.jpg", "w": "Relleno sanitario", "p": "center"}, "d4": {"t": "Solar Data Analyst at Work in Kenya.jpg", "a": "Dwalsh3", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Solar_Data_Analyst_at_Work_in_Kenya.jpg", "w": "Analista de datos en su estación de trabajo", "p": "center"}, "d5": {"t": "Earth's City Lights by DMSP, 1994-1995 (large).jpg", "a": "Data: Marc Imhoff/NASA GSFC, Christopher", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Earth%27s_City_Lights_by_DMSP,_1994-1995_(large).jpg", "w": "Imagen satelital: luces nocturnas de la Tierra", "p": "center"}, "s1": {"t": "Cockpit Motion Facility.jpg", "a": "NASA", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Cockpit_Motion_Facility.jpg", "w": "Simulador de vuelo", "p": "center"}, "s2": {"t": "This image shows VINCI (VLT INterferometer Commissioning Instrument), the \"test ", "a": "ESO", "l": "CC BY 4.0", "u": "https://commons.wikimedia.org/wiki/File:This_image_shows_VINCI_(VLT_INterferometer_Commissioning_Instrument),_the_%22test_camera%22_of_the_Very_Large_Telescope_Interferometer_(VLTI),_and_LEONARDO,_its_calibration_source_(vlt1_02-dez2000).jpg", "w": "Instrumentos de laboratorio de precisión", "p": "center"}, "s3": {"t": "New York Stock Exchange trading floor on Wall Street, New York, New York LCCN201", "a": "Carol M. Highsmith", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:New_York_Stock_Exchange_trading_floor_on_Wall_Street,_New_York,_New_York_LCCN2011634218.tif", "w": "Bolsa de valores de Nueva York", "p": "center"}, "d1": {"t": "Edificio del Instituto Nacional de Estadística, Geografía e Informática.JPG", "a": "Luisalvaz", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Edificio_del_Instituto_Nacional_de_Estad%C3%ADstica,_Geograf%C3%ADa_e_Inform%C3%A1tica.JPG", "w": "Edificio del INEGI, fuente oficial de estadística", "p": "center"}, "d2": {"t": "Logistics Specialist 2nd Class Jarred Stone checks cargo inventory (6172589).jpg", "a": "U.S. Navy photo by Petty Officer 2nd Cla", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Logistics_Specialist_2nd_Class_Jarred_Stone_checks_cargo_inventory_(6172589).jpg", "w": "Control de inventario: datos internos de una operación", "p": "center"}, "d3": {"t": "Deb Haaland at New Mexico Counts 2020 event in 2019. 02.jpg", "a": "Deb Haaland", "l": "dominio público", "u": "https://commons.wikimedia.org/wiki/File:Deb_Haaland_at_New_Mexico_Counts_2020_event_in_2019._02.jpg", "w": "Evento público de participación en el censo", "p": "center"}, "cA": {"t": "Liat Portal for Foodie Disorder - Cornflakes with Milk.jpg", "a": "HaJunkiyada", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Cornflakes_with_Milk.jpg", "w": "Cereal de hojuelas con leche", "p": "center"}, "cB": {"t": "Chocolate-muesli.jpg", "a": "MartinThoma", "l": "CC0", "u": "https://commons.wikimedia.org/wiki/File:Chocolate-muesli.jpg", "w": "Muesli con chocolate", "p": "center"}, "cC": {"t": "Bowl of whole wheat cereal with banana.jpg", "a": "RebecaLR", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Bowl_of_whole_wheat_cereal_with_banana.jpg", "w": "Cereal integral con plátano", "p": "center"}, "v1": {"t": "Business Presentation by ZERO-Ko Student.jpg", "a": "Penguin0028", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Business_Presentation_by_ZERO-Ko_Student.jpg", "w": "Presentación de resultados ante un grupo", "p": "center"}, "k4a": {"t": "Tienda de abarrotes, Mercado Michoacán.jpg", "a": "Xanyssel", "l": "CC BY-SA 4.0", "u": "https://commons.wikimedia.org/wiki/File:Tienda_de_abarrotes,_Mercado_Michoac%C3%A1n.jpg", "w": "Tienda de abarrotes de barrio", "p": "center"}};/*PH_END*/
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

// 8) Tiendas espejo
(function(){
 var svg=document.getElementById('mrSvg');if(!svg)return;
 var seed=5;function r(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296;}
 function g(){return (r()+r()+r()+r()-2)/2;}
 var CL=[[170,110,330,'#2F6BFF'],[430,90,470,'#14A39A'],[120,250,210,'#F5A524'],[300,210,610,'#7C5CFF'],[490,250,380,'#F26B5B']],S=[],i;
 for(i=0;i<320;i++){var c=CL[Math.floor(r()*5)];S.push({x:c[0]+g()*80,y:c[1]+g()*60,v:c[2]*(1+g()*.22),c:c[3]});}
 var CAND=[[300,195],[170,125],[470,262]],sel=document.getElementById('mrSel'),K=document.getElementById('mrK');
 function upd(){
  var k=+K.value,t=CAND[+sel.value];document.getElementById('mrKv').textContent=k;
  var d=S.map(function(s,j){return [Math.hypot(s.x-t[0],s.y-t[1]),j];}).sort(function(p,q){return p[0]-q[0];}).slice(0,k),near=d.map(function(p){return S[p[1]];});
  var vs=near.map(function(s){return s.v;}).sort(function(p,q){return p-q;}),m=vs.reduce(function(p,q){return p+q;},0)/k,lo=vs[Math.floor(k*.1)],hi=vs[Math.ceil(k*.9)-1];
  var h='<rect width="600" height="330" fill="#F6F8FC" rx="12"/>';
  near.forEach(function(s){h+='<line x1="'+t[0]+'" y1="'+t[1]+'" x2="'+s.x+'" y2="'+s.y+'" stroke="#0B1F44" stroke-width="1" opacity=".35"/>';});
  var rad=d[k-1][0];h+='<circle cx="'+t[0]+'" cy="'+t[1]+'" r="'+rad+'" fill="#F26B5B" opacity=".07" stroke="#F26B5B" stroke-dasharray="4 4"/>';
  S.forEach(function(s){var n=near.indexOf(s)>=0;h+='<circle cx="'+s.x+'" cy="'+s.y+'" r="'+(n?6:3.4)+'" fill="'+s.c+'" opacity="'+(n?1:.35)+'"'+(n?' stroke="#0B1F44" stroke-width="1.6"':'')+'/>';});
  h+='<path d="M'+t[0]+' '+(t[1]+2)+' c-12 -14 -14 -20 -14 -26 a14 14 0 1 1 28 0 c0 6 -2 12 -14 26z" fill="#F26B5B" stroke="#fff" stroke-width="2"/><circle cx="'+t[0]+'" cy="'+(t[1]-24)+'" r="5" fill="#fff"/>';
  h+='<text x="12" y="320" font-size="11" fill="#667085">Más cerca = más parecida en tipo, entorno y ubicación · contorno oscuro = tienda espejo</text>';
  svg.innerHTML=h;
  document.getElementById('mrY').textContent=Math.round(m);
  var sc=800;var b=document.getElementById('mrBar');b.style.left=(lo/sc*100)+'%';b.style.width=Math.max(2,(hi-lo)/sc*100)+'%';
  document.getElementById('mrTxt').textContent='Rango de las '+k+' tiendas espejo: de '+Math.round(lo)+' a '+Math.round(hi);
 }
 sel.onchange=upd;K.oninput=upd;upd();
})();

// 9) Un modelo por grupo (regresión múltiple ajustada por grupo)
(function(){
 var sel=document.getElementById('gmSel');if(!sel)return;
 var seed=21;function r(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296;}
 function nrm(){return (r()+r()+r()+r()-2)*1.73;}
 function solve(A,b){var n=b.length,i,j,k,M=A.map(function(row,q){return row.concat([b[q]]);});
  for(i=0;i<n;i++){var p=i;for(j=i+1;j<n;j++)if(Math.abs(M[j][i])>Math.abs(M[p][i]))p=j;var t=M[i];M[i]=M[p];M[p]=t;
   for(j=i+1;j<n;j++){var f=M[j][i]/M[i][i];for(k=i;k<=n;k++)M[j][k]-=f*M[i][k];}}
  var x=new Array(n);for(i=n-1;i>=0;i--){var s=M[i][n];for(j=i+1;j<n;j++)s-=M[i][j]*x[j];x[i]=s/M[i][i];}return x;}
 var sp=[.22,.3,.2,.25,.2],F=GM.G.map(function(g){
  var X=[],Y=[],n=60,i,j,k;
  for(i=0;i<n;i++){var row=[1];for(j=0;j<5;j++){var m=g[2][j];row.push(Math.max(0,m+nrm()*(j===4?9:m*sp[j])));}
   var y=g[3];for(j=0;j<5;j++)y+=g[4][j]*row[j+1];y+=nrm()*24;X.push(row);Y.push(y);}
  var A=[],b=[];for(j=0;j<6;j++){A.push([]);b.push(0);for(k=0;k<6;k++){var s=0;for(i=0;i<n;i++)s+=X[i][j]*X[i][k];A[j].push(s);}for(i=0;i<n;i++)b[j]+=X[i][j]*Y[i];}
  var be=solve(A,b),sse=0,my=Y.reduce(function(p,q){return p+q;},0)/n,sst=0;
  for(i=0;i<n;i++){var f=0;for(j=0;j<6;j++)f+=be[j]*X[i][j];sse+=Math.pow(Y[i]-f,2);sst+=Math.pow(Y[i]-my,2);}
  return {b:be,r2:1-sse/sst,sig:Math.sqrt(sse/(n-6)),n:n};});
 var rg=[].slice.call(document.querySelectorAll('.gmR')),X=[0,0,0,0,0];
 function fx(v){return (Math.abs(v)<10?v.toFixed(2):v.toFixed(1));}
 function load(avg){var gi=+sel.value,g=GM.G[gi];rg.forEach(function(e,i){e.value=avg?g[2][i]:Math.min(+e.max,Math.round(g[2][i]*1.3));});upd();}
 function upd(){
  var gi=+sel.value,g=GM.G[gi],m=F[gi],y=m.b[0],i,h;
  document.getElementById('gmDot').style.background=g[1];
  var rows=[['Base (β₀)',m.b[0],'#9AA7BD']];
  rg.forEach(function(e,k){var v=+e.value;X[k]=v;document.getElementById('gmv'+k).textContent=v;var cv=m.b[k+1]*v;y+=cv;rows.push([GM.V[k][0],cv,cv>=0?'#2FA56B':'#F26B5B']);});
  rows.push(['Ventas pronosticadas',y,g[1]]);
  var f='<span class="v y">Ventas</span><span class="op">=</span><span class="v b">'+fx(m.b[0])+'</span>';
  GM.V.forEach(function(v,k){var b=m.b[k+1];f+='<span class="op">'+(b<0?'−':'+')+'</span><span class="v b">'+fx(Math.abs(b))+'</span><span class="op">·</span><span class="v x">'+v[0]+'</span>';});
  document.getElementById('gmF').innerHTML=f+'<small>Modelo ajustado con '+m.n+' tiendas del grupo «'+g[0]+'» · R² = '+m.r2.toFixed(2)+' · error típico ±'+m.sig.toFixed(0)+' mil</small>';
  document.getElementById('gmY').textContent=Math.round(y);
  var base=m.b[0],avg=m.b[0];g[2].forEach(function(v,k){avg+=m.b[k+1]*v;});
  var dl=(y/avg-1)*100,de=document.getElementById('gmD');de.textContent=(dl>=0?'+':'')+dl.toFixed(1)+'% vs. tienda promedio';de.style.color=dl>=0.05?'#1c7a4a':dl<-0.05?'#B3261E':'#667085';
  var lo=y-1.96*m.sig,hi=y+1.96*m.sig,sc=900,cb=document.getElementById('gmBar');cb.style.left=Math.max(0,lo/sc*100)+'%';cb.style.width=Math.max(2,(hi-lo)/sc*100)+'%';
  document.getElementById('gmTxt').textContent='Intervalo de predicción 95 %: de '+Math.round(lo)+' a '+Math.round(hi);
  var mx=Math.max.apply(null,rows.map(function(q){return Math.abs(q[1]);}));
  document.getElementById('gmWf').innerHTML=rows.map(function(q,k){return '<div class="wfr"><span>'+q[0]+'</span><div class="t"><div class="f" style="width:'+Math.min(100,Math.abs(q[1])/mx*100)+'%;background:'+q[2]+'"></div></div><b>'+(q[1]>0&&k>0&&k<rows.length-1?'+':'')+Math.round(q[1])+'</b></div>';}).join('');
  document.getElementById('gmFit').innerHTML='Cada grupo tiene sus propios coeficientes: <b>la misma afluencia vale distinto</b> en una zona turística que en una colonia residencial.';
 }
 sel.onchange=function(){load(true);};
 rg.forEach(function(e){e.oninput=upd;});
 document.getElementById('gmAvg').onclick=function(){load(true);};
 document.getElementById('gmUp').onclick=function(){load(false);};
 load(true);
})();

// 10) Maqueta del Tec de Monterrey (carga bajo demanda)
(function(){
 var fr=document.getElementById('maqFrame');if(!fr)return;
 var URL_='https://www.check-inn.mx/admin/maqueta/entorno.html?v=2459&id=91793588883061';
 var cov=document.getElementById('maqCover'),bar=document.getElementById('maqBar'),sec=document.getElementById('maq');
 function show(){fr.src=URL_;fr.hidden=false;cov.hidden=true;bar.hidden=false;sec.classList.add('maqfull');}
 function hide(){fr.hidden=true;fr.removeAttribute('src');cov.hidden=false;bar.hidden=true;sec.classList.remove('maqfull');}
 document.getElementById('maqShow').onclick=show;document.getElementById('maqHide').onclick=hide;document.getElementById('maqOpen').href=URL_;
 new MutationObserver(function(){if(!sec.classList.contains('active')&&!fr.hidden)hide();}).observe(sec,{attributes:true,attributeFilter:['class']});
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
