// var a=0;
// function icrement1(){
//        a++
//      document.getElementById("boutonac1").innerText=a

// }
// function icrement2(){
    
//     if(a>0) 
//     {
//         a--
//     }
//     else a=0
    
//   document.getElementById("boutonac1").innerText=a

// }
var data=["",0,0,0];
var p=["",80,120,90]
var t=[]
 function icrement(i){
       
   
    data[i]++
    t[i]=p[i]*data[i]
    T=t.reduce((a,b)=>a+b)

  
     document.getElementById("boutonac"+i).innerText=data[i]
     document.getElementById("item-price"+i).innerText=t[i]+"dt"
     document.getElementById("tot-shop").innerText=T+"dt"
      

 }
 function decrement(i){
    
        if((data[i]>0) && (p[i]>0))
        {
            data[i]--
            
           
        }
        else data[i]=0
        t[i]=p[i]*data[i]
        T=t.reduce((a,b)=>a+b)
        document.getElementById("tot-shop").innerText=T+"dt"
        
        
      document.getElementById("boutonac"+i).innerText=data[i]
      document.getElementById("item-price"+i).innerText=t[i]+"dt"
    
    }
var tab=document.querySelectorAll('.shoping-item-delete');
for(i=0;i<=3;i++)
{ if( tab[i]){
   tab[i].addEventListener('click',
   function(event){
    // event.Target.parentNode.parentNode.remove()
   event.target.parentNode.parentNode.remove()
  
  
  })
}
  }
