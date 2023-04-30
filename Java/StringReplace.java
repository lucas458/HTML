

public class StringReplace{
    
    public static void main(String args[]){
        
        
        String text = "teste:de:string";
        
        text = text.replaceAll(":", "+");
        
        System.out.println(text);
        
    }
    
}