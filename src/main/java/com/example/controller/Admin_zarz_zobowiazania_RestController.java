package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Zobowiazania;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.Admin_zarz_zobowiazania_Service;

@RestController
public class Admin_zarz_zobowiazania_RestController {
	
	@Autowired
	private Admin_zarz_zobowiazania_Service admin_zarz_zobowiazaniaService;
	
	@RequestMapping(path="/admin_zarz_zobowiazania/get", method=RequestMethod.GET)
	public Iterable<Zobowiazania> getAllDzialkowicz(){
		return admin_zarz_zobowiazaniaService.getAllAdmin_zarz_zobowiazania();
	}
    @RequestMapping(value = "/admin_zarz_zobowiazania/get/{id}", method = RequestMethod.GET)
	public Zobowiazania getDzialkowiczById(@PathVariable("id") long id){
		return admin_zarz_zobowiazaniaService.getAdmin_zarz_zobowiazaniaById(id);
	}


         
        @RequestMapping(value = "/admin_zarz_zobowiazania/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public Zobowiazania save(@RequestBody Zobowiazania zobowiazania){
 
  
 
     return  admin_zarz_zobowiazaniaService.saveAdmin_zarz_zobowiazania(zobowiazania);
 
}
 @RequestMapping(value = "/admin_zarz_zobowiazania/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Zobowiazania update(@RequestBody Zobowiazania zobowiazania){
   
     return  admin_zarz_zobowiazaniaService.saveAdmin_zarz_zobowiazania(zobowiazania);
 
}
        @RequestMapping(value ="/admin_zarz_zobowiazania/delete", method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void  delete(@RequestParam("id")  String id){
        this.admin_zarz_zobowiazaniaService.deleteAdmin_zarz_zobowiazania(Long.parseLong(id));
    }
}


