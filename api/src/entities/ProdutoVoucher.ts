import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClienteCliente } from "./ClienteCliente";
import { ProdutoProduto } from "./ProdutoProduto";

@Index("produto_voucher_cliente_id_d59aeb03", ["clienteId"], {})
@Index("produto_voucher_pkey", ["id"], { unique: true })
@Index("produto_voucher_produto_id_261fd612", ["produtoId"], {})
@Entity("produto_voucher", { schema: "public" })
export class ProdutoVoucher {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "codigo", length: 80 })
  codigo: string;

  @Column("numeric", { name: "desconto", precision: 9, scale: 2 })
  desconto: string;

  @Column("date", { name: "data_validade" })
  dataValidade: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("boolean", { name: "utilizado" })
  utilizado: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "cliente_id" })
  clienteId: number;

  @Column("integer", { name: "produto_id" })
  produtoId: number;

  @ManyToOne(
    () => ClienteCliente,
    (clienteCliente) => clienteCliente.produtoVouchers
  )
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: ClienteCliente;

  @ManyToOne(
    () => ProdutoProduto,
    (produtoProduto) => produtoProduto.produtoVouchers
  )
  @JoinColumn([{ name: "produto_id", referencedColumnName: "id" }])
  produto: ProdutoProduto;
}
