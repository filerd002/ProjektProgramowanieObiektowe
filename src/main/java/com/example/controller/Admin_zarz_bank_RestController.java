package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Iban;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.Admin_zarz_bank_Service;

@RestController
public class Admin_zarz_bank_RestController {
	
	@Autowired
	private Admin_zarz_bank_Service admin_zarz_bankService;
	
	@RequestMapping(path="/admin_zarz_bank/get", method=RequestMethod.GET)
	public Iterable<Iban> getAllDzialkowicz(){
		return admin_zarz_bankService.getAllAdmin_zarz_bank();
	}
    @RequestMapping(value = "/admin_zarz_bank/get/{id}", method = RequestMethod.GET)
	public Iban getDzialkowiczById(@PathVariable("id") long id){
		return admin_zarz_bankService.getAdmin_zarz_bankById(id);
	}


         
        @RequestMapping(value = "/admin_zarz_bank/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public Iban save(@RequestBody Iban iban){
 
  
 
     return  admin_zarz_bankService.saveAdmin_zarz_bank(iban);
 
}
 @RequestMapping(value = "/admin_zarz_bank/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Iban update(@RequestBody Iban iban){
  
     return  admin_zarz_bankService.saveAdmin_zarz_bank(iban);
 
}
        @RequestMapping(value ="/admin_zarz_bank/delete", method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void  delete(@RequestParam("id")  String id){
        this.admin_zarz_bankService.deleteAdmin_zarz_bank(Long.parseLong(id));
    }
}


