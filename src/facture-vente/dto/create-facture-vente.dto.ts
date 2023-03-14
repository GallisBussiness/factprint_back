import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateFactureVenteDto {

    @IsString()
    date:string;

    @IsNumber()
    total:number;

    @IsNumber()
    avance:number;

    @IsNumber()
    restant:number;

    @IsMongoId()
    client: string;


}
