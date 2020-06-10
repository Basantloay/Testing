package appiumtests;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;

public class test {

	static AppiumDriver<MobileElement> driver;
	
	public static void main(String[] args) {
		try {
			LogInTest();
		} catch (Exception exp) {
			System.out.println(exp.getCause());
			System.out.println(exp.getMessage());
			exp.printStackTrace();
		}
		
		try {
			SignUpTest();
		} catch (Exception exp) {
			System.out.println(exp.getCause());
			System.out.println(exp.getMessage());
			exp.printStackTrace();
		}
	 }
	
	
	public static void LogInTest() throws Exception {
		
		DesiredCapabilities cap = new DesiredCapabilities();
		
		cap.setCapability("deviceName","Android SDK built for x86" );
		cap.setCapability("udid","emulator-5554" );
		cap.setCapability("platformName","Android" );
		cap.setCapability("platformVersion","8.1.0" );
		
		cap.setCapability("appPackage","com.example.spotifyclone" );
		cap.setCapability("appActivity","com.example.spotifyclone.firstPage");

		URL url = new URL("http://127.0.0.1:4723/wd/hub");
		
		driver = new AppiumDriver<MobileElement>(url, cap);
		
		System.out.println("Started Test #1 - Valid Log In");
				
		MobileElement logInBtn1 = driver.findElement(By.id("com.example.spotifyclone:id/bLogin1"));
		logInBtn1.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		MobileElement emailOrUsernameInput = driver.findElement(By.id("com.example.spotifyclone:id/etUsername"));		
		MobileElement passwordInput = driver.findElement(By.id("com.example.spotifyclone:id/etPassword"));		
		MobileElement logInBtn2 = driver.findElement(By.id("com.example.spotifyclone:id/bLogin"));
		emailOrUsernameInput.sendKeys("login@test.com");
		passwordInput.sendKeys("123456789");
		logInBtn2.click();
		
		MobileElement homeItemBtn = driver.findElement(By.id("com.example.spotifyclone:id/home_item"));
		Boolean iselementpresent = homeItemBtn.isDisplayed();
		Assert.assertTrue(iselementpresent);
		homeItemBtn.click();

		System.out.println("TEST #1 DONE...");
		
	}
	
	public static void SignUpTest() throws Exception {
		
		DesiredCapabilities cap = new DesiredCapabilities();
		
		cap.setCapability("deviceName","Android SDK built for x86" );
		cap.setCapability("udid","emulator-5554" );
		cap.setCapability("platformName","Android" );
		cap.setCapability("platformVersion","8.1.0" );
		
		cap.setCapability("appPackage","com.example.spotifyclone" );
		cap.setCapability("appActivity","com.example.spotifyclone.firstPage");

		URL url = new URL("http://127.0.0.1:4723/wd/hub");
		
		driver = new AppiumDriver<MobileElement>(url, cap);
		
		System.out.println("Started Test #2 - Valid Sign Up");
				
		MobileElement signUpFreeBtn = driver.findElement(By.id("com.example.spotifyclone:id/bSignup"));
		signUpFreeBtn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		
		MobileElement newEmailInput = driver.findElement(By.id("com.example.spotifyclone:id/etNewEmail"));		
		newEmailInput.sendKeys("signup@test.com");
		MobileElement next1Btn = driver.findElement(By.id("com.example.spotifyclone:id/bNext"));		
		next1Btn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		
		MobileElement newPasswordInput = driver.findElement(By.id("com.example.spotifyclone:id/etNewPass"));		
		newPasswordInput.sendKeys("123456789");
		MobileElement next2Btn = driver.findElement(By.id("com.example.spotifyclone:id/bNext2"));		
		next2Btn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		
		driver.findElement(By.xpath("//*[@text='2019']")).click();
		driver.findElement(By.xpath("//*[@text='2018']")).click();
		driver.findElement(By.xpath("//*[@text='2017']")).click();
		driver.findElement(By.xpath("//*[@text='2016']")).click();
		driver.findElement(By.xpath("//*[@text='2015']")).click();
		driver.findElement(By.xpath("//*[@text='2014']")).click();
		driver.findElement(By.xpath("//*[@text='2013']")).click();
		driver.findElement(By.xpath("//*[@text='2012']")).click();
		driver.findElement(By.xpath("//*[@text='2011']")).click();
		driver.findElement(By.xpath("//*[@text='2010']")).click();
		driver.findElement(By.xpath("//*[@text='2009']")).click();
		driver.findElement(By.xpath("//*[@text='2008']")).click();
		driver.findElement(By.xpath("//*[@text='2007']")).click();
		driver.findElement(By.xpath("//*[@text='2006']")).click();
		driver.findElement(By.xpath("//*[@text='2005']")).click();
		driver.findElement(By.xpath("//*[@text='2004']")).click();
		driver.findElement(By.xpath("//*[@text='2003']")).click();
		driver.findElement(By.xpath("//*[@text='2002']")).click();
		driver.findElement(By.xpath("//*[@text='2001']")).click();
		driver.findElement(By.xpath("//*[@text='2000']")).click();
		driver.findElement(By.xpath("//*[@text='1999']")).click();
		driver.findElement(By.xpath("//*[@text='1998']")).click();
		MobileElement next3Btn = driver.findElement(By.id("com.example.spotifyclone:id/bNext3"));
		next3Btn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);

		MobileElement genderFemalBtn = driver.findElement(By.id("com.example.spotifyclone:id/bFemale"));		
		genderFemalBtn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		
		MobileElement NameInput = driver.findElement(By.id("com.example.spotifyclone:id/etName"));		
		NameInput.sendKeys("testingsignup");
		MobileElement createBtn = driver.findElement(By.id("com.example.spotifyclone:id/bCreate"));		
		createBtn.click();
		driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);
		
		MobileElement homeItemBtn = driver.findElement(By.id("com.example.spotifyclone:id/home_item"));
		Boolean iselementpresent = homeItemBtn.isDisplayed();
		Assert.assertTrue(iselementpresent);
		homeItemBtn.click();
		
		System.out.println("Test #2 DONE...");
		
	}

}


