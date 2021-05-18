import { EntityRepository, Repository } from 'typeorm';
import { ProdutoWishlist } from './../entities/ProdutoWishlist';

@EntityRepository(ProdutoWishlist)
class ProdutoWishlistRepository extends Repository<ProdutoWishlist> {}

export { ProdutoWishlistRepository };