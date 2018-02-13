package com.example.controller;

import com.example.model.Dostep;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dzialkowicz;
import com.example.model.imp.ImplDostep;
import com.example.model.imp.ImplDzialkowicz;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.User_Service;
import org.springframework.security.core.Authentication;

@RestController
public class User_RestController {
	
	@Autowired
	private User_Service user_bankService;
        
	Dzialkowicz dzialkowiczLog = new Dzialkowicz();

    @RequestMapping(path = "/user/get", method = RequestMethod.GET)
	public Dzialkowicz getDzialkowiczById(HttpServletRequest arg0, HttpServletResponse arg1,
			Authentication authentication){    
        Dostep dostep = new Dostep();
         ImplDostep impdostep = new ImplDostep();
        dostep= impdostep.getByLogin(authentication.getName());
        ImplDzialkowicz impldzialkowicz = new ImplDzialkowicz();
        dzialkowiczLog =impldzialkowicz.getById(dostep.getNrDzialkowicza());
		return user_bankService.getUserById(dzialkowiczLog.getNrDzialkowicza());
	}

}


