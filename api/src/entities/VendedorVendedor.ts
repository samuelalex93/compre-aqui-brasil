import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GeoCidade } from "./GeoCidade";
import { GeoEstado } from "./GeoEstado";
import { UsuarioUsuario } from "./UsuarioUsuario";

@Index("vendedor_vendedor_cidade_id_61c5e624", ["cidadeId"], {})
@Index("vendedor_vendedor_cpf_12dc7a80_like", ["cpf"], {})
@Index("vendedor_vendedor_cpf_key", ["cpf"], { unique: true })
@Index("vendedor_vendedor_email_key", ["email"], { unique: true })
@Index("vendedor_vendedor_email_1ee368e4_like", ["email"], {})
@Index("vendedor_vendedor_estado_id_cbe1ee57", ["estadoId"], {})
@Index("vendedor_vendedor_pkey", ["id"], { unique: true })
@Index("vendedor_vendedor_user_id_bcde8af5", ["userId"], {})
@Entity("vendedor_vendedor", { schema: "public" })
export class VendedorVendedor {
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

  @ManyToOne(() => GeoCidade, (geoCidade) => geoCidade.vendedorVendedors)
  @JoinColumn([{ name: "cidade_id", referencedColumnName: "id" }])
  cidade: GeoCidade;

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.vendedorVendedors)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.vendedorVendedors
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;
}
