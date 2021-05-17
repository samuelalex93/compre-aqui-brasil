import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroupPermissions } from "./AuthGroupPermissions";
import { DjangoContentType } from "./DjangoContentType";
import { UsuarioUsuarioUserPermissions } from "./UsuarioUsuarioUserPermissions";

@Index(
  "auth_permission_content_type_id_codename_01ab375a_uniq",
  ["codename", "contentTypeId"],
  { unique: true }
)
@Index("auth_permission_content_type_id_2f476e4b", ["contentTypeId"], {})
@Index("auth_permission_pkey", ["id"], { unique: true })
@Entity("auth_permission", { schema: "public" })
export class AuthPermission {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("integer", { name: "content_type_id", unique: true })
  contentTypeId: number;

  @Column("character varying", { name: "codename", unique: true, length: 100 })
  codename: string;

  @OneToMany(
    () => AuthGroupPermissions,
    (authGroupPermissions) => authGroupPermissions.permission
  )
  authGroupPermissions: AuthGroupPermissions[];

  @ManyToOne(
    () => DjangoContentType,
    (djangoContentType) => djangoContentType.authPermissions
  )
  @JoinColumn([{ name: "content_type_id", referencedColumnName: "id" }])
  contentType: DjangoContentType;

  @OneToMany(
    () => UsuarioUsuarioUserPermissions,
    (usuarioUsuarioUserPermissions) => usuarioUsuarioUserPermissions.permission
  )
  usuarioUsuarioUserPermissions: UsuarioUsuarioUserPermissions[];
}
