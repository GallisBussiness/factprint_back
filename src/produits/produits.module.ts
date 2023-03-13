import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Produit, ProduitSchema } from './entities/produit.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
    { name: Produit.name, useFactory: () => {
      const schema = ProduitSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    } },
  ]),],
  controllers: [ProduitsController],
  providers: [ProduitsService],
  exports: [ProduitsService]
})
export class ProduitsModule {}
