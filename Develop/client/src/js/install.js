const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Handle the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered event
    window.deferredPrompt = event;
    // Show the install button by removing the 'hidden' class
    butInstall.classList.remove('hidden');
  });
  
  // Handle the install button click
  butInstall.addEventListener('click', async () => {  
    // Retrieve the stored event
    const promptEvent = window.deferredPrompt;
  
    // If no event is stored, exit the function
    if (!promptEvent) {
      return;
    }
  
    // Show the install prompt
    promptEvent.prompt();
  
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
  
    // Hide the install button by adding the 'hidden' class
    butInstall.classList.add('hidden');
  });
  
  // Handle the appinstalled event
  window.addEventListener('appinstalled', () => {
    // Clear the stored prompt event
    window.deferredPrompt = null;
  });
  