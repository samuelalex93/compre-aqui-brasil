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

@Index("core_operador_cidade_id_cd6c7590", ["cidadeId"], {})
@Index("core_operador_cpf_cnpj_867681f0_like", ["cpfCnpj"], {})
@Index("core_operador_cpf_cnpj_key", ["cpfCnpj"], { unique: true })
@Index("core_operador_email_e636a972_like", ["email"], {})
@Index("core_operador_email_key", ["email"], { unique: true })
@Index("core_operador_estado_id_f9341b9a", ["estadoId"], {})
@Index("core_operador_pkey", ["id"], { unique: true })
@Index("core_operador_user_id_e1bf1f44", ["userId"], {})
@Entity("core_operador", { schema: "public" })
export class CoreOperador {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 200 })
  nome: string;

  @Column("character varying", { name: "email", unique: true, length: 254 })
  email: string;

  @Column("character varying", {
    name: "cpf_cnpj",
    nullable: true,
    unique: true,
    length: 14,
  })
  cpfCnpj: string | null;

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

  @Column("character varying", { name: "celular", nullable: true, length: 14 })
  celular: string | null;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("smallint", { name: "permissao", nullable: true })
  permissao: number | null;

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

  @ManyToOne(() => GeoCidade, (geoCidade) => geoCidade.coreOperadors)
  @JoinColumn([{ name: "cidade_id", referencedColumnName: "id" }])
  cidade: GeoCidade;

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.coreOperadors)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.coreOperadors
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;
}
