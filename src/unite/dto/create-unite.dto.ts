import { IsString } from "class-validator";

export class CreateUniteDto {
    @IsString()
    nom: string;
}
