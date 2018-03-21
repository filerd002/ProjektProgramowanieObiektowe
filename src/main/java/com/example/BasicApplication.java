package com.example;

import static com.example.DataMigrationExcelToDatabase.ChooserFile;
import static com.example.DataMigrationExcelToDatabase.readFromExcelAndSaveToDatabase;
import java.io.FileInputStream;
import java.io.IOException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BasicApplication {

	public static void main(String[] args) throws IOException, Exception {
            
           SpringApplication.run(BasicApplication.class, args);
        }    
}