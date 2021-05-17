import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { AssinaturaPlano } from "./AssinaturaPlano";
import { FaturamentoFaturapagseguro } from "./FaturamentoFaturapagseguro";

@Index("assinatura_assinatura_anunciante_id_9a879a34", ["anuncianteId"], {})
@Index("assinatura_assinatura_pkey", ["id"], { unique: true })
@Index("assinatura_assinatura_plano_id_e80a4b31", ["planoId"], {})
@Entity("assinatura_assinatura", { schema: "public" })
export class AssinaturaAssinatura {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "qtd_mensalidade" })
  qtdMensalidade: number;

  @Column("numeric", { name: "valor", precision: 9, scale: 2 })
  valor: string;

  @Column("smallint", { name: "status" })
  status: number;

  @Column("timestamp with time zone", {
    name: "data_pagamento",
    nullable: true,
  })
  dataPagamento: Date | null;

  @Column("smallint", { name: "meio_pagamento" })
  meioPagamento: number;

  @Column("character varying", {
    name: "documento",
    nullable: true,
    length: 250,
  })
  documento: string | null;

  @Column("timestamp with time zone", {
    name: "data_cancelamento",
    nullable: true,
  })
  dataCancelamento: Date | null;

  @Column("text", { name: "motivo_cancelamento", nullable: true })
  motivoCancelamento: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("boolean", { name: "sucesso" })
  sucesso: boolean;

  @Column("boolean", { name: "cancelado" })
  cancelado: boolean;

  @Column("boolean", { name: "cortesia" })
  cortesia: boolean;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("integer", { name: "plano_id" })
  planoId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.assinaturaAssinaturas
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;

  @ManyToOne(
    () => AssinaturaPlano,
    (assinaturaPlano) => assinaturaPlano.assinaturaAssinaturas
  )
  @JoinColumn([{ name: "plano_id", referencedColumnName: "id" }])
  plano: AssinaturaPlano;

  @OneToMany(
    () => FaturamentoFaturapagseguro,
    (faturamentoFaturapagseguro) => faturamentoFaturapagseguro.assinatura
  )
  faturamentoFaturapagseguros: FaturamentoFaturapagseguro[];
}
