import { EntityRepository, Repository } from 'typeorm';
import { UsuarioUsuario } from '../entities/UsuarioUsuario';

@EntityRepository(UsuarioUsuario)
class UsuarioUsuarioRepository extends Repository<UsuarioUsuario> {}

export { UsuarioUsuarioRepository };