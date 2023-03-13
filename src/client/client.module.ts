import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './entities/client.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
    { name: Client.name, useFactory: () => {
      const schema = ClientSchema;
      schema.plugin(require('mongoose-autopopulate'));
      return schema;
    }},
  ]),],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
