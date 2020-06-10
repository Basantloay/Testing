"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class log4jsconf {
    static log() {
        var log4js = require('log4js');
        log4js.configure('./log4js.json');
        const log = log4js.getLogger('file');
        return log4js;
    }
}
exports.log4jsconf = log4jsconf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xvZzRqc2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLFVBQVU7SUFDckIsTUFBTSxDQUFDLEdBQUc7UUFDUixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNqQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BDLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztDQUNGO0FBUEQsZ0NBT0MifQ==