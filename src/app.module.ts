import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  controllers: [CoursesModule],
  providers: [AppController],
  imports: [AppService],
})
export class AppModule {}
