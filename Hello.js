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
