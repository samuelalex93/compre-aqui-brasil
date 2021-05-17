import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_paletadecor_anunciante_id_key", ["anuncianteId"], {
  unique: true,
})
@Index("anuncio_paletadecor_pkey", ["id"], { unique: true })
@Entity("anuncio_paletadecor", { schema: "public" })
export class AnuncioPaletadecor {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "paleta", length: 20 })
  paleta: string;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id", unique: true })
  anuncianteId: number;

  @OneToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioPaletadecor
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
