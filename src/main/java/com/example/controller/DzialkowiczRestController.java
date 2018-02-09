package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dzialkowicz;
import com.example.service.DzialkowiczService;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class DzialkowiczRestController {
	
	@Autowired
	private DzialkowiczService dzialkowiczService;
	
	@RequestMapping(path="/Dzialkowicz", method=RequestMethod.GET)
	public Iterable<Dzialkowicz> getAllDzialkowicz(){
		return dzialkowiczService.getAllDzialkowicz();
	}
    @RequestMapping(value = "/Dzialkowicz/{id}", method = RequestMethod.GET)
	public Dzialkowicz getDzialkowiczById(@PathVariable("id") long id){
		return dzialkowiczService.getDzialkowiczById(id);
	}


         
        @RequestMapping(value = "/Dzialkowicz/add", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public Dzialkowicz save(@RequestBody Dzialkowicz dzialkowicz){
 
  
 
     return  dzialkowiczService.saveDzialkowicz(dzialkowicz);
 
}
 @RequestMapping(value = "/Dzialkowicz/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Dzialkowicz update(@RequestBody Dzialkowicz dzialkowicz){
          
 
     return  dzialkowiczService.saveDzialkowicz(dzialkowicz);
 
}
        @RequestMapping(value ="/Dzialkowicz/delete", method=RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void  delete(@RequestParam("id")  String id){
        this.dzialkowiczService.deleteDzialkowicz(Long.parseLong(id));
    }
}


