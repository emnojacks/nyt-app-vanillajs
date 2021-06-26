//emily jackson
//nyt api 
//module 04

//enter the api endpoint
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'Cr0sqEkMK5DW4GqI63SR423tuWvAOdbu'; //2
let url; //3
let img;


//SEARCH FORM
//targets the keyword search terms entered by users 
const searchTerm = document.querySelector('.search');
//targets the start and end date entered by users
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
//targets the form element in the html page 
const searchForm = document.querySelector('form');
//targets the submit button that is pressed to fetch results
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
//targets the next button in html doc 
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
let pageNumber = 0;
console.log("Page Number: ", pageNumber);
//this will be turned on in another func
let displayNav = false;
//sets the pagination display of results to off until we actually retrieve search results
nav.style.display = "none";


//RESULTS SECTION
const section = document.querySelector('section');

//ADDING EVENT LISTENERS TO TARGET OBJECTS
//we want to be able to type in key words in the search form bar
//fetch the data from the database the fits the search terms 
//display them on multiple pages as needed and allow users to 
//page thru the results

//adds event listener to form's submit action (not button) - on submitBtn to call the function fetchResults 
// the FIRST call to the fetchResults function
searchForm.addEventListener('submit', fetchResults);
//adds event listener to nextBtn that when clicked it will run the function nextPage
nextBtn.addEventListener('click', nextPage);
//ibid for previousPage function
previousBtn.addEventListener('click', previousPage);


//nextPage func
function nextPage(event) {
    //increments page and refetches results 
    pageNumber++;
    fetchResults(event);
    console.log("Page: ", pageNumber);
}

//previousPage func
function previousPage(event) {
    //checks if the user is on the first page, if not it decrements the page number 
    //then reruns the fetch statement
    if (pageNumber > 0) {
        pageNumber--;
        //else the user is on page 0 and nothing happens
    } else {
        return;
    }
    fetchResults(event);
    console.log("Page: ", pageNumber);
}

//FUNCTIONS

//add an event handler 
//Every event handling function receives an event object. For the purpose of this discussion, 
//think of an object as a "thing" that holds a bunch of properties (variables) and methods (functions). 
//The handle, the e, is similar to a variable that allows you to interact with the object.
function fetchResults(event) {
    //prevents page from submitting/sending data bc we want to retrieve data using POST not alter anything 
    //post is used to alter datasets*, GET is not
    event.preventDefault();
    //console.log(event);
    //assemble the full unique URL with key value pair parameters sep by & that will be used to call the API
    //you take the baseURL then you ask which API is being used with ?
    //then add the API key we were given so they know which dev/user the info is being requested by 
    //then ask what page and insert pageNumber var 
    //then ask the query and return the value of the search term using a method 
    //then u console log the URL so you can see if it's writing properly
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL: ", url);

    //DATES
    //user input validation of dates - anything other than an empty string will prompt if stmt
    //*start and end dates are not set to required in form, only key word search is
    if (startDate.value !== '') {
        //a form is an object, you retrive form data via method .value
        console.log(startDate.value);
        //change value of URL post to API based on new search terms, sets key value pair 
        //of begin date (property in object of NYT) to our property called startDate 
        url += '&begin_date=' + startDate.value;
    };
    if (endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };

    //FETCH 
    //fetch is a reserved word - it is a built in func in js
    //we used fetch bc it may take time to retrive the resource from the server 
    //and fetch is async so other code can run in background
    //the url is given to fetch as a param
    fetch(url)
        //promise resolution = result which is then jsonified from a string to an object 

    .then(function(result) {
            console.log(result)
            return result.json();
        })
        //then the result recieved which is now in json form is sent to another function called displayResults 
        .then(function(json) {
            displayResults(json);
        });

    //not sure why you can declare a func and pass a param at the same time
    function displayResults(json) {
        //while a first child exists (is true)
        while (section.firstChild) {
            //remove them plz
            section.removeChild(section.firstChild);
        }
        //console.log("Display Results", json);
        let articles = json.response.docs;
        //console.log(articles.length)
        //technically this if-else statement should be in reverse and it would run faster
        if (pageNumber === 0 && articles.length >= 10) {
            nav.style.display = "block";
            previousBtn.style.display = "none";
            nextBtn.style.display = "block";
        } else if (pageNumber !== 0 && articles.length >= 10) {
            nav.style.display = "block";
            previousBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else if (pageNumber !== 0 && articles.length < 10) {
            nav.style.display = "block";
            previousBtn.style.display = "block";
            nextBtn.style.display = "none";
        } else {
            nav.style.display = "none";
        }

        //if (articles.length >= 10) {
        //turns the display of the nav to true / ON if there are 10 or more items to display
        //nav.style.display = "block";
        //} else if (articles.length < 10 && pageNumber > 0) {
        // nav.style.display = "block"; //displays pagination if there are less than 10 articles in array
        // nextBtn.style.display = "none"; // hides next button
        //} else if (articles.length >= 10 && pageNumber == 0) {
        //  nav.style.display = "block"; //displays pagination if there are more than 10 articles to display and pageNumber is 0
        //previousBtn.style.display = "none"; // hides next button
        //} else {
        // nav.style.display = "none"; //hides pagination
        //}


        if (articles.length === 0) {
            //checks length of array (which is an object)
            console.log("no results to display");
        } else {
            //display the articles using a loopdy
            for (let i = 0; i < articles.length; i++) {
                //console.log(i);
                //^ returns article number and nothing else
                //this is creating an article element in html with a header
                //it's not changing articles variable
                //article elem stands alone in html hence it's title
                //create doc fragments / elements
                let article = document.createElement('article');
                let heading = document.createElement('h2');
                let img = document.createElement('img');
                let link = document.createElement('a');
                let para = document.createElement('p');
                let clearfix = document.createElement('div');

                let current = articles[i];
                console.log("Current: ", current);
                //pulling props from NYT obj and appending our our var
                link.href = current.web_url;
                //pulling props from NYT object, sets link content to whats fetched from NYT 
                link.textContent = current.headline.main;
                //sets para content to keywords?
                para.textContent = 'Keywords: ';

                //this nested for loop iterates over the current article object (the keywords array)
                //it iterates thru the length of the keywords array and creates a span for each keyword
                for (let j = 0; j < current.keywords.length; j++) {
                    //creates a span in the DOM
                    let span = document.createElement('span');
                    //sets the text content of the span to equal the current keyword 
                    span.textContent += current.keywords[j].value + ' ';
                    //adds the text span to the paragraph to show the keywords inside
                    para.appendChild(span);
                }
                if (current.multimedia.length > 0) {

                    img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
                    img.alt = current.headline.main;
                }
                //clearfix is a class in nyt.css 
                clearfix.setAttribute('class', 'clearfix');
                //now insert the elements created into the DOM 
                //this will display them at the end of the body :(
                //syntax: where you are appending then what you are appending
                //the order of this should be reversed - the article should be appended first 
                //then an insertBefore statement should be used to append the header above
                article.appendChild(heading);
                heading.appendChild(link);
                article.appendChild(img);
                article.appendChild(para);
                article.appendChild(clearfix);
                section.appendChild(article);
            }
        }
    };
    //normally all of the above is in fat arrows bc they're anon funcs
}