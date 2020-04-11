"use strict";
/////////////****************************************\\\\\\\\\\\\\\
//This is code is implemented by Sunil Patro 
//derived from"https://github.com/sunilpatro1985/Protractor-typescript/tree/master/config"
/////////////****************************************\\\\\\\\\\\\\\
Object.defineProperty(exports, "__esModule", { value: true });
class log4jsconfig {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./log4jsconfig/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        //let log = log4js.getLogger("default");
        let log = log4js.getLogger();
        return log;
    }
}
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbG9nNGpzY29uZmlnL2xvZzRqc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUVBQW1FO0FBQ25FLDZDQUE2QztBQUM3QywwRkFBMEY7QUFDMUYsbUVBQW1FOztBQUduRSxNQUFhLFlBQVk7SUFFckIsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQy9DLDhEQUE4RDtRQUM5RCx3Q0FBd0M7UUFDeEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBVkQsb0NBVUMifQ==