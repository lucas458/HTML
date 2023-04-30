
import java.util.Random;

public class RandomColor{
    
    public static void main(String args[]){
        
        Random rand = new Random();
        
        final String[] CORES = new String[] {
            "red", "green", "blue", "purple", "cyan", "yelow", "white", "black"
        };
        
        int randColorIndex = rand.nextInt(CORES.length);
        System.out.println("CORES:");
        
        for (int i = 0; i < CORES.length; i++){
            if ( randColorIndex == i ){
                System.out.printf("\t%d - %s -> selecionado aleatoriamente\n", i+1, CORES[i]);
            }else{
                System.out.printf("\t%d - %s\n", i+1, CORES[i]);
            }
        }
        
        System.out.printf("\nCor selecionada é \"%s\"\n", CORES[randColorIndex]);
        
    }
}