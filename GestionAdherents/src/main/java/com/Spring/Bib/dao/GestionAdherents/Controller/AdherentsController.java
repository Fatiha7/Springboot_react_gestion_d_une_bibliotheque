package com.Spring.Bib.dao.GestionAdherents.Controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.Bib.dao.GestionAdherents.Service.AdherentsService;
import com.Spring.Bib.dao.GestionAdherents.Model.Adherents;

@RestController
@CrossOrigin("*")
public class AdherentsController {
	@Autowired
	private AdherentsService adherentsService;
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*Gestion des Adherents*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	@GetMapping(value="Gestion_Adherents")
	public Collection<Adherents> ListAdherents() {
		 return adherentsService.findAll();
		
	}

	@RequestMapping(value = "Gestion_Adherents",method= RequestMethod.POST)
	public Adherents addAdherent(@RequestBody Adherents adherent) {
	    Collection<Adherents> adherents = adherentsService.findAll();
	   int id =0;
		 for(Adherents ad : adherents) {
			 id+=ad.getId_adherent();		 
	  }
		 id+=1;  
	   adherent.setId_adherent(id);
		adherentsService.save(adherent);
		return adherent;
		 
	}

	@RequestMapping(value = "Gestion_Adherents/{cin}",method=RequestMethod.GET)
	public Adherents findOneAdherentById(@PathVariable String cin) {
		return adherentsService.findone(cin);
		
	}
	
	@RequestMapping(value = "Gestion_Adherents/{cin}",method=RequestMethod.PUT)
	public String UpdateAdherent(@PathVariable String cin,@RequestBody Adherents adherent) {
		adherent.setCIN(cin);
		Adherents ad = adherentsService.findone(cin);
		adherent.setId_adherent(ad.getId_adherent());
		adherentsService.Update(adherent);
		return "Member updated Successfully";
	}

	@RequestMapping(value = "Gestion_Adherents/{cin}",method= RequestMethod.DELETE)
	public String DeleteAdherent(@PathVariable String cin) {
		adherentsService.delete(cin);
		return "Member deleted Successfully";
		}
}
