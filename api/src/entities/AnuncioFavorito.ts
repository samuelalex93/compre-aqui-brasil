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

@Index("anuncio_favorito_anunciante_id_6895e43d", ["anuncianteId"], {})
@Index("anuncio_favorito_cliente_id_aee035f4", ["clienteId"], {})
@Index("anuncio_favorito_pkey", ["id"], { unique: true })
@Entity("anuncio_favorito", { schema: "public" })
export class AnuncioFavorito {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @Column("integer", { name: "cliente_id" })
  clienteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.anuncioFavoritos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;

  @ManyToOne(
    () => ClienteCliente,
    (clienteCliente) => clienteCliente.anuncioFavoritos
  )
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: ClienteCliente;
}
