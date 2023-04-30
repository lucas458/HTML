
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;


class Contact implements Comparable<Contact>{
    
    public String name;
    public String number;
    public boolean favorite;
    
    public Contact(String name, String number, boolean favorite){
        this.name = name;
        this.number = number;
        this.favorite = favorite;
    }
    
    public Contact(String name, String number){
        this.name = name;
        this.number = number;
        this.favorite = false;
    }
    
    @Override
    public int compareTo(Contact e){
        return this.name.toUpperCase().compareTo(e.name.toUpperCase());
    }
    
}



public class ContactSortProgram{
    
    public static void main(String args[]){
        
        List<Contact> contatos = new ArrayList<Contact>();
        
        contatos.add( new Contact("marcos gabriel", "555", true) );
        contatos.add( new Contact("luiz melo", "777", true) );
        contatos.add( new Contact("Luiz alex", "666") );
        contatos.add( new Contact("ana", "888", true) );
        contatos.add( new Contact("alexandre", "222") );
        contatos.add( new Contact("roberto", "444") );
        
        Collections.sort(contatos);
        
        
        char letter = '\0';
        int count   = 1;
        
        for (int i = 0; i < contatos.size(); i++){
            
            if ( letter != Character.toUpperCase(contatos.get(i).name.charAt(0)) ){
                if (i > 0){
                    System.out.println();
                }
                letter = Character.toUpperCase(contatos.get(i).name.charAt(0));
                count = 1;
                System.out.printf("LETRA -> %c:\n", letter);
            }
            
            
            
            if ( contatos.get(i).favorite ){
                System.out.printf("\t %d - %s (%s) -- favorito\n", count, contatos.get(i).name, contatos.get(i).number);
            }else{
                System.out.printf("\t %d - %s (%s)\n", count, contatos.get(i).name, contatos.get(i).number);
            }
            
            count++;
            
        }
        
    }
    
}





















