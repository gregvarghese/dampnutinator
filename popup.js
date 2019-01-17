
window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})

restore_options();

document.querySelector('#go-to-options').addEventListener('click', function() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});


function restore_options() {
  chrome.storage.sync.get({
    favoriteName: 'Lord Dampnut'
  }, function(items) {
    document.getElementById('name').value = items.favoriteName;
    console.log(items.favoriteName);
  });
}


    