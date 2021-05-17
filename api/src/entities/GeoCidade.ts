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
import { ClienteCliente } from "./ClienteCliente";
import { CoreConsultor } from "./CoreConsultor";
import { CoreOperador } from "./CoreOperador";
import { GeoEstado } from "./GeoEstado";
import { VendedorVendedor } from "./VendedorVendedor";

@Index("geo_cidade_estado_id_3cf9798a", ["estadoId"], {})
@Index("geo_cidade_pkey", ["id"], { unique: true })
@Index("geo_cidade_slug_986be068_like", ["slug"], {})
@Index("geo_cidade_slug_key", ["slug"], { unique: true })
@Entity("geo_cidade", { schema: "public" })
export class GeoCidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 60 })
  nome: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("integer", { name: "estado_id" })
  estadoId: number;

  @Column("character varying", { name: "slug", unique: true, length: 150 })
  slug: string;

  @OneToMany(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.cidade
  )
  anuncianteAnunciantes: AnuncianteAnunciante[];

  @OneToMany(() => ClienteCliente, (clienteCliente) => clienteCliente.cidade)
  clienteClientes: ClienteCliente[];

  @OneToMany(() => CoreConsultor, (coreConsultor) => coreConsultor.cidade)
  coreConsultors: CoreConsultor[];

  @OneToMany(() => CoreOperador, (coreOperador) => coreOperador.cidade)
  coreOperadors: CoreOperador[];

  @ManyToOne(() => GeoEstado, (geoEstado) => geoEstado.geoCidades)
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: GeoEstado;

  @OneToMany(
    () => VendedorVendedor,
    (vendedorVendedor) => vendedorVendedor.cidade
  )
  vendedorVendedors: VendedorVendedor[];
}
