package com.Spring.Bib.dao.GestionEmprunts.Controller;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.Bib.dao.GestionEmprunts.Model.Adherents;
import com.Spring.Bib.dao.GestionEmprunts.Model.Emprunt;
import com.Spring.Bib.dao.GestionEmprunts.Service.EmpruntService;

@RestController
@CrossOrigin("*")
public class EmpruntsController {
	@Autowired
	private EmpruntService empruntService;
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$****Gestion des Emprunts****$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
	//_________________________________________________________________________________________________________________________________________________
	//------------------------- Get Emprunts list----------------------------------------------------------
	@GetMapping(value="Gestions_Emprunts")
	public Collection<Emprunt> ListEmprunts() {
		 return empruntService.findAll();
		
	}
	//----------------------------Create Emprunt----------------------------------------------------
	@RequestMapping(value = "Gestions_Emprunts",method= RequestMethod.POST)
	public Emprunt addEmprunt(@RequestBody Emprunt emprunt) {
		 long millis = System.currentTimeMillis();  
		    // creating a new object of the class Date  
		    java.util.Date date = new java.util.Date(millis);      
		    System.out.println(date.toString());  
		 emprunt.setDateEmp(date.toString());
		 Date dateR = new Date(date.getTime()+(1000*60*60*24*5));
		 emprunt.setDateRet(dateR.toString());
		 Adherents adherent = emprunt.getAdherent();
		 emprunt.setAdherent(adherent);
		empruntService.save(emprunt);
		System.out.println("Emprunt add ");
		return emprunt;
		 
	}
	//----------------------------Find Emprunt by ID ----------------------------------------------------
	@RequestMapping(value = "Gestions_Emprunts/{id_emprunt}",method=RequestMethod.GET)
	public Emprunt findOneEmprunteById(@PathVariable int id_emprunt) {
		return empruntService.findone(id_emprunt);
		
	}
	//----------------------------Update Emprunt by ID ----------------------------------------------------
	@RequestMapping(value = "Gestions_Emprunts/{id_emprunt}",method=RequestMethod.PUT)
	public Emprunt UpdateEmprunt(@PathVariable int id_emprunt ,@RequestBody Emprunt emprunt) {
		Emprunt emp= empruntService.findone(id_emprunt);
		emprunt.setAdherent(emp.getAdherent());
		//emprunt.setId_document(emp.getId_document());
		emprunt.setId_emprunt(id_emprunt);
		emprunt.setEID(emp.getEID());
		empruntService.Update(emprunt);
		return emprunt;
	}
	//----------------------------Delete Emprunt by ID ----------------------------------------------------
	@RequestMapping(value = "Gestions_Emprunts/{id_emprunt}",method= RequestMethod.DELETE)
	public String DeleteEmprunt(@PathVariable int id_emprunt) {
		empruntService.delete(id_emprunt);
		return "Loan Deleted Successfully";
		
		}
}
