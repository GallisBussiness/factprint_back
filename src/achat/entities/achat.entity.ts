import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Produit } from "src/produits/entities/produit.entity";

export type AchatDocument = Achat & Document;

@Schema({timestamps: true})
export class Achat {
    @Prop({ type: Number, required: true })
    qte: number;

    @Prop({ type: Number, required: true })
    pu: number;

    @Prop({type: Types.ObjectId, ref: Produit.name, required: true, autopopulate: true})
    @Type(() => Produit)
    produit: Produit;
}

export const AchatSchema = SchemaFactory.createForClass(Achat);