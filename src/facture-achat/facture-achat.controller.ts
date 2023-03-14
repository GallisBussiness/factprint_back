import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactureAchatService } from './facture-achat.service';
import { CreateFactureAchatDto } from './dto/create-facture-achat.dto';
import { UpdateFactureAchatDto } from './dto/update-facture-achat.dto';

@Controller('facture-achat')
export class FactureAchatController {
  constructor(private readonly factureAchatService: FactureAchatService) {}

  @Post()
  create(@Body() createFactureAchatDto: CreateFactureAchatDto) {
    return this.factureAchatService.create(createFactureAchatDto);
  }

  @Get()
  findAll() {
    return this.factureAchatService.findAll();
  }

  @Get('byfournisseur/:id')
  findAllByFournisseur(@Param('id') id: string) {
    return this.factureAchatService.findAllByFournisseur(id);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureAchatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureAchatDto: UpdateFactureAchatDto) {
    return this.factureAchatService.update(id, updateFactureAchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureAchatService.remove(id);
  }
}
