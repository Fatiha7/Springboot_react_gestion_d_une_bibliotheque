package com.Spring.Bib.dao.GestionAdherents.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class Adherents {
	@Id
	private String CIN;
	@Column(name="id_adherent")
	private int id_adherent;
	@Column(name="nom")
	private String nom;
	@Column(name="prenom")
	private String prenom;
	@Column(name="adresse")
	private String adresse;
	@Column(name=" datenaissance")
	private String datenaissance;
	public Adherents(int id_adherent, String nom, String prenom, String adresse, String cIN, String datenaissance) {
		super();
		this.id_adherent = id_adherent;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		CIN = cIN;
		this.datenaissance = datenaissance;
	}
	public Adherents() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId_adherent() {
		return id_adherent;
	}
	public void setId_adherent(int id_adherent) {
		this.id_adherent = id_adherent;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getCIN() {
		return CIN;
	}
	public void setCIN(String cIN) {
		CIN = cIN;
	}
	public String getDatenaissance() {
		return datenaissance;
	}
	public void setDatenaissance(String datenaissance) {
		this.datenaissance = datenaissance;
	}
		

}
