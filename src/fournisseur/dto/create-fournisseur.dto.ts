import { IsPhoneNumber, IsString } from "class-validator";

export class CreateFournisseurDto {
    @IsString()
    prenom:string;

    @IsString()
    nom: string;

    @IsPhoneNumber("SN")
    tel:string;
}
