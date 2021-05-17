import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_facilidade_anunciante_id_4a2c798d", ["anuncianteId"], {})
@Index("anuncio_facilidade_pkey", ["id"], { unique: true })
@Entity("anuncio_facilidade", { schema: "public" })
export class AnuncioFacilidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 30 })
  nome: string;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioFacilidades
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
