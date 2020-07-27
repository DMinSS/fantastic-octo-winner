jsbtn.onclick = () => {
    $.post('http://localhost:3000/comments', {
        "id": 4,
        "body": "some comment v4",
        "postId": 1
    }, data => {
        $('#hello').html(data.body);
    }, 'json')
}