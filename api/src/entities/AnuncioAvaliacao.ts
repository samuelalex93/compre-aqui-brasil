import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { ClienteCliente } from "./ClienteCliente";

@Index("anuncio_avaliacao_anunciante_id_e51d9514", ["anuncianteId"], {})
@Index("anuncio_avaliacao_cliente_id_990bd9cd", ["clienteId"], {})
@Index("anuncio_avaliacao_pkey", ["id"], { unique: true })
@Entity("anuncio_avaliacao", { schema: "public" })
export class AnuncioAvaliacao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "avaliacao" })
  avaliacao: number;

  @Column("text", { name: "obs" })
  obs: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("integer", { name: "cliente_id" })
  clienteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioAvaliacaos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;

  @ManyToOne(
    () => ClienteCliente,
    (clienteCliente) => clienteCliente.anuncioAvaliacaos
  )
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: ClienteCliente;
}
