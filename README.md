# 🧠 Breadth First Values

_Given the root of a binary tree, return an array containing the values of the tree in **breadth-first (level-order)** traversal._

## ✍️ Your Task

1. Read the problem and requirements carefully
2. Write your implementation in `src/main.mjs`
3. Test your solution with `npm run test`

## 📘 Description

You are given the root node of a binary tree.

Your task is to return an array containing the **values** of the nodes in **breadth-first** (also known as **level-order**) traversal.

Breadth-first traversal visits nodes level by level from top to bottom, and from left to right within each level.

## 📥 Input

- A binary tree with integer values  
  (You will use the `Node` class provided for tree creation)

## 📤 Output

- An array of integers representing the values of the tree in breadth-first order

Example:

```
  // Tree:
  //       1
  //     /   \
  //    2     3
  //   / \     \
  //  4   5     6
```

The breadth-first traversal of the above tree would yield the following array:

```javascript
[1, 2, 3, 4, 5, 6];
```

## 🛠️ Instructions

1. Open the file `src/main.mjs` and implement the `breadthFirstValues` function.
2. Use the `Node` class provided to construct your binary trees in the test file.
3. To verify your solution, run the tests in `src/main.test.js` using:

```bash
npm run test
```

✅ Do not modify the test file unless you're adding extra edge cases.

## 💡 Tips

- Use a **queue** to keep track of nodes at each level.
- You can use a simple `while` loop to traverse the tree from top to bottom.
- Breadth-first traversal is commonly implemented using a queue data structure.

## 🧪 Run Tests

This repo uses [Vitest](https://vitest.dev/). To run tests locally:

```bash
npm install
npm run test
```

✅ Make sure your implementation is in `src/main.mjs` and your tests in `src/main.test.js`.
