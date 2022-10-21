package com.Spring.Bib.dao.GestionDocuments.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.Bib.dao.GestionDocuments.Model.Livre;
import com.Spring.Bib.dao.GestionDocuments.Repository.LivreRepository;



@Service("LivreService")
public class LivreService {
	@Autowired
	private LivreRepository livrerepository;
	public Iterable<Livre> findAll() {

		return livrerepository.findAll();
	}

	
	public Livre findone(int ID) {
		
		return livrerepository.findById(ID).orElse(null);
	}

	
	public Livre save(Livre livre) {
		
		return livrerepository.save(livre);
	}

	
	public void delete(int ID) {
		livrerepository.deleteById(ID);
	} 
public Livre Update(Livre livre) {
		
		return livrerepository.save(livre);
	}

}
