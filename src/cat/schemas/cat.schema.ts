import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Owner } from 'src/owner/schemas/owner.schema';

export type CatDocument = Cat & Document;
@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 0 })
  age: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;
}
export const CatDocument = SchemaFactory.createForClass(Cat);
