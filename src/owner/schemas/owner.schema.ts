import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type OwnerDoucment = Owner & Document;

@Schema()
export class Owner {
  @Prop({ required: true })
  firstname: string;
  @Prop()
  lastname: string;

  @Prop({ type: [String] })
  refreshTokens: string[];
}
export const OwnerSchema = SchemaFactory.createForClass(Owner);
