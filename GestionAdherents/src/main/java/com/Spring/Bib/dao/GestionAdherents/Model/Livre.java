package com.Spring.Bib.dao.GestionAdherents.Model;

import javax.persistence.Entity;
@Entity
public class Livre extends Documents{
		private String auteur;
		private int Numpage;
		
		public Livre() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		
		public Livre(int iD, String nom, double prix_vente, int disponible) {
			super(iD, nom, prix_vente, disponible);
			// TODO Auto-generated constructor stub
		}


		public Livre(String auteur, int numpage) {
			super();
			this.auteur = auteur;
			Numpage = numpage;
		}
		public String getAuteur() {
			return auteur;
		}
		public void setAuteur(String auteur) {
			this.auteur = auteur;
		}
		public int getNumpage() {
			return Numpage;
		}
		public void setNumpage(int numpage) {
			Numpage = numpage;
		}
		
}
