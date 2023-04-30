

 
import java.util.Random;
import java.lang.Math;

public class MyClass3{
    
    
    
    public static int[] teste(int len, int maxRand){ 
        Random rand = new Random();
         
        
        int[] temp = new int[len];
        
        for (int i = 0; i < len; i++){
            temp[i] = rand.nextInt(maxRand);
        }
        
        return temp;
    }
     
    
    public static void main(String args[]){
        
        
        int[] arr; 
        
        arr = teste(8, 10);
        for (int i : arr){
            System.out.print(i + " ");
        }
        System.out.println("\n********************");
        
        
        arr = teste(5, 10);
        for (int i : arr){
            System.out.print(i + " ");
        }
        System.out.println("\n********************");
        
        
        arr = teste(16, 50);
        for (int i : arr){
            System.out.print(i + " ");
        }
        System.out.println("\n********************");
        
        
    }
}
