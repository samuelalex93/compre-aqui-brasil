import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { AuditoriaLogentry } from "./AuditoriaLogentry";
import { ClienteCliente } from "./ClienteCliente";
import { CoreConsultor } from "./CoreConsultor";
import { CoreOperador } from "./CoreOperador";
import { DjangoAdminLog } from "./DjangoAdminLog";
import { UsuarioUsuarioGroups } from "./UsuarioUsuarioGroups";
import { UsuarioUsuarioUserPermissions } from "./UsuarioUsuarioUserPermissions";
import { VendedorVendedor } from "./VendedorVendedor";

@Index("usuario_usuario_pkey", ["id"], { unique: true })
@Index("usuario_usuario_username_9e5f6fb3_like", ["username"], {})
@Index("usuario_usuario_username_key", ["username"], { unique: true })
@Entity("usuario_usuario", { schema: "public" })
export class UsuarioUsuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "password", length: 128 })
  password: string;

  @Column("timestamp with time zone", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("boolean", { name: "is_superuser" })
  isSuperuser: boolean;

  @Column("character varying", { name: "username", unique: true, length: 150 })
  username: string;

  @Column("character varying", { name: "first_name", length: 30 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 150 })
  lastName: string;

  @Column("character varying", { name: "email", length: 254 })
  email: string;

  @Column("boolean", { name: "is_staff" })
  isStaff: boolean;

  @Column("boolean", { name: "is_active" })
  isActive: boolean;

  @Column("timestamp with time zone", { name: "date_joined" })
  dateJoined: Date;

  @OneToMany(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.user
  )
  anuncianteAnunciantes: AnuncianteAnunciante[];

  @OneToMany(
    () => AuditoriaLogentry,
    (auditoriaLogentry) => auditoriaLogentry.actor
  )
  auditoriaLogentries: AuditoriaLogentry[];

  @OneToMany(() => ClienteCliente, (clienteCliente) => clienteCliente.user)
  clienteClientes: ClienteCliente[];

  @OneToMany(() => CoreConsultor, (coreConsultor) => coreConsultor.user)
  coreConsultors: CoreConsultor[];

  @OneToMany(() => CoreOperador, (coreOperador) => coreOperador.user)
  coreOperadors: CoreOperador[];

  @OneToMany(() => DjangoAdminLog, (djangoAdminLog) => djangoAdminLog.user)
  djangoAdminLogs: DjangoAdminLog[];

  @OneToMany(
    () => UsuarioUsuarioGroups,
    (usuarioUsuarioGroups) => usuarioUsuarioGroups.usuario
  )
  usuarioUsuarioGroups: UsuarioUsuarioGroups[];

  @OneToMany(
    () => UsuarioUsuarioUserPermissions,
    (usuarioUsuarioUserPermissions) => usuarioUsuarioUserPermissions.usuario
  )
  usuarioUsuarioUserPermissions: UsuarioUsuarioUserPermissions[];

  @OneToMany(
    () => VendedorVendedor,
    (vendedorVendedor) => vendedorVendedor.user
  )
  vendedorVendedors: VendedorVendedor[];
}
