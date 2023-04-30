
 

abstract class Veiculo{
    
    public String nome;
    public String modelo;
    public int velocidade;
    
    public void acelerar(){
        System.out.println("acelerar");    
    }
    
    public void frear(){
        System.out.println("frear");    
    }
    
    
}



class Carro extends Veiculo{
    
    public Carro(String nome, String modelo){
        super.nome   = nome;
        super.modelo = modelo;
    }
    
    @Override
    public void acelerar(){
        System.out.println("acelerar: " + super.nome);    
    }
    
    @Override
    public void frear(){
        System.out.println("frear: " + super.nome);
    }
    
}



public class MyCarProgram{
    
    public static void main(String args[]){
        
        Carro car = new Carro("BMW", "320i");
        
        car.acelerar();
        
    }
    
}










