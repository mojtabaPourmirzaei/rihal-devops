import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn,ManyToOne, JoinColumn} from 'typeorm';
import { Classes } from "./classes.entity"
import { Countries } from "./countries.entity"
@Entity('student')
export class Student{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255})
  name: string;

  @Column({ type: 'date' ,name: "date_of_birth" })
  dateOfBirth: Date;

  //@Column({ type: 'date' ,name: "date_of_birth" })
  @ManyToOne(() => Classes, (classes) => classes.className)
  classes: Classes
  @JoinColumn({ name: "classesId" })
  Classes: Classes;

  @ManyToOne(() => Countries, (countries) => countries.students)
  countries: Countries
  @JoinColumn({ name: "countriesId" })
  Countries: Countries;

  @CreateDateColumn({type: "timestamp"})
  CreatedDate : Date;

  @UpdateDateColumn({type: "timestamp"})
  ModifiedDate : Date;

}
