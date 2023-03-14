import { Test, TestingModule } from '@nestjs/testing';
import { FactureVenteController } from './facture-vente.controller';
import { FactureVenteService } from './facture-vente.service';

describe('FactureVenteController', () => {
  let controller: FactureVenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactureVenteController],
      providers: [FactureVenteService],
    }).compile();

    controller = module.get<FactureVenteController>(FactureVenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
