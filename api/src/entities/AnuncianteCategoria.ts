import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AnuncianteAnunciante } from "./AnuncianteAnunciante";

@Index("anunciante_categoria_pkey", ["id"], { unique: true })
@Index("anunciante_categoria_slug_70d255aa_like", ["slug"], {})
@Index("anunciante_categoria_slug_key", ["slug"], { unique: true })
@Entity("anunciante_categoria", { schema: "public" })
export class AnuncianteCategoria {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 150 })
  nome: string;

  @Column("character varying", { name: "slug", unique: true, length: 200 })
  slug: string;

  @Column("character varying", {
    name: "font_icon",
    nullable: true,
    length: 150,
  })
  fontIcon: string | null;

  @Column("timestamp with time zone", { name: "data_cadastro" })
  dataCadastro: Date;

  @Column("timestamp with time zone", { name: "data_alteracao" })
  dataAlteracao: Date;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @OneToMany(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.categoria
  )
  anuncianteAnunciantes: AnuncianteAnunciante[];
}
