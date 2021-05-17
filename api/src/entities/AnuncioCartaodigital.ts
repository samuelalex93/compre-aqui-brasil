import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_cartaodigital_anunciante_id_6fc03787", ["anuncianteId"], {})
@Index("anuncio_cartaodigital_pkey", ["id"], { unique: true })
@Entity("anuncio_cartaodigital", { schema: "public" })
export class AnuncioCartaodigital {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

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
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioCartaodigitals
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
