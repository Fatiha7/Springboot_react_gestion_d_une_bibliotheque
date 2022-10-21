package com.Spring.Bib.dao.GestionDocuments.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Bib.dao.GestionDocuments.Model.Dictionnaire;



@Repository("DictionnaireRepository")
public interface DictionnaireRepository extends CrudRepository<Dictionnaire, Integer> {

}
