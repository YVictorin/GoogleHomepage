
const searchBar = document.querySelector('.content .content--searchbar'); //the input
const wrapper  = document.querySelector('.content .content--searchbar-wrapper'); //the input's div
const googleLogo = document.querySelector('.content .content--logo');
const searchButton = document.querySelector('.btn__search');
const footer = document.querySelector('footer-section');

const settings = document.querySelector('#right-side__settings');
const imageSearchButton = document.getElementById('image__btn--search');
const advancedSearchLink = document.getElementById('content__li--advanced');
const findSection = document.querySelector('.find');
const advancedSearchButton = document.querySelector('.narrow__btn--searching');
const settingsPopup = document.querySelector('.content__div--advanced-search');



    if(findSection) {
        let advancedSearchURL = 'https://www.google.com/search?as_q=music&as_epq=best&as_oq=classic&as_eq=bad&as_nlo=1&as_nhi=10&lr=lang_en&cr=&as_qdr=all&as_sitesearch=.org&as_occt=any&as_filetype=&tbs='
        
       


        
        
        advancedSearchButton.addEventListener("click", () => {
       
            const allInputs = document.querySelectorAll('input');
            const allSelects = document.querySelectorAll('select');
            
            let selectsArr = Array.from(allSelects);
            let inputsArr = Array.from(allInputs);


            
            
            
            advancedSearchURL = `https://www.google.com/search?as_q=${inputsArr[1].value}&as_epq=${inputsArr[2].value}&as_oq=${inputsArr[3].value}&as_eq=${inputsArr[4].value}&as_nlo=${inputsArr[5].value}&as_nhi=${inputsArr[6].value}&lr=lang_${selectsArr[0].value.toLowerCase()}&cr=${selectsArr[1].value}&as_qdr=all&as_sitesearch=${inputsArr[7].value}&as_occt=${selectsArr[3].value}&as_filetype=${selectsArr[4].value}&tbs=${selectsArr[5].value}`;
            
            window.location.href = advancedSearchURL;
           
           
        })

       
        
    }
   
    
    if (advancedSearchLink) {
        advancedSearchLink.addEventListener("click", () => {
        window.location.href = "advanced.html";  
        
    })
    } 
    
    if(imageSearchButton) {
        imageSearchButton.addEventListener("click", () => {
            window.location.href = `https://www.google.com/search?q=${searchBar.value}&sca_esv=ede45a10bafd6a14&sxsrf=ADLYWIIuH75-l8rloXLsbCwLyy4CsydziA:1728046724427&source=hp&biw=1680&bih=928&ei=hOb_ZrqIGLPe5NoPjYjc4Ag&iflsig=AL9hbdgAAAAAZv_0lH6jQIjlLBQZKdh5zMdVjRGpxKXQ&ved=0ahUKEwi62qbZ4_SIAxUzL1kFHQ0EF4wQ4dUDCBA&uact=5&oq=cog&gs_lp=EgNpbWciA2NvZzILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgARI6BlQqw5YpBhwAXgAkAEAmAE6oAGjAaoBATO4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCBKACtgGoAgrCAgcQIxgnGOoCwgIEECMYJ8ICEBAAGIAEGLEDGIMBGIoFGArCAg4QABiABBixAxiDARiKBZgDCZIHATSgB5QT&sclient=img&udm=2`;
        
    })
    }
    
    if(searchButton){
        searchButton.addEventListener("click", () => { 
        alert('Taking you to results of ' + searchBar.value);
        window.location.href = `https://www.google.com/search?q=${searchBar.value}&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgYIBxBFGEDSAQk0MjIxNmowajeoAgewAgE&sourceid=chrome&ie=UTF-8`; 
        
    });
    }

    settings.addEventListener("click", () => {
        settingsPopup.style.visibility = 'visible';
    })
    
    
   
    

