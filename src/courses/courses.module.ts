import { Module } from '@nestjs/common';
import { CoursesService } from 'src/courses.service';
import { CoursesController } from './courses.controller';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
