import { EntityRepository, Repository } from 'typeorm';
import { AnuncioFacilidade } from './../entities/AnuncioFacilidade';

@EntityRepository(AnuncioFacilidade)
class AnuncioFacilidadeRepository extends Repository<AnuncioFacilidade> {}

export { AnuncioFacilidadeRepository };