import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
  async addOwner(@Body() dto: CreateOwnerDTO) {
    return await this.ownerService.addOwner(dto);
  }
}
