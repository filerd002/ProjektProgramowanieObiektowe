/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

/**
 *
 * @author erdi5
 */
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
private static final SessionFactory sessionFactory;

static {
    try {
        sessionFactory = new Configuration().configure().buildSessionFactory();
    } catch (Throwable ex) {
        System.err.println("Initial session factory creation failed" + ex);
        throw new ExceptionInInitializerError(ex);//HibernateUtil.java:14
    }
}

public static SessionFactory getSessionFactory() {
    return sessionFactory;
    }
}

  
