package com.Spring.Bib.dao.GestionDocuments.Model;

import javax.persistence.Entity;

@Entity

public class Dictionnaire extends Documents {
	private String langue;

	public Dictionnaire(String langue) {
		super();
		this.langue = langue;
	}
	

	public Dictionnaire() {
		super();
		// TODO Auto-generated constructor stub
	}




	public Dictionnaire(int iD, String nom, double prix_vente, int disponible) {
		super(iD, nom, prix_vente, disponible);
		// TODO Auto-generated constructor stub
	}


	public String getLangue() {
		return langue;
	}

	public void setLangue(String langue) {
		this.langue = langue;
	}

	

}
