package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.WyciagiJs;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.Admin_zarz_wyciagiJS_Service;

@RestController
public class Admin_zarz_wyciagiJS_RestController {
	
	@Autowired
	private Admin_zarz_wyciagiJS_Service admin_zarz_wyciagiJSService;
	
	@RequestMapping(path="/admin_zarz_wyciagiJS/get", method=RequestMethod.GET)
	public Iterable<WyciagiJs> getAllDzialkowicz(){
		return admin_zarz_wyciagiJSService.getAllAdmin_zarz_wyciagiJS();
	}
    @RequestMapping(value = "/admin_zarz_wyciagiJS/get/{id}", method = RequestMethod.GET)
	public WyciagiJs getDzialkowiczById(@PathVariable("id") long id){
		return admin_zarz_wyciagiJSService.getAdmin_zarz_wyciagiJSById(id);
	}


         
        @RequestMapping(value = "/admin_zarz_wyciagiJS/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public WyciagiJs save(@RequestBody WyciagiJs wyciagiJS){
 
  
 
     return  admin_zarz_wyciagiJSService.saveAdmin_zarz_wyciagiJS(wyciagiJS);
 
}
 @RequestMapping(value = "/admin_zarz_wyciagiJS/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public WyciagiJs update(@RequestBody WyciagiJs wyciagiJS){
  
     return  admin_zarz_wyciagiJSService.saveAdmin_zarz_wyciagiJS(wyciagiJS);
 
}
        @RequestMapping(value ="/admin_zarz_wyciagiJS/delete", method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void  delete(@RequestParam("id")  String id){
        this.admin_zarz_wyciagiJSService.deleteAdmin_zarz_wyciagiJS(Long.parseLong(id));
    }
}


