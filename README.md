# validate

A package for validate.

## Validate Feature
- Email

## Installation

```bash
$ npm i @achmadeko003/validate
```

## Usage

Email:

```js
import { isEmail } from "@achmadeko003/validate/email";

// Basic usage
isEmail("Pururu003@gmail.com");
// true

// Famous email domain
isEmail("Pururu003@outlook.com", { gmail: true, outlook: true, yahoo: true, hotmail: true })
// true

// Famous custom email domain
isEmail("Pururu003@madko.com", { custom: 'madko.com' })
// true
```
