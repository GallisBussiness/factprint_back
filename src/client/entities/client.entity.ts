import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClientDocument = Client & Document;

@Schema({ timestamps: true })
export class Client {
    @Prop({ type: String, required: true })
    prenom: string;
  
    @Prop({ type: String, required: true })
    nom: string;
    
    @Prop({ type: String, required: true })
    tel: string;
}


export const ClientSchema = SchemaFactory.createForClass(Client);