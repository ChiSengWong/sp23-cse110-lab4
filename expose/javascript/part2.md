1. Line 12 would print the number 3 to the console, since i is declared with var, with makes its value persist outside of the for loop.

2. line13 would print 150, since its also declared with var, and redefined in each iteration. Thus the value after loop is the value that it was assigned in the last iteration, thus prices[2] * (1- 0.5) = 150

3. line13 would print 150, since its also declared with var, and redefined in each iteration. Thus the value after loop is the value that it was assigned in the last iteration, thus Math.round(150 * 100) / 100 = 15000/100 = 150

4. the function would return [ 50, 100, 150 ]. since its also declard with var, and pushed the value of finalPrice in each iteration. Thus returning a list of size 3 after iteration.

5. ReferenceError, since i is block scope, thus it is not defined out of the for loop

6. ReferenceError, since discountedPrice is block scope, thus it is not defined out of the for loop

7. line14: print 150 to console, because the variable in declared on top level of the function, and and assigned value for each loop. Thus the value at line14 is the value assigned in the last iteration

8. [ 50, 100, 150 ],  since its also declard with let on top level of the function, and pushed the value of finalPrice in each iteration. Thus returning a list of size 3 after iteration.

9. ReferenceError, since i is block scope, thus it is not defined out of the for loop

10. line12: 3, since the value is assigned at line 4 which is within the same scope as line 12

11. it would return [ 50, 100, 150 ], since the const keyword declares a variable that cannot be reassigned a new value, but the contents of the variable can be modified.

12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13.  
    A. 32, + operator is overloaded to concat a str and a number
    B. 1, - operator is usd to substraction, thus 3 is converted to number to subtract 2, so 1
    C. 3null, null is converted to string null, and concated with 3
    D. 4, true is converted to value 1
    E. 0, both false and null is converted to 0
    F. 3undefined, undefined is converted to string, and concated
    G. NaN, when undefined is used in arithmetic, it is converted to the special value NaN

14. 
    A. true, 2 is convertd to number for comparation, 2>1 is true
    B. true, both are convertd to number for comparation, 2<12 is true
    C. true, == performs type conversion and compare, 2==2 is true
    D. false, === does not convert type conversion, string 2 is not the same as number 2.
    E. false, true is converted to 1, 1==2 is false
    F.true, Boolean(2) is equivalent to true

15. == perform type conversion if nessasary while === does not. thus === require both operand to have the same type to be equal.

17. first modifyArray is called, newArr is init as empty array, then for array.length iteration, we call the callback function (dosomething) with parameter being the elemnt at the ith index in the input array, then we push the result value of newArr. After all iteration, newArr should have array.length element, then return newArr.
each element in newArr is the value of doSomething(array[i])
thus newArr = [doSomething(array[0]), doSomething(array[1]), doSomething(array[2])]
=> newArr[doSomething(1),doSomething(2),doSomething(3)]
=> newArray = [2, 4, 6]

19. 
1
4
3
2
