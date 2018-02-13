package com.example;

/**
 *
 * @author erdi5
 */
import java.io.File;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import org.testng.annotations.Test;
import static org.testng.Assert.*;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;

public class SeleniumTest {

    static WebDriver driver;

    @BeforeClass
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void RunApp() {
        driver.get("http://localhost:8080/");

        WebElement tutaj = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.id("Tutaj")));
        tutaj.click();
        WebElement FieldUsername = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("username")));
        FieldUsername.sendKeys("filip"); //wpisuje login
        WebElement FieldPassword = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("password")));
        FieldPassword.sendKeys("perszing");//wpisuje haslo   
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement d = wait.until(ExpectedConditions.elementToBeClickable(By.name("Zaloguj")));
        d.submit();
        WebElement zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        zakladka = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("zakladka")));
        zakladka.click();
        WebElement wylog = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(By.name("wylog")));
        wylog.click();

    }

    @AfterClass
    public static void tearDown() {
        //  driver.close();
    }

}
