package com.Spring.Bib.dao.GestionDocuments.Controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.Bib.dao.GestionDocuments.Model.Dictionnaire;
import com.Spring.Bib.dao.GestionDocuments.Model.Livre;
import com.Spring.Bib.dao.GestionDocuments.Model.Revue;
import com.Spring.Bib.dao.GestionDocuments.Service.DictionnaireService;
import com.Spring.Bib.dao.GestionDocuments.Service.LivreService;
import com.Spring.Bib.dao.GestionDocuments.Service.RevueService;

@RestController
@CrossOrigin("*")
public class DocumentsController {
	@Autowired
	private LivreService livreService;
	
	@Autowired
	private RevueService revueService;
	@Autowired
	private DictionnaireService dictionnaireService;
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$**Gestion des Livres**$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
		@GetMapping(value="Gestions_Livres")
	public Iterable<Livre> ListLivres() {
		 return livreService.findAll();
		
	}
		
	@RequestMapping(value = "Gestions_Livres",method= RequestMethod.POST)
	public Livre addLivre(@RequestBody Livre livre) {
		
		livre.setDisponible(1);
		livreService.save(livre);
		
		System.out.println("livre add ");
		return livre;
		 
	}
	
	@RequestMapping(value = "Gestions_Livres/{id}",method=RequestMethod.GET)
	public Livre findOneLivreById(@PathVariable int id) {
		return livreService.findone(id);
		
	}
	@RequestMapping(value = "Gestions_Livre_disponibilite/{id}",method=RequestMethod.PUT)
	public Livre Update_LIV_disponibilite(@PathVariable int id ,@RequestBody Livre livre) {
		Livre liv = livreService.findone(id);
		livre.setAuteur(liv.getAuteur());
		livre.setNom(liv.getNom());
		livre.setPrix_vente(liv.getPrix_vente());
		livre.setID(id);
		livre.setNumpage(liv.getNumpage());
	
		livreService.Update(livre);
		return livre;
	}

	@RequestMapping(value = "Gestions_Livres/{id}",method=RequestMethod.PUT)
	public String UpdateLivre(@PathVariable int id ,@RequestBody Livre livre) {
		
		livre.setID(id);
		livreService.Update(livre);
		return "book Updated Successfully";
	}
		
	@RequestMapping(value = "Gestions_Livres/{id}",method= RequestMethod.DELETE)
	public String DeleteLivre(@PathVariable int id) {
		livreService.delete(id);
		return "book Deleted Successfully";
		}
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$***Gestion des Revues***$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	
	@GetMapping(value="Gestions_Revues")
	public Iterable<Revue> ListRevues() {
		 return revueService.findAll();
		
	}

	@RequestMapping(value = "Gestions_Revues",method= RequestMethod.POST)
	public Revue addRevue(@RequestBody Revue revue) {
		revue.setDisponible(1);
		
		revueService.save(revue);
		System.out.println("Revue add ");
		return revue;
		 
	}

	@RequestMapping(value = "Gestions_Revues/{id}",method=RequestMethod.GET)
	public Revue findOneRevueById(@PathVariable int id) {
		return revueService.findone(id);
		
	}
	@RequestMapping(value = "Gestions_Revues_disponibilite/{id}",method=RequestMethod.PUT)
	public Revue Update_REV_disponibilite(@PathVariable int id ,@RequestBody Revue revue) {
		Revue rev = revueService.findone(id);
		System.out.println(rev);
		revue.setAnneePub(rev.getAnneePub());
		revue.setReference(rev.getReference());
		revue.setNom(rev.getNom());
	
		revue.setPrix_vente(rev.getPrix_vente());
		revue.setID(id);
		revueService.Update(revue);
		return revue;
	}

	@RequestMapping(value = "Gestions_Revues/{id}",method=RequestMethod.PUT)
	public Revue UpdateRevue(@PathVariable int id ,@RequestBody Revue revue) {
		
		revue.setID(id);
		revueService.Update(revue);
		return revue;
	}

	@RequestMapping(value = "Gestions_Revues/{id}",method= RequestMethod.DELETE)
	public String DeleteRevue(@PathVariable int id) {
		revueService.delete(id);
		return "Review Deleted Successfully";
		}


	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$****Gestion des Dictionnaires****$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

	@GetMapping(value="Gestions_Dictionnaires")
	public Iterable<Dictionnaire> ListDictionnaire() {
		 return dictionnaireService.findAll();
		
	}

	@RequestMapping(value = "Gestions_Dictionnaires",method= RequestMethod.POST)
	public Dictionnaire addDictionnaire(@RequestBody Dictionnaire dictionnaire) {
		
		dictionnaire.setDisponible(1);
		dictionnaireService.save(dictionnaire);
		System.out.println("Dictionnaire add ");
		return dictionnaire;
		 
	}

	@RequestMapping(value = "Gestions_Dictionnaires/{id}",method=RequestMethod.GET)
	public Dictionnaire findOneDictionnaireById(@PathVariable int id) {
		return dictionnaireService.findone(id);
		
	}

	@RequestMapping(value = "Gestions_Dictionnaires_disponibilite/{id}",method=RequestMethod.PUT)
	public Dictionnaire Update_DIC_disponibilite(@PathVariable int id ,@RequestBody Dictionnaire dictionnaire) {
		Dictionnaire dic = dictionnaireService.findone(id);
		System.out.println(dic);
		dictionnaire.setLangue(dic.getLangue());
		dictionnaire.setNom(dic.getNom());
		dictionnaire.setPrix_vente(dic.getPrix_vente());
		dictionnaire.setID(id);
		dictionnaireService.Update(dictionnaire);
		return dictionnaire;
	}

	@RequestMapping(value = "Gestions_Dictionnaires/{id}",method=RequestMethod.PUT)
	public Dictionnaire UpdateDictionnaire(@PathVariable int id ,@RequestBody Dictionnaire dictionnaire) {
	
		dictionnaire.setID(id);
		dictionnaireService.Update(dictionnaire);
		return dictionnaire;
	}
	@RequestMapping(value = "Gestions_Dictionnaires/{id}",method= RequestMethod.DELETE)
	public String DeleteDictionnaire(@PathVariable int id) {
		dictionnaireService.delete(id);
		return "Dictionary Deleted Successfully";
		}
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*****Gestion des Documents*****$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

	@RequestMapping(value="Gestions_Documents",method=RequestMethod.GET)
	public Collection<Object> findD_Documents(){
		Collection<Object> documents =  new ArrayList<Object>() ;
		//Dictionnaire
		Iterable<Dictionnaire> dictionnaire=dictionnaireService.findAll();
		for(Dictionnaire dic :dictionnaire) {
			if(dic.getDisponible()==1) {
				documents.add(dic);
			}}
		//livre
		Iterable<Livre> livres=livreService.findAll();
		for(Livre livre :livres) {
			if(livre.getDisponible()==1) {
				documents.add(livre);
			}}
		//Revue
		Iterable<Revue> revues=revueService.findAll();
		for(Revue revue :revues) {
			if(revue.getDisponible()==1) {
				documents.add(revue);
			}}
		return documents;
		
	}
}
