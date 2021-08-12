import { Request, Response } from "express";
import { getRepository ,getConnection} from "typeorm";
import { tbl_persona } from "../entity/persona";
import { tbl_sector } from "../entity/sector";
import { tbl_zona } from "../entity/zona";





export const getPersona = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
   
    //const p = await getRepository(tbl) .findOne(req.params.id);
  const p = await getRepository(tbl_persona).find(  { relations:['cod_sectors','cod_zonas'], 
  order : {
    'cod_sectors': 'ASC'
  },
});

   // const p2 = await getRepository(tbl_zona) .find({relations:['cod_sector'] });
   
    return   res.json(p)  ;
    
  };







  export const getPersonas = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
   
    //const p = await getRepository(tbl) .findOne(req.params.id);
  const p = await getRepository(tbl_persona).find(  { relations:['cod_sectors','cod_zonas'], 
 
  where: { cod_sector: req.params.id } 
});

   // const p2 = await getRepository(tbl_zona) .find({relations:['cod_sector'] });
   
    return   res.json(p)  ;
    
  };






  export const getPersonaid = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(tbl_persona).findOne(req.params.id);
  
    return res.json(results);
  };

 




  export const createPersona = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const newPersona = await getRepository(tbl_persona).create(req.body);
    const results = await getRepository(tbl_persona).save(newPersona);
    return res.json(results);
  };
  

  export const updatePersona = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const Persona = await getRepository(tbl_persona).findOne(req.params.id);
    if (Persona) {
      //merge para remplazar los datos
      //req.body los nuevos datos que va ser remplazado
      getRepository(tbl_persona).merge(Persona , req.body);
      const results = await getRepository(tbl_persona).save(Persona);
      return res.json(results);
    }
  
    return res.json({msg: 'Persona no Encontrada'});
  };
  export const deletePersona = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(tbl_persona).delete(req.params.id);
    return res.json(results);
  };
  

/*
 

  export const getzonaid = async (
    req: Request,
   res: Response
   ): Promise<Response> => {
 
   


   const results = await getConnection()
  
   .getRepository(tbl_sector)
    .createQueryBuilder()
    .select("user.id", "id")
    .addSelect("user.password")
    .getMany();
   
   return res.json(results);

} 
*/
