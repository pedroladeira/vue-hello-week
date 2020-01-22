# Vue HelloWeek

## Add HelloWeek to your project

with npm
```
npm install vue-hello-week --save
```

with yarn
```
yarn add vue-hello-week
```

### Include HelloWeek in your project

```javascript
import Vue from 'vue';
import HelloWeek from 'vue-hello-week';

Vue.use(HelloWeek);
```


### Use plugin

```javascript
<template>
  <v-hello-week
    @load="onLoad"
    @select="onSelect"
  >
  </v-hello-week>
</template>

<script>
export default {
  methods: {
    onLoad () {
      // onLoad
    },
    onSelect () {
      // onSelect
    },
  }
}
</script>

```
