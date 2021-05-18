import { EntityRepository, Repository } from 'typeorm';
import { AssinaturaPlano } from './../entities/AssinaturaPlano';

@EntityRepository(AssinaturaPlano)
class AssinaturaPlanoRepository extends Repository<AssinaturaPlano> {}

export { AssinaturaPlanoRepository };