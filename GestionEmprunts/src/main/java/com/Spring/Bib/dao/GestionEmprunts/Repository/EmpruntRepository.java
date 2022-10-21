package com.Spring.Bib.dao.GestionEmprunts.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Bib.dao.GestionEmprunts.Model.Emprunt;

@Repository("EmpruntRepository")
public interface EmpruntRepository extends CrudRepository<Emprunt,Integer> {

}
