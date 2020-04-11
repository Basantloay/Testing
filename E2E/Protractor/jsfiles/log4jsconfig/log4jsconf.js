"use strict";
/// //////////****************************************\\\\\\\\\\\\\\
// This is code is implemented by Sunil Patro
// derived from"https://github.com/sunilpatro1985/Protractor-typescript/tree/master/config"
/// //////////****************************************\\\\\\\\\\\\\\
Object.defineProperty(exports, "__esModule", { value: true });
class log4jsconf {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./log4jsconfig/log4js.json');
        // var logger = log4js.getLogger(); //for both console and file
        // let log = log4js.getLogger("default");
        const log = log4js.getLogger();
        return log;
    }
}
exports.log4jsconf = log4jsconf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xvZzRqc2NvbmZpZy9sb2c0anNjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBb0U7QUFDcEUsNkNBQTZDO0FBQzdDLDJGQUEyRjtBQUMzRixvRUFBb0U7O0FBRXBFLE1BQWEsVUFBVTtJQUNyQixNQUFNLENBQUMsR0FBRztRQUNSLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QixNQUFNLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUE7UUFDOUMsK0RBQStEO1FBQy9ELHlDQUF5QztRQUN6QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDOUIsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0Y7QUFURCxnQ0FTQyJ9