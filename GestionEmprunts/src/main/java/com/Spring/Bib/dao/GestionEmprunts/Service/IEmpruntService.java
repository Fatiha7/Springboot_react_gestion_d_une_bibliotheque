package com.Spring.Bib.dao.GestionEmprunts.Service;

import java.util.Collection;

import com.Spring.Bib.dao.GestionEmprunts.Model.Emprunt;
public interface IEmpruntService {

	public Collection<Emprunt> findAll();
	public Emprunt findone(int ID);
	public Emprunt save(Emprunt emprunt);
	public void delete(int ID);
public Emprunt Update(Emprunt emprunt);

}
