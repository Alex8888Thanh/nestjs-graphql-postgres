import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEmail(() => String)
  email: string;
}
