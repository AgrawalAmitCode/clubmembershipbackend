package com.cmm.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
@ImportResource("classpath:Mail-bean.xml")
public class App 
{
    public static void main( String[] args )
    {
    	ConfigurableApplicationContext context=new ClassPathXmlApplicationContext("Mail-bean.xml");
        SpringApplication.run(App.class, args);
    }
}
