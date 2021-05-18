import { EntityRepository, Repository } from 'typeorm';
import { AnuncioVideoyoutube } from './../entities/AnuncioVideoyoutube';

@EntityRepository(AnuncioVideoyoutube)
class AnuncioVideoyoutubeRepository extends Repository<AnuncioVideoyoutube> {}

export { AnuncioVideoyoutubeRepository };