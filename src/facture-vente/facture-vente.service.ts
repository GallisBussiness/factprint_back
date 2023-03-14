import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFactureVenteDto } from './dto/create-facture-vente.dto';
import { UpdateFactureVenteDto } from './dto/update-facture-vente.dto';
import { FactureVente, FactureVenteDocument } from './entities/facture-vente.entity';

@Injectable()
export class FactureVenteService {
  constructor(
    @InjectModel(FactureVente.name) private FactureVenteModel: Model<FactureVenteDocument>,
  ) {}

  async create(createFactureVenteDto: CreateFactureVenteDto): Promise<FactureVente> {
    try {
      const createdFactureVente = new this.FactureVenteModel(createFactureVenteDto);
      return await createdFactureVente.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<FactureVente[]> {
    try {
      return await this.FactureVenteModel.find().sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllByClient(id: string): Promise<FactureVente[]> {
    try {
      return await this.FactureVenteModel.find({client: id}).sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<FactureVente> {
    try {
      return await this.FactureVenteModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async byDate(dat: string): Promise<FactureVente[]> {
    try {
      return await this.FactureVenteModel.find({date: {$eq: dat}});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateFactureVenteDto: UpdateFactureVenteDto): Promise<FactureVente> {
    try {
      return await this.FactureVenteModel.findByIdAndUpdate(id, updateFactureVenteDto);
    } catch (error) {
      console.log(error)
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<FactureVente> {
    try {
      return await this.FactureVenteModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
