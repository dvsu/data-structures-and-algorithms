# Part 1: Algorithm Analysis

`len(data)`

- **Big-O**: _O(1)_
- **Reason**: `list` class maintains variable that records length of list instead of counting elements iteratively

`data[i]`

- **Big-O**: _O(1)_
- **Reason**: `list` is stored in a consecutive block of memory. Finding the value of an element at specific index is as simply as calculating the starting memory address plus the _offset_ (NOT by iterating from 0 to `i`)

`max(data)`

- **Big-O**: _O(log n)_
- **Reason**: Given a list of random numbers, the probability of finding the maximum number is equal to `1/len(data)`. The number can be the first element at best or the last element in the worst case. _[See: Harmonic number](https://en.wikipedia.org/wiki/Harmonic_number)_

`sum(data)`

- **Big-O**: _O(n)_
- **Reason**: It must iterate every element to calculate the total. It also grows in proportion to the size/ length of data.

`sorted(data)`

- **Big-O**: _O(n log n)_
- **Reason**: Python built-in function _[See: Timsort](https://en.wikipedia.org/wiki/Timsort)_

## Reference

- [Tamassia, R., Goldwasser, M. H., Goodrich, M. T. (2013). _Data Structures and Algorithms in Python_. Wiley.](https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275)
