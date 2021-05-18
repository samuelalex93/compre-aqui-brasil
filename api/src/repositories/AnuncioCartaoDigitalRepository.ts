import { EntityRepository, Repository } from 'typeorm';
import { AnuncioCartaodigital } from './../entities/AnuncioCartaodigital';

@EntityRepository(AnuncioCartaodigital)
class AnuncioCartaodigitalRepository extends Repository<AnuncioCartaodigital> {}

export { AnuncioCartaodigitalRepository };