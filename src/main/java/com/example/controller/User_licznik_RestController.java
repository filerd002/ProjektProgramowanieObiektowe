package com.example.controller;

import com.example.model.Dostep;
import com.example.model.Dzialki;
import com.example.model.OdczytLicznika;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Dzialkowicz;
import com.example.model.imp.ImplDostep;
import com.example.model.imp.ImplDzialki;
import com.example.model.imp.ImplOdczytLicznika;
import com.example.model.imp.ImplDzialkowicz;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.service.User_Service;
import com.example.service.User_licznik_Service;
import java.util.ArrayList;
import java.util.Objects;
import org.springframework.security.core.Authentication;

@RestController
public class User_licznik_RestController {

    @Autowired
    private User_licznik_Service user_licznik_Service;
    Dzialkowicz dzialkowiczLog = new Dzialkowicz();

    @RequestMapping(path = "/user_licznik/get", method = RequestMethod.GET)
    public Iterable<OdczytLicznika> getAllDzialkowicz(HttpServletRequest arg0, HttpServletResponse arg1,
            Authentication authentication) {
        Dostep dostep = new Dostep();
        ImplDostep impdostep = new ImplDostep();
        dostep = impdostep.getByLogin(authentication.getName());
        ImplDzialkowicz impldzialkowicz = new ImplDzialkowicz();
        dzialkowiczLog = impldzialkowicz.getById(dostep.getNrDzialkowicza());
        Dzialki dzialki = new Dzialki();
        ImplDzialki impldzialki = new ImplDzialki();
        dzialki = impldzialki.getByIdDzialkowicz(dzialkowiczLog.getNrDzialkowicza());
     
        List<OdczytLicznika> listaAll = new ArrayList<>();
        ImplOdczytLicznika implOdczytLicznika = new ImplOdczytLicznika();
        listaAll = implOdczytLicznika.getAll();
        List<OdczytLicznika> lista = new ArrayList<>();
        for (OdczytLicznika item : listaAll) {
            if (Objects.equals(item.getDzialki().getNrDzialki(), dzialki.getNrDzialki())) {
                lista.add(item);
            }
        }
        return user_licznik_Service.getUser_licznikDzialka(lista);
    }
}
