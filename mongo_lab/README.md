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

