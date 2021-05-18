import { EntityRepository, Repository } from 'typeorm';
import { AnuncioContato } from './../entities/AnuncioContato';

@EntityRepository(AnuncioContato)
class AnuncioContatoRepository extends Repository<AnuncioContato> {}

export { AnuncioContatoRepository };