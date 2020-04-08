export class log4jsconf{

    static log(): any{
        var log4js = require("log4js");
        log4js.configure('./log4js.json');
        let log = log4js.getLogger("file");
        return log;
    }
}