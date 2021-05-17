import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_redesocial_anunciante_id_key", ["anuncianteId"], {
  unique: true,
})
@Index("anuncio_redesocial_pkey", ["id"], { unique: true })
@Entity("anuncio_redesocial", { schema: "public" })
export class AnuncioRedesocial {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "facebook",
    nullable: true,
    length: 200,
  })
  facebook: string | null;

  @Column("character varying", {
    name: "instagram",
    nullable: true,
    length: 200,
  })
  instagram: string | null;

  @Column("character varying", {
    name: "whatsapp",
    nullable: true,
    length: 100,
  })
  whatsapp: string | null;

  @Column("character varying", {
    name: "linkedin",
    nullable: true,
    length: 200,
  })
  linkedin: string | null;

  @Column("character varying", { name: "twitter", nullable: true, length: 200 })
  twitter: string | null;

  @Column("character varying", { name: "skype", nullable: true, length: 100 })
  skype: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id", unique: true })
  anuncianteId: number;

  @OneToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioRedesocial
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
