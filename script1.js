let existingi = localStorage.getItem("itemsArray");
let existingc = localStorage.getItem("caloriesArray");

var items=existingi ? JSON.parse(existingi) : [];
var cal=existingc ? JSON.parse(existingc) : [];

function addItem(){
    const item=document.getElementById("item");
    const calorie=document.getElementById("calorie");
    const i=item.value.trim();
    const c=calorie.value.trim();
    const r=document.getElementById('result');

    if(c<0 || c==""||i==""){
        r.innerHTML=`
            <p style="color: red;">Please enter a valid input!!</p>
        `
    }
    else{
        console.log(i);
        console.log(c);
        items.push(i);
        cal.push(c);
        item.value="";
        calorie.value="";
        r.innerHTML=`
            <p style="color: green;">Item added successfully...</p>
        `
    }
    localStorage.setItem("itemsArray", JSON.stringify(items));
    localStorage.setItem("caloriesArray", JSON.stringify(cal));

}

function calculate(){
    
    const item=document.getElementById("item");
    const calorie=document.getElementById("calorie");
    const i=item.value.trim();
    const c=calorie.value.trim();
    const r=document.getElementById('result');
    
    if(i!="" && c!=""){
        items.push(i);
        cal.push(c);
        item.value="";
        calorie.value="";
    }
    if(items.length==0){
        r.innerHTML=`
            <p style="color: orange;">Please add items to calculate total intake!!</p>
        `
    }
    else{
        let total=0;

        for(let val of cal){
            total+=Number(val);
            console.log(total);
        }

        let i=0;
        r.innerHTML="";
        for(i=0;i<cal.length;i++){
            r.innerHTML+=`
                <p>${items[i]} - ${cal[i]}</p>
            `;
        }

        r.innerHTML+=`
                <hr style="color: rgb(45, 196, 242);">
                <p style="font-weight:bold;font-size:20px">Total = ${total}</p>
            `;
    }

}
function clearData(){
   localStorage.clear();
    const r=document.getElementById('result');
    items=[]
    cal=[]
    localStorage.setItem("itemsArray", JSON.stringify(items));
    localStorage.setItem("caloriesArray", JSON.stringify(cal));
    r.innerHTML=`
                <p class="display-message">Please click 'Display Total' to get the total calorie intake</p>
            `;
}
