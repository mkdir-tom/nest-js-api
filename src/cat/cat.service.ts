import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDTO } from './dto/create-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) public catModel: Model<CatDocument>) {}

  async addCat(dto: CreateCatDTO) {
    const owner = await this.catModel.create(dto);
    return owner;
  }
}
