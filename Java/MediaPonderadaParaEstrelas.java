

import java.util.Scanner;

public class MediaPonderadaParaEstrelas {
    
    public static void main(String args[]){
        
        Scanner scan = new Scanner(System.in);
        
        int soma = 0;
        float media = 0;
        
        for (int i = 0; i < 5; i++){
            System.out.printf("Usuarios que deram %d estrelas: ", i+1);
            
            int valor = scan.nextInt();
            soma  += valor;
            media += valor * (i+1); 
        }
        
        
        if ( soma > 0 ){
            media /= soma;
        }else{
            media = 0;
        }
        
        System.out.printf("Media: %.1f\n", media);
        
    }
    
    
}