import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { tbl_sector } from "../entity/sector";
import { tbl_zona } from "../entity/zona";




export const getSector = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
   
  const p = await getRepository(tbl_sector).find();

  
  return   res.json(p)  ;

};


export const getcomboboxzona = async (
  req: Request,
  res: Response
): Promise<Response> => {
 
const p = await getRepository(tbl_zona).find({ where: { cod_sector: req.params.id } });


return   res.json(p)  ;

};




