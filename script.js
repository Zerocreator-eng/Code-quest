// ---------- QUESTION DATA, ORGANIZED INTO LEVELS ----------
const worldsData = {
    python: [
        {
            type: "predict", tier: "beginner", label: "Variables", questions: [
                { code: `x = 10\nprint(x)`, options: ["10", "x", "Error", "None"], answer: "10", concept: "variables" },
                { code: `name = "Alex"\nprint(name)`, options: ["Alex", "name", "Error", "'Alex'"], answer: "Alex", concept: "variables" },
                { code: `x = 5\nx = x + 1\nprint(x)`, options: ["5", "6", "Error", "1"], answer: "6", concept: "variables" },
                { code: `a, b = 1, 2\nprint(a + b)`, options: ["1", "2", "3", "Error"], answer: "3", concept: "variables" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Conditionals", questions: [
                { code: `x = 5\nif x > 3:\n    print("yes")\nelse:\n    print("no")`, options: ["yes", "no", "Error", "Nothing"], answer: "yes", concept: "conditionals" },
                { code: `x = 2\nif x > 3:\n    print("big")\nelse:\n    print("small")`, options: ["big", "small", "Error", "2"], answer: "small", concept: "conditionals" },
                { code: `age = 20\nif age >= 18:\n    print("adult")`, options: ["adult", "20", "Error", "Nothing prints"], answer: "adult", concept: "conditionals" },
                { code: `x = 0\nif x:\n    print("truthy")\nelse:\n    print("falsy")`, options: ["truthy", "falsy", "Error", "0"], answer: "falsy", concept: "conditionals" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Loops", questions: [
                { code: `for i in range(3):\n    print(i)`, options: ["0 1 2 (each on a new line)", "1 2 3 (each on a new line)", "Error", "Nothing prints"], answer: "0 1 2 (each on a new line)", concept: "loops" },
                { code: `i = 0\nwhile i < 3:\n    print(i)\n    i += 1`, options: ["0 1 2 (each on a new line)", "Infinite loop", "Error", "1 2 3"], answer: "0 1 2 (each on a new line)", concept: "loops" },
                { code: `total = 0\nfor i in range(4):\n    total += i\nprint(total)`, options: ["4", "6", "10", "Error"], answer: "6", concept: "loops" },
                { code: `for i in range(1, 4):\n    print(i)`, options: ["1 2 3 (each on a new line)", "0 1 2 (each on a new line)", "Error", "4"], answer: "1 2 3 (each on a new line)", concept: "loops" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Functions", questions: [
                { code: `def greet():\n    return "hi"\nprint(greet())`, options: ["hi", "greet", "Error", "None"], answer: "hi", concept: "functions" },
                { code: `def add(a, b):\n    return a + b\nprint(add(3, 4))`, options: ["7", "34", "Error", "None"], answer: "7", concept: "functions" },
                { code: `def square(n):\n    return n * n\nprint(square(5))`, options: ["10", "25", "Error", "5"], answer: "25", concept: "functions" },
                { code: `def say():\n    print("hello")\nsay()`, options: ["hello", "say", "Error", "Nothing"], answer: "hello", concept: "functions" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Arrays", questions: [
                { code: `nums = [1, 2, 3]\nprint(nums[0])`, options: ["1", "2", "3", "Error"], answer: "1", concept: "arrays" },
                { code: `nums = [1, 2, 3]\nnums.append(4)\nprint(nums)`, options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "4"], answer: "[1, 2, 3, 4]", concept: "arrays" },
                { code: `nums = [5, 10, 15]\nprint(len(nums))`, options: ["2", "3", "15", "Error"], answer: "3", concept: "arrays" },
                { code: `nums = [1, 2, 3]\nprint(nums[-1])`, options: ["1", "3", "Error", "-1"], answer: "3", concept: "arrays" }
            ]
        },
        {
            type: "bughunt", tier: "intermediate", label: "Debugging", timeLimit: 15, questions: [
                { code: `def add(a, b):\n    return a - b\n\nprint(add(2, 3))`, bugLine: 2, explanation: "It should be a + b, not a - b, to actually add the numbers.", concept: "debugging" },
                { code: `nums = [1, 2, 3]\nfor i in range(4):\n    print(nums[i])`, bugLine: 2, explanation: "range(4) goes out of bounds for a 3-item list — it should be range(3) or range(len(nums)).", concept: "debugging" },
                { code: `x = 5\nif x = 5:\n    print("five")`, bugLine: 2, explanation: "= assigns a value; comparing needs == instead.", concept: "debugging" },
                { code: `total = 0\nfor i in range(5)\n    total += i\nprint(total)`, bugLine: 2, explanation: "A for loop header needs a colon at the end: range(5):", concept: "debugging" }
            ]
        },
        {
            type: "bughunt", tier: "challenge", label: "Speed Code", timeLimit: 8, questions: [
                { code: `def is_even(n):\n    return n % 2 = 0`, bugLine: 2, explanation: "= assigns; comparing needs == instead of =.", concept: "debugging" },
                { code: `x = [1, 2, 3]\nprint(x[3])`, bugLine: 2, explanation: "A 3-item list only has indexes 0, 1, 2 — index 3 is out of range.", concept: "debugging" },
                { code: `def greet(name):\nprint("Hi " + name)\ngreet("Sam")`, bugLine: 2, explanation: "The line inside the function needs to be indented.", concept: "debugging" },
                { code: `count = 0\nfor i in range(5):\ncount = count + 1\nprint(count)`, bugLine: 3, explanation: "count = count + 1 needs to be indented to sit inside the for loop.", concept: "debugging" }
            ]
        },
        {
            type: "boss", tier: "challenge", title: "👑 Boss: Build a Number Guesser", questions: [
                { code: `attempts = 0\nfor _ in range(3):\n    attempts += 1\nprint(attempts)`, options: ["3", "0", "Error", "1"], answer: "3", concept: "loops" },
                { code: `guess = 7\nsecret = 5\nif guess == secret:\n    print("Correct!")\nelse:\n    print("Try again")`, options: ["Correct!", "Try again", "Error", "Nothing"], answer: "Try again", concept: "conditionals" },
                { code: `def check(guess, secret):\n    return guess == secret\n\nprint(check(5, 5))`, options: ["True", "False", "Error", "None"], answer: "True", concept: "functions" }
            ]
        }
    ],
    javascript: [
        {
            type: "predict", tier: "beginner", label: "Variables & Types", questions: [
                { code: `const name = "Sam";\nconsole.log(\`Hi \${name}!\`);`, options: ["Hi Sam!", "Hi ${name}!", "Error", "Hi undefined!"], answer: "Hi Sam!", concept: "variables" },
                { code: `let x = 5;\nx = "five";\nconsole.log(typeof x);`, options: ["'number'", "'string'", "Error", "'five'"], answer: "'string'", concept: "variables" },
                { code: `const pi = 3.14;\npi = 3;\nconsole.log(pi);`, options: ["3", "3.14", "TypeError: Assignment to constant", "undefined"], answer: "TypeError: Assignment to constant", concept: "variables" },
                { code: `let x;\nconsole.log(x);`, options: ["undefined", "null", "0", "Error"], answer: "undefined", concept: "variables" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Conditionals", questions: [
                { code: `console.log(Boolean(""));`, options: ["true", "false", "Error", "undefined"], answer: "false", concept: "conditionals" },
                { code: `let age = 17;\nconsole.log(age >= 18 ? "adult" : "minor");`, options: ["adult", "minor", "17", "Error"], answer: "minor", concept: "conditionals" },
                { code: `if (0 || "hi") {\n  console.log("truthy");\n} else {\n  console.log("falsy");\n}`, options: ["truthy", "falsy", "Error", "0"], answer: "truthy", concept: "conditionals" },
                { code: `console.log(null == undefined);`, options: ["true", "false", "Error", "NaN"], answer: "true", concept: "conditionals" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Loops", questions: [
                { code: `let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 2);`, options: ["0 1 (each on a new line)", "0 1 2", "Infinite loop", "Error"], answer: "0 1 (each on a new line)", concept: "loops" },
                { code: `for (let i = 5; i > 0; i -= 2) {\n  console.log(i);\n}`, options: ["5 3 1 (each on a new line)", "5 4 3 2 1", "Error", "1 3 5"], answer: "5 3 1 (each on a new line)", concept: "loops" },
                { code: `let colors = ["red", "blue"];\nfor (const c of colors) {\n  console.log(c);\n}`, options: ["red blue (each on a new line)", "0 1 (each on a new line)", "Error", "red,blue"], answer: "red blue (each on a new line)", concept: "loops" },
                { code: `let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}`, options: ["0 1 2 (each on a new line)", "Infinite loop", "Error", "1 2 3"], answer: "0 1 2 (each on a new line)", concept: "loops" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Functions & Scope", questions: [
                { code: `const square = n => n * n;\nconsole.log(square(4));`, options: ["8", "16", "Error", "undefined"], answer: "16", concept: "functions" },
                { code: `function greet(name = "friend") {\n  return \`Hi \${name}\`;\n}\nconsole.log(greet());`, options: ["Hi friend", "Hi undefined", "Error", "Hi"], answer: "Hi friend", concept: "functions" },
                { code: `function outer() {\n  let x = 10;\n  function inner() {\n    return x + 1;\n  }\n  return inner();\n}\nconsole.log(outer());`, options: ["10", "11", "Error", "undefined"], answer: "11", concept: "functions" },
                { code: `const add = (a, b) => a + b;\nconsole.log(add(2, 3));`, options: ["5", "23", "Error", "undefined"], answer: "5", concept: "functions" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Array Methods", questions: [
                { code: `let nums = [1, 2, 3, 4];\nconsole.log(nums.filter(n => n % 2 === 0));`, options: ["[2, 4]", "[1, 3]", "[1, 2, 3, 4]", "Error"], answer: "[2, 4]", concept: "arrays" },
                { code: `let nums = [1, 2, 3];\nconsole.log(nums.reduce((sum, n) => sum + n, 0));`, options: ["6", "0", "[1, 2, 3]", "Error"], answer: "6", concept: "arrays" },
                { code: `let words = ["a", "b", "c"];\nconsole.log(words.join("-"));`, options: ["a-b-c", "abc", "[a,b,c]", "Error"], answer: "a-b-c", concept: "arrays" },
                { code: `let nums = [3, 1, 2];\nconsole.log(nums.sort());`, options: ["[1, 2, 3]", "[3, 1, 2]", "[3, 2, 1]", "Error"], answer: "[1, 2, 3]", concept: "arrays" }
            ]
        },
        {
            type: "bughunt", tier: "intermediate", label: "Debugging", timeLimit: 15, questions: [
                { code: `const nums = [1, 2, 3];\nnums.push(4);\nconsole.log(nums);\nnums = [];`, bugLine: 4, explanation: "nums is declared with const, so it can't be reassigned — only let allows that.", concept: "debugging" },
                { code: `function multiply(a, b) {\n  a * b;\n}\nconsole.log(multiply(2, 3));`, bugLine: 2, explanation: "The function never returns a value — it needs return a * b;.", concept: "debugging" },
                { code: `let user = { name: "Sam" };\nconsole.log(user.age.toString());`, bugLine: 2, explanation: "user has no age property, so user.age is undefined and calling .toString() on it throws an error.", concept: "debugging" },
                { code: `for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(j), 100);\n}`, bugLine: 2, explanation: "j is never defined — the loop variable is i, not j.", concept: "debugging" }
            ]
        },
        {
            type: "bughunt", tier: "challenge", label: "Speed Code", timeLimit: 8, questions: [
                { code: `let x = 5;\nconsole.log(x === "5");`, bugLine: 2, explanation: "This isn't a crash, but a common mix-up: === checks type too, so a number never strictly equals a string — this line just silently prints false.", concept: "debugging" },
                { code: `const items = [1, 2, 3];\nitems.length = 0;\nconsole.log(items[5].toFixed());`, bugLine: 3, explanation: "The array was just emptied, so items[5] is undefined, and calling .toFixed() on it throws an error.", concept: "debugging" },
                { code: `function getUser() {\n  return\n    { name: "Sam" };\n}\nconsole.log(getUser());`, bugLine: 2, explanation: "JavaScript auto-inserts a semicolon after return on its own line, so this silently returns undefined instead of the object.", concept: "debugging" },
                { code: `let count = 0;\narr.forEach(n => count += n);\nconsole.log(count);`, bugLine: 2, explanation: "arr was never declared anywhere — it should be defined before looping over it.", concept: "debugging" }
            ]
        },
        {
            type: "boss", tier: "challenge", title: "👑 Boss: Build a Shopping Cart Total", questions: [
                { code: `const prices = [10, 20, 30];\nconst total = prices.reduce((sum, p) => sum + p, 0);\nconsole.log(total);`, options: ["60", "0", "[10,20,30]", "Error"], answer: "60", concept: "arrays" },
                { code: `function applyDiscount(total, code) {\n  return code === "SAVE10" ? total * 0.9 : total;\n}\nconsole.log(applyDiscount(100, "SAVE10"));`, options: ["90", "100", "10", "Error"], answer: "90", concept: "functions" },
                { code: `const cart = ["shirt", "shoes"];\nif (cart.length > 0) {\n  console.log("checkout ready");\n} else {\n  console.log("cart empty");\n}`, options: ["checkout ready", "cart empty", "2", "Error"], answer: "checkout ready", concept: "conditionals" }
            ]
        }
    ],
    c: [
        {
            type: "predict", tier: "beginner", label: "Variables & Types", questions: [
                { code: `int x = 7;\nfloat y = 2.0;\nprintf("%.1f", x / y);`, options: ["3.5", "3", "Error", "3.0"], answer: "3.5", concept: "variables" },
                { code: `printf("%d", sizeof(int));`, options: ["2", "4", "1", "Error"], answer: "4", concept: "variables" },
                { code: `char grade = 'B';\nprintf("%c", grade);`, options: ["B", "'B'", "66", "Error"], answer: "B", concept: "variables" },
                { code: `int x;\nprintf("%d", x);`, options: ["0", "Garbage/unpredictable value", "Error, won't compile", "null"], answer: "Garbage/unpredictable value", concept: "variables" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Conditionals", questions: [
                { code: `int x = 5;\nprintf("%d", x > 3 && x < 10);`, options: ["1", "0", "true", "Error"], answer: "1", concept: "conditionals" },
                { code: `int x = 0;\nif (x) {\n  printf("yes");\n} else {\n  printf("no");\n}`, options: ["yes", "no", "0", "Error"], answer: "no", concept: "conditionals" },
                { code: `int x = 5;\nswitch (x) {\n  case 5:\n    printf("five");\n    break;\n  default:\n    printf("other");\n}`, options: ["five", "other", "5", "Error"], answer: "five", concept: "conditionals" },
                { code: `int a = 4, b = 4;\nprintf("%d", a == b);`, options: ["1", "0", "true", "Error"], answer: "1", concept: "conditionals" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Loops", questions: [
                { code: `int i = 0;\ndo {\n  printf("%d", i);\n  i++;\n} while (i < 3);`, options: ["012", "0123", "Infinite loop", "Error"], answer: "012", concept: "loops" },
                { code: `for (int i = 10; i > 0; i -= 5) {\n  printf("%d ", i);\n}`, options: ["10 5", "10 5 0", "Error", "5 10"], answer: "10 5", concept: "loops" },
                { code: `int total = 1;\nfor (int i = 1; i <= 3; i++) {\n  total *= i;\n}\nprintf("%d", total);`, options: ["6", "3", "1", "Error"], answer: "6", concept: "loops" },
                { code: `for (int i = 0; i < 5; i++) {\n  if (i == 3) break;\n  printf("%d", i);\n}`, options: ["012", "0123", "01234", "Error"], answer: "012", concept: "loops" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Functions & Pointers", questions: [
                { code: `int square(int n) {\n    return n * n;\n}\nprintf("%d", square(6));`, options: ["12", "36", "Error", "6"], answer: "36", concept: "functions" },
                { code: `int x = 5;\nint *p = &x;\nprintf("%d", *p);`, options: ["5", "The address of x", "Error", "0"], answer: "5", concept: "functions" },
                { code: `void increment(int *n) {\n    *n = *n + 1;\n}\nint x = 5;\nincrement(&x);\nprintf("%d", x);`, options: ["5", "6", "Error", "Address printed"], answer: "6", concept: "functions" },
                { code: `int cube(int n) {\n    return n * n * n;\n}\nprintf("%d", cube(3));`, options: ["9", "27", "6", "Error"], answer: "27", concept: "functions" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Arrays & Strings", questions: [
                { code: `char name[] = "Sam";\nprintf("%s", name);`, options: ["Sam", "S a m", "Error", "S"], answer: "Sam", concept: "arrays" },
                { code: `int arr[4] = {2, 4, 6, 8};\nprintf("%d", arr[2] * 2);`, options: ["8", "12", "16", "Error"], answer: "12", concept: "arrays" },
                { code: `char name[] = "Hi";\nprintf("%d", strlen(name));`, options: ["1", "2", "3", "Error"], answer: "2", concept: "arrays" },
                { code: `int arr[3] = {1, 2, 3};\nint sum = 0;\nfor (int i = 0; i < 3; i++) sum += arr[i];\nprintf("%d", sum);`, options: ["6", "3", "1", "Error"], answer: "6", concept: "arrays" }
            ]
        },
        {
            type: "bughunt", tier: "intermediate", label: "Debugging", timeLimit: 15, questions: [
                { code: `int x = 5;\nprintf("%f", x);`, bugLine: 2, explanation: "%f is for floats/doubles; an int should be printed with %d, or the output will be garbage.", concept: "debugging" },
                { code: `int arr[5];\nfor (int i = 0; i <= 5; i++) {\n    arr[i] = i;\n}`, bugLine: 2, explanation: "i <= 5 lets i reach 5, writing past the end of a 5-slot array. It should be i < 5.", concept: "debugging" },
                { code: `int divide(int a, int b) {\n    return a / b;\n}\nprintf("%d", divide(10, 0));`, bugLine: 3, explanation: "Dividing by 0 causes undefined behavior — a classic divide-by-zero bug.", concept: "debugging" },
                { code: `void setValue(int n) {\n    n = 99;\n}\nint x = 5;\nsetValue(x);\nprintf("%d", x);`, bugLine: 1, explanation: "n is passed by value, so changing it inside the function doesn't affect x — a pointer (int *n) is needed to modify the original.", concept: "debugging" }
            ]
        },
        {
            type: "bughunt", tier: "challenge", label: "Speed Code", timeLimit: 8, questions: [
                { code: `int isEven(int n) {\n    return n % 2 = 0;\n}`, bugLine: 2, explanation: "= assigns; comparing needs == instead of =.", concept: "debugging" },
                { code: `char name[3] = "Sam";\nprintf("%s", name);`, bugLine: 1, explanation: "\"Sam\" needs 4 bytes (S, a, m, and a null terminator), but the array only holds 3 — it overflows.", concept: "debugging" },
                { code: `int x = 5, y = 0;\nprintf("%d", x / y);`, bugLine: 2, explanation: "Dividing by y, which is 0, is a divide-by-zero bug.", concept: "debugging" },
                { code: `int total = 0;\nfor (int i = 0; i < 5; i++)\n    total = i;\nprintf("%d", total);`, bugLine: 3, explanation: "total = i resets the value every loop instead of accumulating — it should be total += i.", concept: "debugging" }
            ]
        },
        {
            type: "boss", tier: "challenge", title: "👑 Boss: Build a Student Average Calculator", questions: [
                { code: `int scores[3] = {80, 90, 70};\nint sum = 0;\nfor (int i = 0; i < 3; i++) sum += scores[i];\nprintf("%d", sum / 3);`, options: ["70", "80", "90", "Error"], answer: "80", concept: "loops" },
                { code: `int average(int a, int b, int c) {\n    return (a + b + c) / 3;\n}\nprintf("%d", average(60, 70, 80));`, options: ["70", "60", "210", "Error"], answer: "70", concept: "functions" },
                { code: `int avg = 55;\nif (avg >= 60) {\n    printf("pass");\n} else {\n    printf("fail");\n}`, options: ["pass", "fail", "55", "Error"], answer: "fail", concept: "conditionals" }
            ]
        }
    ],
    html: [
        {
            type: "predict", tier: "beginner", label: "Text & Structure", questions: [
                { code: `<h1>Title</h1>\n<h2>Subtitle</h2>`, options: ["A large heading, then a smaller heading below it", "Two identically sized headings", "One heading only", "Error"], answer: "A large heading, then a smaller heading below it", concept: "tags" },
                { code: `<!-- This is a comment -->\n<p>Visible text</p>`, options: ["Only 'Visible text' shows on the page", "Both the comment and the text show", "Nothing shows", "Error"], answer: "Only 'Visible text' shows on the page", concept: "tags" },
                { code: `<p>Line one<br>Line two</p>`, options: ["Line one, then a line break, then Line two", "Line oneLine two on one line", "Two separate paragraphs", "Error"], answer: "Line one, then a line break, then Line two", concept: "tags" },
                { code: `<span>Inline</span> <div>Block</div>`, options: ["Span stays inline with surrounding text; div starts on its own line", "Both display inline", "Both display as blocks", "Error"], answer: "Span stays inline with surrounding text; div starts on its own line", concept: "tags" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Attributes", questions: [
                { code: `<a href="https://example.com" target="_blank">Visit</a>`, options: ["A link that opens in a new tab", "A link that opens in the same tab", "A button", "Error"], answer: "A link that opens in a new tab", concept: "tags" },
                { code: `<img src="dog.jpg" alt="A dog" width="200">`, options: ["An image shown at 200px wide, with 'A dog' as fallback/accessibility text", "Just the text 'A dog'", "An image with no size set", "Error"], answer: "An image shown at 200px wide, with 'A dog' as fallback/accessibility text", concept: "tags" },
                { code: `<input type="password" placeholder="Enter PIN">`, options: ["A text box that hides typed characters, showing faint text 'Enter PIN'", "A normal visible text box", "A button", "Error"], answer: "A text box that hides typed characters, showing faint text 'Enter PIN'", concept: "tags" },
                { code: `<p id="intro" class="highlight">Hello</p>`, options: ["A paragraph that can be targeted by both an id and a class for styling", "A paragraph with no way to be styled", "An error, since id and class can't be used together", "A list item"], answer: "A paragraph that can be targeted by both an id and a class for styling", concept: "tags" }
            ]
        },
        {
            type: "predict", tier: "beginner", label: "Lists & Nesting", questions: [
                { code: `<ul>\n  <li>Fruit\n    <ul><li>Apple</li></ul>\n  </li>\n</ul>`, options: ["A bulleted list with 'Fruit', containing a nested bulleted list with 'Apple'", "Two separate flat lists", "An error, lists can't nest", "A numbered list"], answer: "A bulleted list with 'Fruit', containing a nested bulleted list with 'Apple'", concept: "tags" },
                { code: `<ol start="5">\n  <li>Item</li>\n  <li>Item</li>\n</ol>`, options: ["A numbered list starting at 5, so items are numbered 5 and 6", "A numbered list starting at 1", "A bulleted list", "Error"], answer: "A numbered list starting at 5, so items are numbered 5 and 6", concept: "tags" },
                { code: `<div>\n  <p>Outer</p>\n  <div><p>Inner</p></div>\n</div>`, options: ["An 'Outer' paragraph and, nested inside another div, an 'Inner' paragraph", "Just 'OuterInner' on one line", "An error, divs can't be nested", "Only 'Outer' shows"], answer: "An 'Outer' paragraph and, nested inside another div, an 'Inner' paragraph", concept: "tags" },
                { code: `<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>`, options: ["A bulleted list with three items", "A numbered list with three items", "Three separate paragraphs", "Error"], answer: "A bulleted list with three items", concept: "tags" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Forms", questions: [
                { code: `<select>\n  <option>Small</option>\n  <option>Large</option>\n</select>`, options: ["A dropdown menu letting you pick Small or Large", "Two separate buttons", "A text box", "Error"], answer: "A dropdown menu letting you pick Small or Large", concept: "tags" },
                { code: `<label for="email">Email:</label>\n<input id="email" type="email">`, options: ["A label that, when clicked, focuses the linked email input", "A label with no connection to the input", "Just an input with no label", "Error"], answer: "A label that, when clicked, focuses the linked email input", concept: "tags" },
                { code: `<input type="radio" name="size"> Small\n<input type="radio" name="size"> Large`, options: ["Two radio buttons where only one can be selected at a time", "Two checkboxes that can both be checked", "Two independent buttons", "Error"], answer: "Two radio buttons where only one can be selected at a time", concept: "tags" },
                { code: `<button type="submit">Send</button>`, options: ["A button that submits its form when clicked", "A button that does nothing by default", "A link labeled Send", "Error"], answer: "A button that submits its form when clicked", concept: "tags" }
            ]
        },
        {
            type: "predict", tier: "intermediate", label: "Semantic Layout", questions: [
                { code: `<header>\n  <h1>My Site</h1>\n</header>\n<main>\n  <p>Content</p>\n</main>`, options: ["A page with a header section and a main content section, structurally labeled", "Two unrelated paragraphs", "An error, header/main aren't valid tags", "A single block with no structure"], answer: "A page with a header section and a main content section, structurally labeled", concept: "tags" },
                { code: `<nav>\n  <a href="#">Home</a>\n  <a href="#">About</a>\n</nav>`, options: ["A navigation section containing two links", "Two unrelated links with no grouping", "A list of items", "Error"], answer: "A navigation section containing two links", concept: "tags" },
                { code: `<article>\n  <h2>Post Title</h2>\n  <p>Post body</p>\n</article>`, options: ["A self-contained piece of content with its own heading and body text", "A form", "A table", "Error"], answer: "A self-contained piece of content with its own heading and body text", concept: "tags" },
                { code: `<footer>\n  <p>&copy; 2026</p>\n</footer>`, options: ["A footer section showing a copyright symbol and 2026", "A header section", "Nothing shows", "Error"], answer: "A footer section showing a copyright symbol and 2026", concept: "tags" }
            ]
        },
        {
            type: "bughunt", tier: "intermediate", label: "Debugging", timeLimit: 15, questions: [
                { code: `<div>\n  <p>Welcome</p>\n  <p>Enjoy your stay<p>\n</div>`, bugLine: 3, explanation: "The closing tag should be </p>, not another opening <p>.", concept: "debugging" },
                { code: `<img src="cat.jpg" alt="A cat">\n</img>`, bugLine: 2, explanation: "<img> is a self-closing tag and doesn't need a separate closing </img> tag.", concept: "debugging" },
                { code: `<a hef="page.html">Click here</a>`, bugLine: 1, explanation: "hef is a typo for href — without it, the link has no destination.", concept: "debugging" },
                { code: `<label for="username">Name</label>\n<input id="user" type="text">`, bugLine: 1, explanation: "The label's for value (username) doesn't match the input's id (user), so clicking the label won't focus the input.", concept: "debugging" }
            ]
        },
        {
            type: "bughunt", tier: "challenge", label: "Speed Code", timeLimit: 8, questions: [
                { code: `<h1>Title<h1>`, bugLine: 1, explanation: "Missing slash — the closing tag should be </h1>.", concept: "debugging" },
                { code: `<ul>\n  <li>One</li>\n  <li>Two<li>\n</ul>`, bugLine: 3, explanation: "The closing tag should be </li>, not another opening <li>.", concept: "debugging" },
                { code: `<input type="text" placeholder=Name>`, bugLine: 1, explanation: "The attribute value needs quotes: placeholder=\"Name\".", concept: "debugging" },
                { code: `<a href="site.html">Home</a>\n</a>`, bugLine: 2, explanation: "There's an extra closing tag — only one </a> is needed right after Home.", concept: "debugging" }
            ]
        },
        {
            type: "boss", tier: "challenge", title: "👑 Boss: Build a Mini Recipe Page", questions: [
                { code: `<h1>Pasta</h1>\n<p>Serves 4</p>`, options: ["A big heading 'Pasta' then a paragraph 'Serves 4'", "Two headings", "A link", "Error"], answer: "A big heading 'Pasta' then a paragraph 'Serves 4'", concept: "tags" },
                { code: `<ol>\n  <li>Boil water</li>\n  <li>Add pasta</li>\n  <li>Drain</li>\n</ol>`, options: ["A numbered list of three steps", "A bulleted list", "A table", "Error"], answer: "A numbered list of three steps", concept: "tags" },
                { code: `<img src="pasta.jpg" alt="A bowl of pasta" width="300">`, options: ["An image shown at 300px wide, with 'A bowl of pasta' as fallback text", "Just the text 'A bowl of pasta'", "Nothing shows", "Error"], answer: "An image shown at 300px wide, with 'A bowl of pasta' as fallback text", concept: "tags" }
            ]
        }
    ]
};

// ---------- LANGUAGE BATTLE DATA ----------
const battleData = {
    python_javascript: {
        label: "🐍 Python → ⚡ JavaScript", questions: [
            { sourceCode: `x = 5\ny = 3\nprint(x + y)`, options: [`let x = 5;\nlet y = 3;\nconsole.log(x + y);`, `let x = 5, y = 3;\nprint(x + y);`, `int x = 5, y = 3;\nconsole.log(x + y);`, `x = 5\ny = 3\nconsole.log(x+y)`], answer: `let x = 5;\nlet y = 3;\nconsole.log(x + y);`, concept: "translation" },
            { sourceCode: `for i in range(3):\n    print(i)`, options: [`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, `for i in range(3) { console.log(i) }`, `for (let i = 0; i <= 3; i++) {\n  console.log(i);\n}`, `for (let i in range(3)) {\n  console.log(i);\n}`], answer: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, concept: "translation" }
        ]
    },
    javascript_python: {
        label: "⚡ JavaScript → 🐍 Python", questions: [
            { sourceCode: `let x = 10;\nif (x > 5) {\n  console.log("big");\n}`, options: [`x = 10\nif x > 5:\n    print("big")`, `x = 10\nif (x > 5):\n  console.log("big")`, `let x = 10\nif x > 5:\n print("big")`, `x = 10\nif x > 5\n    print("big")`], answer: `x = 10\nif x > 5:\n    print("big")`, concept: "translation" },
            { sourceCode: `function square(n) {\n  return n * n;\n}\nconsole.log(square(4));`, options: [`def square(n):\n    return n * n\n\nprint(square(4))`, `function square(n):\n    return n * n\nprint(square(4))`, `def square(n)\n    return n * n\nprint(square(4))`, `square(n) = n * n\nprint(square(4))`], answer: `def square(n):\n    return n * n\n\nprint(square(4))`, concept: "translation" }
        ]
    },
    python_c: {
        label: "🐍 Python → ⚙️ C", questions: [
            { sourceCode: `x = 5\ny = 2\nprint(x + y)`, options: [`int x = 5, y = 2;\nprintf("%d", x + y);`, `let x = 5, y = 2;\nprintf("%d", x + y);`, `x = 5, y = 2;\nprintf("%d", x + y);`, `int x = 5, y = 2;\nconsole.log(x + y);`], answer: `int x = 5, y = 2;\nprintf("%d", x + y);`, concept: "translation" },
            { sourceCode: `for i in range(3):\n    print(i)`, options: [`for (int i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, `for i in range(3) {\n    printf("%d", i);\n}`, `for (int i = 0; i <= 3; i++) {\n    printf("%d", i);\n}`, `for (int i = 3; i > 0; i--) {\n    printf("%d", i);\n}`], answer: `for (int i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, concept: "translation" }
        ]
    },
    c_python: {
        label: "⚙️ C → 🐍 Python", questions: [
            { sourceCode: `int x = 5;\nif (x > 3) {\n    printf("big");\n}`, options: [`x = 5\nif x > 3:\n    print("big")`, `int x = 5\nif x > 3:\n    print("big")`, `x = 5\nif (x > 3)\n    print("big")`, `x = 5\nif x > 3\n    print("big")`], answer: `x = 5\nif x > 3:\n    print("big")`, concept: "translation" },
            { sourceCode: `int arr[3] = {1, 2, 3};\nprintf("%d", arr[1]);`, options: [`arr = [1, 2, 3]\nprint(arr[1])`, `arr = {1, 2, 3}\nprint(arr[1])`, `arr = [1, 2, 3]\nprint(arr(1))`, `int arr = [1, 2, 3]\nprint(arr[1])`], answer: `arr = [1, 2, 3]\nprint(arr[1])`, concept: "translation" }
        ]
    },
    javascript_c: {
        label: "⚡ JavaScript → ⚙️ C", questions: [
            { sourceCode: `let x = 5;\nconsole.log(x * 2);`, options: [`int x = 5;\nprintf("%d", x * 2);`, `let x = 5;\nprintf("%d", x * 2);`, `int x = 5;\nconsole.log(x * 2);`, `x = 5;\nprintf("%d", x * 2);`], answer: `int x = 5;\nprintf("%d", x * 2);`, concept: "translation" },
            { sourceCode: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, options: [`for (int i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, `for (let i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, `for (int i = 0; i <= 3; i++) {\n    printf("%d", i);\n}`, `for i in range(3) {\n    printf("%d", i);\n}`], answer: `for (int i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, concept: "translation" }
        ]
    },
    c_javascript: {
        label: "⚙️ C → ⚡ JavaScript", questions: [
            { sourceCode: `int x = 5;\nprintf("%d", x + 1);`, options: [`let x = 5;\nconsole.log(x + 1);`, `int x = 5;\nconsole.log(x + 1);`, `let x = 5;\nprintf(x + 1);`, `x = 5;\nconsole.log(x + 1)`], answer: `let x = 5;\nconsole.log(x + 1);`, concept: "translation" },
            { sourceCode: `for (int i = 0; i < 3; i++) {\n    printf("%d", i);\n}`, options: [`for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, `for (int i = 0; i < 3; i++) {\n  console.log(i);\n}`, `for (let i = 0; i <= 3; i++) {\n  console.log(i);\n}`, `for i in range(3) {\n  console.log(i);\n}`], answer: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`, concept: "translation" }
        ]
    }
};

// ---------- SANDBOX ARENA DATA ----------
const arenaData = {
    python: [
        { code: `print(3 + 4 * 2)`, options: ["14", "11", "10", "Error"], answer: "11", concept: "operators" },
        { code: `x = "cat"\nprint(x.upper())`, options: ["cat", "CAT", "Cat", "Error"], answer: "CAT", concept: "variables" },
        { code: `nums = [1, 2, 3, 4]\nprint(nums[-1])`, options: ["1", "4", "Error", "-1"], answer: "4", concept: "arrays" },
        { code: `def double(n):\n    return n * 2\nprint(double(6))`, options: ["6", "12", "Error", "None"], answer: "12", concept: "functions" }
    ],
    javascript: [
        { code: `console.log(10 % 3);`, options: ["3", "1", "3.33", "Error"], answer: "1", concept: "operators" },
        { code: `let s = "hi";\nconsole.log(s.length);`, options: ["1", "2", "3", "Error"], answer: "2", concept: "variables" },
        { code: `let arr = [10, 20, 30];\nconsole.log(arr[0]);`, options: ["10", "30", "0", "Error"], answer: "10", concept: "arrays" },
        { code: `function triple(n) {\n  return n * 3;\n}\nconsole.log(triple(3));`, options: ["6", "9", "Error", "undefined"], answer: "9", concept: "functions" }
    ],
    c: [
        { code: `printf("%d", 9 / 2);`, options: ["4.5", "4", "5", "Error"], answer: "4", concept: "operators" },
        { code: `int x = 3;\nx = x + 1;\nprintf("%d", x);`, options: ["3", "4", "Error", "1"], answer: "4", concept: "variables" },
        { code: `int arr[3] = {7, 8, 9};\nprintf("%d", arr[2]);`, options: ["7", "8", "9", "Error"], answer: "9", concept: "arrays" },
        { code: `int x = 6;\nif (x > 10) {\n  printf("big");\n} else {\n  printf("small");\n}`, options: ["big", "small", "Error", "6"], answer: "small", concept: "conditionals" }
    ],
    html: [
        { code: `<strong>Bold text</strong>`, options: ["Bold text, shown bold", "Bold text, shown italic", "Nothing shows", "Error"], answer: "Bold text, shown bold", concept: "tags" },
        { code: `<button>Click me</button>`, options: ["A clickable button labeled Click me", "Plain text", "A link", "Error"], answer: "A clickable button labeled Click me", concept: "tags" },
        { code: `<em>Important</em>`, options: ["Important, shown in italics", "Important, shown bold", "Nothing", "Error"], answer: "Important, shown in italics", concept: "tags" },
        { code: `<table><tr><td>1</td></tr></table>`, options: ["A table with one cell containing 1", "A list with one item", "A paragraph", "Error"], answer: "A table with one cell containing 1", concept: "tags" }
    ]
};

// ---------- CODE LAB DATA ----------
const codeLabData = {
    python: {
        runtime: "piston", language: "python", version: "3.10.0", disabled: true,
        challenges: [
            {
                prompt: "Write a function called double(n) that returns n * 2, then call print(double(21)).",
                starter: `def double(n):\n    # your code here\n    pass\n\nprint(double(21))`,
                expectedOutput: "42", concept: "functions"
            },
            {
                prompt: "Write a for loop that prints the numbers 1 through 5, each on its own line.",
                starter: `# write your loop here\n`,
                expectedOutput: "1\n2\n3\n4\n5", concept: "loops"
            },
            {
                prompt: "Write a function is_even(n) that returns True if n is even, then call print(is_even(10)).",
                starter: `def is_even(n):\n    # your code here\n    pass\n\nprint(is_even(10))`,
                expectedOutput: "True", concept: "conditionals"
            }
        ]
    },
    javascript: {
        runtime: "browser",
        challenges: [
            {
                prompt: "Write a function double(n) that returns n * 2, then call console.log(double(21));",
                starter: `function double(n) {\n  // your code here\n}\n\nconsole.log(double(21));`,
                expectedOutput: "42", concept: "functions"
            },
            {
                prompt: "Write a for loop that logs the numbers 1 through 5, each on its own line.",
                starter: `// write your loop here\n`,
                expectedOutput: "1\n2\n3\n4\n5", concept: "loops"
            },
            {
                prompt: "Write a function isEven(n) that returns true if n is even, then call console.log(isEven(10));",
                starter: `function isEven(n) {\n  // your code here\n}\n\nconsole.log(isEven(10));`,
                expectedOutput: "true", concept: "conditionals"
            }
        ]
    },
    c: {
        runtime: "piston", language: "c", version: "10.2.0", disabled: true,
        challenges: [
            {
                prompt: "Complete doubleIt so it returns n * 2. The program will print the result.",
                starter: `#include <stdio.h>\n\nint doubleIt(int n) {\n    // your code here\n}\n\nint main() {\n    printf("%d", doubleIt(21));\n    return 0;\n}`,
                expectedOutput: "42", concept: "functions"
            },
            {
                prompt: "Write a for loop inside main that prints 1 through 5, each on its own line.",
                starter: `#include <stdio.h>\n\nint main() {\n    // write your loop here\n    return 0;\n}`,
                expectedOutput: "1\n2\n3\n4\n5", concept: "loops"
            },
            {
                prompt: "Complete isEven so it returns 1 if n is even, 0 otherwise.",
                starter: `#include <stdio.h>\n\nint isEven(int n) {\n    // your code here\n}\n\nint main() {\n    printf("%d", isEven(10));\n    return 0;\n}`,
                expectedOutput: "1", concept: "conditionals"
            }
        ]
    },
    html: {
        runtime: "html-check",
        challenges: [
            {
                prompt: "Write an <h1> tag containing the text: My Page",
                starter: `<!-- write your h1 here -->`,
                validate: function (code) {
                    const ok = /<h1>\s*My Page\s*<\/h1>/i.test(code);
                    return { pass: ok, message: ok ? "Found a valid <h1>My Page</h1>" : "Looking for exactly <h1>My Page</h1>" };
                }, concept: "tags"
            },
            {
                prompt: "Write a paragraph <p> tag with any text, plus a link <a> tag that has an href attribute.",
                starter: `<!-- write your paragraph and link here -->`,
                validate: function (code) {
                    const hasP = /<p>.*<\/p>/is.test(code);
                    const hasLink = /<a\s+[^>]*href\s*=/i.test(code);
                    const ok = hasP && hasLink;
                    return { pass: ok, message: ok ? "Found a <p> and a linked <a href>" : "Need both a <p>...</p> and an <a href=\"...\">...</a>" };
                }, concept: "tags"
            },
            {
                prompt: "Write an unordered list <ul> with at least two <li> items.",
                starter: `<!-- write your list here -->`,
                validate: function (code) {
                    const liCount = (code.match(/<li>/gi) || []).length;
                    const hasUl = /<ul>[\s\S]*<\/ul>/i.test(code);
                    const ok = hasUl && liCount >= 2;
                    return { pass: ok, message: ok ? "Found a <ul> with " + liCount + " <li> items" : "Need a <ul> containing at least two <li> items" };
                }, concept: "tags"
            }
        ]
    }
};

const langNames = { python: "Python", javascript: "JavaScript", c: "C", html: "HTML" };
const rankLabels = ["Rookie", "Coder", "Debugger", "Developer", "Code Master"];
const BUG_TIME_LIMIT = 15;
const BACKEND_URL = "https://codequest-backend-3r5p.onrender.com"; // change this after deploying (Step 2 below)
const CONCEPT_KEYS = ["variables", "operators", "loops", "conditionals", "functions", "arrays", "tags", "debugging", "translation"];
const tierLabels = {
    beginner: "🟢 Beginner",
    intermediate: "🟡 Intermediate",
    challenge: "🔴 Challenge"
};

// ---------- SHUFFLE HELPER ----------
function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
// ---------- SOUND EFFECTS ----------
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playClickSound() {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
}

function playWinSound() {
    const ctx = getAudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // a little rising arpeggio
    notes.forEach(function (freq, i) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        const startTime = ctx.currentTime + i * 0.09;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.3);
    });
}

// ---------- PROGRESS (SAVED IN THE BROWSER) ----------
function emptyConcepts() {
    const obj = {};
    CONCEPT_KEYS.forEach(k => { obj[k] = { correct: 0, total: 0 }; });
    return obj;
}

function defaultProgress() {
    return {
        python: { unlocked: 1, completed: [] },
        javascript: { unlocked: 1, completed: [] },
        c: { unlocked: 1, completed: [] },
        html: { unlocked: 1, completed: [] },
        xp: 0,
        streak: 0,
        bestStreak: 0,
        badges: [],
        battlesWon: 0,
        arenaMatches: 0,
        codelabCompleted: { python: [], javascript: [], c: [], html: [] },
        concepts: emptyConcepts()
    };
}

function loadProgress() {
    const saved = localStorage.getItem("codequest_progress");
    if (!saved) return defaultProgress();
    try {
        return JSON.parse(saved);
    } catch (e) {
        return defaultProgress();
    }
}

function saveProgress() {
    localStorage.setItem("codequest_progress", JSON.stringify(progress));
}

function migrateProgress() {
    Object.keys(langNames).forEach(lang => {
        const totalLevels = worldsData[lang].length;
        const completed = progress[lang].completed;
        const highestCompleted = completed.length ? Math.max(...completed) : 0;
        const shouldBeUnlocked = Math.min(highestCompleted + 1, totalLevels);
        if (progress[lang].unlocked < shouldBeUnlocked) {
            progress[lang].unlocked = shouldBeUnlocked;
        }
    });
    if (typeof progress.battlesWon !== "number") progress.battlesWon = 0;
    if (typeof progress.arenaMatches !== "number") progress.arenaMatches = 0;
    if (!progress.concepts) progress.concepts = emptyConcepts();
    if (!progress.codelabCompleted) progress.codelabCompleted = { python: [], javascript: [], c: [], html: [] };
    CONCEPT_KEYS.forEach(k => {
        if (!progress.concepts[k]) progress.concepts[k] = { correct: 0, total: 0 };
    });
    saveProgress();
}

let progress = loadProgress();
migrateProgress();

// ---------- SCREEN SWITCHING ----------
function hideAllScreens() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("world-screen").style.display = "none";
    document.getElementById("battle-screen").style.display = "none";
    document.getElementById("concept-screen").style.display = "none";
    document.getElementById("arena-screen").style.display = "none";
    document.getElementById("arena-handoff-screen").style.display = "none";
    document.getElementById("arena-result-screen").style.display = "none";
    document.getElementById("howto-screen").style.display = "none";
    document.getElementById("codelab-screen").style.display = "none";
    document.getElementById("codelab-challenge-screen").style.display = "none";
    document.getElementById("leaderboard-screen").style.display = "none";
    document.getElementById("game-area").style.display = "none";
}

function showHome() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("home-screen").style.display = "block";
    renderHome();
}

function renderHome() {
    document.getElementById("total-xp").textContent = progress.xp;
    document.getElementById("current-streak").textContent = progress.streak;
    document.getElementById("arena-matches").textContent = progress.arenaMatches;

    let codelabDone = 0, codelabTotal = 0;
    Object.keys(codeLabData).forEach(lang => {
        if (codeLabData[lang].disabled) return;
        codelabTotal += codeLabData[lang].challenges.length;
        codelabDone += progress.codelabCompleted[lang].length;
    });
    document.getElementById("codelab-progress").textContent = codelabDone + " / " + codelabTotal;

    const rankIndex = Math.min(Math.floor(progress.xp / 100), rankLabels.length - 1);
    document.getElementById("rank-label").textContent = rankLabels[rankIndex];

    Object.keys(langNames).forEach(lang => {
        const total = worldsData[lang].length;
        const done = progress[lang].completed.length;
        document.getElementById(lang + "-progress").textContent = done + " / " + total + " levels";
    });

    const badgeList = document.getElementById("badge-list");
    badgeList.innerHTML = "";
    if (progress.badges.length === 0) {
        badgeList.innerHTML = '<span class="badge-empty">No badges yet — complete a world to earn one!</span>';
    } else {
        progress.badges.forEach(key => {
            const span = document.createElement("span");
            span.className = "badge-item";
            span.textContent = key === "battle" ? "⚔️ Battle Champion" : "🏅 " + langNames[key] + " Master";
            badgeList.appendChild(span);
        });
    }
}

// ---------- WORLD MAP ----------
let currentLang = null;

function openWorld(lang) {
    clearBugTimer();
    currentLang = lang;
    hideAllScreens();
    document.getElementById("world-screen").style.display = "block";
    document.getElementById("world-title").textContent = langNames[lang] + " World";
    renderLevelPath(lang);
}

function renderLevelPath(lang) {
    const container = document.getElementById("level-path");
    container.innerHTML = "";
    const levels = worldsData[lang];
    let lastTier = null;

    levels.forEach((level, i) => {
        const levelNum = i + 1;

        if (level.tier && level.tier !== lastTier) {
            const header = document.createElement("div");
            header.className = "tier-header tier-" + level.tier;
            header.textContent = tierLabels[level.tier];
            container.appendChild(header);
            lastTier = level.tier;
        }

        const node = document.createElement("div");
        node.className = "level-node";
        if (level.tier) node.classList.add("tier-" + level.tier);
        if (level.type === "bughunt") node.classList.add("bughunt-type");
        if (level.type === "boss") node.classList.add("boss-type");

        let label = level.label || "Level " + levelNum;
        if (level.type === "boss") label = level.title.replace("👑 ", "");

        if (progress[lang].completed.includes(levelNum)) {
            node.classList.add("completed");
            node.textContent = "✅ " + label + " — Complete";
            node.onclick = () => startLevel(lang, levelNum);
        } else if (levelNum === progress[lang].unlocked) {
            node.classList.add("unlocked");
            node.textContent = "▶ " + label;
            node.onclick = () => startLevel(lang, levelNum);
        } else {
            node.classList.add("locked");
            node.textContent = "🔒 " + label;
        }

        container.appendChild(node);
    });
}

// ---------- BATTLE MODE ----------
let currentBattleKey = null;

function showBattleSelect() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("battle-screen").style.display = "block";
    renderBattlePairs();
}

function renderBattlePairs() {
    const container = document.getElementById("battle-pairs");
    container.innerHTML = "";
    Object.keys(battleData).forEach(key => {
        const btn = document.createElement("button");
        btn.className = "battle-pair-btn";
        btn.textContent = battleData[key].label;
        btn.onclick = () => startBattle(key);
        container.appendChild(btn);
    });
}

function startBattle(key) {
    clearBugTimer();
    currentBattleKey = key;
    currentQuestions = battleData[key].questions;
    currentIndex = 0;
    correctCount = 0;

    hideAllScreens();
    document.getElementById("game-area").style.display = "block";
    document.getElementById("level-heading").textContent = battleData[key].label;
    document.getElementById("timer").textContent = "";

    showBattleQuestion();
}

function showBattleQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById("code-snippet").textContent = q.sourceCode;
    document.getElementById("feedback").textContent = "";

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    shuffleArray(q.options).forEach(function (option) {
        const btn = document.createElement("button");
        btn.className = "answer-btn code-option-btn";
        btn.textContent = option;
        btn.addEventListener("click", function () {
            checkBattleAnswer(option, q.answer, q.concept);
        });
        answersDiv.appendChild(btn);
    });

    document.getElementById("score").textContent =
        "Round " + (currentIndex + 1) + " of " + currentQuestions.length;
}

function checkBattleAnswer(selected, correct, concept) {
    const feedback = document.getElementById("feedback");
    const isCorrect = selected === correct;

    if (isCorrect) {
        feedback.textContent = "✅ Correct translation! +12 XP";
        feedback.style.color = "lightgreen";
        awardCorrect(12);
    } else {
        feedback.textContent = "❌ Not quite the right match.";
        feedback.style.color = "salmon";
        progress.streak = 0;
    }

    trackConcept(concept, isCorrect);
    saveProgress();
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

    setTimeout(function () {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showBattleQuestion();
        } else {
            finishBattle();
        }
    }, 1400);
}

function finishBattle() {
    const totalQuestions = currentQuestions.length;
    const passThreshold = Math.ceil(totalQuestions / 2);
    const passed = correctCount >= passThreshold;

    if (passed) {
        playWinSound();
        progress.xp += 20;
        progress.battlesWon += 1;
        if (!progress.badges.includes("battle")) {
            progress.badges.push("battle");
        }
        saveProgress();

        document.getElementById("code-snippet").innerHTML =
            '<img src="images/trophy.png" alt="Trophy" class="trophy-img">';
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").textContent =
            "Battle won! (" + correctCount + "/" + totalQuestions + " correct) +20 bonus XP";
        document.getElementById("feedback").innerHTML =
            '<button class="summary-btn" onclick="showBattleSelect()">Back to Battle Select</button>';
    } else {
        saveProgress();

        document.getElementById("code-snippet").textContent =
            "💥 Not quite — you got " + correctCount + "/" + totalQuestions + " correct.";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").textContent = "You need at least " + passThreshold + " correct to win.";
        document.getElementById("feedback").innerHTML =
            '<button class="summary-btn" onclick="startBattle(currentBattleKey)">Retry Battle</button> ' +
            '<button class="summary-btn" onclick="showBattleSelect()">Back to Battle Select</button>';
    }
}

// ---------- CONCEPT MAP ----------
function showConceptMap() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("concept-screen").style.display = "block";
    renderConceptMap();
}

function showHowTo() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("howto-screen").style.display = "block";
}

function renderConceptMap() {
    const grid = document.getElementById("concept-grid");
    grid.innerHTML = "";

    CONCEPT_KEYS.forEach(key => {
        const data = progress.concepts[key];
        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const statsText = data.total > 0
            ? (data.correct + " / " + data.total + " correct (" + pct + "%)")
            : "Not attempted yet";

        const card = document.createElement("div");
        card.className = "concept-card";
        card.innerHTML =
            '<div class="concept-name">' + key + '</div>' +
            '<div class="concept-bar-track"><div class="concept-bar-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="concept-stats">' + statsText + '</div>';
        grid.appendChild(card);
    });
}

function trackConcept(concept, isCorrect) {
    if (!concept || !progress.concepts[concept]) return;
    progress.concepts[concept].total += 1;
    if (isCorrect) progress.concepts[concept].correct += 1;
}

// ---------- SANDBOX ARENA ----------
let arenaLang = null;
let arenaPlayer = 1;
let arenaResults = {};
let arenaStartTime = 0;

function showArenaSetup() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("arena-screen").style.display = "block";
    renderArenaLangSelect();
}

function renderArenaLangSelect() {
    const container = document.getElementById("arena-lang-select");
    container.innerHTML = "";
    Object.keys(langNames).forEach(lang => {
        const btn = document.createElement("button");
        btn.className = "battle-pair-btn";
        btn.textContent = langNames[lang] + " Face-off";
        btn.onclick = () => startArenaMatch(lang);
        container.appendChild(btn);
    });
}

function startArenaMatch(lang) {
    arenaLang = lang;
    arenaPlayer = 1;
    arenaResults = {};
    showArenaHandoff();
}

function showArenaHandoff() {
    hideAllScreens();
    document.getElementById("arena-handoff-screen").style.display = "block";
    document.getElementById("handoff-title").textContent = "Player " + arenaPlayer + ", get ready!";
    document.getElementById("handoff-sub").textContent =
        "Pass the device to Player " + arenaPlayer + ". Same " + langNames[arenaLang] + " questions, don't peek at the other player's answers.";
}

function beginArenaRun() {
    currentQuestions = arenaData[arenaLang];
    currentIndex = 0;
    correctCount = 0;
    arenaStartTime = Date.now();

    hideAllScreens();
    document.getElementById("game-area").style.display = "block";
    document.getElementById("level-heading").textContent = "🥊 Arena — Player " + arenaPlayer;
    document.getElementById("timer").textContent = "";

    showArenaQuestion();
}

function showArenaQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById("code-snippet").textContent = q.code;
    document.getElementById("feedback").textContent = "";

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    shuffleArray(q.options).forEach(function (option) {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = option;
        btn.addEventListener("click", function () {
            checkArenaAnswer(option, q.answer, q.concept);
        });
        answersDiv.appendChild(btn);
    });

    document.getElementById("score").textContent =
        "Question " + (currentIndex + 1) + " of " + currentQuestions.length;
}

function checkArenaAnswer(selected, correct, concept) {
    const feedback = document.getElementById("feedback");
    const isCorrect = selected === correct;

    if (isCorrect) {
        feedback.textContent = "✅ Correct! +8 XP";
        feedback.style.color = "lightgreen";
        awardCorrect(8);
    } else {
        feedback.textContent = "❌ Wrong. Correct answer: " + correct;
        feedback.style.color = "salmon";
        progress.streak = 0;
    }

    trackConcept(concept, isCorrect);
    saveProgress();
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

    setTimeout(function () {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showArenaQuestion();
        } else {
            finishArenaRun();
        }
    }, 900);
}

function finishArenaRun() {
    const elapsedSeconds = (Date.now() - arenaStartTime) / 1000;
    arenaResults["player" + arenaPlayer] = {
        score: correctCount,
        total: currentQuestions.length,
        time: elapsedSeconds
    };

    if (arenaPlayer === 1) {
        arenaPlayer = 2;
        showArenaHandoff();
    } else {
        showArenaResults();
    }
}

function showArenaResults() {
    progress.arenaMatches += 1;
    saveProgress();

    hideAllScreens();
    document.getElementById("arena-result-screen").style.display = "block";

    const p1 = arenaResults.player1;
    const p2 = arenaResults.player2;

    let p1Wins = false;
    let p2Wins = false;
    let draw = false;

    if (p1.score > p2.score) {
        p1Wins = true;
    } else if (p2.score > p1.score) {
        p2Wins = true;
    } else if (p1.time < p2.time) {
        p1Wins = true;
    } else if (p2.time < p1.time) {
        p2Wins = true;
    } else {
        draw = true;
    }

    const box = document.getElementById("arena-result-box");
    box.innerHTML =
        '<div class="arena-player-row ' + (p1Wins ? "winner" : "") + '">' +
        '<h4>Player 1 ' + (p1Wins ? "🏆" : "") + '</h4>' +
        '<p>Score: ' + p1.score + ' / ' + p1.total + '</p>' +
        '<p>Time: ' + p1.time.toFixed(1) + 's</p>' +
        '</div>' +
        '<div class="arena-player-row ' + (p2Wins ? "winner" : "") + '">' +
        '<h4>Player 2 ' + (p2Wins ? "🏆" : "") + '</h4>' +
        '<p>Score: ' + p2.score + ' / ' + p2.total + '</p>' +
        '<p>Time: ' + p2.time.toFixed(1) + 's</p>' +
        '</div>' +
        (draw ? '<p style="text-align:center; color:#ffd166; font-weight:bold;">🤝 It\'s a draw!</p>' : '');
}

// ---------- CODE LAB ----------
let codeLabLang = null;
let codeLabIndex = 0;

function showCodeLab() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("codelab-screen").style.display = "block";
    renderCodeLabLangSelect();
}

function renderCodeLabLangSelect() {
    const container = document.getElementById("codelab-lang-select");
    container.innerHTML = "";
    Object.keys(codeLabData).forEach(lang => {
        const btn = document.createElement("button");
        btn.className = "battle-pair-btn";
        if (codeLabData[lang].disabled) {
            btn.textContent = langNames[lang] + " — 🔒 Coming soon";
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
        } else {
            const done = progress.codelabCompleted[lang].length;
            const total = codeLabData[lang].challenges.length;
            btn.textContent = langNames[lang] + " (" + done + " / " + total + ")";
            btn.onclick = () => startCodeLab(lang);
        }
        container.appendChild(btn);
    });
}

function startCodeLab(lang) {
    codeLabLang = lang;
    codeLabIndex = 0;
    hideAllScreens();
    document.getElementById("codelab-challenge-screen").style.display = "block";
    renderCodeLabChallenge();
}

function renderCodeLabChallenge() {
    const challenge = codeLabData[codeLabLang].challenges[codeLabIndex];
    const total = codeLabData[codeLabLang].challenges.length;

    document.getElementById("codelab-heading").textContent =
        "💻 " + langNames[codeLabLang] + " Code Lab — Challenge " + (codeLabIndex + 1) + " of " + total;
    document.getElementById("codelab-prompt").textContent = challenge.prompt;
    document.getElementById("code-input").value = challenge.starter;
    document.getElementById("codelab-output").textContent = "";
    document.getElementById("codelab-output").className = "codelab-output";
    document.getElementById("codelab-next-area").innerHTML = "";
    document.getElementById("run-code-btn").disabled = false;
}

function runCodeLabChallenge() {
    const lang = codeLabLang;
    const challenge = codeLabData[lang].challenges[codeLabIndex];
    const code = document.getElementById("code-input").value;
    const outputEl = document.getElementById("codelab-output");

    outputEl.className = "codelab-output running";
    outputEl.textContent = "Running...";
    document.getElementById("run-code-btn").disabled = true;

    if (codeLabData[lang].runtime === "browser") {
        const result = runJsUserCode(code);
        if (result.error) {
            handleCodeLabResult(false, "Error: " + result.error);
        } else {
            const pass = result.output.trim() === challenge.expectedOutput.trim();
            handleCodeLabResult(pass, "Output:\n" + result.output + (pass ? "" : "\n\nExpected:\n" + challenge.expectedOutput));
        }
    } else if (codeLabData[lang].runtime === "piston") {
        runPistonCode(codeLabData[lang].language, codeLabData[lang].version, code)
            .then(function (data) {
                if (data.compile && data.compile.code !== 0) {
                    handleCodeLabResult(false, "Compile error:\n" + data.compile.stderr);
                    return;
                }
                const stdout = (data.run && data.run.stdout) ? data.run.stdout : "";
                const stderr = (data.run && data.run.stderr) ? data.run.stderr : "";
                if (stderr && !stdout) {
                    handleCodeLabResult(false, "Error:\n" + stderr);
                    return;
                }
                const pass = stdout.trim() === challenge.expectedOutput.trim();
                handleCodeLabResult(pass, "Output:\n" + stdout + (pass ? "" : "\n\nExpected:\n" + challenge.expectedOutput));
            })
            .catch(function (err) {
                handleCodeLabResult(false, "Couldn't reach the code runner. Check your internet connection and try again.\n(" + err.message + ")");
            });
    } else if (codeLabData[lang].runtime === "html-check") {
        const result = challenge.validate(code);
        handleCodeLabResult(result.pass, result.message);
    }
}

function runJsUserCode(code) {
    let output = [];
    const originalLog = console.log;
    console.log = function () {
        output.push(Array.prototype.slice.call(arguments).map(String).join(" "));
    };
    let errorMsg = null;
    try {
        const fn = new Function(code);
        fn();
    } catch (e) {
        errorMsg = e.message;
    }
    console.log = originalLog;
    return { output: output.join("\n"), error: errorMsg };
}

function runPistonCode(language, version, code) {
    return fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            language: language,
            version: version,
            files: [{ content: code }]
        })
    }).then(function (response) { return response.json(); });
}

function handleCodeLabResult(pass, message) {
    const outputEl = document.getElementById("codelab-output");
    outputEl.className = "codelab-output " + (pass ? "pass" : "fail");
    outputEl.textContent = (pass ? "✅ Passed!\n\n" : "❌ Not quite.\n\n") + message;
    document.getElementById("run-code-btn").disabled = false;

    const lang = codeLabLang;
    const concept = codeLabData[lang].challenges[codeLabIndex].concept;
    trackConcept(concept, pass);

    const nextArea = document.getElementById("codelab-next-area");
    const total = codeLabData[lang].challenges.length;

    if (pass) {
        playWinSound();
        if (!progress.codelabCompleted[lang].includes(codeLabIndex)) {
            progress.codelabCompleted[lang].push(codeLabIndex);
            progress.xp += 15;
        }
        saveProgress();

        if (codeLabIndex < total - 1) {
            nextArea.innerHTML = '<button class="summary-btn" onclick="nextCodeLabChallenge()">Next Challenge →</button>';
        } else {
            nextArea.innerHTML = '<button class="summary-btn" onclick="showCodeLab()">Back to Code Lab</button>';
        }
    } else {
        saveProgress();
    }
}

function nextCodeLabChallenge() {
    codeLabIndex++;
    renderCodeLabChallenge();
}

// ---------- LEVEL PLAY ----------
let currentLevel = null;
let currentQuestions = [];
let currentIndex = 0;
let currentLevelNum = 1;
let correctCount = 0;
let bugTimerInterval = null;
let bugTimeLeft = BUG_TIME_LIMIT;

function xpForType(type) {
    if (type === "bughunt") return 15;
    if (type === "boss") return 25;
    return 10;
}

function bonusForType(type) {
    return type === "boss" ? 40 : 20;
}

function startLevel(lang, levelNum) {
    clearBugTimer();
    currentLang = lang;
    currentLevelNum = levelNum;
    currentLevel = worldsData[lang][levelNum - 1];
    currentQuestions = currentLevel.questions;
    currentIndex = 0;
    correctCount = 0;

    hideAllScreens();
    document.getElementById("game-area").style.display = "block";

    let heading = langNames[lang] + " — " + (currentLevel.label || "Level " + levelNum);
    if (currentLevel.type === "boss") heading = langNames[lang] + " — " + currentLevel.title;
    document.getElementById("level-heading").textContent = heading;

    showQuestion();
}

function showQuestion() {
    if (currentLevel.type === "bughunt") {
        showBugQuestion();
    } else {
        showPredictQuestion();
    }
}

function showPredictQuestion() {
    document.getElementById("timer").textContent = "";
    document.getElementById("timer").className = "timer";

    const q = currentQuestions[currentIndex];
    document.getElementById("code-snippet").textContent = q.code;
    document.getElementById("feedback").textContent = "";

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    shuffleArray(q.options).forEach(function (option) {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = option;
        btn.addEventListener("click", function () {
            checkPredictAnswer(option, q.answer, q.concept);
        });
        answersDiv.appendChild(btn);
    });

    const stepLabel = currentLevel.type === "boss" ? "Step " : "Question ";
    document.getElementById("score").textContent =
        stepLabel + (currentIndex + 1) + " of " + currentQuestions.length;
}

function checkPredictAnswer(selected, correct, concept) {
    const feedback = document.getElementById("feedback");
    const isCorrect = selected === correct;
    const xp = xpForType(currentLevel.type);

    if (isCorrect) {
        feedback.textContent = "✅ Correct! +" + xp + " XP";
        feedback.style.color = "lightgreen";
        awardCorrect(xp);
    } else {
        feedback.textContent = "❌ Wrong. Correct answer: " + correct;
        feedback.style.color = "salmon";
        progress.streak = 0;
    }

    trackConcept(concept, isCorrect);
    saveProgress();
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

    setTimeout(function () {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 1200);
}

function showBugQuestion() {
    const q = currentQuestions[currentIndex];
    const lines = q.code.split("\n");

    const numberedCode = lines
        .map((line, i) => (i + 1) + "  " + line)
        .join("\n");

    document.getElementById("code-snippet").textContent = numberedCode;
    document.getElementById("feedback").textContent = "";

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    lines.forEach((line, i) => {
        const lineNum = i + 1;
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = "Line " + lineNum;
        btn.addEventListener("click", function () {
            checkBugAnswer(lineNum, q.bugLine, q.explanation, q.concept);
        });
        answersDiv.appendChild(btn);
    });

    document.getElementById("score").textContent =
        "Bug " + (currentIndex + 1) + " of " + currentQuestions.length;

    startBugTimer();
}

function startBugTimer() {
    clearBugTimer();
    bugTimeLeft = currentLevel.timeLimit || BUG_TIME_LIMIT;
    const timerEl = document.getElementById("timer");
    timerEl.className = "timer";
    timerEl.textContent = "⏱ " + bugTimeLeft + "s";

    bugTimerInterval = setInterval(function () {
        bugTimeLeft--;
        timerEl.textContent = "⏱ " + bugTimeLeft + "s";
        if (bugTimeLeft <= 5) timerEl.classList.add("urgent");

        if (bugTimeLeft <= 0) {
            clearBugTimer();
            const q = currentQuestions[currentIndex];
            timeOutBugQuestion(q.bugLine, q.explanation, q.concept);
        }
    }, 1000);
}

function clearBugTimer() {
    if (bugTimerInterval) {
        clearInterval(bugTimerInterval);
        bugTimerInterval = null;
    }
}

function timeOutBugQuestion(bugLine, explanation, concept) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = "⏰ Time's up! Bug was on Line " + bugLine + " — " + explanation;
    feedback.style.color = "salmon";
    progress.streak = 0;
    trackConcept(concept, false);
    saveProgress();

    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

    setTimeout(function () {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 2200);
}

function checkBugAnswer(selectedLine, bugLine, explanation, concept) {
    clearBugTimer();
    const feedback = document.getElementById("feedback");
    const isCorrect = selectedLine === bugLine;

    if (isCorrect) {
        feedback.textContent = "✅ Found it! +15 XP — " + explanation;
        feedback.style.color = "lightgreen";
        awardCorrect(15);
    } else {
        feedback.textContent = "❌ Not quite. Bug was on Line " + bugLine + " — " + explanation;
        feedback.style.color = "salmon";
        progress.streak = 0;
    }

    trackConcept(concept, isCorrect);
    saveProgress();
    document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);

    setTimeout(function () {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            showQuestion();
        } else {
            finishLevel();
        }
    }, 2200);
}

// ----- Shared helpers -----
function awardCorrect(xpAmount) {
    progress.xp += xpAmount;
    progress.streak += 1;
    correctCount += 1;
    if (progress.streak > progress.bestStreak) progress.bestStreak = progress.streak;
}

function finishLevel() {
    clearBugTimer();
    document.getElementById("timer").textContent = "";

    const totalQuestions = currentQuestions.length;
    const passThreshold = Math.ceil(totalQuestions / 2);
    const passed = correctCount >= passThreshold;
    const bonus = bonusForType(currentLevel.type);

    if (passed) {
        playWinSound();
        progress.xp += bonus;

        if (!progress[currentLang].completed.includes(currentLevelNum)) {
            progress[currentLang].completed.push(currentLevelNum);
        }

        const totalLevels = worldsData[currentLang].length;
        if (currentLevelNum === progress[currentLang].unlocked && currentLevelNum < totalLevels) {
            progress[currentLang].unlocked = currentLevelNum + 1;
        }

        if (progress[currentLang].completed.length === totalLevels &&
            !progress.badges.includes(currentLang)) {
            progress.badges.push(currentLang);
        }

        saveProgress();

        document.getElementById("code-snippet").innerHTML =
            '<img src="images/trophy.png" alt="Trophy" class="trophy-img">';
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").textContent =
            "Level complete! (" + correctCount + "/" + totalQuestions + " correct) +" + bonus + " bonus XP";
        document.getElementById("feedback").innerHTML =
            '<button class="summary-btn" onclick="openWorld(currentLang)">Back to World Map</button>';
    } else {
        saveProgress();

        document.getElementById("code-snippet").textContent =
            "💥 Not quite — you got " + correctCount + "/" + totalQuestions + " correct.";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").textContent = "You need at least " + passThreshold + " correct to pass.";
        document.getElementById("feedback").innerHTML =
            '<button class="summary-btn" onclick="startLevel(currentLang, currentLevelNum)">Retry Level</button> ' +
            '<button class="summary-btn" onclick="openWorld(currentLang)">Back to World Map</button>';
    }
}
// ---------- LEADERBOARD ----------
function submitToLeaderboard() {
    const nameInput = document.getElementById("player-name-input");
    const name = nameInput.value.trim();

    if (!name) {
        alert("Enter a name first!");
        return;
    }

    fetch(BACKEND_URL + "/submit-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, xp: progress.xp })
    })
        .then(function (response) {
            if (!response.ok) throw new Error("Server error");
            return response.json();
        })
        .then(function () {
            alert("Submitted! " + name + " — " + progress.xp + " XP");
            showLeaderboard();
        })
        .catch(function (err) {
            alert("Couldn't reach the leaderboard server. Is it running? (" + err.message + ")");
        });
}

function showLeaderboard() {
    clearBugTimer();
    hideAllScreens();
    document.getElementById("leaderboard-screen").style.display = "block";

    const list = document.getElementById("leaderboard-list");
    list.innerHTML = "Loading...";

    fetch(BACKEND_URL + "/leaderboard")
        .then(function (response) { return response.json(); })
        .then(function (data) {
            list.innerHTML = "";
            if (data.length === 0) {
                list.innerHTML = '<p style="color:#888;">No scores yet — be the first!</p>';
                return;
            }
            data.forEach(function (entry, i) {
                const row = document.createElement("div");
                row.className = "leaderboard-row";
                row.innerHTML =
                    '<span class="rank">#' + (i + 1) + '</span>' +
                    '<span class="lb-name">' + entry.name + '</span>' +
                    '<span class="lb-xp">' + entry.xp + ' XP</span>';
                list.appendChild(row);
            });
        })
        .catch(function (err) {
            list.innerHTML = '<p style="color:salmon;">Couldn\'t load leaderboard: ' + err.message + '</p>';
        });
}

// ---------- RESET ----------
function confirmReset() {
    const sure = confirm("This will erase all XP, levels, and badges. Are you sure?");
    if (sure) {
        localStorage.removeItem("codequest_progress");
        progress = defaultProgress();
        migrateProgress();
        renderHome();
    }
}
document.addEventListener("click", function (e) {
    if (e.target.closest("button, .lang-card")) {
        playClickSound();
    }
});

// ---------- INIT ----------
showHome();