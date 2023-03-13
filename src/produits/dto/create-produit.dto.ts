import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProduitDto {
    @IsString()
    nom: string;

    @IsMongoId()
    unite: string;

    @IsOptional()
    @IsNumber()
    qteStock: number;
}
