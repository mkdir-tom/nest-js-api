import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async addCat(@Body() dto: CreateCatDTO) {
    return await this.catService.addCat(dto);
  }
}
