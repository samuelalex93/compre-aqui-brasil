import { EntityRepository, Repository } from 'typeorm';
import { VendedorVendedor } from './../entities/VendedorVendedor';

@EntityRepository(VendedorVendedor)
class VendedorVendedorRepository extends Repository<VendedorVendedor> {}

export { VendedorVendedorRepository };