## Blog 1: Differences Between Interfaces and Types in TypeScript

TypeScript provides two powerful features for defining data structures: **interfaces** and **type aliases**. Although they often look similar, they serve different purposes and offer unique benefits.

### What Is an Interface?

An **interface** is an object and is best suited for object-oriented patterns.

**Example:**

```ts
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Alice",
  age: 25,
};
```

### What Is a Type Alias?

A **type** can represent objects, primitives, unions, functions, and more.

**Example:**

```ts
type User = {
  name: string;
  age: number;
};

const person: User = {
  name: "Bob",
  age: 30,
};
```

## ---> Key Differences <----

### Interface Merging

Interfaces with the same name merge automatically.

```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const car: Car = { brand: "Toyota", model: "Corolla" };
```

Types do **not** merge.

###  Extending

**Interface:**

```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark: () => void;
}
```

**Type:**

```ts
type Animal = { name: string };
type Dog = Animal & { bark: () => void };
```

### Types Are More Powerful

Types can describe unions and more.

```ts
type Status = "success" | "error" | "loading";
```

---

## Sweet Example: Interface vs Type

```ts
interface Student {
  name: string;
  roll: number;
}

type Teacher = {
  name: string;
  subject: string;
};

const s1: Student = { name: "John", roll: 1 };
const t1: Teacher = { name: "Mr. Tom", subject: "Math" };
```

---

## Blog 2: Understanding the keyof Keyword in TypeScript

The **keyof** keyword extracts the keys of a type or interface as a union.

###  Basic Example

```ts
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User; // "name" | "age"
```

---

##  Why is keyof Useful?

It helps create reusable, type-safe functions.

### Sweet Example: Safe Property Accessor

```ts
interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

type ProductKeys = keyof Product; // "title" | "price" | "inStock"

function getProperty(obj: Product, key: ProductKeys) {
  return obj[key];
}

const p: Product = {
  title: "Laptop",
  price: 1200,
  inStock: true,
};

console.log(getProperty(p, "price")); // 1200
```