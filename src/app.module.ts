import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CourseService } from './course/course.service';

@Module({
  imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService, CourseService],
})
export class AppModule {}
