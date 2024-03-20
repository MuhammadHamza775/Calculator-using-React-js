import React, { useEffect, useState } from 'react'
import "../sass/home.scss"

const Home = () => {
const[input,setinput]=useState("");
const[result,setesult]=useState("");
const[screen,setscreen]=useState(true);
const[birth,setbirth]=useState("");
const[age,setage]=useState("");
const[month,setmonth]=useState("");
const[days,setdays]=useState("");

useEffect(() => {
    setage("");
    setbirth("");
    setdays("");
    setmonth("");
  }, []); 
const handlechange = (event) => {
    const newValue = event.target.value;
    let chk=input.charAt(input.length - 1);
   
    if (isNaN(chk) && isNaN(newValue)) {
        console.log(chk)
        return;
        }
    setinput(input=>input+newValue)
  };


const allclrar=()=>{
    setinput("");
    setesult("");
}
const back=()=>{
    setinput(input.slice(0,-1));
    console.log(input);
    console.log(input.pop);
}

const showres=()=>{
    console.log(input);
    let chk=input.charAt(input.length - 1);
    if (isNaN(chk)) {
       alert("not a valid input");
        return;
        }
    let res=eval(input.toString());
    console.log(res);
    setesult(res);
}
const screen1=()=>{
    setscreen(true);
}
const screen2=()=>{
    setscreen(false);
}
const handlechangedate=(e)=>{
    console.log(typeof(e.target.value));
    setbirth(e.target.value)
}
const agefinder=()=>{
   if(birth){
    const currentdate=new Date().getFullYear();
    const yourage=new Date(birth).getFullYear();
     let totalage=currentdate-yourage;
    setage(totalage);
    setmonth("");
    setage("");
    console.log(totalage);
   }
   else{
    alert("please Select you age");
    return ;
   }

 

}


const monthfinder=()=>{
    if(birth){
        const currentdate=new Date().getTime();
         const yourage=new Date(birth).getTime();
         let totalage=currentdate-yourage;
         setmonth(Math.round(totalage/(1000*60*60*24*30)));
      
        setage("");
        setdays("");
       }
       else{
        alert("please Select you age");
        return ;
       }
}


const daysfinder=()=>{
    if(birth){
        const currentdate=new Date().getTime();
         const yourage=new Date(birth).getTime();
         let totalage=currentdate-yourage;
         setdays(Math.round(totalage/(1000*60*60*24)));
      
        setage("");
        setmonth("");
       }
       else{
        alert("please Select you age");
        return ;
       }
}
const sty={
    color:"blue",
    marginTop:"40px",
    fontSize:"30px",
    marginBottom:"20px",
  fontWeight:"bold",
  fontFamily:"sans-serif"

}
    return (
        <>

     { screen?<h4 style={sty}>Calculator App</h4>:<h4 style={sty}>Age Calculator</h4>}
                   <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 colsm-6 mx-auto">
                        <div style={{justifyContent:"center"}} className="buttons mt-3 d-flex justify-content-around">
                       <button onClick={screen1} className='btn' style={{backgroundColor:"blue",color:"white"}}>Calculator</button>
                       <button onClick={screen2} className='btn' style={{backgroundColor:"blue",color:"white"}}> Age Calculator</button>
                    </div>
                        </div>
                    </div>
                   </div>


                   {
                    screen?
                    <> <div className="calculator"> 
                    <div className="container ">
                        <div className="row" >
                            
                            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto ">
                                <div className="start">
        
                                    <div className="inputscreen ">
                                        <div className="inputs">{input?input:0}</div>
                                        <div className="result ">{result?result:0}</div>
                                    </div>
        
                                    <div className="allbuttons">
                                        <button className='btn operator' onClick={allclrar} >AC</button>
                                        <button className='btn operator' onClick={back} >Back</button>
                                        <button className='btn operator' value="+" onClick={handlechange} >+</button>
                                        <button className='btn operator ' value="-" onClick={handlechange} >-</button>
        
        
                                        <button className='btnn' value="1" onClick={handlechange} >1</button>
                                        <button className='btnn' value="2" onClick={handlechange} >2</button>
                                        <button className='btnn ' value="3" onClick={handlechange} >3</button>
                                        <button className='btn operator ' value="*" onClick={handlechange} >*</button>
        
                                        <button className='btnn' value="4" onClick={handlechange} >4</button>
                                        <button className='btnn' value="5" onClick={handlechange} >5</button>
                                        <button className='btnn ' value="6" onClick={handlechange} >6</button>
                                        <button className='btn operator ' value="/" onClick={handlechange} >/</button>
        
                                        <button className='btnn' value="7" onClick={handlechange} >7</button>
                                        <button className='btnn' value="8" onClick={handlechange} >8</button>
                                        <button className='btnn ' value="9" onClick={handlechange} >9</button>
                                        <button className='btn operator ' value="%" onClick={handlechange} >%</button>
        
                                        <button className='btnn' value="0" onClick={handlechange} >0</button>
                                        <button className='btnn' value="." onClick={handlechange} >.</button>
                                       
                                        <button style={{gridColumn: "3/5",width:"150px"}}  className='btn operator ' onClick={showres} >=</button>
                                    </div>
        
        
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                    </>:
                    <>
                    <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                           <div className="button mt-3"><button className='btn btn-info text-white' onClick={agefinder}>Total Age</button></div>
                           <div className="button mt-3"><button className='btn btn-warning text-white' onClick={monthfinder}>Total months</button></div>
                           <div className="button mt-3"><button className='btn btn-warning text-white' onClick={daysfinder}>Total days</button></div>
                           <div style={{padding:"0",color:"black"}} className='btn mt-3 mx-0'><label className='form-label'>Select Date your Date Of Birth</label>
                           <input style={{backgroundColor:"black",color:"white"}} type='date' placeholder="YYYY-MM-DD" id="dob" name="dob" onChange={handlechangedate} className='form-control'   /></div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                         {birth?   <h6 className='text-center mt-3'>Your Date of Birth Is : <span style={{color:"green"}}>{birth}</span></h6>:""}

                         {age? <div className="text-center mt-4 text-uppercase"><h6>You Are Now  <span style={{color:"red",fontSize:"35px"}}>{age}</span> Years old</h6></div>:""}
                         {month? <div className="text-center mt-4 text-uppercase"><h6> <span style={{color:"red",fontSize:"35px"}}>{month}</span>  Months You Have Born</h6></div>:""}
                         {days? <div className="text-center mt-4 text-uppercase"><h6> <span style={{color:"red",fontSize:"35px"}}>{days}</span>  Days You Have Born</h6></div>:""}
                        </div>
                    </div>

                  </div>
         
                    </>
                   }



                  

        </>
    )
}

export default Home
