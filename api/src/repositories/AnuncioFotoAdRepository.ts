import { EntityRepository, Repository } from 'typeorm';
import { AnuncioFotoad } from './../entities/AnuncioFotoad';

@EntityRepository(AnuncioFotoad)
class AnuncioFotoadRepository extends Repository<AnuncioFotoad> {}

export { AnuncioFotoadRepository };