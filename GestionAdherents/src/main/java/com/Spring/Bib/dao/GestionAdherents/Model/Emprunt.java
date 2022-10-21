package com.Spring.Bib.dao.GestionAdherents.Model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="emprunt")
public class Emprunt {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id_emprunt;
	@Column(name="EID")
	private String EID;
	@Column(name="dateEmp")
	private String dateEmp;
	
	@Column(name="dateRet ")
	private String dateRet;
    
	@JoinColumn(name = "cin", referencedColumnName = "cin")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
	@OneToOne(fetch = FetchType.LAZY)
	private Adherents adherent;
	@Column(name="document_type")
	private String document_type;
	@Column(name="id_document")
	private int id_document;
	
	
	public String getDocument_type() {
		return document_type;
	}
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	public Emprunt(int id_emprunt, String eID, String dateEmp, String dateRet, Adherents adherent, String document_type,
			int id_document) {
		super();
		this.id_emprunt = id_emprunt;
		EID = eID;
		this.dateEmp = dateEmp;
		this.dateRet = dateRet;
		this.adherent = adherent;
		this.document_type = document_type;
		this.id_document = id_document;
	}
	public String getEID() {
		return EID;
	}
	public void setEID(String eID) {
		EID = eID;
	}
	public Emprunt() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId_emprunt() {
		return id_emprunt;
	}
	public void setId_emprunt(int id_emprunt) {
		this.id_emprunt = id_emprunt;
	}
	public String getDateEmp() {
		return dateEmp;
	}
	public void setDateEmp(String dateEmp) {
		this.dateEmp = dateEmp;
	}
	public String getDateRet() {
		return dateRet;
	}
	public void setDateRet(String dateRet) {
		this.dateRet = dateRet;
	}
	public Adherents getAdherent() {
		return adherent;
	}
	public void setAdherent(Adherents adherent) {
		this.adherent = adherent;
	}
	public int getId_document() {
		return id_document;
	}
	public void setId_document(int id_document) {
		this.id_document = id_document;
	}
	
	
	}
