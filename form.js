function didPressSubmit() {
    var category = document.getElementById("category").value
    var subcategory = document.getElementById("subcategory").value
    var description = document.getElementById("description").value
    var x = -175.28910
    var y = 34.15542

    var attributes = {
        category : category,
        subcategory : subcategory,
        description : description
    }

    return attributes
}

//     var url = 'https://services9.arcgis.com/ErpdjzimvfupJaSy/arcgis/rest/services/reportlayer/FeatureServer/0/applyEdits'
//     var data = "?f=json&token=6SKyuGpLX4aVwHik-vAVKXoCI57tSOHqfJYuxvfggldX14EpB37vEXSMrJlYFktwk9jU7WK-9w9aeZa5qc0clehaRQ71qs2cQSSeKb9ubAqiKTobis8ZDix9TGqkhKNtH5yFDOz93dgVI_pyWTf171jiZsGUoX4Ld15FD7W5p2c-3yU8UJJAUczoMb5Bj-Y-i9IcJyKSj6ef_IEvlt8DkoivgAcUjku6tkbL51cCb-8."
//     var params = {
//         f: "json",
//         token: "6SKyuGpLX4aVwHik-vAVKXoCI57tSOHqfJYuxvfggldX14EpB37vEXSMrJlYFktwk9jU7WK-9w9aeZa5qc0clehaRQ71qs2cQSSeKb9ubAqiKTobis8ZDix9TGqkhKNtH5yFDOz93dgVI_pyWTf171jiZsGUoX4Ld15FD7W5p2c-3yU8UJJAUczoMb5Bj-Y-i9IcJyKSj6ef_IEvlt8DkoivgAcUjku6tkbL51cCb-8.",
//         adds: [jsonObject]
//     }
 

//         console.log(jsonObject)

//     var jsonString = "&adds=[" + JSON.stringify(jsonObject) + "]"
//     data.concat([jsonString])

//     postAjax(url, data, function(data){console.log(data);})
// }

// function postAjax(url, data, success) {
//     var params = typeof data == 'string' ? data : Object.keys(data).map(
//             function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
//         ).join('&');

//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//     xhr.open('POST', url);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
//     };
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send(params);
//     return xhr;
// }
