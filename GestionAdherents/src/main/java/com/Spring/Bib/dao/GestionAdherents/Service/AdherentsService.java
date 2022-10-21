package com.Spring.Bib.dao.GestionAdherents.Service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.Bib.dao.GestionAdherents.Model.Adherents;
import com.Spring.Bib.dao.GestionAdherents.Repository.AdherentsRepository;


@Service("AdherentsService")
public class AdherentsService implements IAdherentsService {
	@Autowired
	private AdherentsRepository adherentsrepository;
	
	public Collection<Adherents> findAll() {

		return adherentsrepository.findAll();
	}

	
	public Adherents findone(String CIN) {
		
		return adherentsrepository.findById(CIN).orElse(null);
	}

	
	public void save(Adherents adherents) {
		
	adherentsrepository.save(adherents);
	}

	
	public void delete(String CIN) {
		adherentsrepository.deleteById(CIN);
	} 
public Adherents Update(Adherents adherent) {
		
		return adherentsrepository.save(adherent);
	}
	
}

