package com.Spring.Bib.dao.GestionDocuments.Service;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.Bib.dao.GestionDocuments.Model.Dictionnaire;
import com.Spring.Bib.dao.GestionDocuments.Repository.DictionnaireRepository;


@Service("DictionnaireService")
public class DictionnaireService {
	@Autowired
	private DictionnaireRepository dictionnairerepository;
	public Iterable<Dictionnaire> findAll() {

		return dictionnairerepository.findAll();
	}

	
	public Dictionnaire findone(int ID) {
		
		return dictionnairerepository.findById(ID).orElse(null);
	}

	
	public Dictionnaire save(Dictionnaire dictionnaire) {
		
		return dictionnairerepository.save(dictionnaire);
	}

	
	public void delete(int ID) {
		dictionnairerepository.deleteById(ID);
	} 
public Dictionnaire Update(Dictionnaire dictionnaire) {
		
		return dictionnairerepository.save(dictionnaire);
	}

}
