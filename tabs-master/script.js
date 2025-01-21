const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

/* === Storybook example === */
// const tabWrapper = document.createElement('div')
//   tabWrapper.classList = 'tab-wrapper'

//   const tabHeader = document.createElement('ul')
//   tabHeader.classList = 'tabs'

//   const firstTabHeader = document.createElement('li')
//   firstTabHeader.className = ['', 'tab', 'active'].join(' ')
//   firstTabHeader.dataset.tabTarget = '#firstTab'
//   firstTabHeader.innerText = 'Alle (316)'

//   tabHeader.appendChild(firstTabHeader)

//   const secondTabHeader = document.createElement('li')
//   secondTabHeader.classList = 'tab'
//   secondTabHeader.dataset.tabTarget = '#secondTab'
//   secondTabHeader.innerText = 'DVD (268)'

//   tabHeader.appendChild(secondTabHeader)

//   const thirdTabHeader = document.createElement('li')
//   thirdTabHeader.classList = 'tab'
//   thirdTabHeader.dataset.tabTarget = '#thirdTab'
//   thirdTabHeader.innerText = 'Blu-ray (48)'

//   tabHeader.appendChild(thirdTabHeader)

//   const tabContent = document.createElement('div')
//   tabContent.classList = 'tab-content'

//   const firstTabContent = document.createElement('div')
//   firstTabContent.id = 'firstTab'
//   firstTabContent.classList = 'active'
//   firstTabContent.dataset.tabContent = ''

//   firstTabContent.innerText = 'First tab'
//   tabContent.appendChild(firstTabContent)

//   const secondTabContent = document.createElement('div')
//   secondTabContent.id = 'secondTab'
//   secondTabContent.dataset.tabContent = ''

//   secondTabContent.innerText = 'Second tab'
//   tabContent.appendChild(secondTabContent)

//   const thirdTabContent = document.createElement('div')
//   thirdTabContent.id = 'thirdTab'
//   thirdTabContent.dataset.tabContent = ''

//   thirdTabContent.innerText = 'Third tab'
//   tabContent.appendChild(thirdTabContent)

//   tabWrapper.appendChild(tabHeader)
//   tabWrapper.appendChild(tabContent)
//   rightColumn.appendChild(tabWrapper)

//   document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('[data-tab-target]')
//     const tabContents = document.querySelectorAll('[data-tab-content]')

//     tabs.forEach((tab) => {
//       tab.addEventListener('click', function () {
//         const target = document.querySelector(tab.dataset.tabTarget)
//         tabContents.forEach((tabContent) => {
//           tabContent.classList.remove('active')
//         })
//         tabs.forEach((tab) => {
//           tab.classList.remove('active')
//         })
//         tab.classList.add('active')
//         target.classList.add('active')
//       })
//     })
//   })
