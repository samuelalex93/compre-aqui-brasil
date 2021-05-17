import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteCategoria } from "./AnuncianteCategoria";
import { GeoCidade } from "./GeoCidade";
import { CoreConsultor } from "./CoreConsultor";
import { GeoEstado } from "./GeoEstado";
import { UsuarioUsuario } from "./UsuarioUsuario";
import { AnuncioAvaliacao } from "./AnuncioAvaliacao";
import { AnuncioCartaodigital } from "./AnuncioCartaodigital";
import { AnuncioContato } from "./AnuncioContato";
import { AnuncioDescricao } from "./AnuncioDescricao";
import { AnuncioFacilidade } from "./AnuncioFacilidade";
import { AnuncioFavorito } from "./AnuncioFavorito";
import { AnuncioFotoad } from "./AnuncioFotoad";
import { AnuncioFuncionamento } from "./AnuncioFuncionamento";
import { AnuncioPaletadecor } from "./AnuncioPaletadecor";
import { AnuncioPromocao } from "./AnuncioPromocao";
import { AnuncioRedesocial } from "./AnuncioRedesocial";
import { AnuncioVideoyoutube } from "./AnuncioVideoyoutube";
import { AssinaturaAssinatura } from "./AssinaturaAssinatura";
import { ProdutoImportacaodeproduto } from "./ProdutoImportacaodeproduto";
import { ProdutoProduto } from "./ProdutoProduto";

@Index("anunciante_anunciante_categoria_id_c20e52f5", ["categoriaId"], {})
@Index("anunciante_anunciante_cidade_id_8c2c430f", ["cidadeId"], {})
@Index("anunciante_anunciante_consultor_id_8c35dd24", ["consultorId"], {})
@Index("anunciante_anunciante_cpf_cnpj_key", ["cpfCnpj"], { unique: true })
@Index("anunciante_anunciante_cpf_cnpj_0c69e82f_like", ["cpfCnpj"], {})
@Index("anunciante_anunciante_email_830db026_like", ["email"], {})
@Index("anunciante_anunciante_email_key", ["email"], { unique: true })
@Index("anunciante_anunciante_estado_id_c721f431", ["estadoId"], {})
@Index("anunciante_anunciante_pkey", ["id"], { unique: true })
@Index("anunciante_anunciante_localizacao_id", ["localizacao"], {})
@Index("anunciante_anunciante_user_id_810e46be", ["userId"], {})
@Entity("anunciante_anunciante", { schema: "public" })
export class AnuncianteAnunciante {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "plano" })
  plano: number;

  @Column("character varying", { name: "imagem", nullable: true, length: 100 })
  imagem: string | null;

  @Column("character varying", { name: "nome", length: 210 })
  nome: string;

  @Column("character varying", { name: "cpf_cnpj", unique: true, length: 14 })
  cpfCnpj: string;

  @Column("character varying", { name: "email", unique: true, length: 254 })
  email: string;

  @Column("character varying", {
    name: "nome_fantasia",
    nullable: true,
    length: 250,
  })
  nomeFantasia: string | null;

  @Column("character varying", {
    name: "insc_estadual",
    nullable: true,
    length: 25,
  })
  inscEstadual: string | null;

  @Column("character varying", {
    name: "insc_municipal",
    nullable: true,
    length: 25,
  })
  inscMunicipal: string | null;

  @Column("character varying", {
    name: "nome_responsavel",
    nullable: true,
    length: 210,
  })
  nomeResponsavel: string | null;

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
    length: 100,
  })
  complemento: string | null;

  @Column("character varying", { name: "telefone1", length: 15 })
  telefone1: string;

  @Column("character varying", {
    name: "telefone2",
    nullable: true,
    length: 15,
  })
  telefone2: string | null;

  @Column("character varying", { name: "website", nullable: true, length: 200 })
  website: string | null;

  @Column("character varying", { name: "slogan", nullable: true, length: 250 })
  slogan: string | null;

  @Column("character varying", {
    name: "palavra_chave",
    nullable: true,
    length: 250,
  })
  palavraChave: string | null;

  @Column("geography", { name: "localizacao", nullable: true })
  localizacao: string | null;

  @Column("text", { name: "obs", nullable: true })
  obs: string | null;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("timestamp with time zone", {
    name: "data_efetivacao",
    nullable: true,
  })
  dataEfetivacao: Date | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "categoria_id" })
  categoriaId: number;

  @Column("integer", { name: "cidade_id" })
  cidadeId: number;

  @Column("integer", { name: "estado_id" })
  estadoId: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("character varying", { name: "nome_usuario", length: 80 })
  nomeUsuario: string;

  @Column("character varying", { name: "senha", length: 80 })
  senha: string;

  @Column("integer", { name: "consultor_id", nullable: true })
  consultorId: number | null;

  @ManyToOne(
    () => AnuncianteCategoria,
    (anuncianteCategoria) => anuncianteCategoria.anuncianteAnunciantes
  )
  @JoinColumn([{ name: "categoria_id", referencedColumnName: "id" }])
  categoria: AnuncianteCategoria;

  @ManyToOne(() => GeoCidade, (geoCidade) => geoCidade.anuncianteAnunciantes)
  @JoinColumn([{ name: "cidade_id", referencedColumnName: "id" }])
  cidade: GeoCidade;

  @ManyToOne(
    () => CoreConsultor,
    (coreConsultor) => coreConsultor.anuncianteAnunciantes
  )
  @JoinColumn([{ name: "consultor_id", referencedColumnName: "id" }])
  consultor: CoreConsultor;

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.anuncianteAnunciantes)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.anuncianteAnunciantes
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;

  @OneToMany(
    () => AnuncioAvaliacao,
    (anuncioAvaliacao) => anuncioAvaliacao.anunciante
  )
  anuncioAvaliacaos: AnuncioAvaliacao[];

  @OneToMany(
    () => AnuncioCartaodigital,
    (anuncioCartaodigital) => anuncioCartaodigital.anunciante
  )
  anuncioCartaodigitals: AnuncioCartaodigital[];

  @OneToMany(
    () => AnuncioContato,
    (anuncioContato) => anuncioContato.anunciante
  )
  anuncioContatoes: AnuncioContato[];

  @OneToMany(
    () => AnuncioDescricao,
    (anuncioDescricao) => anuncioDescricao.anunciante
  )
  anuncioDescricaos: AnuncioDescricao[];

  @OneToMany(
    () => AnuncioFacilidade,
    (anuncioFacilidade) => anuncioFacilidade.anunciante
  )
  anuncioFacilidades: AnuncioFacilidade[];

  @OneToMany(
    () => AnuncioFavorito,
    (anuncioFavorito) => anuncioFavorito.anunciante
  )
  anuncioFavoritos: AnuncioFavorito[];

  @OneToMany(() => AnuncioFotoad, (anuncioFotoad) => anuncioFotoad.anunciante)
  anuncioFotoads: AnuncioFotoad[];

  @OneToMany(
    () => AnuncioFuncionamento,
    (anuncioFuncionamento) => anuncioFuncionamento.anunciante
  )
  anuncioFuncionamentos: AnuncioFuncionamento[];

  @OneToOne(
    () => AnuncioPaletadecor,
    (anuncioPaletadecor) => anuncioPaletadecor.anunciante
  )
  anuncioPaletadecor: AnuncioPaletadecor;

  @OneToMany(
    () => AnuncioPromocao,
    (anuncioPromocao) => anuncioPromocao.anunciante
  )
  anuncioPromocaos: AnuncioPromocao[];

  @OneToOne(
    () => AnuncioRedesocial,
    (anuncioRedesocial) => anuncioRedesocial.anunciante
  )
  anuncioRedesocial: AnuncioRedesocial;

  @OneToOne(
    () => AnuncioVideoyoutube,
    (anuncioVideoyoutube) => anuncioVideoyoutube.anunciante
  )
  anuncioVideoyoutube: AnuncioVideoyoutube;

  @OneToMany(
    () => AssinaturaAssinatura,
    (assinaturaAssinatura) => assinaturaAssinatura.anunciante
  )
  assinaturaAssinaturas: AssinaturaAssinatura[];

  @OneToMany(
    () => ProdutoImportacaodeproduto,
    (produtoImportacaodeproduto) => produtoImportacaodeproduto.anunciante
  )
  produtoImportacaodeprodutos: ProdutoImportacaodeproduto[];

  @OneToMany(
    () => ProdutoProduto,
    (produtoProduto) => produtoProduto.anunciante
  )
  produtoProdutos: ProdutoProduto[];
}
