package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
   
    @RequestMapping(value={"/","home"})
        public String home(){
            return "home";
        }
   
  
    @RequestMapping(value="/admin")
    public String admin(){
        return "admin";
    }
   
     @RequestMapping(value="/admin_zarz_user")
    public String admin_zarz_user(){
        return "admin_zarz_user";
    }
         @RequestMapping(value="/admin_zarz_dzialka")
    public String admin_zarz_dzialka(){
        return "admin_zarz_dzialka";
    }
         @RequestMapping(value="/admin_liczniki")
    public String admin_liczniki(){
        return "admin_liczniki";
    }
         @RequestMapping(value="/admin_upload")
    public String admin_upload(){
        return "admin_upload";
    }
         @RequestMapping(value="/admin_wyciagiJS")
    public String admin_wyciagiJS(){
        return "admin_wyciagiJS";
    }
         @RequestMapping(value="/admin_raport")
    public String admin_raport(){
        return "admin_raport";
    }
        
    
     @RequestMapping(value="/user")
    public String user(){
        return "user";
    }
    
    
      @RequestMapping(value="/user_Rozrachunki")
    public String user_Rozrachunki(){
        return "user_Rozrachunki";
    }
       @RequestMapping(value="/user_Zobowiazania")
    public String user_Zobowiazania(){
        return "user_Zobowiazania";
    }
     
       @RequestMapping(value="/user_bank")
    public String user_bank(){
        return "user_bank";
    }
       @RequestMapping(value="/user_licznik")
    public String user_licznik(){
        return "user_licznik";
    }
    
          @RequestMapping(value="/user_ustawienia")
    public String user_ustawienia(){
        return "user_ustawienia";
    }
  
    @RequestMapping(value={"/login"})
    public String login(){
        return "login";
    }
   

   
    @RequestMapping(value="/403")
    public String Error403(){
        return "403";
    }
}