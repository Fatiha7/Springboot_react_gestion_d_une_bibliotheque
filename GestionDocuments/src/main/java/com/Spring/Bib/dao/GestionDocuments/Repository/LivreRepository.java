package com.Spring.Bib.dao.GestionDocuments.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Bib.dao.GestionDocuments.Model.Livre;



@Repository("LivreRepository")
public interface LivreRepository extends CrudRepository<Livre, Integer> {

}
