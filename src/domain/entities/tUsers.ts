import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum isDel {
  Y = "y",
  N = "n"
}

@Entity()
export class tUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "64" })
  sUserid: string;

  @Column({ type: "varchar", length: "128" })
  sPassword: string;

  @Column({ type: "varchar", length: "64" })
  sNickname: string;

  @Column({ type: "varchar", length: "64" })
  sEmail: string;

  @Column({ type: "varchar", length: "15" })
  sPhone: string;

  @Column({ type: "varchar", length: "64" })
  sName: string;

  @Column("datetime")
  regDate: Date = new Date();

  @Column("datetime")
  editDate: Date = new Date();

  @Column({ type: "enum", enum: isDel, default: isDel.N })
  isDel: isDel;
}
