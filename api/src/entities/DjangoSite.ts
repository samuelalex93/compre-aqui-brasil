import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DjangoFlatpageSites } from "./DjangoFlatpageSites";

@Index("django_site_domain_a2e37b91_uniq", ["domain"], { unique: true })
@Index("django_site_domain_a2e37b91_like", ["domain"], {})
@Index("django_site_pkey", ["id"], { unique: true })
@Entity("django_site", { schema: "public" })
export class DjangoSite {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "domain", unique: true, length: 100 })
  domain: string;

  @Column("character varying", { name: "name", length: 50 })
  name: string;

  @OneToMany(
    () => DjangoFlatpageSites,
    (djangoFlatpageSites) => djangoFlatpageSites.site
  )
  djangoFlatpageSites: DjangoFlatpageSites[];
}
