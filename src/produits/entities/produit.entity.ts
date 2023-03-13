import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Unite } from "src/unite/entities/unite.entity";

export type ProduitDocument = Produit & Document;

@Schema({ timestamps: true })
export class Produit {
    _id: string;

    @Prop({ type: String, required: true })
    nom: string;

    @Prop({ type: Number, required: true })
    pv: number;
    
    @Prop({ type: Number, required: true,default: 0 })
    qteStock: number;

    @Prop({ type: Types.ObjectId, ref: Unite.name, required: true,autopopulate: true })
    @Type(() => Unite)
    unite: Unite;
}


export const ProduitSchema = SchemaFactory.createForClass(Produit);