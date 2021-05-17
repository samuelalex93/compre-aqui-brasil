import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { GeoCidade } from "./GeoCidade";
import { GeoEstado } from "./GeoEstado";
import { UsuarioUsuario } from "./UsuarioUsuario";

@Index("core_consultor_cidade_id_612f4869", ["cidadeId"], {})
@Index("core_consultor_cpf_cnpj_276c3b1c_like", ["cpfCnpj"], {})
@Index("core_consultor_cpf_cnpj_key", ["cpfCnpj"], { unique: true })
@Index("core_consultor_email_b4ea71bf_like", ["email"], {})
@Index("core_consultor_email_key", ["email"], { unique: true })
@Index("core_consultor_estado_id_46d8fa4b", ["estadoId"], {})
@Index("core_consultor_pkey", ["id"], { unique: true })
@Index("core_consultor_user_id_e9d8bc6f", ["userId"], {})
@Entity("core_consultor", { schema: "public" })
export class CoreConsultor {
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

  @OneToMany(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.consultor
  )
  anuncianteAnunciantes: AnuncianteAnunciante[];

  @ManyToOne(() => GeoCidade, (geoCidade) => geoCidade.coreConsultors)
  @JoinColumn([{ name: "cidade_id", referencedColumnName: "id" }])
  cidade: GeoCidade;

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.coreConsultors)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @ManyToOne(
    () => UsuarioUsuario,
    (usuarioUsuario) => usuarioUsuario.coreConsultors
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UsuarioUsuario;
}
