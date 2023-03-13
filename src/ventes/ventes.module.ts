import { Module } from '@nestjs/common';
import { VentesService } from './ventes.service';
import { VentesController } from './ventes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vente, VenteSchema } from './entities/vente.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
    { name: Vente.name, useFactory: () => {
      const schema = VenteSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    } },
  ]),],
  controllers: [VentesController],
  providers: [VentesService]
})
export class VentesModule {}
