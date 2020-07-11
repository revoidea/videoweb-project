import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { Course } from '@lib/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';


@Crud({
    model:Course
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model){}
}
