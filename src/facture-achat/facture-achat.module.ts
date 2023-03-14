import { Module } from '@nestjs/common';
import { FactureAchatService } from './facture-achat.service';
import { FactureAchatController } from './facture-achat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureAchat, FactureAchatSchema } from './entities/facture-achat.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: FactureAchat.name, useFactory: () => {
    const schema = FactureAchatSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [FactureAchatController],
  providers: [FactureAchatService]
})
export class FactureAchatModule {}
