chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fetchMatches') {
      const apiKey = '06bf0318-25a0-420e-a1e6-1ed574fe634a';
      const apiUrl = `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`;
  
      fetch(apiUrl)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Failed to fetch matches.');
          }
          return response.json();
        })
        .then(function(data) {
          sendResponse({ matches: data.matches });
        })
        .catch(function(error) {
          console.error(error);
          sendResponse({ matches: [] });
        });
  
      return true;
    }
  });
  