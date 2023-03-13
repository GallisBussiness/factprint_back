import { IsArray, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { Vente } from "src/ventes/entities/vente.entity";

export class CreateFactureDto {
 @IsString()
 date: string;

 @IsMongoId()
 client: string;

 @IsArray()
 ventes: Vente[];

 @IsNumber()
 total: number;

 @IsOptional()
 @IsNumber()
 avance: number;

 @IsOptional()
 @IsNumber()
 restant: number;
}
