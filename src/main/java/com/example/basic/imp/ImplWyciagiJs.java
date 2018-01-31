/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.imp;


import  com.example.basic.model.WyciagiJs;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.HibernateUtil;


import com.example.basic.inter.InterWyciagiJS;


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
            users = session.createQuery("from wyciagi_js").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return users;
    }
    
   
    
    
    public WyciagiJs getById(int nr_wyciagu) {
        WyciagiJs wyciagiJs = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from wyciagi_js where nr_wyciagu= :nr_wyciagu";
            Query query = session.createQuery(queryString);
            query.setInteger("nr_wyciagu", nr_wyciagu);
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
