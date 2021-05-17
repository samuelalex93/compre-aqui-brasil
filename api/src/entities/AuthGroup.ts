import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroupPermissions } from "./AuthGroupPermissions";
import { UsuarioUsuarioGroups } from "./UsuarioUsuarioGroups";

@Index("auth_group_pkey", ["id"], { unique: true })
@Index("auth_group_name_a6ea08ec_like", ["name"], {})
@Index("auth_group_name_key", ["name"], { unique: true })
@Entity("auth_group", { schema: "public" })
export class AuthGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", unique: true, length: 150 })
  name: string;

  @OneToMany(
    () => AuthGroupPermissions,
    (authGroupPermissions) => authGroupPermissions.group
  )
  authGroupPermissions: AuthGroupPermissions[];

  @OneToMany(
    () => UsuarioUsuarioGroups,
    (usuarioUsuarioGroups) => usuarioUsuarioGroups.group
  )
  usuarioUsuarioGroups: UsuarioUsuarioGroups[];
}
