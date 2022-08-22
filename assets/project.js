// let postProject = []

// function addPost(event) {
//     event.preventDefault()

//     let name = document.getElementById("name").value     
//     let start = document.getElementById("start-date").value
//     let end = document.getElementById("end-date").value
//     let desc = document.getElementById("desc").value    
//     let image = document.getElementById("file").files   
//     let html = document.getElementById("html").checked    
//     let js = document.getElementById("js").checked    
//     let css = document.getElementById("css").checked    
//     let node = document.getElementById("node").checked  
    
//     image = URL.createObjectURL(image[0])
    
//     function date() {
//         let time = Math.abs(new Date(start) - new Date(end));

//         let years = Math.floor(time / (1000 * 60 * 60 * 24 * 30 * 12));
//         let month = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
//         let days = Math.floor(time / (1000 * 60 * 60 * 24));

//         if (years > 0){
//             return `${years} Years`
//         } else if (month > 0){
//             return `${month} Month`
//         } else if (days > 0){
//             return `${days} Days`
//         } else {
//             return `-`
//         }
//     }

//     let post = {
//         name,
//         dates: date(start, end),
//         desc,
//         image,
//         html,
//         js,
//         css,
//         node
//     }

//     postProject.push(post)
//     renderPost()
// }

// function renderPost() {
//     document.getElementById("project-post").innerHTML = ``

//     console.log(postProject);

//     for (let i = 0; i < postProject.length; i++) {
//         document.getElementById("project-post").innerHTML += `
//             <div class="head-post">
//                 <div class="post">
//                     <a href="detail-project.html">
//                         <div class="gambar">
//                             <img class="img" src="${postProject[i].image}" alt="">
//                         </div>
//                         <h2>${postProject[i].name}</h2>
//                     </a>
//                     <p class="duration">Durasi : ${postProject[i].dates}</p>
//                     <div class="description">
//                         <p>${postProject[i].desc}</p>
//                     </div>
//                     <div id="icon" class="icon">
//                         ${postProject[i].html?`<i class="fa-brands fa-html5 fa-2x html"></i>` : ""}
//                         ${postProject[i].css?`<i class="fa-brands fa-css3 fa-2x css">` : ""}</i>
//                         ${postProject[i].js?`<i class="fa-brands fa-js fa-2x js">` : ""}</i>
//                         ${postProject[i].node?`<i class="fa-brands fa-node-js fa-2x node">` : ""}</i>
//                     </div>
//                     <div class="upload">
//                         <button type="button" class="edit">Edit</button>
//                         <button type="button" class="delete">Delete</button>
//                     </div>
//                 </div>
//             </div>
//         `
//     }
// }