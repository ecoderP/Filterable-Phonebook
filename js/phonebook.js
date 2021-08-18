//THIS PART ADDS TOTAL NUMBER OF CONTACTS ON OUR LIST TO THE HEADER
let totalContacts = document.getElementById('totalContacts');
let ul = document.getElementById('contacts');
let li = ul.querySelectorAll('li.list__item');

totalContacts.innerHTML = li.length +' contacts';


//THIS PART TOGGLES THE SEARCH ICONS ON MOBILE
let bxSearch = document.querySelector('.bx-search');


bxSearch.addEventListener('click', searchBox);

function searchBox() {
    let searchField = document.getElementById('search__field');
    let form = document.getElementById('form'); //Grab new contact form
    if(searchField.classList.contains('toggle-mobile')) {
        searchField.classList.remove('toggle-mobile');
        form.classList.add('toggle-mobile'); //Close form when search field opens
    }    else {
        searchField.classList.add('toggle-mobile');
    }
}


//THIS PART TOGGLES THE ADD CONTACTS FORM ON MOBILE
let bxPlus = document.querySelector('.bx-plus');


bxPlus.addEventListener('click', addContact);

function addContact() {
    let form = document.getElementById('form');
    let searchField = document.getElementById('search__field'); //Grab search field
    if(form.classList.contains('toggle-mobile')) {
        searchField.classList.add('toggle-mobile'); //Close search field when form opens
        form.classList.remove('toggle-mobile'); 
    }    else {
        form.classList.add('toggle-mobile');
    }
}


// THIS PART APPENDS A NEW CONTACT TO OUR LIST
let formSubmit = document.getElementById('form');

formSubmit.addEventListener('submit', addNum);

function addNum(e) {
    e.preventDefault();
    const firstName = document.getElementById('fName').value; //Grab input form values
    const lastName = document.getElementById('lName').value;
    const phoneNum = document.getElementById('pNum').value;
    
    const ul = document.getElementById('contacts'); // Grab elements and ...
    let newLi = document.createElement('li');      //... Set their attributes
    newLi.setAttribute('class', 'list__item')
    let newA = document.createElement('a');
    let newI = document.createElement('i');
    newI.setAttribute('class', 'bx bxs-user-circle'); 
    let newPara = document.createElement('p');
    
    newPara.innerText = phoneNum;  // input inner texts and...
    
    newA.appendChild(newI);     //... append child elements
    newA.append(' ' + firstName +' '+ lastName +' ');
    newA.appendChild(newPara);

    newLi.appendChild(newA);
    ul.appendChild(newLi);



     // THIS SORTS CONTACTS ALPHABETICALLY AND APPENDS
   let allListItems = ul.getElementsByTagName('li');
   Array.from(allListItems)
   .sort((a,b) => a.textContent.localeCompare(b.textContent))
   .forEach(allListItems => ul.appendChild(allListItems));
   
    let li = document.querySelector('.p');
    console.log(li.textContent);
    console.log(allListItems);
}






//THIS PART ADDS THE FILTER FUNCTION
let searchField = document.getElementById('search__field');


searchField.addEventListener('keyup', filterList);

function filterList() {
    //Grab input values and convert to uppercase 
    let searchValue = document.getElementById('search__field').value.toUpperCase();    
    
    //Grab ul
    let ul = document.getElementById('contacts');
    //Grab lis
    let li = ul.querySelectorAll('li.list__item');
    
    //Loop through the list
    for(i = 0; i < li.length; i++) {
        let aTags = li[i].getElementsByTagName('a')[0];
        

        if(aTags.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

