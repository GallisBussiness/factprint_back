import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateVenteDto {
 @IsMongoId()
 produit: string;

 @IsNumber()
 qte: number;
}
