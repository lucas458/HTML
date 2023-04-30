

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;



class Contact implements Comparable<Contact>{
    
    private String name;
    private String number;
    public boolean isFavorite;
    
    
    public Contact(String name, String number, boolean isFavorite){
        this.name = name;
        this.number = number;
        this.isFavorite = isFavorite;
    }
    
    public Contact(String name, String number){
        this.name = name;
        this.number = number;
        this.isFavorite = false;
    }
    
    @Override
    public int compareTo(Contact e){
        return this.name.compareToIgnoreCase(e.name);
    }
    
    
    public boolean setName(String t){
        if ( t.isEmpty() ){
            return false;
        }
        this.name = t;
        return true;
    }
    
    public String getName(){
        return this.name;
    }
    
    
    public boolean setNumber(String t){
        if ( t.isEmpty() ){
            return false;
        }
        this.number = t;
        return true;
    }
    
    public String getNumber(){
        return this.number;
    }
    
    
    
    
    public static int countAllElementsByLetter(char letter, List<Contact> list){
        
        int count = 0;
        for (Contact e : list){
            if ( Character.toUpperCase(letter) == Character.toUpperCase(e.getName().charAt(0)) ){
                count++;
            }
        }
        return count;
        
    }
    
}






public class ContactSortProgram2{
    
    public static void main(String args[]){
        
        
        List<Contact> contatos = new ArrayList<Contact>(); 
        
        
        contatos.add( new Contact("dom", "666", true) );
        contatos.add( new Contact("Luiz melo", "555") );
        contatos.add( new Contact("luiz roberto", "222") );
        contatos.add( new Contact("marcos gabriel", "111", true) );
        contatos.add( new Contact("maria", "333") );
        contatos.add( new Contact("Andre", "444") );
        contatos.add( new Contact("alex", "999", true) );
        
        
        Collections.sort(contatos);
        
        
        char letter = '\0';
        int count = 1;
        
        System.out.println("FAVORITO(S):");
        for (Contact e : contatos){
            if (e.isFavorite){
                System.out.printf("\t%d - %s (%s)\n", count++, e.getName(), e.getNumber());
            }
        }
        count = 1;
        
        
        for (Contact e : contatos){
            
            char tempLetter = Character.toUpperCase(e.getName().charAt(0));
            
            if (tempLetter != letter){
                letter = tempLetter;
                count = 1;
                System.out.printf("\nletra %c, %d contato(s)\n", letter, Contact.countAllElementsByLetter(letter, contatos) );
            }
            
            System.out.printf("\t%d - %s (%s) %s\n", count++, e.getName(), e.getNumber(), (e.isFavorite)?"-> favorito" : "");
        }
        
    }
    
}






























