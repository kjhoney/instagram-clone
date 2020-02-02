import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum isDel {
  Y = "y",
  N = "n"
}

@Entity()
export class tPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  nUsersSeq: number;

  @Column({ type: "varchar", length: "64" })
  sUserid: string;

  @Column({ type: "varchar", length: "1000" })
  sContents: string;

  @Column("int")
  nLike: number;

  @Column("int")
  nReply: number;

  @Column("int")
  nReport: number;

  @Column("datetime")
  regDate: Date = new Date();

  @Column("datetime")
  editDate: Date = new Date();

  @Column({ type: "enum", enum: isDel, default: isDel.N })
  isDel: isDel;
}
