import { Column, Entity, Index } from "typeorm";

@Index("thumbnail_kvstore_key_3f850178_like", ["key"], {})
@Index("thumbnail_kvstore_pkey", ["key"], { unique: true })
@Entity("thumbnail_kvstore", { schema: "public" })
export class ThumbnailKvstore {
  @Column("character varying", { primary: true, name: "key", length: 200 })
  key: string;

  @Column("text", { name: "value" })
  value: string;
}
