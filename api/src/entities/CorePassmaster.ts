import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("core_passmaster_pkey", ["id"], { unique: true })
@Entity("core_passmaster", { schema: "public" })
export class CorePassmaster {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "senha", length: 50 })
  senha: string;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;
}
