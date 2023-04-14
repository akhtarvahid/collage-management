"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_schema_1 = require("./course.schema");
const course_service_1 = require("./course.service");
let CourseResolver = class CourseResolver {
    constructor(courseService) {
        this.courseService = courseService;
    }
    course() {
        return {
            id: 342,
            name: 'Java',
            startDate: new Date(),
            endDate: new Date(),
        };
    }
    createCourse(name, sDate, eDate, courseStatus) {
        return this.courseService.create(name, sDate, eDate, courseStatus);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => course_schema_1.CourseType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "course", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => course_schema_1.CourseType),
    __param(0, (0, graphql_1.Args)('name')),
    __param(1, (0, graphql_1.Args)('startDate')),
    __param(2, (0, graphql_1.Args)('endDate')),
    __param(3, (0, graphql_1.Args)('courseStatus')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "createCourse", null);
CourseResolver = __decorate([
    (0, graphql_1.Resolver)((of) => course_schema_1.CourseType),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=course.resolver.js.map