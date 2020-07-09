import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@lib/db/models/user.model';
import {Crud} from 'nestjs-mongoose-crud'


@Crud({
    model:User
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor( @InjectModel(User)  private readonly model){}
}
