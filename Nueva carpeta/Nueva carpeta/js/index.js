import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_examen from "./Cl_examen.js";
import Dt_estudiantes from "./Dt_estudiantes.js";
import Dt_examen from "./Dt_examen.js";

const examen = new Cl_examen();

let estudiantes = new Cl_estudiantes(estudiantes.nombre, estudiantes.apellido, estudiantes.edad, estudiantes.correo)

alert (`El porcentaje de estudiantes aprobados es de : ${examen.porcAprobados()}`);
alert (`El porcentaje de estudiantes reprobados es de: ${examen.porcReprobados()}`);
alert (`El estudiante con la mejor nota es: ${JSON.stringify(examen.estudiantemejornota())}`);
alert (`porcentaje de estudiantes aprobados: ${examen.porcAprobados()}`);
