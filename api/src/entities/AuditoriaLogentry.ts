import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UsuarioUsuario } from "./UsuarioUsuario";
import { DjangoContentType } from "./DjangoContentType";

@Index("auditoria_logentry_actor_id_8a4218c4", ["actorId"], {})
@Index("auditoria_logentry_content_type_id_c52c00b8", ["contentTypeId"], {})
@Index("auditoria_logentry_pkey", ["id"], { unique: true })
@Index("auditoria_logentry_object_id_8891f9db", ["objectId"], {})
@Index("auditoria_logentry_object_pk_5bb54519", ["objectPk"], {})
@Index("auditoria_logentry_object_pk_5bb54519_like", ["objectPk"], {})
@Entity("auditoria_logentry", { schema: "public" })
export class AuditoriaLogentry {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "object_pk", length: 255 })
  objectPk: string;

  @Column("bigint", { name: "object_id", nullable: true })
  objectId: string | null;

  @Column("text", { name: "object_repr" })
  objectRepr: string;

  @Column("smallint", { name: "action" })
  action: number;

  @Column("jsonb", { name: "changes", nullable: true })
  changes: object | null;

  @Column("inet", { name: "remote_addr", nullable: true })
  remoteAddr: string | null;

  @Column("timestamp with time zone", { name: "timestamp" })
  timestamp: Date;

  @Column("jsonb", { name: "additional_data", nullable: true })
  additionalData: object | null;

  @Column("integer", { name: "actor_id", nullable: true })
  actorId: number | null;

  @Column("integer", { name: "content_type_id" })
  contentTypeId: number;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.auditoriaLogentries
  )
  @JoinColumn([{ name: "actor_id", referencedColumnName: "id" }])
  actor: UsuarioUsuario;

  @ManyToOne(
    () => DjangoContentType,
    (djangoContentType) => djangoContentType.auditoriaLogentries
  )
  @JoinColumn([{ name: "content_type_id", referencedColumnName: "id" }])
  contentType: DjangoContentType;
}
