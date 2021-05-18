import { EntityRepository, Repository } from 'typeorm';
import { ProdutoProduto } from './../entities/ProdutoProduto';

@EntityRepository(ProdutoProduto)
class ProdutoProdutoRepository extends Repository<ProdutoProduto> {}

export { ProdutoProdutoRepository };