function httpDelete(oid) {
  var apiUrl = 'https://api.mlab.com/api/1/databases/second_db/collections/companies';
  var apiKey = 'apiKey=9i8roiNZI9pUK5ZvBG-X7cfQsR7meRsK'
  url = apiUrl + '/' + oid + '?' + '&' + apiKey;
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Something wrong"));
      alert(Error);
    };

    xhr.send();
  });

}