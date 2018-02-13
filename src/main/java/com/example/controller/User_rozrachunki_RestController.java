package com.example.controller;

import com.example.model.Dostep;
import com.example.model.Dzialki;
import com.example.model.WyciagiJs;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dzialkowicz;
import com.example.model.imp.ImplDostep;
import com.example.model.imp.ImplDzialki;
import com.example.model.imp.ImplWyciagiJs;
import com.example.model.imp.ImplDzialkowicz;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.User_Service;
import com.example.service.User_rozrachunki_Service;
import java.util.ArrayList;
import java.util.Objects;
import org.springframework.security.core.Authentication;

@RestController
public class User_rozrachunki_RestController {

    @Autowired
    private User_rozrachunki_Service user_rozrachunki_Service;
    Dzialkowicz dzialkowiczLog = new Dzialkowicz();

    @RequestMapping(path = "/user_rozrachunki/get", method = RequestMethod.GET)
    public Iterable<WyciagiJs> getAllDzialkowicz(HttpServletRequest arg0, HttpServletResponse arg1,
            Authentication authentication) {
        Dostep dostep = new Dostep();
        ImplDostep impdostep = new ImplDostep();
        dostep = impdostep.getByLogin(authentication.getName());
        ImplDzialkowicz impldzialkowicz = new ImplDzialkowicz();
        dzialkowiczLog = impldzialkowicz.getById(dostep.getNrDzialkowicza());
        Dzialki dzialki = new Dzialki();
        ImplDzialki impldzialki = new ImplDzialki();
        dzialki = impldzialki.getByIdDzialkowicz(dzialkowiczLog.getNrDzialkowicza());
        List<WyciagiJs> listaAll = new ArrayList<>();
        ImplWyciagiJs implrozrachunki = new ImplWyciagiJs();
        listaAll = implrozrachunki.getAll();
        List<WyciagiJs> lista = new ArrayList<>();
        for (WyciagiJs item : listaAll) {
            if (Objects.equals(item.getDzialki().getNrDzialki(), dzialki.getNrDzialki())) {
                lista.add(item);
            }
        }
        return user_rozrachunki_Service.getUser_rozrachunkiDzialka(lista);
    }
    
    
   
}
