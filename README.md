# Validate

A package for validate.

## Feature

- [Email](#email)
- [Object](#object)
- [String](#string)
- [Empty](#empty)
- [Array](#array)

## Installation

```bash
$ npm i @achmadeko003/validate
```

## Email

A function for validate email with a custom format.

### usage:

```js
import { isEmail } from "@achmadeko003/validate/index";

isEmail("Pururu003@gmail.com"); // Basic usage
// true

isEmail("Pururu003@outlook.com", {
  gmail: true,
  outlook: true,
  yahoo: true,
  hotmail: true,
}); // Famous email domain
// true

isEmail("Pururu003@madko.com", { custom: "madko.com" }); // Custom email domain
// true

isEmail("Pururu003@madko.com", { firstLetter: 3, mask: "*" }); // Mask email
// Pur******@madko.com
```

## String

A function for validate string.

### usage:

```js
import { isString } from "@achmadeko003/validate/index";

new isString("pururu").check(); // Basic usage for validate value type is string or not
new isString("pururu!").useSymbols().check(); // Add useSymbols() for excluded symbols
new isString("pururu2").useNumber().check(); // Add useNumber() for excluded symbols
new isString("pururu").useSymbols().useNumber().check(); // or add useSymbols() and useNumber() for exluded character symbols and number
new isString("pururu2").maxLength(3); // Add maxLength() for check string length
new isString("https://example.com").checkLinkURL(); // checkLinkURL() for validate if string is https:// or http:// URL
```

## Object

A function for validate value is object or not.

### usage:

```js
import { isObject } from "@achmadeko003/validate/index";

const profile = {
  id: 10,
  name: "Pururu",
  phone: null,
  email: "Pururu003@gmail.com",
  address: null,
};

new isObject(profile).check(); // Basic usage
// true

new isObject(profile).valueNull(); // Validate object key values
// {
//  status: true,
//  detail: [
//    'phone value is null or undefined',
//    'address value is null or undefined'
//  ]
// }

new isObject(profile).setKeys(["phone", "email"]).valueNull(); // Validate specific object key values
// {
//  status: true,
//  detail: [
//    'phone value is null or undefined'
//  ]
// }
```

## Empty

A function for validate field null or undefined.

### usage:

```js
import { isEmpty } from "@achmadeko003/validate/index";

const phoneNumber = null;

isEmpty(phoneNumber); // Basic usage that return true if value null or undefined
```

## Array

A function for validate, convert string array and object to array.

### usage:

```js
import { isArray } from "@achmadeko003/validate/index";

const array = ['a', 'b', 'c']
const object = {
    a: 'aa',
    b: 'bb',
    c: 'cc'
}
const string = "abcd"
const stringSeparator = "ab-cd"

isArray.check(array) // Validate value is array or not
isArray.parseObject(object) // Convert object value to array base on object values
isArray.parseString(string) // Convert string value to array
isArray.parseString(stringSeparator, "-") // Convert string value to array with specific separator
```
