import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Stock, StockSchema } from './entities/stock.entity';
import { ProduitsModule } from 'src/produits/produits.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
    { name: Stock.name, useFactory: () => {
      const schema = StockSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    }},
  ]),ProduitsModule],
  controllers: [StockController],
  providers: [StockService]
})
export class StockModule {}
