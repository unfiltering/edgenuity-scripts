javascript:(function() {
    var urlsInput = prompt("Please enter a list of console errors to scrape files (ensure console was open beforehand):");
    var urlsLocation = prompt("What site are the files located at? e.g. 'https://windows93.net' (do not include the last slash)");
    var urlRegex = /https:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-./?%&=]*)?/gi;
    var urls = urlsInput.match(urlRegex);
    var uniqueUrls = {};
    var newUrls = [];
    if (urls) {
        urls.forEach(function(url) {
            var path = url.substring(url.indexOf("://") + 3 + url.split('/')[2].length);
            if (!uniqueUrls[path]) {
                uniqueUrls[path] = true;
                newUrls.push(urlsLocation + path);
            }
        });
        var tempTextArea = document.createElement('textarea');
        tempTextArea.value = newUrls.join("\n");
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        newUrls.forEach(function(url) {
            window.open(url, "_blank");
        });
    } else {
        alert("No valid URLs found");
    }
})();
