import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProduitDto {
    @IsString()
    nom: string;

    @IsMongoId()
    unite: string;

    @IsNumber()
    pv: number;

    @IsOptional()
    @IsNumber()
    qteStock: number;
}
