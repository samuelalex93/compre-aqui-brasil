import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroup } from "./AuthGroup";
import { UsuarioUsuario } from "./UsuarioUsuario";

@Index(
  "usuario_usuario_groups_usuario_id_group_id_a4cfb0b8_uniq",
  ["groupId", "usuarioId"],
  { unique: true }
)
@Index("usuario_usuario_groups_group_id_b9c090f8", ["groupId"], {})
@Index("usuario_usuario_groups_pkey", ["id"], { unique: true })
@Index("usuario_usuario_groups_usuario_id_62de76a1", ["usuarioId"], {})
@Entity("usuario_usuario_groups", { schema: "public" })
export class UsuarioUsuarioGroups {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "usuario_id", unique: true })
  usuarioId: number;

  @Column("integer", { name: "group_id", unique: true })
  groupId: number;

  @ManyToOne(() => AuthGroup, (authGroup) => authGroup.usuarioUsuarioGroups)
  @JoinColumn([{ name: "group_id", referencedColumnName: "id" }])
  group: AuthGroup;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.usuarioUsuarioGroups
  )
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: UsuarioUsuario;
}
