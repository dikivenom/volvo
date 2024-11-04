const allTabs = document.querySelectorAll('.tab');

allTabs.forEach(tabs => {

  tabs.addEventListener('click', e => {
    e.preventDefault();
    const carElements = tabs.closest('.grid');
    const pricingContent = carElements.querySelector('.pricingContent');
    const infoContent = carElements.querySelector('.infoContent');
    
    const tabPricing = carElements.querySelector('.pricingTab');
    const tabInfo = carElements.querySelector('.infoTab');
  
    if (tabs === tabPricing){
      tabPricing.classList.add('border-b-2', 'border-[#001B72]');
      pricingContent.classList.remove('hidden');
      tabInfo.classList.remove('border-b-2', 'border-[#001B72]');
      infoContent.classList.add('hidden');
    } else if (tabs === tabInfo){
      tabInfo.classList.add('border-b-2', 'border-[#001B72]');
      infoContent.classList.remove('hidden');
      tabPricing.classList.remove('border-b-2', 'border-[#001B72]');
      pricingContent.classList.add('hidden');
    }
  
  })
  })
 