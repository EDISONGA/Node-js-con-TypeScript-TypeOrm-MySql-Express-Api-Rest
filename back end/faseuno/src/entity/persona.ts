import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import { tbl_sector } from './sector';

import { tbl_zona } from './zona';




@Entity()
export class tbl_persona {
    
  @PrimaryGeneratedColumn()
  cod_persona: number;
  @Column()
  nom_persona: string;
  @Column()
  fec_nacimiento: string;
  
  @Column()
  cod_sector: string;

  @ManyToOne(() => tbl_sector,  cod_sectors =>  cod_sectors. cod_sector)
  @JoinColumn({name:"cod_sector"})
  cod_sectors:tbl_sector;

    
  @Column()
  cod_zona: string;

  @ManyToOne(() => tbl_zona,  cod_zonas =>  cod_zonas. cod_zona)
  @JoinColumn({name:"cod_zona"})
  cod_zonas:tbl_zona;
 
  @Column()
  sueldo: number;

  
}