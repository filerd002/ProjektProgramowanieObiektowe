package com.example.controller;

import com.example.model.Dostep;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dzialkowicz;
import com.example.model.OdczytLicznika;
import com.example.model.imp.ImplDostep;
import com.example.model.imp.ImplDzialkowicz;
import com.example.model.imp.ImplOdczytLicznika;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.User_konto_Service;
import java.util.ArrayList;
import java.util.Objects;
import org.springframework.security.core.Authentication;

@RestController
public class User_konto_RestController {
	
	@Autowired
	private User_konto_Service user_konto_Service;
        
	Dzialkowicz dzialkowiczLog = new Dzialkowicz();

    @RequestMapping(path = "/user_konto/get", method = RequestMethod.GET)
	public Iterable<Dostep> getDzialkowiczById(HttpServletRequest arg0, HttpServletResponse arg1,
			Authentication authentication){    
        Dostep dostep = new Dostep();
         ImplDostep impdostep = new ImplDostep();
        dostep= impdostep.getByLogin(authentication.getName());
   ImplDzialkowicz impldzialkowicz = new ImplDzialkowicz();
        dzialkowiczLog = impldzialkowicz.getById(dostep.getNrDzialkowicza());
        List<Dostep> listaAll = new ArrayList<>();
        ImplDostep implDostep = new ImplDostep();
        listaAll = implDostep.getAll();
        List<Dostep> lista = new ArrayList<>();
        for (Dostep item : listaAll) {
            if (Objects.equals(item.getNrDzialkowicza(), dzialkowiczLog.getNrDzialkowicza())) {
                lista.add(item);
            }
        }
        
        
		return user_konto_Service.getUser_kontoDzialkowicz(lista);
	}

        
        @RequestMapping(value = "/user_konto/update",method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Dostep update(@RequestBody Dostep dostep, HttpServletRequest arg0, HttpServletResponse arg1,
			Authentication authentication){
         Dostep dostepLog = new Dostep();
         ImplDostep impdostep = new ImplDostep();
        dostepLog= impdostep.getByLogin(authentication.getName());
        dostep.setNrDzialkowicza(dostepLog.getNrDzialkowicza());
     return  user_konto_Service.saveUser_konto(dostep);
 
}
}


