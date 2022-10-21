package com.Spring.Bib.dao.GestionDocuments.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.Bib.dao.GestionDocuments.Model.Revue;
import com.Spring.Bib.dao.GestionDocuments.Repository.RevueRepository;


@Service("RevueService")
public class RevueService {
	@Autowired
	private RevueRepository revuerepository;
	
	public Iterable<Revue> findAll() {
		return revuerepository.findAll();

	}

	
	public Revue findone(int ID) {
		
		return revuerepository.findById(ID).orElse(null);
	}

	
	public Revue save(Revue revue) {
		
		return revuerepository.save(revue);
	}

	
	public void delete(int ID) {
		revuerepository.deleteById(ID);
	} 
public Revue Update(Revue revue) {
		
		return revuerepository.save(revue);
	}

}
