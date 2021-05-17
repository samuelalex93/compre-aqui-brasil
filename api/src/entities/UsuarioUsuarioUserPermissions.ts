import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthPermission } from "./AuthPermission";
import { UsuarioUsuario } from "./UsuarioUsuario";

@Index("usuario_usuario_user_permissions_pkey", ["id"], { unique: true })
@Index(
  "usuario_usuario_user_per_usuario_id_permission_id_c0a85055_uniq",
  ["permissionId", "usuarioId"],
  { unique: true }
)
@Index(
  "usuario_usuario_user_permissions_permission_id_5cad0a4b",
  ["permissionId"],
  {}
)
@Index(
  "usuario_usuario_user_permissions_usuario_id_5969a193",
  ["usuarioId"],
  {}
)
@Entity("usuario_usuario_user_permissions", { schema: "public" })
export class UsuarioUsuarioUserPermissions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "usuario_id", unique: true })
  usuarioId: number;

  @Column("integer", { name: "permission_id", unique: true })
  permissionId: number;

  @ManyToOne(
    () => AuthPermission,
    (authPermission) => authPermission.usuarioUsuarioUserPermissions
  )
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: AuthPermission;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.usuarioUsuarioUserPermissions
  )
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: UsuarioUsuario;
}
