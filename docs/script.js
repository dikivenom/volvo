const allTabs = document.querySelectorAll('.tab');

allTabs.forEach(tabs => {
  tabs.addEventListener('click', e => {
    e.preventDefault();
    
    const carElement = tabs.closest('.grid');
    const tabPricing = carElement.querySelector('.pricingTab');
    const tabInfo = carElement.querySelector('.infoTab');
    

    const pricingContent = carElement.querySelector('.pricingContent');
    const infoContent = carElement.querySelector('.infoContent');
    const contentBox = carElement.querySelector('.content-box')

    if (tabs === tabPricing){
      tabPricing.classList.add('border-b-2', 'border-[#001B72]');
      tabInfo.classList.remove('border-b-2', 'border-[#001B72]');
      pricingContent.classList.remove('hidden');
      infoContent.classList.add('hidden');
      contentBox.classList.remove('md:mt-0', 'md:pt-1');
    }else if (tabs === tabInfo){
      tabInfo.classList.add('border-b-2', 'border-[#001B72]');
      tabPricing.classList.remove('border-b-2', 'border-[#001B72]');
      infoContent.classList.remove('hidden');
      pricingContent.classList.add('hidden');
      contentBox.classList.add('md:mt-0', 'md:pt-1');
    
    }

  })

})