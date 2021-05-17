import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_funcionamento_anunciante_id_d487cfe2", ["anuncianteId"], {})
@Index("anuncio_funcionamento_pkey", ["id"], { unique: true })
@Entity("anuncio_funcionamento", { schema: "public" })
export class AnuncioFuncionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "dia" })
  dia: number;

  @Column("time without time zone", { name: "abre", nullable: true })
  abre: string | null;

  @Column("time without time zone", { name: "fecha", nullable: true })
  fecha: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("boolean", { name: "fechado" })
  fechado: boolean;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioFuncionamentos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
