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

@Index("produto_wishlist_cliente_id_af2bb6a7", ["clienteId"], {})
@Index("produto_wishlist_pkey", ["id"], { unique: true })
@Index("produto_wishlist_produto_id_548238ed", ["produtoId"], {})
@Entity("produto_wishlist", { schema: "public" })
export class ProdutoWishlist {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("boolean", { name: "deletado" })
  deletado: boolean;

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
    (clienteCliente) => clienteCliente.produtoWishlists
  )
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: ClienteCliente;

  @ManyToOne(
    () => ProdutoProduto,
    (produtoProduto) => produtoProduto.produtoWishlists
  )
  @JoinColumn([{ name: "produto_id", referencedColumnName: "id" }])
  produto: ProdutoProduto;
}
