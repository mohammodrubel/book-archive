const searchBook = ()=>{
    const inputFeld = document.getElementById('inputFeld')
    const inputValue = inputFeld.value
    inputFeld.value ='';
    
            // error massege 
            if (inputValue === ''){
                document.getElementById('ERORR').innerText='Search Value Is Empty !!!'
            }else{

                const url = `http://openlibrary.org/search.json?q=${inputValue}`;
        // console.log(url)
            fetch(url)
            .then(Response => Response.json())
            .then(data => displayShow(data.docs))

            }     
        
}

// const img =
const displayShow = search =>{
    const bookContainer =document.getElementById('bookContainer')
    bookContainer.textContent='';
    
   
    search.forEach( book => {
        
        document.getElementById('ERORR').innerText='';
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card ">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top imgcustom" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="text-danger">Author: ${book.author_name} </h6>
                <p>Pbulish Date: ${book.first_publish_year} </p>
                <p class="text-info">publisher: ${book.publisher} </p>
            </div>
        </div>
        `
    bookContainer.appendChild(div)
    })
    
}


