import React, {useEffect} from 'react';
import './calc.css'

export default function Calc(){
    
    useEffect(() => {
        (function welcome(){
            var wel = prompt("please enter your name");
            alert("Welcome To Our Website" + " " + wel);
         }())
    },[]) 
        return(
            <div id='calculator-container'>
              <div id='input-box'>
                  <input type="text" id='input-box1' value='' placeholder="0" />
              </div>
              <div id='output-box'>
                  <input type="text" id='output-box1' value='' placeholder="0" />
              </div>
              <div>
                  <table>
                      <tr>
                          <td><button id='clear' onClick={()=>{document.getElementById("input-box1").value = '' ; document.getElementById("output-box1").value = ''}}>C</button></td>
                          <td><button id='delete'onClick={()=>{var final = document.getElementById("input-box1").value; document.getElementById("input-box1").value = final.slice(0,-1) }}>DEL</button></td>
                          <td><button id='operator' onClick={()=>document.getElementById("input-box1").value += "%"}>%</button></td>
                          <td><button id='operator' onClick={()=>document.getElementById("input-box1").value += "/"}>/</button></td>
                      </tr>
                      <tr>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 7}>7</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 8}>8</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 9}>9</button></td>
                          <td><button id='operator' onClick={()=>document.getElementById("input-box1").value += "*"}>*</button></td>
                      </tr>
                      <tr>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 4}>4</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 5}>5</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 6}>6</button></td>
                          <td><button id='operator' onClick={()=>document.getElementById("input-box1").value += "-"}>-</button></td>
                      </tr>
                      <tr>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 1}>1</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 2}>2</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 3}>3</button></td>
                          <td><button id='operator' onClick={()=>document.getElementById("input-box1").value += "+"}>+</button></td>
                      </tr>
                      <tr>
                          <td><button id='answer' onClick={()=>{var ans = document.getElementById("output-box1").value ; document.getElementById("input-box1").value = ans}}>ANS</button></td>
                          <td><button id='input-value' onClick={()=>document.getElementById("input-box1").value += 0}>0</button></td>
                          <td><button id="input-value" onClick={()=>document.getElementById("input-box1").value += "."}>.</button></td>
                          <td><button id='equal' onClick={()=>{ var result = document.getElementById("input-box1").value ; if(result == 0){alert("Please Enter a Number ")} else{var process = eval(result); document.getElementById("output-box1").value = process;} }}>=</button></td>
                      </tr>
                  </table>
              </div>
            </div>
        )
}