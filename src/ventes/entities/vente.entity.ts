import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import {Document, Types } from "mongoose";
import { Produit } from "src/produits/entities/produit.entity";

export type VenteDocument = Vente & Document;

@Schema({ timestamps: true })
export class Vente {
    @Prop({ type: Number, required: true })
    qte: number;

    @Prop({type: Types.ObjectId, ref: Produit.name, required: true, autopopulate: true})
    @Type(() => Produit)
    produit: Produit;
}


export const VenteSchema = SchemaFactory.createForClass(Vente);