import { EntityRepository, Repository } from 'typeorm';
import { ProdutoVoucher } from './../entities/ProdutoVoucher';

@EntityRepository(ProdutoVoucher)
class ProdutoVoucherRepository extends Repository<ProdutoVoucher> {}

export { ProdutoVoucherRepository };