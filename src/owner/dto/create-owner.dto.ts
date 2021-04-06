import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOwnerDTO {
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  readonly firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  readonly lastname: string;
}
