# Работа с MongoDB

____

### 1. Создание базы данных

Создайте базу данных **labs_ЛОГИН** и выполните следующие манипуляции:

- создайте коллекцию apps, products, prices;
- удалите коллекцию products;

#### Решение:

```javascript
use labs_20321
db.createCollection('apps')
db.createCollection('products')
db.createCollection('prices')
db.products.drop()


```

____

### 2. Добавление данных в коллекцию

**2.1 Добавление данных**

Создайте коллекцию "*товары*" в БД "магазин" и поместите туда 3 товара:

- телефон (**поля:** название, цена, марка, память, массив аксессуары);
- компьютер (**поля:** название, цена, процессор, память, объект характеристики, есть ли в наличии);
- телевизор (**поля:** название, цена, диагональ, марка, есть ли в наличии).

Добавьте значения используя добавление данных по одному объекту.

#### Решение:

```javascript
db.products.insertOne({
  name:'Iphone 13',
  price:85000,
  brand:'Apple',
  memory:'512 кб',
  accessories:["стекло"]
  })
db.products.insertOne({
  name:'Acer Aspire XC-1660',
    price:34500,
    processor:'Intel Core i3 10105',
    property:{weight:'5kg'},
    brand:'Acer',
    memory:'8 ГБ',
    available:true
  })
db.products.insertOne({
  name:'Hisense 55A85H',
  price:149999,
  brand:'Hisense',
  diagonal:'138.8см',
  available:true
  })

```

**2.2 Многочисленное добавление**

Выполните предыдущее задания, но вместо добавления данных по одному объекту, добавьте сразу все объекты при помощи лишь
одной команды.

#### Решение:

```javascript
db.products.insertMany([
  { name:'Iphone 13',
    price:85000,
    brand:'Apple',
    memory:'512 кб',
    accessories:["стекло"]
  }
 {
    name:'Acer Aspire XC-1660',
    price:34500,
    processor:'Intel Core i3 10105',
    property:{weight:'5kg'},
    brand:'Acer',
    memory:'8 ГБ',
    available:true
  }
 {
    name:'Hisense 55A85H',
    price:149999,
    brand:'Hisense',
    diagonal:'138.8см',
    available:true
 }
  ])
```

____

### 3. Выборка данных из коллекции

Создайте коллекцию **articles** и заполните её такими полями, как: заголовок, анонс, текст статьи, автор, количество
просмотров.

Выведите все данные из коллекции **articles**. Произведите следующие операции:

1. Выведите лишь один объект;
2. Выполните сортировку по количеству просмотров (*по убыванию*);
3. Выведите все статьи, у которых автор Админ и просмотры равны **720**;
4. Выведите все статьи, у которых от 20 до 500 просмотров;
5. Выведите статьи, у которых автор не Админ и не Джери.

#### Решение:

```javascript
// Создание коллекции
db.createCollection('articles')
db.articles.insertMany([
  {title:'Заголовок',content:'text',author:'Админ',views:720,anounce:'....'},
  {title:'Title',content:'textText',author:'Анна',views:720,announce:'......'},
  {title:'Заголовок',content:'textTexttextTexttextText',author:'Jam',views:108,announce:'.......'},
  {title:'Title',content:'textTexttextTexttextText',author:'Pol',views:80,announce:'.......'},
  {title:'Title',content:'textTexttextTexttextTexttextTexttextText',author:'Tom',views:30,anounce:'.......'},
  {title:'Заголовок',content:'textText',author:'Джери',views:789,announce:'....'},
  ])
// Вывод лишь одного объекта
db.articles.findOne()

// Сортировка по просмотрам
db.articles.find().sort({views:-1})

// Статьи от автора Админ
db.articles.find({author:'Томас',views:720})

// Статьи от 20 до 500 просмотров
db.articles.find({views:{$gt: 20,$lt:500}})

// Автор не Админ и не Джери
db.articles.find({author:{$nin:['Админ ', 'Джери']}})


```
____

### 4. Обновление и удаление данных

Создайте коллекцию **articles** и заполните её такими полями, как: заголовок, анонс, текст статьи, автор, количество
просмотров. У вас должно быть три объекта в коллекции.

Выполните следующее:

1. Удалите все объекты, которые будут содержать пустой заголовок, пустой анонс или же пустой текст статьи.
2. Обновите все статьи и установите для них значение 500 в поле просмотр;
3. Замените статью с автором Джек на объект с полями: название, текст, автор.

#### Решение:

```javascript
// Создание коллекции
db.articles.insertMany([
  {title:'Заголовок',content:'text',author:'Админ',views:720,anounce:''},
  {title:'Title',content:'textTexttextTexttextTexttextTexttextText',author:'Tom',views:30,anounce:'.......'},
  {title:'Заголовок',content:'',author:'Джеk',views:789,announce:'....'},
  ])

// Удаление объектов
db.articles.deleteMany({$or:[{content:''},{title:''},{anounce:''}]})

// Обновление объектов
db.articles.updateMany(
  {},
  {
    $set:{"views":500}
  }
)

// Замена объекта
db.articles.replaceOne(
  {author:"Джеk"},
  {title:"",content:"",author:""}
  )


```

____

### 5. Объединение запросов в БД

Создайте **bulkWrite**, который будет выполнять несколько команд:

1. Обновите запись, где поле tovar не равно computer. Установите новое значение для поля товара;
2. Добавьте новый товар с полями: товар и цена.
3. Удалите объект, у которого поле товар равно "*стекло*".

#### Решение:

```javascript
db.tovars.insertMany([
  {tovar:'phone',price:10000},
  {tovar:"glass",price:1000},
  {tovar:'computer',price:30000}
])
db.tovars.bulkWrite([
  {
    updateOne:{
      filter:{tovar:{$ne:"computer"}},
      update: {$set: {tovar: "new"}}
    }
  },
  {
    insertOne : {
      "document": {tovar: "", price:''}
    }
  },
  {
    deleteOne : {
      filter: {tovar:"glass"}
    }
  },
])

```