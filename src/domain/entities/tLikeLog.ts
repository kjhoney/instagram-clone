import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum isDel {
  Y = "y",
  N = "n"
}

@Entity()
export class tLikeLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("tinyint")
  nType: number;

  @Column("int")
  nSeq: number;

  @Column("int")
  sMemSeq: number;

  @Column("datetime")
  regDate: Date = new Date();

  @Column({ type: "enum", enum: isDel, default: isDel.N })
  isDel: isDel;
}
