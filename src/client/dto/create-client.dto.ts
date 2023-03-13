import { IsPhoneNumber, IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    prenom:string;

    @IsString()
    nom: string;

    @IsPhoneNumber("SN")
    tel:string;
}
