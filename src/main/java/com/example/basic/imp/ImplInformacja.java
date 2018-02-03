/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.imp;


import  com.example.basic.model.Informacja;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.HibernateUtil;


import com.example.basic.inter.InterInformacja;

/**
 *
 * @author erdi5
 */
public class ImplInformacja implements InterInformacja {


    @Override
    public void add(Informacja informacja) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.save(informacja);
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
            Informacja informacja = (Informacja) session.load(Informacja.class, new Long(id));
            session.delete(informacja);
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
    public void update(Informacja informacja) {
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            session.update(informacja);
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

    public List<Informacja> getAll() {
        List<Informacja> users = new ArrayList<Informacja>();
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            users = session.createQuery("from informacja").list();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return users;
    }
    
   
    
    
    public Informacja getById(int id_informacja) {
        Informacja informacja = null;
        Transaction trns = null;
        Session session = HibernateUtil.getSessionFactory().openSession();
        try {
            trns = session.beginTransaction();
            String queryString = "from informacja where id_informacja= :id_informacja";
            Query query = session.createQuery(queryString);
            query.setInteger("id_informacja", id_informacja);
            informacja = (Informacja) query.uniqueResult();
        } catch (RuntimeException e) {
            e.printStackTrace();
        } finally {
            session.flush();
            session.close();
        }
        return informacja;
    }
   
}
