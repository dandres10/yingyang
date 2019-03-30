var posBus = (function(){
    var pos = 0;
    var previosPos = 0;
    var increase = 0;
    var stages = 1;
    function changePos(newPos){
        previosPos = pos;
        pos = newPos * increase;
    }
    function setIncrease(newIncrease){
        increase = newIncrease;
    }
    function setStages(nStages){
        stages = nStages;
    }
    function setPrevious(previous){
        previosPos = previous;
    }
    return{
        getValue: function(){
            return pos;
        },
        getPreciousPos: function(){
            return previosPos;
        },
        getMovement: function(){
            return increase;
        },
        getStages: function(){
            return stages;
        },
        move: function(newPos){
            changePos(newPos);
        },
        setIncrease: function(valueIncrease){
            setIncrease(valueIncrease);
        },
        setStages: function(stages){
            setStages(stages);
        },
        setPrevious: function(previous){
            setPrevious(previous);
        }
    }
})();

var infoTrunck = [];
var trunks = [];
var posTroncal;

function fillStages(){
    //A
    infoTrunck.push({name: "Caracas", inicio: "Calle 76", fin: "Calle 19", longitud: "8.0 Km"});
    var stages = [];
    stages.push({name: "Calle 76", url: "recursos/Estaciones/caracas/Calle_76.jpg"});
    stages.push({name: "Calle 72", url: "recursos/Estaciones/caracas/Calle_72.jpg"});
    stages.push({name: "Flores", url: "recursos/Estaciones/caracas/Flores.jpg"});
    stages.push({name: "Calle 63", url: "recursos/Estaciones/caracas/Calle_63.jpg"});
    stages.push({name: "Calle 57", url: "recursos/Estaciones/caracas/Calle_57.jpg"});
    stages.push({name: "Marly", url: "recursos/Estaciones/caracas/Marly.jpg"});
    stages.push({name: "Calle 45", url: "recursos/Estaciones/caracas/Calle_45.jpg"});
    stages.push({name: "AV. 39", url: "recursos/Estaciones/caracas/Av_39.jpg"});
    stages.push({name: "Profamilia", url: "recursos/Estaciones/caracas/"});
    stages.push({name: "Calle 26", url: "recursos/Estaciones/caracas/Calle_26.jpg"});
    stages.push({name: "Calle 22", url: "recursos/Estaciones/caracas/Calle_22.jpg"});
    stages.push({name: "Calle 19", url: "recursos/Estaciones/caracas/Calle_19.jpg"});
    trunks.push(stages);
    //B
    infoTrunck.push({name: "Autopista Norte", inicio: "Terminal", fin: "Héroes", longitud: "12.0 Km"});
    stages = [];
    stages.push({name: "Terminal", url: "recursos/Estaciones/autonorte/Terminal.jpg"});
    stages.push({name: "Calle 187", url: "recursos/Estaciones/autonorte/CL_187.jpg"});
    stages.push({name: "Portal del Norte", url: "recursos/Estaciones/autonorte/Portal_Norte.jpg"});
    stages.push({name: "Toberín", url: "recursos/Estaciones/autonorte/Toberin.jpg"});
    stages.push({name: "Cardio Infantil", url: "recursos/Estaciones/autonorte/Cardio_Infantil.jpg"});
    stages.push({name: "Mazurén", url: "recursos/Estaciones/autonorte/Mazuren.jpg"});
    stages.push({name: "Calle 146", url: "recursos/Estaciones/autonorte/Calle_146.jpg"});
    stages.push({name: "Calle 142", url: "recursos/Estaciones/autonorte/Calle_142.jpg"});
    stages.push({name: "Alcalá", url: "recursos/Estaciones/autonorte/Alcala.jpg"});
    stages.push({name: "Prado", url: "recursos/Estaciones/autonorte/Prado.jpg"});
    stages.push({name: "Calle 127", url: "recursos/Estaciones/autonorte/Calle_127.png"});
    stages.push({name: "Pepe Sierra", url: "recursos/Estaciones/autonorte/Pepe_Sierra.png"});
    stages.push({name: "Calle 106", url: "recursos/Estaciones/autonorte/Calle_106.jpg"});
    stages.push({name: "Calle 100", url: "recursos/Estaciones/autonorte/Calle_100.jpg"});
    stages.push({name: "Virrey", url: "recursos/Estaciones/autonorte/Virrey.jpg"});
    stages.push({name: "Calle 85", url: "recursos/Estaciones/autonorte/Calle_85.jpg"});
    stages.push({name: "Héroes", url: "recursos/Estaciones/autonorte/Heroes.jpg"});
    trunks.push(stages);
    //C
    infoTrunck.push({name: "Avenida Suba", inicio: "Portal de Suba", fin: "San Martín", longitud: "9.5 Km"});
    stages = [];
    stages.push({name: "Portal de Suba", url: "recursos/Estaciones/suba/Portal_Suba.jpeg"});
    stages.push({name: "La campiña", url: "recursos/Estaciones/suba/Campina.jpeg"});
    stages.push({name: "Suba - TV 91", url: "recursos/Estaciones/suba/Suba_TV_91.jpeg"});
    stages.push({name: "21 Ángeles", url: "recursos/Estaciones/suba/21_Angeles.jpeg"});
    stages.push({name: "Gratamira", url: "recursos/Estaciones/suba/Gratamira.jpeg"});
    stages.push({name: "Suba - AV. Boyacá", url: "recursos/Estaciones/suba/suba_av_boyaca.jpeg"});
    stages.push({name: "Nizza - CL 127", url: "recursos/Estaciones/suba/Niza_CL_127.jpeg"});
    stages.push({name: "Humedal Córdoba", url: "recursos/Estaciones/suba/Humedal_Cordoba.jpeg"});
    stages.push({name: "Shaio", url: "recursos/Estaciones/suba/Shaio.jpeg"});
    stages.push({name: "Puente Largo", url: "recursos/Estaciones/suba/Puente_Largo.jpeg"});
    stages.push({name: "Suba - CL 100", url: "recursos/Estaciones/suba/CL_100.jpeg"});
    stages.push({name: "Rionegro", url: "recursos/Estaciones/suba/Rio_Negro.jpeg"});
    stages.push({name: "San Martín", url: "recursos/Estaciones/suba/San_Martin.jpeg"});
    trunks.push(stages);
    //D
    infoTrunck.push({name: "Calle 80", inicio: "Portal de la 80", fin: "Polo", longitud: "7.5 Km"});
    stages = [];
    stages.push({name: "Portal de la 80", url: "recursos/Estaciones/calle_80/Portal_80.jpg"});
    stages.push({name: "Quirigua", url: "recursos/Estaciones/calle_80/Quirigua.jpg"});
    stages.push({name: "Carrera 90", url: "recursos/Estaciones/calle_80/Carrera_90.jpg"});
    stages.push({name: "Avenida Cali", url: "recursos/Estaciones/calle_80/Avenida_Cali.jpg"});
    stages.push({name: "Granja - Carrera 77", url: "recursos/Estaciones/calle_80/Granja_Carrera_77.jpg"});
    stages.push({name: "Minuto de Dios", url: "recursos/Estaciones/calle_80/Minuto_de_Dios.jpg"});
    stages.push({name: "Boyacá", url: "recursos/Estaciones/calle_80/Boyaca.jpg"});
    stages.push({name: "Ferias", url: "recursos/Estaciones/calle_80/Ferias.jpg"});
    stages.push({name: "Avenida 68", url: "recursos/Estaciones/calle_80/Avenida_68.jpg"});
    stages.push({name: "Carrera 53", url: "recursos/Estaciones/calle_80/Carrera_53.jpg"});
    stages.push({name: "Carrera 47", url: "recursos/Estaciones/calle_80/Carrera_47.jpg"});
    stages.push({name: "Escuela Militar", url: "recursos/Estaciones/calle_80/Escuela_Militar.jpg"});
    stages.push({name: "Polo", url: "recursos/Estaciones/calle_80/Polo.jpg"});
    trunks.push(stages);
    //E
    infoTrunck.push({name: "NQS Central", inicio: "La Castellana", fin: "Tygua - San José", longitud: "11.5 Km"});
    stages = [];
    stages.push({name: "La Castellana", url: "recursos/Estaciones/NQS_central/Castellana.jpg"});
    stages.push({name: "NQS - Calle 75", url: "recursos/Estaciones/NQS_central/NQS_Calle_75.jpg"});
    stages.push({name: "AV. Chile", url: "recursos/Estaciones/NQS_central/AV_Chile.jpg"});
    stages.push({name: "Simón Bolivar", url: "recursos/Estaciones/NQS_central/Simon_Bolivar.jpg"});
    stages.push({name: "Coliseo", url: "recursos/Estaciones/NQS_central/Movistar_Arena.png"});
    stages.push({name: "Campín - U. Antonio Nariño", url: "recursos/Estaciones/NQS_central/Campin_U_Antonio_Narino.jpg"});
    stages.push({name: "U. Nacional", url: "recursos/Estaciones/NQS_central/U_Nacional.png"});
    stages.push({name: "AV. El dorado", url: "recursos/Estaciones/NQS_central/AV_El_Dorado.jpg"});
    stages.push({name: "CAD", url: "recursos/Estaciones/NQS_central/CAD.jpg"});
    stages.push({name: "Paloquemao", url: "recursos/Estaciones/NQS_central/Paloquemao.jpg"});
    stages.push({name: "Guatoque - Veraguas", url: "recursos/Estaciones/NQS_central/Guatoque_Veraguas.jpg"});
    stages.push({name: "Tygua - San José", url: "recursos/Estaciones/NQS_central/Tygua_San_Jose.jpg"});
    trunks.push(stages);
    //F
    infoTrunck.push({name: "Avenida las Américas", inicio: "Portal de las Américas", fin: "Avenida Jimenez", longitud: "12.5 Km"});
    stages = [];
    stages.push({name: "Portal de las Américas", url: "recursos/Estaciones/americas/Portal_Americas.jpg"});
    stages.push({name: "Patio Bonito", url: "recursos/Estaciones/americas/Patio_Bonito.jpg"});
    stages.push({name: "Biblioteca Tintal", url: "recursos/Estaciones/americas/Biblioteca_Tintal.jpg"});
    stages.push({name: "Transversal 86", url: "recursos/Estaciones/americas/Transversal_86.jpg"});
    stages.push({name: "Banderas", url: "recursos/Estaciones/americas/Banderas.jpg"});
    stages.push({name: "Mandalay", url: "recursos/Estaciones/americas/Mandalay.jpg"});
    stages.push({name: "Mundo Aventura", url: "recursos/Estaciones/americas/Mundo_Aventura.jpg"});
    stages.push({name: "Marsella", url: "recursos/Estaciones/americas/Marsella.jpg"});
    stages.push({name: "Pradera", url: "recursos/Estaciones/americas/Pradera.jpg"});
    stages.push({name: "Américas - KR 53A", url: "recursos/Estaciones/americas/Cra_53_A.jpg"});
    stages.push({name: "Puente Aranda", url: "recursos/Estaciones/americas/Puente_Aranda.jpg"});
    stages.push({name: "Carrera 43", url: "recursos/Estaciones/americas/Cra_43.jpg"});
    stages.push({name: "Zona Industrial", url: "recursos/Estaciones/americas/ZonaIndustrial.jpg"});
    stages.push({name: "CDS - Carrera 32", url: "recursos/Estaciones/americas/Cra_32.jpg"});
    stages.push({name: "San Facon - KR 22", url: "recursos/Estaciones/Camericas/Cra_22.jpg"});
    stages.push({name: "De la Sabana", url: "recursos/Estaciones/americas/Sabana.jpg"});
    stages.push({name: "AV. Jimenez", url: "recursos/Estaciones/americas/Av_Jimenez.jpg"});
    trunks.push(stages);
    //G
    infoTrunck.push({name: "NQS Sur", inicio: "Comuneros", fin: "San Mateo", longitud: "13.0 Km"});
    stages = [];
    stages.push({name: "Comuneros", url: "recursos/Estaciones/NQS_sur/Comuneros.jpg"});
    stages.push({name: "Santa Isabel", url: "recursos/Estaciones/NQS_sur/Santa_Isabel.jpg"});
    stages.push({name: "SENA", url: "recursos/Estaciones/NQS_sur/SENA.jpg"});
    stages.push({name: "NQS - CL 30 S", url: "recursos/Estaciones/NQS_sur/NQS_Calle_30.jpg"});
    stages.push({name: "NQS - CL 38A S", url: "recursos/Estaciones/NQS_sur/NQS_Calle_38_A.jpg"});
    stages.push({name: "General Santander", url: "recursos/Estaciones/NQS_sur/General_Santander.png"});
    stages.push({name: "Alquería", url: "recursos/Estaciones/NQS_sur/Alqueria.jpg"});
    stages.push({name: "Venecia", url: "recursos/Estaciones/NQS_sur/Venecia.jpg"});
    stages.push({name: "Sevillana", url: "recursos/Estaciones/NQS_sur/Sevillana.jpg"});
    stages.push({name: "Madelena", url: "recursos/Estaciones/NQS_sur/Madelena.jpg"});
    stages.push({name: "Perdomo", url: "recursos/Estaciones/NQS_sur/Perdomo.jpg"});
    stages.push({name: "Portal del Sur", url: "recursos/Estaciones/NQS_sur/Portal_Sur.jpg"});
    stages.push({name: "Bosa", url: "recursos/Estaciones/NQS_sur/Bosa.jpg"});
    stages.push({name: "La Despensa", url: "recursos/Estaciones/NQS_sur/Despensa.jpg"});
    stages.push({name: "León XIII", url: "recursos/Estaciones/NQS_sur/Leon_XIII.jpg"});
    stages.push({name: "Terreros - Hospital C.V.", url: "recursos/Estaciones/NQS_sur/Terreros.jpg"});
    stages.push({name: "San Mateo", url: "recursos/Estaciones/NQS_sur/San_Mateo.jpg"});
    trunks.push(stages);
    //H1
    infoTrunck.push({name: "Caracas Sur (Usme)", inicio: "Hospital", fin: "Portal de Usme", longitud: "10.0 Km"});
    stages = [];
    stages.push({name: "Hospital", url: "recursos/Estaciones/caracas_sur/Hospital.jpg"});
    stages.push({name: "Hortúa", url: "recursos/Estaciones/caracas_sur/Hortua.jpg"});
    stages.push({name: "Nariño", url: "recursos/Estaciones/caracas_sur/Narino.jpg"});
    stages.push({name: "Fucha", url: "recursos/Estaciones/caracas_sur/Fucha.jpg"});
    stages.push({name: "Restrepo", url: "recursos/Estaciones/caracas_sur/Restrepo.jpg"});
    stages.push({name: "Olaya", url: "recursos/Estaciones/caracas_sur/Olaya.jpg"});
    stages.push({name: "Quiroga", url: "recursos/Estaciones/caracas_sur/Quiroga.jpg"});
    stages.push({name: "Calle 40 S", url: "recursos/Estaciones/caracas_sur/Calle_40_Sur.jpg"});
    stages.push({name: "Santa Lucia", url: "recursos/Estaciones/caracas_sur/Santa_Lucia.jpg"});
    stages.push({name: "Socorro", url: "recursos/Estaciones/caracas_sur/Socorro.jpg"});
    stages.push({name: "Consuelo", url: "recursos/Estaciones/caracas_sur/Consuelo.jpg"});
    stages.push({name: "Molinos", url: "recursos/Estaciones/caracas_sur/Molinos.jpg"});
    stages.push({name: "Portal Usme", url: "recursos/Estaciones/caracas_sur/Portal_Usme.jpg"});
    trunks.push(stages);
    //H2
    infoTrunck.push({name: "Caracas Sur (Tunal)", inicio: "Biblioteca", fin: "Portal del Tunal", longitud: "6.75 Km"});
    stages = [];
    stages.push({name: "Biblioteca", url: "recursos/Estaciones/caracas_sur/Biblioteca.jpg"});
    stages.push({name: "Parque", url: "recursos/Estaciones/caracas_sur/Parque.jpg"});
    stages.push({name: "Portal Tunal", url: "recursos/Estaciones/caracas_sur/Portal_Tunal.jpg"});
    trunks.push(stages);
    //J
    infoTrunck.push({name: "Eje Ambiental", inicio: "Museo del Oro", fin: "Universidades", longitud: "1.5 Km"});
    stages = [];
    stages.push({name: "Musueo del Oro", url: "recursos/Estaciones/eje_ambiental/Museo_Oro.jpg"});
    stages.push({name: "Aguas", url: "recursos/Estaciones/eje_ambiental/Aguas.jpg"});
    stages.push({name: "Universidades", url: "recursos/Estaciones/eje_ambiental/Aguas.jpg"});
    trunks.push(stages);
    //K
    infoTrunck.push({name: "Avenida el Dorado", inicio: "Portal el Dorado", fin: "Centro Memoria", longitud: "11.0 Km"});
    stages = [];
    stages.push({name: "Portal el Dorado", url: "recursos/Estaciones/calle_26/CAN.jpg"});
    stages.push({name: "Modelia", url: "recursos/Estaciones/calle_26/Modelia.jpg"});
    stages.push({name: "Normandía", url: "recursos/Estaciones/calle_26/Normandia.jpg"});
    stages.push({name: "AV. Rojas", url: "recursos/Estaciones/calle_26/AV_Rojas.jpg"});
    stages.push({name: "El Tiempo - Maloka", url: "recursos/Estaciones/calle_26/Tiempo_Maloka.jpg"});
    stages.push({name: "Salitre - El Greco", url: "recursos/Estaciones/calle_26/Salitre_Greco.jpg"});
    stages.push({name: "CAN", url: "recursos/Estaciones/calle_26/CAN.jpg"});
    stages.push({name: "Gobernación", url: "recursos/Estaciones/calle_26/Gobernacion.jpg"});
    stages.push({name: "Quinta Paredes", url: "recursos/Estaciones/calle_26/Quinta_Paredes.jpg"});
    stages.push({name: "Corferias", url: "recursos/Estaciones/calle_26/Corferias.jpg"});
    stages.push({name: "Ciudad Universitaria", url: "recursos/Estaciones/calle_26/Ciudad_Universitaria.jpg"});
    stages.push({name: "Concejo de Bogota", url: "recursos/Estaciones/calle_26/Concejo_Bogota.jpg"});
    stages.push({name: "Centro Memoria", url: "recursos/Estaciones/calle_26/Centro_Memoria.jpg"});
    trunks.push(stages);
    //L
    infoTrunck.push({name: "Carrera Décima", inicio: "San Diego", fin: "Portal 20 de Julio", longitud: "6.5 Km"});
    stages = [];
    stages.push({name: "San Diego", url: "recursos/Estaciones/carrera_10/San_Diego.jpg"});
    stages.push({name: "Las Nieves", url: "recursos/Estaciones/carrera_10/Nieves.jpg"});
    stages.push({name: "San Victorino", url: "recursos/Estaciones/carrera_10/San_Victorino.jpg"});
    stages.push({name: "Bicentenario", url: "recursos/Estaciones/carrera_10/Bicentenario.jpg"});
    stages.push({name: "Hospitales", url: "recursos/Estaciones/carrera_10/San_bernando.jpg"});
    stages.push({name: "Policarpa", url: "recursos/Estaciones/carrera_10/Policarpa.jpg"});
    stages.push({name: "Ciudad Jardín - UAN", url: "recursos/Estaciones/carrera_10/Ciudad_Jardin.jpg"});
    stages.push({name: "AV. 1° Mayo", url: "recursos/Estaciones/carrera_10/AV_1_Mayo.jpg"});
    stages.push({name: "Country Sur", url: "recursos/Estaciones/carrera_10/Country_Sur.jpg"});
    stages.push({name: "Portal 20 de Julio", url: "recursos/Estaciones/carrera_10/Portal_20_Julio.jpg"});
    trunks.push(stages);
    //M
    infoTrunck.push({name: "Carrera Séptima", inicio: "Museo Nacional", fin: "Museo Nacional", longitud: "0.5 Km"});
    stages = [];
    stages.push({name: "Museo Nacional", url: "recursos/Estaciones/carrera_7/Museo_Nacional.jpg"});
    trunks.push(stages);
}

function showTroncal(pos){
    document.getElementById("troncal").style.display = "block";
    posBus.setStages(trunks[pos].length);
    posTroncal = pos;
    posBus.setIncrease(900 / trunks[pos].length);
    createPopUp(pos);
}

function hideTroncal(id){
    posTroncal = 0;
    document.getElementById(id).style.display = "none";
}

function moveBus(){
    pos = parseInt(this.innerText) - 1;

    var bus = document.getElementById("img-bus");
    var title = document.getElementById("trunk-name").innerText = trunks[posTroncal][pos].name;
    var image = document.getElementById("trunk-image");
    image.src = trunks[posTroncal][pos].url;
    image.alt = trunks[posTroncal][pos].name;
    posBus.move(pos);
    bus.animate(
        [{left: posBus.getPreciousPos() + "px"}, {left: posBus.getValue() + "px"}],
        {fill: 'forwards', duration: 1000 + (100 * Math.abs(pos - posBus.getStages()))} 
    );  
    posBus.setStages(pos);
}


function createPopUp(pos){

    var container_tronktcales = document.getElementById("troncal");
    document.getElementById("title-troncal").innerText = infoTrunck[pos].name;

    document.getElementById("start-trunk").innerText = infoTrunck[pos].inicio;
    document.getElementById("end-trunk").innerText = infoTrunck[pos].fin;
    document.getElementById("length-trunk").innerText = infoTrunck[pos].longitud;

    document.getElementById("trunk-name").innerText = trunks[pos][0].name;
    document.getElementById("trunk-image").src = trunks[pos][0].url;
    

    var line_time = document.getElementById("line-timeID");

    var stages = document.getElementById('line-time-buttons');
    while (stages.firstChild) {
        stages.removeChild(stages.firstChild);
    }
    
    for(var i = 0; i < trunks[pos].length; i++){
        var div = document.createElement('div');
        var button = document.createElement('button');
        var icon = document.createElement('i');
        icon.classList.add("material-icons");
        icon.innerText = "add_circle_outline";
        button.appendChild(icon);
        var aux = i;
        button.addEventListener('click', moveBus);
        button.innerText = i + 1;

        var titleCard = document.createElement('h2');
        titleCard.innerText = trunks[pos][i].name;
        div.appendChild(button);
        div.appendChild(titleCard);
        stages.appendChild(div);
    }
    stages.style.setProperty('grid-template-columns', `repeat(${trunks[pos].length}, 1fr)`);
    line_time.appendChild(stages);

    var first = parseInt(stages.childNodes[0].getBoundingClientRect().left);
    console.log(first);
    posBus.setPrevious(first);

    document.getElementById("img-bus").animate(
        [{left: posBus.getPreciousPos() + "px"}, {left: first + "px"}],
        {fill: 'forwards', duration: 1000 + (100 * Math.abs(pos - posBus.getStages()))} 
    );
}

function load(){
    alternar_banner();
    fillStages()
}


/* PARTE BANNER NOTICAS PAULA*/
//creo array de imágenes
array_imagen = new Array(6)
array_imagen[0] = new Image(120,41)
array_imagen[0].src = "recursos/imagenes_noticias/uno.jpg";
array_imagen[1] = new Image(120,41)
array_imagen[1].src = "recursos/imagenes_noticias/dos.jpg";
array_imagen[2] = new Image(120,41)
array_imagen[2].src = "recursos/imagenes_noticias/tres.jpg";
array_imagen[3] = new Image(120,41)
array_imagen[3].src = "recursos/imagenes_noticias/cuatro.jpg";
array_imagen[4] = new Image(120,41)
array_imagen[4].src = "recursos/imagenes_noticias/cinco.jpg";
array_imagen[5] = new Image(120,41)
array_imagen[5].src = "recursos/imagenes_noticias/seis.jpg";

//creo el array de URLs
array_url = new Array(6);
array_url[0] = "noticiascarpeta/noticia1.html";
array_url[1] = "noticiascarpeta/noticia2.html";
array_url[2] = "noticiascarpeta/noticia3.html";
array_url[3] = "noticiascarpeta/noticia4.html";
array_url[4] = "noticiascarpeta/noticia5.html";
array_url[5] = "noticiascarpeta/noticia6.html";


array_names=new Array(6)
array_names[0]="TransMilenio refuerza su equipo para atención de conflictos e información a usuarios";
array_names[1]="Empieza Hack36Móvil, iniciativa para jóvenes que quieren aportar con la seguridad y convivencia en TransMilenio";
array_names[2]="Hackathon por la seguridad y la cultura ciudadana en el sistema de transporte público de Bogotá";
array_names[3]="TRANSMILENIO S.A. lamenta los hechos ocurridos en la estación Pepe Sierra";
array_names[4]="¡Atención usuarios! Nuevo servicio urbano del SITP, N15";
array_names[5]="Rutas 19-1, 742, 18-2 presentan novedad en su operación";

//variable para llevar la cuenta de la imagen siguiente
contador = 0

//función para rotar el banner
function alternar_banner(){
    document.getElementById("banner").src = array_imagen[contador].src;
    document.getElementById("title-news").innerText = array_names[contador];
    document.getElementById("link-img").href = array_url[contador];
    contador++;
    contador = contador % array_imagen.length;
    setTimeout("alternar_banner()",2000);
}