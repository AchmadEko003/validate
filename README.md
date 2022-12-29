# Validate

A package for validate.

## Feature

- [Email](#email)
- [Object](#object)

## Installation

```bash
$ npm i @achmadeko003/validate
```

## Email

A function for validate email with a custom format.

### usage:

```js
import { isEmail } from "@achmadeko003/validate/index";

// Basic usage
isEmail("Pururu003@gmail.com");
// true

// Famous email domain
isEmail("Pururu003@outlook.com", {
  gmail: true,
  outlook: true,
  yahoo: true,
  hotmail: true,
});
// true

// Famous custom email domain
isEmail("Pururu003@madko.com", { custom: "madko.com" });
// true

// Mask email
isEmail("Pururu003@madko.com", { firstLetter: 3, mask: "*" });
// Pur******@madko.com
```

## Object

A function for validate value is object or not.

### usage:

```js
import { isEmail } from "@achmadeko003/validate/index";

const profile = {
  id: 10,
  name: "Pururu",
  phone: null,
  email: "Pururu003@gmail.com",
  address: null,
};

// Basic usage
new isObject(profile).check();
// true

// Validate object key values
new isObject(profile).valueNull();
// {
//  status: true,
//  detail: [
//    'phone value is null or undefined',
//    'address value is null or undefined'
//  ]
// }

// Validate specific object key values
new isObject(profile).setKeys(["phone", "email"]).valueNull();
// {
//  status: true,
//  detail: [
//    'phone value is null or undefined'
//  ]
// }
```
