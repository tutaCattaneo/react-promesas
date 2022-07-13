import React from "react";
import "./style.css";

export default function App() {
    //const promesa = new Promise((resolve,reject)=>{
      // setTimeout(()=>{
           //Peticion al servidor y nos retorna una respuesa
           //Llamamos al resolve para que la peticion se cumpla
          // const respuesta= 100;
         //  resolve(respuesta);
     //  },2000)
   // });

   //   promesa.then((param)=>{
             //console.log(param);
     // })

   //Segundo caso
   // let x =10;
    // const promesa2= new Promise((resolve,reject)=>{
     //   if(x==11){
       //    resolve("La variable es igual a 10");
      //  }else{
       //   reject("Error en la variable");
    //    }
    //  });
     //    promesa2.then((ress)=>{
         //console.log('correcto' + ress);
    //  })
    //  .catch((error)=>{
        //console.log('error' + error);
    //  });

      //Tercer caso
    //let x = 10;
   // console.log('1. Proceso iniciado...');
   // setTimeout(()=>{
    //   x=x *3 +2;
      // console.log('2. Proceso terminado');
    //},2000);
      // console.log('3. El resultado es: ' + x);
      //PASAR EL TERCER CASO A PROMESAS
       //let x = 10;
    //  const promesa = new Promise((resolve,reject)=>{
      //  setTimeout(()=>{
        //   x=x*3+2;
          // console.log('2. proceso terminado');
         //  resolve(x);
      //  },2000)
   //   });
     //  console.log('1. Proceso iniciado...');
     //  promesa.then((res)=>{
      //    console.log('3. El resultado es: ' + res);
   //    });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
