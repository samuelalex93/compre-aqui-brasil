import { EntityRepository, Repository } from 'typeorm';
import { AnuncioPromocao } from './../entities/AnuncioPromocao';

@EntityRepository(AnuncioPromocao)
class AnuncioPromocaoRepository extends Repository<AnuncioPromocao> {}

export { AnuncioPromocaoRepository };