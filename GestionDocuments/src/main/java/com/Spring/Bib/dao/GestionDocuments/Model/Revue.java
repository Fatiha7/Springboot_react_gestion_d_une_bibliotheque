package com.Spring.Bib.dao.GestionDocuments.Model;


import javax.persistence.Entity;
@Entity
public class Revue extends Documents{
	private String reference;
	private String  AnneePub;
	
	public Revue(String reference, String anneePub) {
		super();
		this.reference = reference;
		AnneePub = anneePub;
	}
	
	public Revue() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	

	public Revue(int iD, String nom, double prix_vente, int disponible) {
		super(iD, nom, prix_vente, disponible);
		// TODO Auto-generated constructor stub
	}

	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public String getAnneePub() {
		return AnneePub;
	}
	public void setAnneePub(String anneePub) {
		AnneePub = anneePub;
	}
	
	
}
