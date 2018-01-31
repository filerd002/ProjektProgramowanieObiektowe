/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.imp;


import  com.example.basic.model.Dzialki;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.HibernateUtil;


import com.example.basic.inter.InterDzialki;

/**
 *
 * @author erdi5
 */
public class ImplDzialki implements InterDzialki {


    @Override
    public void add(Dzialki dzialki) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.save(dzialki);
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
            Dzialki dzialki = (Dzialki) session.load(Dzialki.class, new Long(id));
            session.delete(dzialki);
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
    public void update(Dzialki dzialki) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.update(dzialki);
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

    public List<Dzialki> getAll() {
        List<Dzialki> users = new ArrayList<Dzialki>();
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            users = session.createQuery("from dzialki").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return users;
    }
    
   
    
    
    public Dzialki getById(int nr_dzialki) {
        Dzialki dzialki = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from dzialki where nr_dzialki= :nr_dzialki";
            Query query = session.createQuery(queryString);
            query.setInteger("nr_dzialki", nr_dzialki);
            dzialki = (Dzialki) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return dzialki;
    }
   
}
