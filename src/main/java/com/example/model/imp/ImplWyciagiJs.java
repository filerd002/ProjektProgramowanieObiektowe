/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.imp;


import  com.example.model.WyciagiJs;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.HibernateUtil;


import com.example.model.inter.InterWyciagiJS;


/**
 *
 * @author erdi5
 */
public class ImplWyciagiJs implements InterWyciagiJS {


    @Override
    public void add(WyciagiJs wyciagiJs) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.save(wyciagiJs);
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            if (trns != null) {
                trns.rollback();
            }
            e.printStackTrace();
        } finally {
 
            session.close();
           
        }
    }

    @Override
    public void delete(Long id) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            WyciagiJs wyciagiJs = (WyciagiJs) session.load(WyciagiJs.class, new Long(id));
            session.delete(wyciagiJs);
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            if (trns != null) {
                trns.rollback();
            }
            e.printStackTrace();
        } finally {

            session.close();
        }
    }

           
      
    @Override
    public void update(WyciagiJs wyciagiJs) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.update(wyciagiJs);
            session.getTransaction().commit();
        } catch (RuntimeException e) {
            if (trns != null) {
                trns.rollback();
            }
            e.printStackTrace();
        } finally {
           // session.flush();
            session.close();
        }
    }

    public List<WyciagiJs> getAll() {
        List<WyciagiJs> users = new ArrayList<WyciagiJs>();
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            users = session.createQuery("from WyciagiJs").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return users;
    }
    
   
    
    
    public WyciagiJs getById(Long nr_wyciagu) {
        WyciagiJs wyciagiJs = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from WyciagiJs where nr_wyciagu= :nr_wyciagu";
            Query query = session.createQuery(queryString);
            query.setLong("nr_wyciagu", nr_wyciagu);
            wyciagiJs = (WyciagiJs) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return wyciagiJs;
    }
   
}
