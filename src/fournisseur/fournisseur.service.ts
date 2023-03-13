import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur, FournisseurDocument } from './entities/fournisseur.entity';

@Injectable()
export class FournisseurService {
  constructor(
    @InjectModel(Fournisseur.name) private FournisseurModel: Model<FournisseurDocument>,
  ) {}

  async create(createFournisseurDto: CreateFournisseurDto): Promise<Fournisseur> {
    try {
      const createdFournisseur = new this.FournisseurModel(createFournisseurDto);
      return await createdFournisseur.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Fournisseur[]> {
    try {
      return await this.FournisseurModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Fournisseur> {
    try {
      return await this.FournisseurModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateFournisseurDto: UpdateFournisseurDto): Promise<Fournisseur> {
    try {
      return await this.FournisseurModel.findByIdAndUpdate(id, updateFournisseurDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Fournisseur> {
    try {
      return await this.FournisseurModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
