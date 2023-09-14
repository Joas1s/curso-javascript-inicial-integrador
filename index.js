const estudiantes = [
    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
  ];

  let sumaTotal = 0
let totalNotas = 0
let notaMin = 100
let notaMax = -100
let nombreEstudianteNotaMax 
let nombreEstudianteNotaMin 

for(i=0; i<estudiantes.length; i++){
  const estudiante = estudiantes[i]
  const notas = estudiante.notas

  for(j=0; j<notas.length; j++){
   const nota = notas [j]
    sumaTotal += nota
    totalNotas++

    if(nota < notaMin){
      notaMin = nota
      nombreEstudianteNotaMin = estudiante.nombre
    }
    if(nota > notaMax){
      notaMax = nota
      nombreEstudianteNotaMax = estudiante.nombre
    }
  }

}
console.log('Promedio general: ', sumaTotal/totalNotas)
console.log('La nota mas baja es de: ' + nombreEstudianteNotaMin)
console.log('La nota mas alta es de: ' + nombreEstudianteNotaMax)



















/*  let acumuladorNotas = 0
  let contadorNotas = 0

for(i = 0; i < estudiantes.length; i++){
  const estudiante = estudiantes[i]
  const notas = estudiante.notas

  for(j = 0; j < notas.length; j++){
    const nota = notas[j]
    acumuladorNotas = acumuladorNotas + nota
    contadorNotas = contadorNotas + 1
  }
  
}
console.log('Promedio general de la clase: ', acumuladorNotas/contadorNotas)
*/