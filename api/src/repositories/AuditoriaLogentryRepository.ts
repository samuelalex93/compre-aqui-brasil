import { EntityRepository, Repository } from 'typeorm';
import { AuditoriaLogentry } from './../entities/AuditoriaLogentry';

@EntityRepository(AuditoriaLogentry)
class AuditoriaLogentryRepository extends Repository<AuditoriaLogentry> {}

export { AuditoriaLogentryRepository };