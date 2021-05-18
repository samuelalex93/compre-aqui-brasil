import { EntityRepository, Repository } from 'typeorm';
import { AnuncioDescricao } from './../entities/AnuncioDescricao';

@EntityRepository(AnuncioDescricao)
class AnuncioDescricaoRepository extends Repository<AnuncioDescricao> {}

export { AnuncioDescricaoRepository };