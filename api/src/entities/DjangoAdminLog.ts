import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DjangoContentType } from "./DjangoContentType";
import { UsuarioUsuario } from "./UsuarioUsuario";

@Index("django_admin_log_content_type_id_c4bce8eb", ["contentTypeId"], {})
@Index("django_admin_log_pkey", ["id"], { unique: true })
@Index("django_admin_log_user_id_c564eba6", ["userId"], {})
@Entity("django_admin_log", { schema: "public" })
export class DjangoAdminLog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "action_time" })
  actionTime: Date;

  @Column("text", { name: "object_id", nullable: true })
  objectId: string | null;

  @Column("character varying", { name: "object_repr", length: 200 })
  objectRepr: string;

  @Column("smallint", { name: "action_flag" })
  actionFlag: number;

  @Column("text", { name: "change_message" })
  changeMessage: string;

  @Column("integer", { name: "content_type_id", nullable: true })
  contentTypeId: number | null;

  @Column("integer", { name: "user_id" })
  userId: number;

  @ManyToOne(
    () => DjangoContentType,
    (djangoContentType) => djangoContentType.djangoAdminLogs
  )
  @JoinColumn([{ name: "content_type_id", referencedColumnName: "id" }])
  contentType: DjangoContentType;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.djangoAdminLogs
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;
}
