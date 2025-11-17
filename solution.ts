const formatValue = <T>(input: T) => {
  if (typeof input === "string") {
    return input.toLocaleUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  }
};

const getLength = <T>(input: T) => {
  if (Array.isArray(input) === true) {
    return input.length;
  } else if (typeof input === "string") {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  // declare type
  title: string;
  rating: number;
};

const books: Item[] = [
  // assign type
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
function filterByRating(input: Item[]) {
  // filter and return the books which are above 4 rating
  return input
    .filter((book) => book.rating >= 4)
    .sort((a, b) => a.rating - b.rating); //make them low to heigh
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

function filterActiveUsers(input: User[]) {
  const activeUser = [];
  const checkActive = input.filter((active) => active.isActive === true);
  activeUser.push(...checkActive);
  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
function printBookDetails(input: Book) {
  const { title, author, publishedYear, isAvailable } = input;
  return console.log(
    `Title: ${title}, Author: ${author} Published: ${publishedYear}, Available: ${isAvailable}`
  );
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function getUniqueValues(input1: number[], input2: number[]) {
  const myArr = [...input1, ...input2];
  const uniqueValue = new Set(myArr);
  return Array.from(uniqueValue);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

function calculateTotalPrice(
  input: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
) {
  const totalPrice = input.reduce(
    (acc, item) =>
      acc + item.price * item.quantity * (1 - (item.discount || 0) / 100),
    0
  );
  return totalPrice;
}
