import { Injectable,HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { Facture, FactureDocument } from './entities/facture.entity';

@Injectable()
export class FactureService {
  constructor(
    @InjectModel(Facture.name) private factureModel: Model<FactureDocument>,
  ) {}

  async create(createFactureDto: CreateFactureDto): Promise<Facture> {
    try {
      const createdFacture = new this.factureModel(createFactureDto);
      return await createdFacture.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Facture[]> {
    try {
      return await this.factureModel.find().sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllByClient(id: string): Promise<Facture[]> {
    try {
      return await this.factureModel.find({client: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Facture> {
    try {
      return await this.factureModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async byDate(dat: string): Promise<Facture[]> {
    try {
      return await this.factureModel.find({date: {$eq: dat}});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateFactureDto: UpdateFactureDto): Promise<Facture> {
    try {
      return await this.factureModel.findByIdAndUpdate(id, updateFactureDto);
    } catch (error) {
      console.log(error)
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Facture> {
    try {
      return await this.factureModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
