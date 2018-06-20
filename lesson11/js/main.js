let request = new XMLHttpRequest();

// 1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);

// Настройка запроса
request.send()

// Отправка запроса
request.status
request.statusText
request.responseText
request.readyState