import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GeoEstado } from "./GeoEstado";

@Index("geo_pais_pkey", ["id"], { unique: true })
@Entity("geo_pais", { schema: "public" })
export class GeoPais {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 128 })
  nome: string;

  @Column("character varying", { name: "sigla", length: 2 })
  sigla: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @OneToMany(() => GeoEstado, (geoEstado) => geoEstado.pais)
  geoEstados: GeoEstado[];
}
