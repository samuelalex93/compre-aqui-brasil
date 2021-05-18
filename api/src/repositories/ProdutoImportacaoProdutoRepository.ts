import { EntityRepository, Repository } from 'typeorm';
import { ProdutoImportacaodeproduto } from './../entities/ProdutoImportacaodeproduto';

@EntityRepository(ProdutoImportacaodeproduto)
class ProdutoImportacaodeprodutoRepository extends Repository<ProdutoImportacaodeproduto> {}

export { ProdutoImportacaodeprodutoRepository };