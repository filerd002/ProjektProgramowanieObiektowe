/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.imp;


import  com.example.basic.model.Dostep;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.HibernateUtil;



import com.example.basic.inter.InterDostep;

/**
 *
 * @author erdi5
 */
public class ImplDostep implements InterDostep {


    @Override
    public void add(Dostep dostep) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.save(dostep);
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
            Dostep dostep = (Dostep) session.load(Dostep.class, new Long(id));
            session.delete(dostep);
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
    public void update(Dostep dostep) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.update(dostep);
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

    public List<Dostep> getAll() {
        List<Dostep> users = new ArrayList<Dostep>();
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            users = session.createQuery("from dostep").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return users;
    }
    
   
    
    
    public Dostep getById(int nr_dzialkowicza) {
        Dostep dostep = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from dostep where nr_dzialkowicza= :nr_dzialkowicza";
            Query query = session.createQuery(queryString);
            query.setInteger("nr_dzialkowicza", nr_dzialkowicza);
            dostep = (Dostep) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return dostep;
    }
   
}
