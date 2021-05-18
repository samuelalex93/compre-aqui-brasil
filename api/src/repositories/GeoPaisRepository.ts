import { EntityRepository, Repository } from 'typeorm';
import { GeoPais } from './../entities/GeoPais';

@EntityRepository(GeoPais)
class GeoPaisRepository extends Repository<GeoPais> {}

export { GeoPaisRepository };