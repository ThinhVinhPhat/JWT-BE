import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>;

@Schema({timestamps: true})
export class Menu {
  
  @Prop({type: mongoose.Schema.Types.ObjectId,ref: 'Restaurant'})
  restaurant_id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

}

export const MenuSchema = SchemaFactory.createForClass(Menu);