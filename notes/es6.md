# 1. Dynamic Object Keys

if we want to assign objects keys dynamically, we can do it like this

```js
const favoriteFood = 'sushi'

const goodFoods = {
  [favoriteFood]: true,
}
console.log(goodFoods)
```

this will print following

```bash
{sushi: true}
```
