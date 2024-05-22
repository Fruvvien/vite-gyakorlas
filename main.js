import { Pont } from "./pont";
import { Teglalap } from "./teglalap";
import "bootstrap/dist/css/bootstrap.min.css";


const teglalapform = document.getElementById("teglalapForm");
const kordinataform= document.getElementById("kordinataForm");

teglalapform.addEventListener("submit", (event) =>{
    event.preventDefault();
    const a = document.getElementById("a");
    const b = document.getElementById("b");


    const teglalap = new Teglalap(parseInt(a.value), parseInt(b.value));


    const tbody1 = document.getElementById("tbody1")
    const tr1= document.createElement("tr");
    tbody1.appendChild(tr1);

    const td1 = document.createElement("td");
    td1.textContent = a.value;
    tr1.appendChild(td1)
    
    const td2 = document.createElement("td");
    td2.textContent = b.value;
    tr1.appendChild(td2)

    const td3 = document.createElement("td");
    td3.textContent = teglalap.terulet();
    tr1.appendChild(td3)

    const td4 = document.createElement("td");
    td4.textContent = teglalap.kerulet();
    tr1.appendChild(td4)
    

   /*  let table =
    ` 
    <tr>
    <td>${a.value}</td>
    <td>${b.value}</td>
    <td>${teglalap.terulet()}</td>
    <td>${teglalap.kerulet()}</td>
    </tr>
    ` */


    
})

kordinataform.addEventListener("submit", (event) =>{
    event.preventDefault();
    const x = document.getElementById("x");
    const y = document.getElementById("y");


    const kordinata = new Pont(parseFloat(x.value), parseFloat(y.value));

    const tbody2 = document.getElementById("tbody2")
    const tr1= document.createElement("tr");
    tbody2.appendChild(tr1);

    const td1 = document.createElement("td");
    td1.textContent = x.value;
    tr1.appendChild(td1)
    
    const td2 = document.createElement("td");
    td2.textContent = y.value;
    tr1.appendChild(td2)

    const td3 = document.createElement("td");
    td3.textContent = kordinata.origotolTavolsag().toFixed(3);
    tr1.appendChild(td3)




   /*  let table =
    ` 
    <tr>
    <td>${x.value}</td>
    <td>${y.value}</td>
    <td>${kordinata.origotolTavolsag().toFixed(3)}</td>
    </tr>
    ` */

    
})



