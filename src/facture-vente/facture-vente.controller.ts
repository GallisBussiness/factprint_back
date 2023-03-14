import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactureVenteService } from './facture-vente.service';
import { CreateFactureVenteDto } from './dto/create-facture-vente.dto';
import { UpdateFactureVenteDto } from './dto/update-facture-vente.dto';

@Controller('facture-vente')
export class FactureVenteController {
  constructor(private readonly factureVenteService: FactureVenteService) {}

  @Post()
  create(@Body() createFactureVenteDto: CreateFactureVenteDto) {
    return this.factureVenteService.create(createFactureVenteDto);
  }

  @Get()
  findAll() {
    return this.factureVenteService.findAll();
  }

  @Get('byclient/:id')
  findAllByFournisseur(@Param('id') id: string) {
    return this.factureVenteService.findAllByClient(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureVenteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureVenteDto: UpdateFactureVenteDto) {
    return this.factureVenteService.update(id, updateFactureVenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureVenteService.remove(id);
  }
}
