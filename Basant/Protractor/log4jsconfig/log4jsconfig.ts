/////////////****************************************\\\\\\\\\\\\\\
//This is code is implemented by Sunil Patro 
//derived from"https://github.com/sunilpatro1985/Protractor-typescript/tree/master/config"
/////////////****************************************\\\\\\\\\\\\\\


export class log4jsconfig{

    static Log(): any {
        var log4js = require('log4js');
        log4js.configure('./log4jsconfig/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        //let log = log4js.getLogger("default");
        let log = log4js.getLogger();
        return log;
    }
}