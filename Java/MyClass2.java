import java.util.Random;


public class MyClass2{
    
    public static void main(String args[]){
        
        Random rand = new Random();
        
        int[][] tabela = new int[5][3];
        
        int[] max_linha = new int[tabela.length];
        int[] min_linha = new int[tabela.length];
        
        
        int max_tabela = 0;
        int min_tabela = 0;
        
        
        for (int i = 0; i < tabela.length; i++){
            
            for (int j = 0; j < tabela[i].length; j++){
                
                tabela[i][j] = rand.nextInt(100);
                
                if ( tabela[i][j] < min_tabela || (i == 0 && j == 0) ){
                    min_tabela   = tabela[i][j];
                }
                if ( tabela[i][j] > max_tabela || (i == 0 && j == 0) ){
                    max_tabela   = tabela[i][j];
                }
                if ( tabela[i][j] < min_linha[i] || j == 0 ){
                    min_linha[i] = tabela[i][j];
                }
                if ( tabela[i][j] > max_linha[i] || j == 0 ){
                    max_linha[i] = tabela[i][j];
                }
                
            }
            
        }
        
        
        
        System.out.printf("TABELA, min(%d), max(%d)\n\n", min_tabela, max_tabela);
        
        for (int i = 0; i < tabela.length; i++){
            
            System.out.printf("LINHA %d, min(%d), max(%d)\n", i+1, min_linha[i], max_linha[i]);
            
            for (int j = 0; j < tabela[i].length; j++){
                
                System.out.printf("  %d° valor: %d", j+1, tabela[i][j]);
                
                if ( tabela[i][j] == min_linha[i] ){
                    System.out.print(" -- MENOR");
                }
                if ( tabela[i][j] == max_linha[i] ){
                    System.out.print(" -- MAIOR");
                }
                
                System.out.println();
                
            }
            
            System.out.println();
        }
        
    }
}
