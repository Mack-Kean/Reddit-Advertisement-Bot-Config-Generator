const staticForm = document.forms[0]; //gets the first form which we know is the static one

staticForm.addEventListener('submit', (event) => {
    let obj = {
        client_id : staticForm.client_id.value,
        client_secret_key : staticForm.client_secret_key.value,
        user_agent : staticForm.user_agent.value,
        username : staticForm.username.value,
        password: staticForm.password.value
    };

    let jsonString = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(obj));
    var temp = document.createElement('a');
    temp.download = "config.json";
    temp.href = jsonString;
    temp.click();

});