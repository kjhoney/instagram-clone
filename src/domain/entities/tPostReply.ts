import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum isDel {
  Y = "y",
  N = "n"
}

@Entity()
export class tPostReply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  nPostSeq: number;

  @Column("int")
  nGno: number;

  @Column("int")
  nPst: number;

  @Column("int")
  nDepth: number;

  @Column("int")
  nMemSeq: number;

  @Column("int")
  nTagMemSeq: number;

  @Column({ type: "varchar", length: "64" })
  sUserid: string;

  @Column({ type: "varchar", length: "500" })
  sContents: string;

  @Column("int")
  nLike: number;

  @Column("int")
  nReport: number;

  @Column("datetime")
  regDate: Date = new Date();

  @Column("datetime")
  editDate: Date = new Date();

  @Column({ type: "enum", enum: isDel, default: isDel.N })
  isDel: isDel;
}
