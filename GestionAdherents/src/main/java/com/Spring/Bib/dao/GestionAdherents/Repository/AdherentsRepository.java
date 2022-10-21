package com.Spring.Bib.dao.GestionAdherents.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Bib.dao.GestionAdherents.Model.Adherents;

@Repository("AdherentsRepository")
public interface AdherentsRepository extends JpaRepository<Adherents, String>{

}
