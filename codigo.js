

var imagen = document.getElementById('imagenes');

const validar = () =>{

    var nota1 = document.getElementById('materia1').value.trim();
    var nota2 = document.getElementById('materia2').value.trim();
    var nota3 = document.getElementById('materia3').value.trim();

    if (nota1 === '' || nota2 === '' || nota3 === '') {
        alert('Por favor, completa todas las notas antes de continuar.');
    }
}

function ValidarLargoDeNotas() {
    var nota1 =  document.getElementById('materia1').value;
    var nota2 =  document.getElementById('materia2').value;
    var nota3 =  document.getElementById('materia3').value;
    if (nota1 > 10 || nota1 < 1 || isNaN(nota1) == true) {
        document.getElementById('materia1').style.backgroundColor = "#f27961";
    }
    else{
        document.getElementById('materia1').style.backgroundColor = "green";
    }

    if (nota2 > 10 || nota2 < 1 || isNaN(nota2) == true) {
        document.getElementById('materia2').style.backgroundColor = "#f27961";
    }
    else{
        document.getElementById('materia2').style.backgroundColor = "green";
    }

    if (nota3 > 10 || nota3 < 1 || isNaN(nota3) == true) {
        document.getElementById('materia3').style.backgroundColor = "#f27961";
    }
    else{
        document.getElementById('materia3').style.backgroundColor = "green";
    }
    
}

const PromedioNotas = () =>{
    if (!validar()) {
       
    }
    
    var promedio = (parseInt(materia1.value)  + parseInt(materia2.value) +parseInt(materia3.value)) / 3;
    document.getElementById('resultadoObtenido').innerText = 'El promedio es: ' + promedio + '!!';
    var imagen = document.getElementById('imagenResultado');

    if (promedio >= 6) {
        document.getElementById('resultadoObtenido').style.color = "green";
        imagen.src = 'festejo.gif';
    }
    else {
        document.getElementById('resultadoObtenido').style.color = "red";
        imagen.src = 'reprobado.gif';
    }
    
    
}
const MejorMateria = () => {

    if (!validar()) {
        
    }
    
    var nota1 = parseFloat(document.getElementById('materia1').value);
    var nota2 = parseFloat(document.getElementById('materia2').value);
    var nota3 = parseFloat(document.getElementById('materia3').value);

    var mensaje = '';

    if (nota1 > nota2 && nota1 > nota3) {
        mensaje = 'La mejor materia es: Matematica';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }
    else if (nota2 > nota1 && nota2 > nota3) {
        mensaje = 'La mejor materia es: Lengua';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }
    else if (nota3 > nota1 && nota3 > nota2) {
        mensaje = 'La mejor materia es: EFSI';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }
    else if (nota1 === nota2 && nota1 > nota3) {
        mensaje = 'Las mejores materias son: Matematica y Lengua';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    } 
    else if (nota1 === nota3 && nota1 > nota2) {
        mensaje = 'Las mejores materias son: Matematica y EFSI';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }
    else if (nota2 === nota3 && nota2 > nota1) {
        mensaje = 'Las mejores materias son: Lengua y EFSI';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }
    else {
        mensaje = 'Las tres materias tienen la misma nota';
        document.getElementById('resultadoObtenido2').style.color = "blue";
    }

    document.getElementById('resultadoObtenido2').innerText = mensaje;

   
 
}
const ImagenCambiante = () => {
    
    
        img.src = 'aplausosemoji.gif';
    
    
}