import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncioAvaliacao } from "./AnuncioAvaliacao";
import { AnuncioContato } from "./AnuncioContato";
import { AnuncioFavorito } from "./AnuncioFavorito";
import { GeoCidade } from "./GeoCidade";
import { GeoEstado } from "./GeoEstado";
import { UsuarioUsuario } from "./UsuarioUsuario";
import { ProdutoVoucher } from "./ProdutoVoucher";
import { ProdutoWishlist } from "./ProdutoWishlist";

@Index("cliente_cliente_cidade_id_d5ce6851", ["cidadeId"], {})
@Index("cliente_cliente_cpf_key", ["cpf"], { unique: true })
@Index("cliente_cliente_cpf_db5cdfc3_like", ["cpf"], {})
@Index("cliente_cliente_email_key", ["email"], { unique: true })
@Index("cliente_cliente_email_b7108cf0_like", ["email"], {})
@Index("cliente_cliente_estado_id_42eaffec", ["estadoId"], {})
@Index("cliente_cliente_pkey", ["id"], { unique: true })
@Index("cliente_cliente_user_id_79776711", ["userId"], {})
@Entity("cliente_cliente", { schema: "public" })
export class ClienteCliente {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 200 })
  nome: string;

  @Column("character varying", { name: "email", unique: true, length: 254 })
  email: string;

  @Column("character varying", { name: "senha", nullable: true, length: 50 })
  senha: string | null;

  @Column("character varying", { name: "imagem", nullable: true, length: 100 })
  imagem: string | null;

  @Column("character varying", { name: "cpf", unique: true, length: 14 })
  cpf: string;

  @Column("date", { name: "data_nascimento", nullable: true })
  dataNascimento: string | null;

  @Column("character varying", { name: "cep", nullable: true, length: 8 })
  cep: string | null;

  @Column("character varying", { name: "bairro", nullable: true, length: 300 })
  bairro: string | null;

  @Column("character varying", {
    name: "endereco",
    nullable: true,
    length: 300,
  })
  endereco: string | null;

  @Column("character varying", { name: "numero", nullable: true, length: 8 })
  numero: string | null;

  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 50,
  })
  complemento: string | null;

  @Column("character varying", { name: "celular", nullable: true, length: 15 })
  celular: string | null;

  @Column("boolean", { name: "ativado" })
  ativado: boolean;

  @Column("boolean", { name: "cancelado" })
  cancelado: boolean;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "cidade_id", nullable: true })
  cidadeId: number | null;

  @Column("integer", { name: "estado_id", nullable: true })
  estadoId: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @OneToMany(
    () => AnuncioAvaliacao,
    (anuncioAvaliacao) => anuncioAvaliacao.cliente
  )
  anuncioAvaliacaos: AnuncioAvaliacao[];

  @OneToMany(() => AnuncioContato, (anuncioContato) => anuncioContato.cliente)
  anuncioContatoes: AnuncioContato[];

  @OneToMany(
    () => AnuncioFavorito,
    (anuncioFavorito) => anuncioFavorito.cliente
  )
  anuncioFavoritos: AnuncioFavorito[];

  @ManyToOne(() => GeoCidade, (geoCidade) => geoCidade.clienteClientes)
  @JoinColumn([{ name: "cidade_id", referencedColumnName: "id" }])
  cidade: GeoCidade;

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.clienteClientes)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.clienteClientes
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;

  @OneToMany(() => ProdutoVoucher, (produtoVoucher) => produtoVoucher.cliente)
  produtoVouchers: ProdutoVoucher[];

  @OneToMany(
    () => ProdutoWishlist,
    (produtoWishlist) => produtoWishlist.cliente
  )
  produtoWishlists: ProdutoWishlist[];
}
