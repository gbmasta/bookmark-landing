export const toggleMobileNav = () => {
   const menuBtn = document.querySelector('#menu-btn');
   const closeBtn = document.querySelector('#close-btn');
   const mobileNav = document.querySelector('#mobile-nav');
   const header = document.querySelector('header');

   function showMobileNav() {
      header.classList.remove('visible');
      header.classList.add('hidden');
      mobileNav.classList.add('show');
	   mobileNav.classList.add('animate');
	  document.body.style.overflowY = 'hidden';
   }

   function hideMobileNav() {
      mobileNav.classList.remove('show');
      header.classList.remove('hidden');
      header.classList.add('visible');
	  document.body.style.overflowY = 'auto';
   }

   menuBtn.addEventListener('click', showMobileNav);
   closeBtn.addEventListener('click', hideMobileNav);
}