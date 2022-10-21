package com.Spring.Bib.dao.GestionDocuments.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Bib.dao.GestionDocuments.Model.Revue;



@Repository("RevueRepository")
public interface RevueRepository extends CrudRepository<Revue, Integer> {

}
