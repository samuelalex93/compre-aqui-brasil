import { EntityRepository, Repository } from 'typeorm';
import { AnuncioRedesocial } from './../entities/AnuncioRedesocial';

@EntityRepository(AnuncioRedesocial)
class AnuncioRedesocialRepository extends Repository<AnuncioRedesocial> {}

export { AnuncioRedesocialRepository };