import { EntityRepository, Repository } from 'typeorm';
import { AnuncianteAnunciante } from './../entities/AnuncianteAnunciante';

@EntityRepository(AnuncianteAnunciante)
class AnuncianteAnuncianteRepository extends Repository<AnuncianteAnunciante> {}

export { AnuncianteAnuncianteRepository };