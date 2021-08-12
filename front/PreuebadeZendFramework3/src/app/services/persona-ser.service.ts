import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class PersonaSerService {

 private myAppUrl = 'https://localhost:44308/';
 private myApiUrl = 'api/Persona/'


 private myApiUrlM = 'api/MaxTb/'
 private myApisUrl = 'api/Sector/'
 private myApizUrl = 'api/Zona/?idsector='
//////////////
private myurlts = 'http://localhost:3000/';
private ApiUrlts = 'Sectorcombobox/'

private apiUrlpersona = 'persona/'
private apiUrlAgrupar= 'personaidSector/'

  constructor( private http: HttpClient) { 

  }


  getListaSector(): Observable<any> {
    return this.http.get(this.myurlts + this.ApiUrlts);
     }


     getListaPersonas(): Observable<any> {
      return this.http.get(this.myurlts + this.apiUrlpersona );
       }
       savePersona(personas: any ):Observable<any> {
        return this.http.post(this.myurlts + this.apiUrlpersona,personas );
     
      }
       
 
      updatePersonas(id: number, persona:any): Observable<any>{

        return this.http.put(this.myurlts+ this.apiUrlpersona + id, persona);
      }
    
      getlistaAgrupadaXsector(id: number): Observable<any> {
        return this.http.get(this.myurlts + this.apiUrlAgrupar +id);
         }
  
         deletePersona(id: number):Observable<any>{
          return this.http.delete(this.myurlts+ this.apiUrlpersona + id);
        }
             

////////////////////////////////////

  

getListaZona(id: number ): Observable<any> {
  return this.http.get(this.myurlts + this.ApiUrlts +id );
   }
  
  


 

} 
