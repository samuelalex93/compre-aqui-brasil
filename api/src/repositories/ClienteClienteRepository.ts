import { EntityRepository, Repository } from 'typeorm';
import { ClienteCliente } from './../entities/ClienteCliente';

@EntityRepository(ClienteCliente)
class ClienteClienteRepository extends Repository<ClienteCliente> {}

export { ClienteClienteRepository };