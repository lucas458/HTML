
public class Metodos{
    
    
    // SEM retorno, SEM parametro
    static void falar(){
        System.out.println("OI");
    }
    
    // SEM retorno, COM parametro
    static void mostrarSoma(int a, int b){
        System.out.println("soma: " + (a + b));
    }
    
    
    /* OVERLOADING: QUANDO A FUNÇÃO TEM MESMO NOME "retornaSoma" com paremetros diferentes */
    
    // COM retorno, COM parametro
    static int retornaSoma(int a, int b){
        return a + b;
    }
    // COM retorno, COM parametro
    static double retornaSoma(double a, double b){
        return a + b;
    }
    
    
        
    
    public static void main(String args[]){
        
        falar();
        
        mostrarSoma(5, 8);
        
        System.out.println("saida: " + retornaSoma(8, 8) );
        System.out.println("saida: " + retornaSoma(1.5, 1.2) );
        
    }
}