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