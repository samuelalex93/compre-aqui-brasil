import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anuncio_promocao_anunciante_id_24ae2a92", ["anuncianteId"], {})
@Index("anuncio_promocao_pkey", ["id"], { unique: true })
@Entity("anuncio_promocao", { schema: "public" })
export class AnuncioPromocao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "titulo", length: 70 })
  titulo: string;

  @Column("character varying", { name: "imagem", nullable: true, length: 100 })
  imagem: string | null;

  @Column("text", { name: "descricao" })
  descricao: string;

  @Column("text", { name: "regras" })
  regras: string;

  @Column("timestamp with time zone", { name: "data_inicio" })
  dataInicio: Date;

  @Column("timestamp with time zone", { name: "data_fim" })
  dataFim: Date;

  @Column("boolean", { name: "ativa" })
  ativa: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioPromocaos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
