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
import { GeoCidade } from "./GeoCidade";
import { GeoPais } from "./GeoPais";
import { VendedorVendedor } from "./VendedorVendedor";

@Index("geo_estado_pkey", ["id"], { unique: true })
@Index("geo_estado_pais_id_ebea3a77", ["paisId"], {})
@Entity("geo_estado", { schema: "public" })
export class GeoEstado {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nome", length: 80 })
  nome: string;

  @Column("character varying", { name: "sigla", length: 2 })
  sigla: string;

  @Column("boolean", { name: "ativo" })
  ativo: boolean;

  @Column("integer", { name: "pais_id" })
  paisId: number;

  @OneToMany(
    () => AnuncianteAnunciante,
    (anuncianteAnunciante) => anuncianteAnunciante.estado
  )
  anuncianteAnunciantes: AnuncianteAnunciante[];

  @OneToMany(() => ClienteCliente, (clienteCliente) => clienteCliente.estado)
  clienteClientes: ClienteCliente[];

  @OneToMany(() => CoreConsultor, (coreConsultor) => coreConsultor.estado)
  coreConsultors: CoreConsultor[];

  @OneToMany(() => CoreOperador, (coreOperador) => coreOperador.estado)
  coreOperadors: CoreOperador[];

  @OneToMany(() => GeoCidade, (geoCidade) => geoCidade.estado)
  geoCidades: GeoCidade[];

  @ManyToOne(() => GeoPais, (geoPais) => geoPais.geoEstados)
  @JoinColumn([{ name: "pais_id", referencedColumnName: "id" }])
  pais: GeoPais;

  @OneToMany(
    () => VendedorVendedor,
    (vendedorVendedor) => vendedorVendedor.estado
  )
  vendedorVendedors: VendedorVendedor[];
}
