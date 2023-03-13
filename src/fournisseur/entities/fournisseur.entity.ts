import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type FournisseurDocument = Fournisseur & Document;

@Schema({timestamps: true})
export class Fournisseur {
    @Prop({ type: String, required: true })
    prenom: string;
  
    @Prop({ type: String, required: true })
    nom: string;
    
    @Prop({ type: String, required: true, unique: true })
    tel: string;
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);