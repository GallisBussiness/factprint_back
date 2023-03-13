import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Facture, FactureSchema } from './entities/facture.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Facture.name, useFactory: () => {
    const schema = FactureSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [FactureController],
  providers: [FactureService]
})
export class FactureModule {}
