import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { MOUVEMENT } from './entities/stock.entity';
import { ProduitsService } from 'src/produits/produits.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService, private readonly produitService: ProduitsService) {}

  @Post('entree')
  async entree(@Body() createStockDto: CreateStockDto) {
    const entree =  await this.stockService.create(createStockDto);
    const stac = entree.produit.qteStock + entree.qte;
    await  this.produitService.update(entree.produit._id, {qteStock : stac});
    return entree
  }

  @Post('sortie')
  async sortie(@Body() createStockDto: CreateStockDto) {
    createStockDto.type = MOUVEMENT.SORTIE;
    const sortie = await this.stockService.create(createStockDto);
    const stac = sortie.produit.qteStock - sortie.qte;
    await  this.produitService.update(sortie.produit._id, {qteStock : stac});
    return sortie;
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(id);
  }
}
