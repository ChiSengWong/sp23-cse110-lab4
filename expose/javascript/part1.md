1. line9: 20
2. line13: 20

3. line9: 20
4. ReferenceError, because result is declared with let keyword, which makes it block scope and thus only accessable within the if block that it is declared.

5. TypeError, because result is declared with const keyword which prevent it from being reassigned, thus raise an error when the function trying to assign a new value to it.
6. ReferenceError, because result is declared with const keyword, which makes it block scope and thus only accessable within the if block that it is declared.