import {Field, InputType} from "type-graphql";
import {Length, IsEmail} from "class-validator";
import {IsEmailAlreadyExist} from "./IsEmailAlreadyExist";
import {PasswordInput} from "../../shared/PasswordInput";

@InputType({ isAbstract: true })
export class RegisterInput extends PasswordInput {

    @Field()
    @Length(1, 255)
    firstName: string;

    @Field()
    @Length(1, 255)
    lastName: string;

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({ message: 'Email already in use' })
    email: string;

}
