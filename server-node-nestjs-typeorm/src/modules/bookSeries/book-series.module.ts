import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookSeries } from './book-series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookSeries])],
})
export class BookSeriesModule { }
