import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVenteDto } from './dto/create-vente.dto';
import { UpdateVenteDto } from './dto/update-vente.dto';
import { Vente, VenteDocument } from './entities/vente.entity';

@Injectable()
export class VentesService {
  constructor(
    @InjectModel(Vente.name) private venteModel: Model<VenteDocument>,
  ) {}

  async create(createVenteDto: CreateVenteDto): Promise<Vente> {
    try {
      const createdVente = new this.venteModel(createVenteDto);
      await createdVente.populate('produits');
      return await createdVente.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Vente[]> {
    try {
      return await this.venteModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Vente> {
    try {
      return await this.venteModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateVenteDto: UpdateVenteDto): Promise<Vente> {
    try {
      return await this.venteModel.findByIdAndUpdate(id, updateVenteDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Vente> {
    try {
      return await this.venteModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
