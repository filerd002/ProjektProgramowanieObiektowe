package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.OdczytLicznika;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.Admin_zarz_liczniki_Service;

@RestController
public class Admin_zarz_liczniki_RestController {
	
	@Autowired
	private Admin_zarz_liczniki_Service admin_zarz_licznikiService;
	
	@RequestMapping(path="/admin_zarz_liczniki/get", method=RequestMethod.GET)
	public Iterable<OdczytLicznika> getAllDzialkowicz(){
        
            
		return admin_zarz_licznikiService.getAllAdmin_zarz_liczniki();
	}
    @RequestMapping(value = "/admin_zarz_liczniki/get/{id}", method = RequestMethod.GET)
	public OdczytLicznika getDzialkowiczById(@PathVariable("id") long id){
		return admin_zarz_licznikiService.getAdmin_zarz_licznikiById(id);
	}


         
        @RequestMapping(value = "/admin_zarz_liczniki/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public OdczytLicznika save(@RequestBody OdczytLicznika liczniki){
 
  
 
     return  admin_zarz_licznikiService.saveAdmin_zarz_liczniki(liczniki);
 
}
 @RequestMapping(value = "/admin_zarz_liczniki/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public OdczytLicznika update(@RequestBody OdczytLicznika liczniki){

     return  admin_zarz_licznikiService.saveAdmin_zarz_liczniki(liczniki);
    

}
        @RequestMapping(value ="/admin_zarz_liczniki/delete", method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void  delete(@RequestParam("id")  String id){
        this.admin_zarz_licznikiService.deleteAdmin_zarz_liczniki(Long.parseLong(id));
    }
}


