import { EntityRepository, Repository } from 'typeorm';
import { AnuncioAvaliacao } from './../entities/AnuncioAvaliacao';

@EntityRepository(AnuncioAvaliacao)
class AnuncioAvaliacaoRepository extends Repository<AnuncioAvaliacao> {}

export { AnuncioAvaliacaoRepository };