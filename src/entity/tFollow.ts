import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum isDel {
	Y = 'y',
	N = 'n',
}

@Entity()
export class tFollow {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('int')
	nFollowerSeq: number;

	@Column('int')
	nFollowingSeq: number;

	@Column('datetime')
	regDate: Date = new Date();

	@Column('datetime')
	editDate: Date = new Date();

	@Column({ type: 'enum', enum: isDel, default: isDel.N })
	isDel: isDel;
}
