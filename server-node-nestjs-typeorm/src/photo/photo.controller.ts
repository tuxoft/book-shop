import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('/api/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post('/create')
  create(@Body() photo: Photo): Promise<Photo> {
    return this.photoService.create(photo);
  }
}
