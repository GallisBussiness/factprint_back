import { IsMongoId, IsNumber, IsString } from "class-validator";


export class CreateFactureAchatDto {
    @IsString()
    date:string;

    @IsNumber()
    total:number;

    @IsNumber()
    avance:number;

    @IsNumber()
    restant:number;

    @IsMongoId()
    fournisseur: string;
}
