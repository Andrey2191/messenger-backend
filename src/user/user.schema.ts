import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({unique: true})
    email: string;

    @Prop({select: false, required: true})
    password: string;

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    country: string;

    @Prop()
    city: string;

    @Prop()
    phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User)