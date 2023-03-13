import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateStockDto {
   
    @IsOptional()
    @IsString()
    type: string;

    @IsMongoId()
    produit: string;

    @IsNumber()
    qte: number;
}
