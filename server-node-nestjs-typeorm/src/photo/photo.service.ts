import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Component()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(photo: Photo): Promise<Photo> {
    // let resultPhoto: Photo = await this.photoRepository.create(photo);
    return await this.photoRepository.save(photo);
  }
}
