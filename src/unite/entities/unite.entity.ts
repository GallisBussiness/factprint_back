import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UniteDocument = Unite & Document;

@Schema({timestamps: true})
export class Unite {
    @Prop({ type: String, required: true, unique: true })
    nom: string;
}

export const UniteSchema = SchemaFactory.createForClass(Unite);