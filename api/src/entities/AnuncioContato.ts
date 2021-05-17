import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";
import { ClienteCliente } from "./ClienteCliente";

@Index("anuncio_contato_anunciante_id_46547686", ["anuncianteId"], {})
@Index("anuncio_contato_cliente_id_6be2f231", ["clienteId"], {})
@Index("anuncio_contato_pkey", ["id"], { unique: true })
@Entity("anuncio_contato", { schema: "public" })
export class AnuncioContato {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "assunto" })
  assunto: number;

  @Column("character varying", { name: "nome", length: 100 })
  nome: string;

  @Column("character varying", { name: "email", length: 100 })
  email: string;

  @Column("character varying", { name: "telefone", nullable: true, length: 20 })
  telefone: string | null;

  @Column("text", { name: "mensagem" })
  mensagem: string;

  @Column("boolean", { name: "resolvido" })
  resolvido: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("integer", { name: "cliente_id", nullable: true })
  clienteId: number | null;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioContatoes
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;

  @ManyToOne(
    () => ClienteCliente,
    (clienteCliente) => clienteCliente.anuncioContatoes
  )
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: ClienteCliente;
}
