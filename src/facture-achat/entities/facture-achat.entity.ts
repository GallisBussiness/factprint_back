import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";

export type FactureAchatDocument = FactureAchat & Document;

@Schema({timestamps: true})
export class FactureAchat {
    @Prop({type: String, required: true})
    date:string;

    @Prop({type: Number, required: true})
    total:number;

    @Prop({type: Number, required: true,default: 0})
    avance:number;

    @Prop({type: Number, required: true,default: 0})
    restant:number;

    @Prop({type: Types.ObjectId, ref: Fournisseur.name, required: true, autopopulate: true})
    @Type(() => Fournisseur)
    fournisseur: Fournisseur;
}


export const FactureAchatSchema = SchemaFactory.createForClass(FactureAchat);