import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Client } from "src/client/entities/client.entity";
import { Vente, VenteSchema } from "src/ventes/entities/vente.entity";

export type FactureDocument = Facture & Document;

@Schema({timestamps: true})
export class Facture {

    @Prop({type: String, required: true})
    date:string;

    @Prop({type: Number, required: true})
    total:number;

    @Prop({type: Number, required: true,default: 0})
    avance:number;

    @Prop({type: Number, required: true,default: 0})
    restant:number;

    @Prop({type: Types.ObjectId, ref: Client.name, required: true, autopopulate: true})
    @Type(() => Client)
    client: Client;

    @Prop({type: [{type: VenteSchema}], required: true})
    @Type(() => Vente)
    ventes: Vente[];

}


export const FactureSchema = SchemaFactory.createForClass(Facture);
