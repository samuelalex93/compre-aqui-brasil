import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DjangoFlatpageSites } from "./DjangoFlatpageSites";

@Index("django_flatpage_pkey", ["id"], { unique: true })
@Index("django_flatpage_url_41612362_like", ["url"], {})
@Index("django_flatpage_url_41612362", ["url"], {})
@Entity("django_flatpage", { schema: "public" })
export class DjangoFlatpage {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "url", length: 100 })
  url: string;

  @Column("character varying", { name: "title", length: 200 })
  title: string;

  @Column("text", { name: "content" })
  content: string;

  @Column("boolean", { name: "enable_comments" })
  enableComments: boolean;

  @Column("character varying", { name: "template_name", length: 70 })
  templateName: string;

  @Column("boolean", { name: "registration_required" })
  registrationRequired: boolean;

  @OneToMany(
    () => DjangoFlatpageSites,
    (djangoFlatpageSites) => djangoFlatpageSites.flatpage
  )
  djangoFlatpageSites: DjangoFlatpageSites[];
}
