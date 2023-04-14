import { CourseEntity } from './course.entity';
import { Repository } from 'typeorm';
export declare class CourseService {
    private courseRepository;
    constructor(courseRepository: Repository<CourseEntity>);
    create(name: any, startDate: any, endDate: any, courseStatus: any): Promise<CourseEntity>;
}
