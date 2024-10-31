const allTabs = document.querySelectorAll('.tab');

allTabs.forEach(tab => {
tab.addEventListener('click', e => {
  e.preventDefault();

  const carElement = tab.closest('.grid');
  const pricingContent = carElement.querySelector('.pricingContent');
  const infoContent = carElement.querySelector('.infoContent');
  
  const tabPricing = carElement.querySelector('.pricingTab');
  const tabInfo = carElement.querySelector('.infoTab');

  if(tab === tabPricing){
    pricingContent.classList.remove('hidden');
    infoContent.classList.add('hidden');
    tabPricing.classList.add('border-b-2','border-[#001B72]');
    tabInfo.classList.remove('border-b-2','border-[#001B72]');
  } else if (tab === tabInfo){
    pricingContent.classList.add('hidden');
    infoContent.classList.remove('hidden');
    tabPricing.classList.remove('border-b-2','border-[#001B72]');
    tabInfo.classList.add('border-b-2','border-[#001B72]');
  }

})

})