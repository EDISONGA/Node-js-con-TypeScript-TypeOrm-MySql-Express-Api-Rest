import {Entity, Column, PrimaryGeneratedColumn,OneToMany,JoinColumn,ManyToOne} from 'typeorm'
import { tbl_persona } from './persona';
import { tbl_sector } from './sector';




@Entity()
export class tbl_zona {
  @PrimaryGeneratedColumn()
  @OneToMany (() => tbl_persona, cod_zona => cod_zona.cod_zonas)
  @JoinColumn()
  cod_zona: tbl_persona[];
 


  @Column()
  cod_sector: string;

  @ManyToOne(() => tbl_sector,  cod_sectors =>  cod_sectors. cod_sector)
  @JoinColumn({name:"cod_sector"})
  cod_sectors:tbl_sector;

  @Column()
  des_zona: string;






  
}