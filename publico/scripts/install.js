let deferredInstallPrompt = null;
const installButton = document.getElementById('installButton');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// CODELAB: Add code to save event & show the install button.
function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.classList.remove('hidden');
}
 
function installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.target.classList.add('hidden');
    // CODELAB: Log user response to prompt.
    if (deferredInstallPrompt != null) {
        deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt', choice);
                } else {
                    console.log('User dismissed the A2HS prompt', choice);
                }
                deferredInstallPrompt = null;
            });
    }
}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    // CODELAB: Add code to log the event
    console.log('Aplicativo instalado.', evt);
}

