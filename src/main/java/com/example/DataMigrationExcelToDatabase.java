/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import com.example.basic.imp.ImplDzialki;
import com.example.basic.imp.ImplDzialkowicz;
import com.example.basic.imp.ImplIban;
import com.example.basic.model.Dzialki;
import com.example.basic.model.Dzialkowicz;
import com.example.basic.model.Iban;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Row;



/**
 *
 * @author Filip
 */
public class DataMigrationExcelToDatabase  {

    
    
    public static void readFromExcelAndSaveToDatabase(String file, String sheet) throws IOException {
        
      
        try (HSSFWorkbook myExcelBook = new HSSFWorkbook(new FileInputStream(file))) {
            HSSFSheet myExcelSheet = myExcelBook.getSheet(sheet);
              HSSFRow row;
               Iterator<Row> rowIterator = myExcelSheet.iterator();
            
            
            
            if(myExcelSheet.getSheetName().equals("Działki"))
            {
              
                
                while (rowIterator.hasNext())
                {
             
                    
                    row = (HSSFRow) rowIterator.next();

                     Dzialki dzialki = new Dzialki();

    
            ImplDzialki impdzialki = new ImplDzialki();
                    
                         Dzialkowicz dzialkowicz = new Dzialkowicz();

    
            ImplDzialkowicz impdzialkowicz = new ImplDzialkowicz();
         
                    if (row.getCell(2).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        int nr_czlonkowski = (int) row.getCell(2).getNumericCellValue();
                        dzialkowicz.setNrDzialkowicza(nr_czlonkowski);
                        dzialki.setDzialkowicz(dzialkowicz);
                        System.out.println("nr_czlonkowski :" + nr_czlonkowski);
                        
                    
                       if (row.getCell(3).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String imie =  row.getCell(3).getStringCellValue();
                        dzialkowicz.setImie(imie);
                        System.out.println("imie :" + imie);
                    }
                       if (row.getCell(4).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String nazwisko =  row.getCell(4).getStringCellValue();
                        dzialkowicz.setNazwisko(nazwisko);
                        System.out.println("nazwisko :" + nazwisko);
                    }
                       if (row.getCell(5).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String ulica =  row.getCell(5).getStringCellValue();
                        dzialkowicz.setUlica(ulica);
                        System.out.println("ulica :" + ulica);
                    }
                       if (row.getCell(6).getCellType() == HSSFCell.CELL_TYPE_STRING  ||row.getCell(6).getCellType() == HSSFCell.CELL_TYPE_NUMERIC  ) {
                        String nr_domu =  row.getCell(6).getStringCellValue();
                        dzialkowicz.setNrDomu(nr_domu);
                        System.out.println("nr_domu :" + nr_domu);
                    }
                       if (row.getCell(7).getCellType() == HSSFCell.CELL_TYPE_STRING ||row.getCell(7).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        String nr_lokalu =  row.getCell(7).getStringCellValue();
                        dzialkowicz.setNrLokalu(nr_lokalu);
                        System.out.println("nr_lokalu :" + nr_lokalu);
                    }
                       if (row.getCell(8).getCellType() == HSSFCell.CELL_TYPE_STRING ||row.getCell(8).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        String kod_pocztowy =  row.getCell(8).getStringCellValue();
                        dzialkowicz.setKodPocztowy(kod_pocztowy);
                        System.out.println("kod_pocztowy :" + kod_pocztowy);
                    }
                       if (row.getCell(9).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String miasto =  row.getCell(9).getStringCellValue();
                        dzialkowicz.setMiasto(miasto);
                        System.out.println("miasto :" + miasto);
                    }
                       if (row.getCell(10).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String adres_do_koresp =  row.getCell(10).getStringCellValue();
                        dzialkowicz.setAdresDoKorespondencji(adres_do_koresp);
                        System.out.println("adres_do_koresp :" + adres_do_koresp);
                    }
                       if (row.getCell(11).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        int telefon =  (int) row.getCell(11).getNumericCellValue();
                        dzialkowicz.setTelefon(telefon);
                        System.out.println("telefon :" + telefon);
                    }
                       if (row.getCell(12).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String email =  row.getCell(12).getStringCellValue();
                        dzialkowicz.setEmail(email);
                        System.out.println("email :" + email);
                    }

                             if (row.getCell(0).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        int nr_dzialki = (int) row.getCell(0).getNumericCellValue();
                        dzialki.setNrDzialki(nr_dzialki);
                        System.out.println("nr_dzialki : " + nr_dzialki);
                    }
                    if (row.getCell(1).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        int powierzchnia = (int) row.getCell(1).getNumericCellValue();
                        dzialki.setPowierzchnia(powierzchnia);
                        System.out.println("powierzchnia :" + powierzchnia);
                    }
                       
                     impdzialkowicz.add(dzialkowicz);
                     impdzialki.add(dzialki);
                    }
                }
               
  
   
    
            }
            
               if(myExcelSheet.getSheetName().equals("IBAN"))
            {
              while (rowIterator.hasNext())
                {
             
                    
                    row = (HSSFRow) rowIterator.next();

                     Iban iban = new Iban();

    
            ImplIban impiban = new ImplIban();
                
                  if (row.getCell(0).getCellType() == HSSFCell.CELL_TYPE_NUMERIC) {
                        int nr_dzialki = (int) row.getCell(0).getNumericCellValue();
                        Dzialki dzialki = new Dzialki();
                        dzialki.setNrDzialki(nr_dzialki);
                        iban.setDzialki(dzialki);
                        System.out.println("nr_dzialki :" + nr_dzialki);
                        
                    
                       if (row.getCell(1).getCellType() == HSSFCell.CELL_TYPE_STRING) {
                        String ibann =  row.getCell(1).getStringCellValue();
                        iban.setKodIban(ibann);
                        System.out.println("iban :" + ibann);
                    }
                       if (row.getCell(2).getCellType() == HSSFCell.CELL_TYPE_FORMULA  ) {
                        String nr_konta =  row.getCell(2).getStringCellValue();
                       iban.setNrKonta(nr_konta);
                        System.out.println("nr_konta :" + nr_konta);
                    }
                       
                  impiban.add(iban);
                  }
                } 
            }
            
            
            
            
            
            
             myExcelBook.close();
        
        }
        
    }
    
}