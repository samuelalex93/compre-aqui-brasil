import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProdutoDenuncia } from "./ProdutoDenuncia";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { ProdutoVoucher } from "./ProdutoVoucher";
import { ProdutoWishlist } from "./ProdutoWishlist";

@Index("produto_produto_anunciante_id_124040f0", ["anuncianteId"], {})
@Index("produto_produto_pkey", ["id"], { unique: true })
@Entity("produto_produto", { schema: "public" })
export class ProdutoProduto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "tipo" })
  tipo: number;

  @Column("character varying", { name: "nome", length: 250 })
  nome: string;

  @Column("character varying", { name: "imagem", nullable: true, length: 100 })
  imagem: string | null;

  @Column("text", { name: "descricao", nullable: true })
  descricao: string | null;

  @Column("numeric", { name: "preco_varejo", precision: 9, scale: 2 })
  precoVarejo: string;

  @Column("numeric", { name: "preco_atacado", precision: 9, scale: 2 })
  precoAtacado: string;

  @Column("numeric", { name: "preco_cnpj", precision: 9, scale: 2 })
  precoCnpj: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("integer", { name: "quantidade" })
  quantidade: number;

  @Column("numeric", { name: "desconto", precision: 9, scale: 2 })
  desconto: string;

  @Column("integer", { name: "qtd_voucher" })
  qtdVoucher: number;

  @Column("character varying", { name: "voucher", nullable: true, length: 80 })
  voucher: string | null;

  @Column("character varying", { name: "codigo", nullable: true, length: 80 })
  codigo: string | null;

  @Column("date", { name: "data_validade_voucher", nullable: true })
  dataValidadeVoucher: string | null;

  @Column("boolean", { name: "tem_foto" })
  temFoto: boolean;

  @Column("character varying", {
    name: "nome_busca",
    nullable: true,
    length: 250,
  })
  nomeBusca: string | null;

  @Column("boolean", { name: "tem_preco_atacado" })
  temPrecoAtacado: boolean;

  @Column("boolean", { name: "tem_preco_cnpj" })
  temPrecoCnpj: boolean;

  @Column("character varying", { name: "youtube", nullable: true, length: 250 })
  youtube: string | null;

  @OneToMany(
    () => ProdutoDenuncia,
    (produtoDenuncia) => produtoDenuncia.produto
  )
  produtoDenuncias: ProdutoDenuncia[];

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.produtoProdutos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;

  @OneToMany(() => ProdutoVoucher, (produtoVoucher) => produtoVoucher.produto)
  produtoVouchers: ProdutoVoucher[];

  @OneToMany(
    () => ProdutoWishlist,
    (produtoWishlist) => produtoWishlist.produto
  )
  produtoWishlists: ProdutoWishlist[];
}
