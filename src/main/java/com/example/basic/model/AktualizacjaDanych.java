package com.example.basic.model;
// Generated 2018-01-31 18:43:59 by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * AktualizacjaDanych generated by hbm2java
 */
@Entity
@Table(name="aktualizacja_danych"
    ,schema="public"
)
public class AktualizacjaDanych  implements java.io.Serializable {


     private int idAktualData;
     private Dzialki dzialki;
     private int nrAktualizacji;
     private String dataAktualizacji;
     private String sposobPrzekazaniaDanychDoAktualizacji;
     private String zaktualizowaneDane;

    public AktualizacjaDanych() {
    }

	
    public AktualizacjaDanych(int idAktualData, Dzialki dzialki, int nrAktualizacji) {
        this.idAktualData = idAktualData;
        this.dzialki = dzialki;
        this.nrAktualizacji = nrAktualizacji;
    }
    public AktualizacjaDanych(int idAktualData, Dzialki dzialki, int nrAktualizacji, String dataAktualizacji, String sposobPrzekazaniaDanychDoAktualizacji, String zaktualizowaneDane) {
       this.idAktualData = idAktualData;
       this.dzialki = dzialki;
       this.nrAktualizacji = nrAktualizacji;
       this.dataAktualizacji = dataAktualizacji;
       this.sposobPrzekazaniaDanychDoAktualizacji = sposobPrzekazaniaDanychDoAktualizacji;
       this.zaktualizowaneDane = zaktualizowaneDane;
    }
   
     @Id 

    
    @Column(name="id_aktual_data", unique=true, nullable=false)
    public int getIdAktualData() {
        return this.idAktualData;
    }
    
    public void setIdAktualData(int idAktualData) {
        this.idAktualData = idAktualData;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="nr_dzialki", nullable=false)
    public Dzialki getDzialki() {
        return this.dzialki;
    }
    
    public void setDzialki(Dzialki dzialki) {
        this.dzialki = dzialki;
    }

    
    @Column(name="nr_aktualizacji", nullable=false)
    public int getNrAktualizacji() {
        return this.nrAktualizacji;
    }
    
    public void setNrAktualizacji(int nrAktualizacji) {
        this.nrAktualizacji = nrAktualizacji;
    }

    
    @Column(name="data_aktualizacji")
    public String getDataAktualizacji() {
        return this.dataAktualizacji;
    }
    
    public void setDataAktualizacji(String dataAktualizacji) {
        this.dataAktualizacji = dataAktualizacji;
    }

    
    @Column(name="sposob przekazania danych do aktualizacji")
    public String getSposobPrzekazaniaDanychDoAktualizacji() {
        return this.sposobPrzekazaniaDanychDoAktualizacji;
    }
    
    public void setSposobPrzekazaniaDanychDoAktualizacji(String sposobPrzekazaniaDanychDoAktualizacji) {
        this.sposobPrzekazaniaDanychDoAktualizacji = sposobPrzekazaniaDanychDoAktualizacji;
    }

    
    @Column(name="zaktualizowane dane")
    public String getZaktualizowaneDane() {
        return this.zaktualizowaneDane;
    }
    
    public void setZaktualizowaneDane(String zaktualizowaneDane) {
        this.zaktualizowaneDane = zaktualizowaneDane;
    }




}


