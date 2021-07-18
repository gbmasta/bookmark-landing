export const tabs = () => {
   const tabsTrigger = document.querySelectorAll('.tab__trigger');

   function showTab(e) {
      e.preventDefault();
	

      tabsTrigger.forEach(tab => tab.classList.remove('tab__trigger--active'));

      this.classList.add('tab__trigger--active');

      
      const tabPanels = document.querySelectorAll('.tab__panel');
      tabPanels.forEach(tabPanel => tabPanel.classList.remove('tab__panel--active'));
	  tabPanels.forEach(tab => tab.classList.remove('tab__panel--firstload'));

      const tabPanelTriggered = document.querySelector(`${this.hash}`);
      tabPanelTriggered.classList.add('tab__panel--active');
   }

   tabsTrigger.forEach(tab => tab.addEventListener('click', showTab));
}