import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsEmail(() => String)
  email: string;
}
