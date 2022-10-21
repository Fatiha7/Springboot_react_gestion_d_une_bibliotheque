package com.Spring.Bib.dao.GestionEmprunts.Service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.Spring.Bib.dao.GestionEmprunts.Model.Emprunt;
import com.Spring.Bib.dao.GestionEmprunts.Repository.EmpruntRepository;


@Service("EmpruntService")
public class EmpruntService implements IEmpruntService {
	@Autowired
	private EmpruntRepository empruntrepository;
	
	
	public Collection<Emprunt> findAll() {

		return (Collection<Emprunt>) empruntrepository.findAll();
	}

	
	public Emprunt findone(int ID) {
		
		return empruntrepository.findById(ID).orElse(null);
	}

	
	public Emprunt save(Emprunt emprunt) {
		
		return empruntrepository.save(emprunt);
	}

	
	public void delete(int ID) {
		empruntrepository.deleteById(ID);
	} 
public Emprunt Update(Emprunt emprunt) {
		
		return empruntrepository.save(emprunt);
	}
	
}
