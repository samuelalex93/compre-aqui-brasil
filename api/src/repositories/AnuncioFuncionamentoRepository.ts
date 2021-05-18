import { EntityRepository, Repository } from 'typeorm';
import { AnuncioFuncionamento } from './../entities/AnuncioFuncionamento';

@EntityRepository(AnuncioFuncionamento)
class AnuncioFuncionamentoRepository extends Repository<AnuncioFuncionamento> {}

export { AnuncioFuncionamentoRepository };