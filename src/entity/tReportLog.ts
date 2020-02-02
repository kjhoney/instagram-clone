import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum isDel {
	Y = 'y',
	N = 'n',
}

@Entity()
export class tReportLog {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('tinyint')
	nType: number;

	@Column('int')
	nSeq: number;

	@Column('tinyint')
	nCate: number;

	@Column('int')
	sMemSeq: number;

	@Column('datetime')
	regDate: Date = new Date();

	@Column({ type: 'enum', enum: isDel, default: isDel.N })
	isDel: isDel;
}
