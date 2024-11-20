export default class Cl_examen {
    constructor(valor, minAprueba){
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.aprobados = [];
        this.reprobados = [];
    }

    aprueba(e) {
        let n = this.minAprueba;
        for (let i = 0; i < e.length; i++) {
            if (e[i].nota >= n){
                this.aprobados.push(e[i])
                console.log("el estudiante " +e[i].nombre + " Aprobo")
            } else {
                this.reprobados.push(e[i])
                console.log("el estudiante" +e[i].nombre + " Reprobo")
            }
        } 
    }

    porcAprobados(){
        let a = this.aprobados.length;
        let r = this.reprobados.length;
        let t = a + r; 
        return (t / a) * 100;
    }
    porcReprobados(){
        let a = this.aprobados.length;
        let r = this.reprobados.length;
        let t = a + r; 
        return (t / r) * 100;
    }

    estudiantemejornota(){
        let a = this.aprobados;
        let mejornota = 0;
        let estmejornota 
        for (let i = 0; i < a.length; i++) {
            if (a[i].nota > mejornota){
                mejornota = a[i].nota;
                estmejornota = {
                    nombre: a[i].nombre,
                    cedula: a[i].cedula,
                    sexo: a[i].sexo,
                    nota: a[i].nota,
                }
            }    
        }
        return estmejornota;
    }

    notapromedio(){ 
        
    }
    
}
