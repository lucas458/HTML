
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;


class Contato{
    
    public String nome;
    public String numero;
    public boolean favorito;
    public String grupos;
    
    
    public Contato(String nome, String numero, boolean favorito, String grupos){
        this.nome       = nome;
        this.numero     = numero;
        this.favorito   = favorito;
        this.grupos     = grupos;
    }
    
}



public class ContactGroup{

    public static void main(String[] args){
        
        // LISTA DE CONTATOS
        List<Contato> contatos = new ArrayList<Contato>();
        
        // ADICIONAR CONTATOS
        contatos.add( new Contato("luiz", "4539-4158", true, "casa;familia") );
        contatos.add( new Contato("alex", "5103-4139", true, "trabalho") );
        contatos.add( new Contato("marcos", "5597-6445", false, "familia") );
        contatos.add( new Contato("gabriel", "3399-4684", false, "loja") );
        contatos.add( new Contato("ana", "1789-7517", false, "") );
        contatos.add( new Contato("igor", "4514-6561", true, "") );
        
        // ORGANIZAR CONTATOS DE A-Z
        contatos.sort((a, b) -> a.nome.compareToIgnoreCase(b.nome) );
        
        // LISTA DE GRUPOS
        List<String> grupos = new ArrayList<String>();
        
        // ADICIONAR GRUPOS NA LISTA (esse codigo serva pra não ter itens repetidos)
        for (Contato contato : contatos){
            
            String[] gp = contato.grupos.split(";");
            
            for (String i : gp){
                if ( !grupos.contains(i) ){
                    grupos.add(i);
                }
            }
        }
        
        // ORGANIZAR GRUPOS DE A-Z
        grupos.sort((a, b) -> a.compareToIgnoreCase(b) );
        
        
        
        
        // MOSTRAR GRUPOS
        for (String gp : grupos){
            
            
            if ( gp.isEmpty() ){
                // SEM GRUPO
                System.out.println("sem grupo:");
            }else{
                // NOME DO GRUPO
                System.out.println("\ngrupo: " + gp);
            }
            
            // MOSTRAR ITENS DESSE GRUPO
            contatos.stream().filter(e -> Arrays.asList(e.grupos.split(";")).indexOf(gp) >= 0).forEach(e -> {
                System.out.printf("    - %s (%s)%s\n", e.nome, e.numero, (e.favorito)? " -- favorio" : "");
            });
        }
        
        
        
    }
    
}
