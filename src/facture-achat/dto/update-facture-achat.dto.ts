import { PartialType } from '@nestjs/mapped-types';
import { CreateFactureAchatDto } from './create-facture-achat.dto';

export class UpdateFactureAchatDto extends PartialType(CreateFactureAchatDto) {}
