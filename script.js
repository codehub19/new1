const mediaForSidebar = window.matchMedia('(max-width: 1000px)')
const header = document.getElementById('header');
const sidebar = document.createElement('div');
const navbar = document.getElementById('navbar')
const line1 = document.createElement('div')
const line2 = document.createElement('div')
const line3 = document.createElement('div')

// const change = (e) =>{
//     if (e.matches){
//         header.removeChild(navbar)
//         sidebar.className = 'sidebar';
//         sidebar.id = 'sidebar'
//         sidebar.appendChild(line1);
//         sidebar.appendChild(line2);
//         sidebar.appendChild(line3);
//         header.appendChild(sidebar);
//     }
// }
// change(mediaForSidebar);


const handleWindowResize = () => {
    const windowWidth = window.innerWidth;
  
    if (windowWidth <= 1000) {
        // header.removeChild(navbar)
        sidebar.className = 'sidebar';
        sidebar.id = 'sidebar'
        sidebar.appendChild(line1);
        sidebar.appendChild(line2);
        sidebar.appendChild(line3);
        header.appendChild(sidebar);
    } else {
    //   header.appendChild(navbar);
    //   header.removeChild(sidebar)
    }
  };
  
 
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
  

const hamburger = document.getElementById('sidebar');
const sidenav = document.getElementById('sidenav');
const back = document.getElementById('back-img');


const openSidebar = () =>{

        sidenav.style.display = 'flex';
        openClose = false;
   
}

const closeSidebar = () =>{
    
    sidenav.style.display = 'none';
    openClose = true;

}
hamburger.onclick = openSidebar;
back.onclick = closeSidebar;
