import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFactureAchatDto } from './dto/create-facture-achat.dto';
import { UpdateFactureAchatDto } from './dto/update-facture-achat.dto';
import { FactureAchat, FactureAchatDocument } from './entities/facture-achat.entity';
@Injectable()
export class FactureAchatService {
  constructor(
    @InjectModel(FactureAchat.name) private FactureAchatModel: Model<FactureAchatDocument>,
  ) {}

  async create(createFactureAchatDto: CreateFactureAchatDto): Promise<FactureAchat> {
    try {
      const createdFactureAchat = new this.FactureAchatModel(createFactureAchatDto);
      return await createdFactureAchat.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<FactureAchat[]> {
    try {
      return await this.FactureAchatModel.find().sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllByFournisseur(id: string): Promise<FactureAchat[]> {
    try {
      return await this.FactureAchatModel.find({fournisseur: id}).sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<FactureAchat> {
    try {
      return await this.FactureAchatModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async byDate(dat: string): Promise<FactureAchat[]> {
    try {
      return await this.FactureAchatModel.find({date: {$eq: dat}});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateFactureAchatDto: UpdateFactureAchatDto): Promise<FactureAchat> {
    try {
      return await this.FactureAchatModel.findByIdAndUpdate(id, updateFactureAchatDto);
    } catch (error) {
      console.log(error)
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<FactureAchat> {
    try {
      return await this.FactureAchatModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
