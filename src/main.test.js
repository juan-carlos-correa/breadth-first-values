import { it, expect } from 'vitest';

import { breadthFirstValues, Node } from '../src/main.mjs';

it('returns values in breadth-first order for a balanced tree', () => {
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(5);
  const f = new Node(6);
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  // Tree:
  //       1
  //     /   \
  //    2     3
  //   / \     \
  //  4   5     6

  expect(breadthFirstValues(a)).toEqual([1, 2, 3, 4, 5, 6]);
});

it('returns values for a single-node tree', () => {
  const root = new Node(7);
  expect(breadthFirstValues(root)).toEqual([7]);
});

it('returns empty array for null root', () => {
  expect(breadthFirstValues(null)).toEqual([]);
});

it('works with an unbalanced tree', () => {
  const a = new Node(10);
  const b = new Node(20);
  const c = new Node(30);
  const d = new Node(40);
  a.left = b;
  b.left = c;
  c.right = d;

  // Tree:
  //     10
  //    /
  //   20
  //  /
  // 30
  //   \
  //   40

  expect(breadthFirstValues(a)).toEqual([10, 20, 30, 40]);
});
