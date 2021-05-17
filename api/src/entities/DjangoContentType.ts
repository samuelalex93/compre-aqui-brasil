import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuditoriaLogentry } from "./AuditoriaLogentry";
import { AuthPermission } from "./AuthPermission";
import { DjangoAdminLog } from "./DjangoAdminLog";

@Index(
  "django_content_type_app_label_model_76bd3d3b_uniq",
  ["appLabel", "model"],
  { unique: true }
)
@Index("django_content_type_pkey", ["id"], { unique: true })
@Entity("django_content_type", { schema: "public" })
export class DjangoContentType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "app_label", unique: true, length: 100 })
  appLabel: string;

  @Column("character varying", { name: "model", unique: true, length: 100 })
  model: string;

  @OneToMany(
    () => AuditoriaLogentry,
    (auditoriaLogentry) => auditoriaLogentry.contentType
  )
  auditoriaLogentries: AuditoriaLogentry[];

  @OneToMany(
    () => AuthPermission,
    (authPermission) => authPermission.contentType
  )
  authPermissions: AuthPermission[];

  @OneToMany(
    () => DjangoAdminLog,
    (djangoAdminLog) => djangoAdminLog.contentType
  )
  djangoAdminLogs: DjangoAdminLog[];
}
