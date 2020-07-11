import { prop } from "@typegoose/typegoose"
import { ApiProperty } from "@nestjs/swagger"

export class Episode {
    @ApiProperty({description:'课时名称'})
    @prop()
    name : string

    @ApiProperty({description:'文件'})
    @prop()
    file : string 
}