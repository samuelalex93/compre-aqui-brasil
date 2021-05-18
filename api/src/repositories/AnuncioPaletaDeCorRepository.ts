import { EntityRepository, Repository } from 'typeorm';
import { AnuncioPaletadecor } from './../entities/AnuncioPaletadecor';

@EntityRepository(AnuncioPaletadecor)
class AnuncioPaletadecorRepository extends Repository<AnuncioPaletadecor> {}

export { AnuncioPaletadecorRepository };