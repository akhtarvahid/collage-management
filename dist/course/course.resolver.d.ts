import { CourseService } from './course.service';
export declare class CourseResolver {
    private courseService;
    constructor(courseService: CourseService);
    course(): {
        id: number;
        name: string;
        startDate: Date;
        endDate: Date;
    };
    createCourse(name: string, sDate: string, eDate: string, courseStatus: string): Promise<import("./course.entity").CourseEntity>;
}
