import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {
 constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

 async createUser(dto: CreateUserDto){
     const user = await this.userModel.create(dto)
     const salt = await bcrypt.genSalt()
     user.password = await bcrypt.hash(dto.password, salt)
     return user
 }

 async getAllUsers(){
     const users = await this.userModel.find().exec();
     return users
 }

 getUserByEmail(email: string){
     console.log(email)

     return this.userModel.findOne({email}).select('+password')
 }
}