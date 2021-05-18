import { EntityRepository, Repository } from 'typeorm';
import { AnuncianteCategoria } from './../entities/AnuncianteCategoria';

@EntityRepository(AnuncianteCategoria)
class AnuncianteCategoriaRepository extends Repository<AnuncianteCategoria> {}

export { AnuncianteCategoriaRepository };