// tugas hari ini 

const faktorial = (num) =>{
   
    if (num === 0 || num === 1)
      return 1;
    
   
    for (let i = num - 1; i >= 1; i--) {
      
      num *= i;
      
    
    }
    return num; 
    
  }
  

  const Rstring = (name) => {

    let x ="";

    for (let i = name.length -1 ; i >= 0 ; i--){
        
        x += name[i];
    }
    return x;
  }

  const Rarray = (arr) => {
      let x =[];
      for (let i = arr.length - 1 ; i >= 0 ; i--){
        x.push(arr[i])
      }
      return x;
  }

  const grade = (abc) => {
      let x = "";
      let r = [];
      for (i=0;i < abc.length ;i++){
          x = "";
          if(abc[i] >= 85){
              x ="A";
          }else if (abc[i] >= 80){
              x="-A";
          }else if (abc[i] >= 75){
              x="B";
          }else if (abc[i] >= 70){
              x="-B";
          }else if (abc[i] >= 65){
              x="C";
          }else if (abc[i] >= 60){
              x="-C";
          }else if (abc[i] >= 55){
              x="D";
          }else if (abc[i] >= 50){
              x="-D"
          }else {
              x="F"
              console.log("aku butuh belajar banyak")
          }
          r.push(x);

      }
      return r ;
  }

  const perkalian = (x) => {
      
      for (i=1;i<=10;i++){
          let hasil = i*x;
          console.log(`${x} X ${i} = ${hasil}`);
      }
     
  }