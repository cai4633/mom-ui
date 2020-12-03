# mom-ui
A simple web  UI framework with Vue3 and Typescript.

## Features
- Base on **Vue3** which is new to someone
- Written in **Typescript** with Predictable static types
- A set of high-quality vue components
- Follow the **Antd-Design style** which is very popular in the world

## Environment Support
- Modern browsers and Internet Explorer 11 (with polyfills)

## Install 
`npm install mom-ui`
 or 
`yarn add mom-ui`

## Usage
Import style manually in `main.ts` or any component:
```
import "mom-ui/dist/lib/mom-ui.css";
```

And import Component in Vue SPA.
```
<template>
  <Button @click="onclick">default</Button>
</template>
<script lang="ts">
import { Button } from 'mom-ui';

export default {
  components: { Button },
};
</script>
```