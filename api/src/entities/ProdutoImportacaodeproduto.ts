import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index(
  "produto_importacaodeproduto_anunciante_id_a815dce8",
  ["anuncianteId"],
  {}
)
@Index("produto_importacaodeproduto_pkey", ["id"], { unique: true })
@Entity("produto_importacaodeproduto", { schema: "public" })
export class ProdutoImportacaodeproduto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "arquivo", nullable: true, length: 100 })
  arquivo: string | null;

  @Column("smallint", { name: "tipo" })
  tipo: number;

  @Column("boolean", { name: "processado" })
  processado: boolean;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("integer", { name: "anunciante_id" })
  anuncianteId: number;

  @ManyToOne(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.produtoImportacaodeprodutos
  )
  @JoinColumn([{ name: "anunciante_id", referencedColumnName: "id" }])
  anunciante: AnuncianteAnunciante;
}
