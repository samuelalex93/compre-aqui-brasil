import { EntityRepository, Repository } from 'typeorm';
import { GeoCidade } from './../entities/GeoCidade';

@EntityRepository(GeoCidade)
class GeoCidadeRepository extends Repository<GeoCidade> {}

export { GeoCidadeRepository };