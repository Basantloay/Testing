import { by, browser, element } from 'protractor'
//import {log4jsconfig} from '..config/log4jsconfig'

export class pageLogin{

    emailInput = element(by.xpath("//input[@name='email']"));
    passwordInput = element(by.xpath("//input[@name='password']"));
    loginBtn =  element(by.xpath("//button[@type='submit']"));

    redErrormsg = element(by.xpath("//p[@class='col-12 mb-0 text-white']"));
    errorEmail = element(by.xpath("//span[@class='ng-star-inserted']"));
    errorPassword = element(by.xpath("//span[@class='ng-star-inserted']"));
    
}

