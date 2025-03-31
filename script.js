// async function fetchData(){
//     try{
//         const res = await fetch("data.json");
//     if (!res.ok){
//         throw new Error("failed");
//     }
//     const data = await res.json();
//     console.log(data);
//     displayData(data);
//     } catch (error){
//     console.log(error);
// }
// }


const container=document.getElementById("job-advert")
console.log(container);


  

async function fetchData() {
    try {
      const res = await fetch("data.json");
      if (!res.ok) {
        throw new Error("failed");
      }
      const data = await res.json();
    //   console.log(data);
      displayData(data);
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();


  function displayData(fetchData) {
   console.log(fetchData);
   container.innerHTML="";
   container.innerHTML=fetchData.map((eachData, index) => {
    return`<main id="job-advert">
            <div class="hero">
        <div class="photosnap--img">
            <div class"photosnaplogo">
                <img src="./img/photosnap.svg" alt="photosnap img">
            </div>
            <div class="phtsnp">
                <div class="photosnap">
                    <div> <p class="photo--prg">${eachData.company} </p> </div>
                   ${eachData.new ? '<button class="btn--new">New!</button>' : ''}
                ${eachData.featured ? '<button class="btn--ft">Featured</button>' : ''}
                </div>

                <h3>${eachData.position}  </h3>
                <div>
                    <pre> ${eachData.postedAt} . ${eachData.contract} . ${eachData.location} </pre>
                </div>
            </div>

        </div>
        <div class="frontend">
             ${eachData.role ? `<div class="frnt">${eachData.role}</div>` : ''}
             ${eachData.level ? `<div class="frnt">${eachData.level}</div>` : ''}
             ${eachData.languages.map((language) => `<div class="frnt">${language}</div>`).join('')}
        </div>
    </div>
</main>`
     
  })
  .join("");
}







  
  



// function displayData(fetchData) {
//   console.log(fetchData);
//   container.innerHTML = "";

//   const jobListings = fetchData.map((eachData, index) => {
//     return `
//       <main id="job-advert">
//         <div class="hero">
//           <div class="photosnap--img">
//             <div class="photosnaplogo">
//               <img src="./img/photosnap.svg" alt="photosnap img">
//             </div>
//             <div class="phtsnp">
//               <div class="photosnap">
//                 <div>
//                   <p class="photo--prg">${eachData.company}</p>
//                 </div>
//                 ${eachData.new ? '<button class="btn--new">New!</button>' : ''}
//                 ${eachData.featured ? '<button class="btn--ft">Featured</button>' : ''}
//               </div>
//               <h3>${eachData.position}</h3>
//               <div>
//                 <pre>${eachData.postedAt} . ${eachData.contract} . ${eachData.location}</pre>
//               </div>
//             </div>
//           </div>
//           <div class="frontend">
//             ${eachData.role ? `<div class="frnt">${eachData.role}</div>` : ''}
//             ${eachData.level ? `<div class="frnt">${eachData.level}</div>` : ''}
//             ${eachData.languages.map((language) => `<div class="frnt">${language}</div>`).join('')}
//           </div>
//         </div>
//       </main>
//     `;
//   }).join('');

//   container.innerHTML = jobListings;
// }

