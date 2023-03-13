import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';

@Controller('facture')
export class FactureController {
  constructor(private readonly factureService: FactureService) {}

  @Post()
  create(@Body() createFactureDto: CreateFactureDto) {
    return this.factureService.create(createFactureDto);
  }

  @Post('bydate')
  byDate(@Body() byDateDto: {date: string}) {
    return this.factureService.byDate(byDateDto.date);
  }

  @Get()
  findAll() {
    return this.factureService.findAll();
  }

  @Get('byclient/:id')
  findAllByClient(@Param('id') id: string) {
    return this.factureService.findAllByClient(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureDto: UpdateFactureDto) {
    return this.factureService.update(id, updateFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factureService.remove(id);
  }
}
