import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum isDel {
  Y = "y",
  N = "n"
}

@Entity()
export class tProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  nUsersSeq: number;

  @Column({ type: "varchar", length: "100" })
  sPhoto: string;

  @Column({ type: "varchar", length: "50" })
  sDesc: string;

  @Column("datetime")
  regDate: Date = new Date();

  @Column("datetime")
  editDate: Date = new Date();

  @Column({ type: "enum", enum: isDel, default: isDel.N })
  isDel: isDel;
}
