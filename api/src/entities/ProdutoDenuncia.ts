import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProdutoProduto } from "./ProdutoProduto";

@Index("produto_denuncia_pkey", ["id"], { unique: true })
@Index("produto_denuncia_produto_id_2217bf8d", ["produtoId"], {})
@Entity("produto_denuncia", { schema: "public" })
export class ProdutoDenuncia {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "motivo" })
  motivo: number;

  @Column("text", { name: "descricao" })
  descricao: string;

  @Column("character varying", { name: "email", nullable: true, length: 250 })
  email: string | null;

  @Column("text", { name: "solucao", nullable: true })
  solucao: string | null;

  @Column("boolean", { name: "resolvido" })
  resolvido: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "produto_id" })
  produtoId: number;

  @ManyToOne(
    () => ProdutoProduto,
    (produtoProduto) => produtoProduto.produtoDenuncias
  )
  @JoinColumn([{ name: "produto_id", referencedColumnName: "id" }])
  produto: ProdutoProduto;
}
