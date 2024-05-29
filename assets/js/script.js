let tabs = Array.from(document.querySelectorAll("button[data-tab]"));
tabs.map(tab => {
    tabs[0].click();
    tab.addEventListener("click",function(){
        let selector = `.featured-courses-${this.dataset.tab} .carousel-item`;
        let courses = document.querySelectorAll(selector);
        // console.log(courses)
        courses.forEach((el) => {
            const minPerSlide = 4;
            let next = el.nextElementSibling;
            for (let i = 1; i < minPerSlide; i++) {
                if(!next){
                    next = courses[0];
                };
                let cloneChild = next.cloneNode(true);
                el.appendChild(cloneChild.children[0]);
                next = next.nextElementSibling;
            };
        });
    })
})

// let items = document.querySelectorAll('.carousel-cards .carousel-item') //Selects carousel items
// items.forEach((el) => {
//   const minPerSlide = 4        // Number of slides per carousel item
//   let next = el.nextElementSibling      //selecting the next slide in carousel
//   for (var i=1; i<minPerSlide; i++) {
//     if (!next) {    //checks if there is a next slide in carousel, else appends the first slide
//       next = items[0]
//     }
//   let cloneChild = next.cloneNode(true) //clones the next node
//   el.appendChild(cloneChild.children[0]) //appends the first slide in node to the current slide
//   next = next.nextElementSibling //selects the next slide
//   }
// })