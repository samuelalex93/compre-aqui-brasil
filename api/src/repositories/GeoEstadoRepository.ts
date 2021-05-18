import { EntityRepository, Repository } from 'typeorm';
import { GeoEstado } from './../entities/GeoEstado';

@EntityRepository(GeoEstado)
class GeoEstadoRepository extends Repository<GeoEstado> {}

export { GeoEstadoRepository };