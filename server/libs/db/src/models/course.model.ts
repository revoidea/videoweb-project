import { prop } from "@typegoose/typegoose"
import { ApiProperty } from "@nestjs/swagger"

export class Course {
    @ApiProperty({description:'课程名称'})
    @prop()
    name : string

    @ApiProperty({description:'封面图'})
    @prop()
    cover:string

    
}