import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_videoyoutube_anunciante_id_key", ["anuncianteId"], {
  unique: true,
})
@Index("anuncio_videoyoutube_pkey", ["id"], { unique: true })
@Entity("anuncio_videoyoutube", { schema: "public" })
export class AnuncioVideoyoutube {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "video", nullable: true, length: 100 })
  video: string | null;

  @Column("character varying", { name: "youtube", nullable: true, length: 250 })
  youtube: string | null;

  @Column("boolean", { name: "aprovado" })
  aprovado: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id", unique: true })
  anuncianteId: number;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @OneToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioVideoyoutube
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
