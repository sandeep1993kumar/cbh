# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
   * what is refactored:
    1. removed nested if's and using early returns to make code more readable
    2. move long liner of crypto.createHash... to  getHash() in module scope or (can also use utilities folder if used elsewhere in app).
    3. moved constants to a separate file.
    4. wrote the necessary tests.
    5. changed file name from dpk to deterministicPartitionKey favouring clarity over conciseness.Could also make it  getDeterministicPartitionKey depending upon if team maintains strictly "verb" function names.

   
