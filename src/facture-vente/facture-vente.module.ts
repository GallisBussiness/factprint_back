import { Module } from '@nestjs/common';
import { FactureVenteService } from './facture-vente.service';
import { FactureVenteController } from './facture-vente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureVente, FactureVenteSchema } from './entities/facture-vente.entity';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{name: FactureVente.name, useFactory: () => {
      const schema = FactureVenteSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    }}])
  ],
  controllers: [FactureVenteController],
  providers: [FactureVenteService]
})
export class FactureVenteModule {}
