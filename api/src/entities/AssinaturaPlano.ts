import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssinaturaAssinatura } from "./AssinaturaAssinatura";

@Index("assinatura_plano_pkey", ["id"], { unique: true })
@Entity("assinatura_plano", { schema: "public" })
export class AssinaturaPlano {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "imagem", nullable: true, length: 100 })
  imagem: string | null;

  @Column("smallint", { name: "tipo" })
  tipo: number;

  @Column("numeric", { name: "valor", precision: 9, scale: 2 })
  valor: string;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("integer", { name: "qtd_fotos" })
  qtdFotos: number;

  @OneToMany(
    () => AssinaturaAssinatura,
    (assinaturaAssinatura) => assinaturaAssinatura.plano
  )
  assinaturaAssinaturas: AssinaturaAssinatura[];
}
