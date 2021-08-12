import {Entity, Column, PrimaryGeneratedColumn,OneToMany ,JoinColumn} from 'typeorm'
import { tbl_persona } from './persona';

import { tbl_zona } from './zona';



@Entity()
export class tbl_sector {
  
  @PrimaryGeneratedColumn()
  
  @OneToMany (() => tbl_zona, cod_sector => cod_sector.cod_sector)
  @JoinColumn()
 cod_sector:tbl_zona[];


 @OneToMany (() => tbl_persona, cod_sectors => cod_sectors.cod_sector)
 @JoinColumn()
cod_sectors:tbl_persona[];
  
  @Column()
  des_sector: string;
}