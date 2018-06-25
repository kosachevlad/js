describe('Тесты', function(){
	describe('Функция sum', function(){
		it('Возвращает ли функция true?', function() {
			assert(sum(2,2), true);
		});
	});

	describe('Переменная num', function() {
		it('Равна ли переменная num - 5?', function() {
			assert(num, 5);
		});
	});
	
	describe('Проверка each на типы данных', function(){
		it('Проверка на объект (object)', function() {
			assert.typeOf(each(arr, myFunc), 'object');
		});
		it('Проверка на массив (array)', function() {
			assert.typeOf(each(arr, myFunc), 'array');
		});
		it('Проверка на строку (string)', function() {
			assert.typeOf(each(arr, myFunc), 'string');
		});
		it('Проверка на номер (Number)', function() {
			assert.typeOf(each(arr, myFunc), 'Number');
		});

	});

	describe('Проверка each на соответствие результату:', function() {
		it('[8, 7, 6, 5, 4]', function() {
			assert(JSON.stringify(each(arr, myFunc)) == JSON.stringify([8, 7, 6, 5, 4]));
		});
	});

	describe('Проверка each', function(){
		it('на свойство length = 5', function() {
			assert(each(arr, myFunc).length == 5);
		})
	})


});