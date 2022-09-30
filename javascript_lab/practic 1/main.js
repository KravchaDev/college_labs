window.onload = function () {// Выполнить js после загрузки объекта документа

    //Определяем переменные документа
    var customName = document.getElementById('customname');
    console.log(customName.value);
    var randomize = document.querySelector('.randomize');
    console.log(randomize);
    console.log(document.querySelector('.randomize'));
    var story = document.querySelector('.story');

    //Определяем функцию для возврата случайных элементов в массиве
    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    //Определяем строку в истории
    var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
    var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
    var insertZ = ['turned into a slug and crawled away', 'spontaneously combusted', 'melted into a puddle on the sidewalk'];

    //Слушатель событий и основная функция
    randomize.addEventListener('click', result);

    function result() {
        // Поместите storyText в новую переменную и замените новую переменную [назначением! ! ]
        var newStory = storyText;
        var xItem = randomValueFromArray(insertX);
        var yItem = randomValueFromArray(insertY);
        var zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        //Проверить, если вход пуст, заменить имя
        if (customName.value != '') {
            var name = customName.value;
            newStory = newStory.replace('Bob', name);
        }
        //Проверьте, выбран ли Великобритания, и замените температуру и вес.
        if (document.getElementById('uk').checked) {
            var weight = Math.round(300 * 0.0714286) + ' stone';
            var temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
            newStory = newStory.replace('94 farenheit', temperature);
            newStory = newStory.replace('300 pounds', weight);

        }
        //Генерируем случайные истории
        story.textContent = newStory;
        story.style.visibility = 'visible';
    }
}