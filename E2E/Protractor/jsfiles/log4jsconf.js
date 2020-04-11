"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class log4jsconf {
    static log() {
        var log4js = require("log4js");
        log4js.configure('./log4js.json');
        let log = log4js.getLogger("file");
        return log;
    }
}
exports.log4jsconf = log4jsconf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xvZzRqc2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLFVBQVU7SUFDbkIsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKO0FBUEQsZ0NBT0MifQ==