import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUniteDto } from './dto/create-unite.dto';
import { UpdateUniteDto } from './dto/update-unite.dto';
import { Unite, UniteDocument } from './entities/unite.entity';

@Injectable()
export class UniteService {
  constructor(
    @InjectModel(Unite.name) private UniteModel: Model<UniteDocument>,
  ) {}

  async create(createUniteDto: CreateUniteDto): Promise<Unite> {
    try {
      const createdUnite = new this.UniteModel(createUniteDto);
      return await createdUnite.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Unite[]> {
    try {
      return await this.UniteModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Unite> {
    try {
      return await this.UniteModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateUniteDto: UpdateUniteDto): Promise<Unite> {
    try {
      return await this.UniteModel.findByIdAndUpdate(id, updateUniteDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Unite> {
    try {
      return await this.UniteModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
