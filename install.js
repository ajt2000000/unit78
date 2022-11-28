
  
  registerInstallAppEvent(document.getElementById("InstallBtn"));
  function registerInstallAppEvent(elem){
    window.addEventListener('beforeinstallprompt', function(event){
      console.log("beforeinstallprompt: ", event);
      event.preventDefault();
      elem.promptEvent = event;
      elem.style.display = "block";
      return false;
    });
    function installApp() {
      if(elem.promptEvent){
        elem.promptEvent.prompt();
        elem.promptEvent.userChoice.then(function(choice){
          elem.style.display = "none";
          elem.promptEvent = null;
        });
      }
    }
    elem.addEventListener("click", installApp);
  }
