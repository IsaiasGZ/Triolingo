var axios = require('axios');
var data = JSON.stringify({
    "collection": "users",
    "database": "test",
    "dataSource": "Triolingo897",
    "document": {
        "_id": "2",
        "name": "Peter",
        "age": 65,
        "email": "peter65@email.com"
    }
});
            
var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-xmrbs/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'Vw0veJekykjZBXkRqIZ0bzTlTjskA4BpKIyNX8VAWnIkmg9yTWiNBtGsLpPanUJz',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
