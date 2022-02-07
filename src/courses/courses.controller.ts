import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: any) {
    return body;
  }
}
