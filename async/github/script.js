function fetchUserInfo(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then((data)=>{
        document.getElementById("overview").innerHTML = `
          <div>
            <img width="150x" height="150px" src="${data.avatar_url}" alt="${data.login}">
            <h2>${data.login}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repositories: ${data.public_repos}</p>

          </div>
        `
    })
}
function fetchTotalRepos(username){
 return  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then((data)=>data.public_repos)
}
document.getElementById("search-btn").addEventListener("submit",(e)=>{
    console.log(e)
   e.preventDefault();
   const username = document.getElementById("username").value;
   if(username){
    fetchUserInfo(username)
    fetchRepos(username,1)
   }
})
async function fetchRepos(username,page){
   let data = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&page=${page}`)
   let result =await data.json()
   let repolist = result.map((repo)=>`
      <div>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>Description : ${repo.description || "no description available"}</p>
      </div>
   `).join("")
   document.getElementById("repos").innerHTML = repolist;
   fetchTotalRepos(username).then(totalRepos=>setPagination(username,page,totalRepos))

}
function setPagination(username,page,totalRepos){
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    let totalPage = Math.ceil(totalRepos/5);
    const createButton = (text,currentPage)=>{
      let button = document.createElement("button");
      button.textContent = text;
      button.onclick =function(){
        console.log("Adfar")
        console.log(currentPage)
        fetchRepos(username,currentPage)
      }
      return button

    }
    let prevButton = createButton("Prev",page-1);
    prevButton.disabled = page===1;
    pagination.appendChild(prevButton);

    const maxBtns = 5;
    let start = Math.max(1,page-Math.floor(maxBtns/2));;
    let end = Math.min(totalPage,start+maxBtns-1);
    for(let i=start;i<=end;i++){
      let button = createButton(i,i);
      button.disabled = i===page;
      pagination.appendChild(button);
    }

    let nextButton = createButton("Next",page+1);
    nextButton.disabled = page===totalPage;
    pagination.appendChild(nextButton)

}

// function setPagination(username,page){
//    let totalRepos = 86;
//    var btnCount = Math.ceil(totalRepos/5)

//     let pagination = document.getElementById("pagination");
//     let prevBtn = document.createElement("button")
//     prevBtn.textContent = "Prev";
//     prevBtn.onclick =function(){
//         fetchRepos(username,page-1)
//     }
    
//     pagination.appendChild(prevBtn)
//     for(let i=1;i<=btnCount;i++){
//         let btn = document.createElement("button")
//         btn.textContent = i;
//         btn.onclick = function(){
//             fetchRepos(username,i)
//         }
//         pagination.appendChild(btn)
//     }
//     let nextBtn = document.createElement("button")
//     nextBtn.textContent = "Next";
//     nextBtn.onclick =function(){
//         fetchRepos(username,page+1)
//     }
    
//     pagination.appendChild(nextBtn)
    
// }