import { IsMongoId, IsNumber } from "class-validator";

export class CreateAchatDto {
    @IsMongoId()
    produit: string;
   
    @IsNumber()
    qte: number;

    @IsNumber()
    pu: number;
}
