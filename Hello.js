var array =[
    {
    name:"Kajal sen",
    status:"Strangers",
    pic:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name : "Ruchi",
        status : "Strangers",
        pic:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name : "Harsh Vardhan",
        status : "Strangers",
        pic : "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

    },
];

    function print(){
        clutter=""
        array.forEach(function(elem, index){
            clutter+=`<div class="card">
            <div class="pic">
                <img src=${elem.pic} alt="">
            </div>
            <h2>${elem.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore est tenetur sequi exercitationem nihil explicabo.</p>
            <h4>${elem.status}</h4>
            <button id="${index}" >Add friend</button>
        </div>`
        
    
        })
        document.querySelector("#main").innerHTML=clutter
    }
    print();

    document.querySelector("#main").addEventListener("click",function(dets){
        arr[dets.target.id].status = "friend request sent";
        print();

    })
