import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/roles/role.enum';

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

    @Prop({ required: true })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User)