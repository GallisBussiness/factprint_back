import { Injectable, HttpException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit, ProduitDocument } from './entities/produit.entity';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectModel(Produit.name) private produitModel: Model<ProduitDocument>,
  ) {}

  async create(createProduitDto: CreateProduitDto): Promise<Produit> {
    try {
      const createdProduit = new this.produitModel(createProduitDto);
      return await createdProduit.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Produit[]> {
    try {
      return await this.produitModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Produit> {
    try {
      return await this.produitModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateProduitDto: UpdateProduitDto): Promise<Produit> {
    try {
      return await this.produitModel.findByIdAndUpdate(id, updateProduitDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Produit> {
    try {
      return await this.produitModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
