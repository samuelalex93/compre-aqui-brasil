import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DjangoFlatpage } from "./DjangoFlatpage";
import { DjangoSite } from "./DjangoSite";

@Index("django_flatpage_sites_flatpage_id_078bbc8b", ["flatpageId"], {})
@Index(
  "django_flatpage_sites_flatpage_id_site_id_0d29d9d1_uniq",
  ["flatpageId", "siteId"],
  { unique: true }
)
@Index("django_flatpage_sites_pkey", ["id"], { unique: true })
@Index("django_flatpage_sites_site_id_bfd8ea84", ["siteId"], {})
@Entity("django_flatpage_sites", { schema: "public" })
export class DjangoFlatpageSites {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "flatpage_id", unique: true })
  flatpageId: number;

  @Column("integer", { name: "site_id", unique: true })
  siteId: number;

  @ManyToOne(
    () => DjangoFlatpage,
    (djangoFlatpage) => djangoFlatpage.djangoFlatpageSites
  )
  @JoinColumn([{ name: "flatpage_id", referencedColumnName: "id" }])
  flatpage: DjangoFlatpage;

  @ManyToOne(() => DjangoSite, (djangoSite) => djangoSite.djangoFlatpageSites)
  @JoinColumn([{ name: "site_id", referencedColumnName: "id" }])
  site: DjangoSite;
}
