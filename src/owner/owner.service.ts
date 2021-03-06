import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerDTO } from './dto/create-owner.dto';
import { Owner, OwnerDoucment } from './schemas/owner.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDoucment>,
  ) {}

  async findOne(firstname: string) {
    return await this.ownerModel.findOne({ firstname });
  }

  async addOwner(dto: CreateOwnerDTO) {
    const owner = await this.ownerModel
      .findOne({ firstname: dto.firstname })
      .exec();

    if (owner)
      throw new ConflictException('This username is taken, try another.');

    const newUser = await this.ownerModel.create({
      firstname: dto.firstname,
      lastname: dto.lastname,
    });

    return newUser;
  }
}
