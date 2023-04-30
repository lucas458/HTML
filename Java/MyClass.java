
import java.util.Scanner;

public class MyClass{
    
    public static void main(String args[]){
      
        Scanner scan = new Scanner(System.in);
      
        String str = "bem-te-vi";

        while (true){
            
            System.out.printf("Palavra: \"%s\"\n", str);
            System.out.print("digite o index: de 0 a " + (str.length()-1) + ":");
            
            
            String scan_str = scan.nextLine();
            
            // CODIGO A
            try{
                int idx = Integer.parseInt(scan_str);
                try{
                    System.out.printf("letra no index[%d] é '%c'\n", idx, str.charAt(idx));
                } catch (IndexOutOfBoundsException e){
                    System.out.println("Index invalido!");
                }
            } catch (NumberFormatException e){
                System.out.println(scan_str + " não é um numero");
            }
            
            
            // CODIGO B
            try{
                int idx = Integer.parseInt(scan_str);
                System.out.printf("letra no index[%d] é '%c'\n", idx, str.charAt(idx));
            } catch (NumberFormatException e){
                System.out.println(scan_str + " não é um numero valido");
            } catch (IndexOutOfBoundsException e){
                System.out.println("Index invalido!");
            }
            
        }
        
    }
}
