arr = [
    
    {
        name: "Person 1",
        status: "Stranger",
        pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
    },
    {
        name: "Person 2",
        status: "Stranger",
        pic: "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
        name: "Person 3",
        status: "Stranger",
        pic: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"

    }
];
 function print(){
    
var clutter = ""
arr.forEach(function(elem, index){
    clutter+=`<div class="box">
    <div class="img">
        <img src="${elem.pic}" alt="">
    </div>
    <h3><i>${elem.name}</i></h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <h4 id="${elem.status.split(" ").join("")}">${elem.status}</h4>
    <button id="${index}">${elem.status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
</div>`
});


document.querySelector("#main").innerHTML=clutter

 };

 print();

document.querySelector("#main").addEventListener("click", function(dets){
    arr[dets.target.id].status="Friend Request Sent"
    setTimeout(function(){
        arr[dets.target.id].status="Friends"
        print();
    
    },2000);
    print();
    
})
