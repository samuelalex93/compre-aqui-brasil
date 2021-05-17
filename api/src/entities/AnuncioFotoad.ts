import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_fotoad_anunciante_id_83a2dd32", ["anuncianteId"], {})
@Index("anuncio_fotoad_pkey", ["id"], { unique: true })
@Entity("anuncio_fotoad", { schema: "public" })
export class AnuncioFotoad {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 100 })
  nome: string;

  @Column("character varying", { name: "foto", nullable: true, length: 100 })
  foto: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioFotoads
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
