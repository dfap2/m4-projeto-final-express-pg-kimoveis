import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @ManyToOne(() => RealEstate, (r) => r.category)
    realEstate: Array<RealEstate>;
}
