import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssinaturaAssinatura } from "./AssinaturaAssinatura";
import { FaturamentoNotificationpagseguro } from "./FaturamentoNotificationpagseguro";

@Index(
  "faturamento_faturapagseguro_assinatura_id_aa77ecf7",
  ["assinaturaId"],
  {}
)
@Index("faturamento_faturapagseguro_pkey", ["id"], { unique: true })
@Index("faturamento_faturapagseguro_reference_682a967a_like", ["reference"], {})
@Index("faturamento_faturapagseguro_reference_key", ["reference"], {
  unique: true,
})
@Entity("faturamento_faturapagseguro", { schema: "public" })
export class FaturamentoFaturapagseguro {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "reference",
    nullable: true,
    unique: true,
    length: 256,
  })
  reference: string | null;

  @Column("character varying", { name: "code", nullable: true, length: 256 })
  code: string | null;

  @Column("character varying", {
    name: "code_transaction",
    nullable: true,
    length: 256,
  })
  codeTransaction: string | null;

  @Column("character varying", {
    name: "payment_url",
    nullable: true,
    length: 200,
  })
  paymentUrl: string | null;

  @Column("text", { name: "errors", nullable: true })
  errors: string | null;

  @Column("timestamp with time zone", { name: "date", nullable: true })
  date: Date | null;

  @Column("character varying", {
    name: "notificationCode",
    nullable: true,
    length: 256,
  })
  notificationCode: string | null;

  @Column("character varying", {
    name: "notificationType",
    nullable: true,
    length: 256,
  })
  notificationType: string | null;

  @Column("text", { name: "notificationData", nullable: true })
  notificationData: string | null;

  @Column("character varying", {
    name: "cancellationSource",
    nullable: true,
    length: 256,
  })
  cancellationSource: string | null;

  @Column("smallint", { name: "status_pag" })
  statusPag: number;

  @Column("smallint", { name: "status" })
  status: number;

  @Column("timestamp with time zone", {
    name: "data_pagamento",
    nullable: true,
  })
  dataPagamento: Date | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "assinatura_id", nullable: true })
  assinaturaId: number | null;

  @ManyToOne(
    () => AssinaturaAssinatura,
    (assinaturaAssinatura) => assinaturaAssinatura.faturamentoFaturapagseguros
  )
  @JoinColumn([{ name: "assinatura_id", referencedColumnName: "id" }])
  assinatura: AssinaturaAssinatura;

  @OneToMany(
    () => FaturamentoNotificationpagseguro,
    (faturamentoNotificationpagseguro) => faturamentoNotificationpagseguro.fat
  )
  faturamentoNotificationpagseguros: FaturamentoNotificationpagseguro[];
}
