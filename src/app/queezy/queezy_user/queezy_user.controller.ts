import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode } from '@nestjs/common';
import { QueezyUserService } from './queezy_user.service';
import { UpdateQueezyUserDto } from './dto/update-queezy_user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('queezy')
export class QueezyUserController {
  constructor(private readonly queezyUserService: QueezyUserService) {}
  // @Post('/api/queezy/user')
  // create(@Body() createQueezyUserDto: CreateQueezyUserDto): Promise<ResponseApiUser | object> {
  //   return this.queezyUserService.create(createQueezyUserDto);
  // }

  @Get('/api/queezy/users-all')
  findAll() {
    return this.queezyUserService.findAll();
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.queezyUserService.findOne(+id);
  }

  @Patch('/api/queezy/user/:id')
  update(@Param('id') id: string, @Body() updateQueezyUserDto: UpdateQueezyUserDto) {
    return this.queezyUserService.update(+id, updateQueezyUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyUserService.remove(+id);
  }
}
