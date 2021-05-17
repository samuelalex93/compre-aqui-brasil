import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FaturamentoFaturapagseguro } from "./FaturamentoFaturapagseguro";

@Index("faturamento_notificationpagseguro_fat_id_cff2f15e", ["fatId"], {})
@Index("faturamento_notificationpagseguro_pkey", ["id"], { unique: true })
@Entity("faturamento_notificationpagseguro", { schema: "public" })
export class FaturamentoNotificationpagseguro {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

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

  @Column("boolean", { name: "sucesso" })
  sucesso: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "fat_id", nullable: true })
  fatId: number | null;

  @ManyToOne(
    () => FaturamentoFaturapagseguro,
    (faturamentoFaturapagseguro) =>
      faturamentoFaturapagseguro.faturamentoNotificationpagseguros
  )
  @JoinColumn([{ name: "fat_id", referencedColumnName: "id" }])
  fat: FaturamentoFaturapagseguro;
}
