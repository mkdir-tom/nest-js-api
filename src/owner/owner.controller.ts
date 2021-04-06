import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CreateOwnerDTO } from './dto/create-owner.dto';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Get()
  async findOne(@Query('firstname') firstname: string) {
    return this.ownerService.findOne(firstname);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async addOwner(@Body() dto: CreateOwnerDTO) {
    // return await this.ownerService.addOwner(dto);
    const addowner = await this.ownerService.addOwner(dto);
    return {
      message: 'User has been successfuly added!',
      owner: {
        firstname: addowner.firstname,
        lastname: addowner.lastname,
      },
    };
  }
}
