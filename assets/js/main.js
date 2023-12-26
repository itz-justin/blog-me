var navItems = document.querySelector('.nav__items');
var openNavBtn = document.querySelector('#nav__open');
var closeNavBtn = document.querySelector('#nav__close');

// open nav items
const openNav = () =>{
    navItems.style.display ='flex';
    openNavBtn.style.display ='none';
    closeNavBtn.style.display ='inline-block';
}
// close nav items
const closeNav = () =>{
    navItems.style.display ='none';
    openNavBtn.style.display ='inline-block';
    closeNavBtn.style.display ='none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


// ===== small screen dashboard

const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

const showSidebar = () =>{
    sidebar.style.left = '0';
    showSideBarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}
const hideSidebar = () =>{
    sidebar.style.left = '-100%';
    showSideBarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display = 'none';
}



showSideBarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);


