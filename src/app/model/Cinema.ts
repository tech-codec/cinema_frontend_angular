export interface Cinema {
  id:number;
  name:string;
  longitude:number;
  latitude:number;
  altitude:number;
  nombreSalles:number;
  ville:{
    id:number;
    name:string;
    longititude:number;
    latitude:number;
    altitude:number;
  }
}
