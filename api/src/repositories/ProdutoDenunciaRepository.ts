import { EntityRepository, Repository } from 'typeorm';
import { ProdutoDenuncia } from './../entities/ProdutoDenuncia';

@EntityRepository(ProdutoDenuncia)
class ProdutoDenunciaRepository extends Repository<ProdutoDenuncia> {}

export { ProdutoDenunciaRepository };