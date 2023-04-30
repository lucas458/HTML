

public class StringSplit{
    
    public static void main(String args[]){
        
        
        String text = "segunda,terça,sexta,domingo";
        
        String[] lista = text.split(",");
        
        for (int i = 0; i < lista.length; i++){
            System.out.println(lista[i]);
        }
        
        
    }
    
}