import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IAttendance } from 'src/interfaces/attendance.interface';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance implements IAttendance{
    
    @ApiProperty()
    @Prop({required:true})
    firstName: string;

    @ApiProperty()
    @Prop({required:true})
    lastName: string;

    @ApiProperty()
    @Prop({required:true})
    date: string;
    
    @ApiProperty()
    @Prop({required:true})
    eventName: string;

    @ApiProperty()
    @Prop({required:true})
    amount: string;
}
export const AttendanceSchema = SchemaFactory.createForClass(Attendance);