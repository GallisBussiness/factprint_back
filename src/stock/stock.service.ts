import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock, StockDocument } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name) private StockModel: Model<StockDocument>,
  ) {}

  async create(createStockDto: CreateStockDto): Promise<Stock> {
    try {
      const createdStock = new this.StockModel(createStockDto);
      return await createdStock.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Stock[]> {
    try {
      return await this.StockModel.find().sort({ createdAt: -1 });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Stock> {
    try {
      return await this.StockModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateStockDto: UpdateStockDto): Promise<Stock> {
    try {
      return await this.StockModel.findByIdAndUpdate(id, updateStockDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Stock> {
    try {
      return await this.StockModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
