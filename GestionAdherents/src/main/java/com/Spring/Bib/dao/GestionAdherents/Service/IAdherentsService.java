package com.Spring.Bib.dao.GestionAdherents.Service;

import java.util.Collection;

import com.Spring.Bib.dao.GestionAdherents.Model.Adherents;

public interface IAdherentsService {
	public Collection<Adherents> findAll();
	public Adherents findone(String CIN);
	public void save(Adherents adherents);
	public void delete(String CIN);
	public Adherents Update(Adherents adherent);
}




