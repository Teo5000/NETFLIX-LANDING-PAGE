const tabItems = document.querySelectorAll('.items');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab contents item
function selectItem(e) {
    removeBorder()
    //Add border to current tab
    this.classlist.add('tab-border');
}

function removeBorder() {
    tabItems.forEach(item => item.classlist.remove('tab-border'))
}

function removeShow() {
    tabItems.forContentItems(item => item.classlist.remove('tab-border'))
}

// Listen for clicks
tabItems.forEach(item => item.addEventListener('click', selectItem));