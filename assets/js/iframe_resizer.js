(function () {
  function resizeIframeFromMessage(event) {
    if (event.origin !== 'https://bookwhen.com' || typeof event.data.height !== 'number') return;
    var iframes = [];
    if (document.querySelectorAll) {
      iframes = document.querySelectorAll('iframe[src^="https://bookwhen.com"]');
    } else {
      iframes = document.getElementsByTagName('iframe');
    }
    var iframesCount = iframes.length;
    var eventFrame = null;
    for (var i = 0; i < iframesCount; i++) {
      if (iframes[i].contentWindow === event.source) {
        eventFrame = iframes[i];
        break;
      }
    }
    if (eventFrame) {
      eventFrame.style.height = event.data.height + 'px';
    }
  }
  if (window.addEventListener) {
    window.addEventListener('message', resizeIframeFromMessage);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', resizeIframeFromMessage);
  }
}());
