// import React, { useState } from 'react'
// import styles from './cpp.module.css'
// import { BsDownload, BsLinkedin, BsTelegram } from "react-icons/bs";
// import { FaFacebookSquare, FaRegCopy } from "react-icons/fa";
// import CodeEditor from '@uiw/react-textarea-code-editor';
// import cpp_ from '../../Books/Cpp_.pdf'
// export default function InterviewCpp() {
//     const [One, setOne] = useState(
//         `class A { private:  int Data;  public:  void fun(){  }}`
//     );
//     const [Two, setTwo] = useState(

//         `  class complex{
//             private:
//              float r, i;
//             public:
//              complex(float r, float i){
//               this->r=r;
//               this->i=i;
//              }
//              complex(){}
//              void displaydata(){
//               cout<<”real part = “<<r<<endl;
//               cout<<”imaginary part = “<<i<<endl;
//              }
//              complex operator+(complex c){
//               return complex(r+c.r, i+c.i);
//              }
//             };
//             int main(){
//             complex a(2,3);
//             complex b(3,4);
//             complex c=a+b;
//             c.displaydata();
//             return 0;
//             }`
//     );
//     const [Three, setThree] = useState(
//         `class A {
//             private:
//              int val;
//             public:
//              A(int x){             //one argument constructor
//               val=x;
//              }
//              A(){                    //zero argument constructor
//              }
//            }
//            int main(){
//             A a(3);     
           
//             return 0;
//            }
//            `   );
//     const [FourOne, setFourOne] = useState(
//         ` int add(int a, int b){
//         return a + b;
//     }
//       int add(int a, int b, int c){
//         return a + b + c;
//     }
      
//       int main(){
//         cout<< add(2, 3) << endl;
//     cout << add(2, 3, 4) << endl;


//     return 0;
// }
// `   );
//     const [FourTwo, setFourTwo] = useState(
//         `class A{
//             public:
//                  virtual void fun(){
//                       cout<<"base ";
//                  }
//        };
//        class B: public A{
//             public:
//                  void fun(){
//                       cout<<"derived ";
//                  }
//        };
//        int main(){
//             A *a=new B;
//             a->fun();
       
//             return 0;
//        }
// `   );
//     const [Five, setFive] = useState(
//         `class A{
//             private:
//              int data_a;
//             public:
//              A(int x){
//               data_a=x;
//              }
//              friend int fun(A, B);
//            }
//            class B{
//             private:
//              int data_b;
//             public:
//              A(int x){
//               data_b=x;
//              }
//              friend int fun(A, B);
//            }
//            int fun(A a, B b){
//             return a.data_a+b.data_b;
//            }
//            int main(){
//             A a(10);
//             B b(20);
//             cout<<fun(a,b)<<endl;
//             return 0;
//            }
// `   );
//     const [Sex, setSex] = useState(
//         `int x=10;
//     int &ref=x;  
// `   );
//     const [Seven, setSeven] = useState(
//         `
//         class A{
//             private:
//              int val;
//             public:
//              A(int x){           
//               val=x;
//              }
//              A(){                
//              }
//              ~A(){                  //destructor
//              }
//            }
//            int main(){
//             A a(3);     
//             return 0;
//            }
// `   );
//     const [Eight, setEight] = useState(
//         `
//         class A{
//             int x,y;
//             A(int x, int y){
//              this->x=x;
//              this->y=y;
//             }
            
//             };
//             int main(){
//             A a1(2,3);
//             A a2=a1;     //default copy constructor is called
//             return 0;
//             }
// `   );
//     const [Nine, setNine] = useState(
//         `
//         class base{
//             public:
//              virtual void fun(){
            
//              }
//             };
// `   );
//     const [Teen, setTeen] = useState(
//         `
//         class base{
//             public:
//              virtual void fun()=0;
//             };
// `   );
//     const [Eleven, setEleven] = useState(
//         `
//         class base{
//             private:
//              int value;
//             public:
//              base(int x){
//               value=x;
//              }
//              virtual void fun(){
              
//              }
//            }
           
//            class derived{
//             private:
//              int a;
//             public:
//              derived(int x, int y):base(x){
//               base *b;
//               b=this;
//               b->fun();      //calls derived::fun()
//              }
//              void fun(){
//               cout<<”fun inside derived class”<<endl;
//              }
//            }
// `   );
//     const [Twelve, setTwelve] = useState(
//         `
//         void *ptr; 
//         char *str;
//         p=str;                // no error 
//         str=p;                // error because of type mismatch
// `   );
//     const [Threeteen, setThreeteen] = useState(
//         `
//         str=(char*) ptr;              // error because of type mismatch
// `   );
//     const [Fourteen, setFourteen] = useState(
//         `
//         class A{
//             private:
//              int value;
//             public:
//              void setvalue(int x){
//               this->value=x; 
//              }
//            };
           
//            int main(){
//             A a;
//             a.setvalue(5);
//             return 0;
//            }
// `   );
//     const [Fiveteen, setFiveteen] = useState(
//         `
//         int value=new int;  		//allocates memory for storing 1 integer
//         delete value;          		// deallocates memory taken by value
        
//         int *arr=new int[10];    	//allocates memory for storing 10 int
//         delete []arr;              	// deallocates memory occupied by arr
// `   );
//     return (
//         <div className={styles.Container}>
//             <div className={styles.Main}>
//                 <div className={styles.InterviewName}>
//                     <div className={styles.NameText}>
//                         <div>C++ Interview Savollari</div>
//                         <div>Yangilanish 15-yan 2023</div>

//                     </div>
//                     <div className={styles.NameAction}>

//                         <a href={cpp_}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             download className={styles.NameActionDownload}>
//                             <span><BsDownload /></span>
//                             <span><b>Yuklab olish</b> </span>
//                         </a>
//                         <div className={styles.NameActionIcons}>
//                             <div>
//                                 Share With:
//                             </div>
//                             <div>
//                                 <span><BsLinkedin /></span>
//                                 <span><FaFacebookSquare /></span>
//                                 <span><BsTelegram /></span>
//                                 <span><FaRegCopy /></span>
//                             </div>


//                         </div>

//                     </div>
//                 </div>
//                 <div className={styles.InterviewText}>
//                     <div className={styles.InterviewTitle}>
//                         Yangi kurs talabalari uchun C++ intervyu savollari
//                     </div>
//                     {/* 1 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             1. C++ tilida qanday ma’lumotlar(datatype) turlari mavjud?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>C++ da 4 ta maʼlumotlar turi quyida keltirilgan:

//                             </p>
//                             <div>
//                                 <ul>
//                                     <li>Primitive Datatype(basic datatype). Example- char, short, int, float, long, double, bool, etc.
//                                     </li>
//                                     <li>Derived datatype. Example- array, pointer, etc.
//                                     </li>
//                                     <li>Enumeration. Example- enum
//                                     </li>
//                                     <li>User-defined data types. Example- structure, class, etc.
//                                     </li>

//                                 </ul>

//                             </div>

//                         </div>

//                     </section>
//                     {/* 2 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             2.C va C++ o'rtasidagi farq nima?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The main difference between C and C++ are provided in the table below:
//                             </p>
//                             <div className={styles.Question1AnswerItem}>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>C</th>
//                                             <th>C++</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>C is a procedure-oriented programming language.</td>
//                                             <td>C++ is an object-oriented programming language.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>C does not support data hiding.</td>
//                                             <td>Data is hidden by encapsulation to ensure that data structures and operators are used as intended.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>C is a subset of C++.</td>
//                                             <td>C++ is a superset of C.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Function and operator overloading are not supported in C</td>
//                                             <td>Function and operator overloading is supported in C++</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Namespace features are not present in C</td>
//                                             <td>Namespace is used by C++, which avoids name collisions.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Functions can not be defined inside structures.</td>
//                                             <td>Functions can be defined inside structures.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>calloc() and malloc() functions are used for memory allocation and free() function is used for memory deallocation.</td>
//                                             <td>new operator is used for memory allocation and deletes operator is used for memory deallocation.</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 3 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             3. What are class and object in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A class is a user-defined data type that has data members and member functions. Data members are the data variables and member functions are the functions that are used to perform operations on these variables.
//                             </p>
//                             <p>
//                                 An object is an instance of a class. Since a class is a user-defined data type so an object can also be called a variable of that data type.

//                             </p>
//                             <p>
//                                 A class is defined as-

//                             </p>
//                             <div>
//                                 <CodeEditor
//                                     value={One}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setOne(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />
//                             </div>
//                             <div className={styles.Question1AnswerImg}>
//                                 <img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/056/original/Class_in_C__.png?1614776876" alt="" />

//                             </div>

//                         </div>

//                     </section>
//                     {/* 4 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             4. What is the difference between struct and class?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 In C++ a structure is the same as a class except for a few differences like security. The difference between struct and class are given below:
//                             </p>
//                             <div className={styles.Question1AnswerItem2}>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Structure</th>
//                                             <th>Class</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>Members of the structure are public by default.</td>
//                                             <td>	Members of the class are private by default.</td>
//                                         </tr>
//                                         <tr>
//                                             <td>When deriving a struct from a class/struct, default access specifiers for base class/struct are public.</td>
//                                             <td>When deriving a class, default access specifiers are private.</td>
//                                         </tr>

//                                     </tbody>
//                                 </table>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 5 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             5. What is operator overloading?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 {` Operator Overloading is a very essential element to perform the operations on user - defined data types.By operator overloading we can modify the default meaning to the operators like +, -, *, /, <=, etc. `}
//                             </p >
//                             <p><b>For example - </b> </p>
//                             <p>The following code is for adding two complex number using operator overloading-                            </p>
//                             <div>

//                                 <CodeEditor
//                                     value={Two}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setTwo(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />
//                             </div>

//                         </div >

//                     </section >
//                     {/* 6 question */}

//                     < section className={styles.Question1} >
//                         <div className={styles.Question1Title}>
//                             6. What is polymorphism in C++?                        </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 Polymorphism in simple means having many forms. Its behavior is different in different situations. And this occurs when we have multiple classes that are related to each other by inheritance.
//                             </p>
//                             <p>
//                                 For example, think of a base class called a car that has a method called car brand(). Derived classes of cars could be Mercedes, BMW, Audi - And they also have their own implementation of a cars

//                             </p>
//                             <p>
//                                 The two types of polymorphism in c++ are:

//                             </p>
//                             <div>
//                                 <ul>
//                                     <li>Compile Time Polymorphism                                    </li>
//                                     <li>Runtime Polymorphism                                    </li>
//                                 </ul>

//                             </div>
//                             <div className={styles.Question1AnswerImg}>
//                                 <img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/057/original/Polymorphism_in_C__.png?1614777415" alt="" />
//                             </div>

//                         </div>

//                     </section >
//                     {/* 7 question */}
//                     < section className={styles.Question1} >
//                         <div className={styles.Question1Title}>
//                             7. Explain constructor in C++
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The constructor is a member function that is executed automatically whenever an object is created. Constructors have the same name as the class of which they are members so that compiler knows that the member function is a constructor. And no return type is used for constructors.

//                             </p>
//                             <div>
//                                 <p><b>Example</b></p>
//                                 <CodeEditor
//                                     value={Three}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setThree(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>

//                         </div>

//                     </section >
//                     {/* 8 question */}

//                     < section className={styles.Question1} >
//                         <div className={styles.Question1Title}>
//                             8. Tell me about virtual function
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 <b>Virtual function</b> is a member function in the base class that you redefine in a derived class. A virtual function is declared using the virtual keyword. When the function is made virtual, C++ determines which function is to be invoked at the runtime based on the type of the object pointed by the base class pointer.


//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section >
//                     {/* 9 question */}

//                     < section className={styles.Question1} >
//                         <div className={styles.Question1Title}>
//                             9. Compare compile time polymorphism and Runtime polymorphism
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The main difference between compile-time and runtime polymorphism is provided below:
//                             </p>
//                             <div className={styles.Question1AnswerItem}>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Compile-time polymorphism	</th>
//                                             <th>Run time polymorphism
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>In this method, we would come to know at compile time which method will be called. And the call is resolved by the compiler.	</td>
//                                             <td>In this method, we come to know at run time which method will be called. The call is not resolved by the compiler.
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>It provides fast execution because it is known at the compile time.	</td>
//                                             <td>It provides slow execution compared to compile-time polymorphism because it is known at the run time.
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>It is achieved by function overloading and operator overloading.	</td>
//                                             <td>It can be achieved by virtual functions and pointers.
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td>
//                                                 <p>Example:</p>
//                                                 <CodeEditor
//                                                     value={FourOne}
//                                                     language="cpp"
//                                                     placeholder="Please enter JS code."
//                                                     onChange={(evn) => setFourOne(evn.target.value)}
//                                                     padding={15}
//                                                     style={{
//                                                         fontSize: 14,
//                                                         backgroundColor: "#F5F8FF",
//                                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                                     }}
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <p>Example:</p>
//                                                 <CodeEditor
//                                                     value={FourTwo}
//                                                     language="cpp"
//                                                     placeholder="Please enter JS code."
//                                                     onChange={(evn) => setFourTwo(evn.target.value)}
//                                                     padding={15}
//                                                     style={{
//                                                         fontSize: 14,
//                                                         backgroundColor: "#F5F8FF",
//                                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                                     }}
//                                                 />

//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>


//                             </div>

//                         </div>

//                     </section >
//                     {/* 10 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             10. What do you know about friend class and friend function?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A friend class can access private, protected, and public members of other classes in which it is declared as friends.
//                             </p>
//                             <p>
//                                 Like friend class, friend function can also access private, protected, and public members. But, Friend functions are not member functions.
//                             </p>
//                             <p>For example -

//                             </p>
//                             <div>
//                                 <p>Example:</p>
//                                 <CodeEditor
//                                     value={Five}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setFive(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>
//                             <p>Here we can access the private data of class A and class B.

//                             </p>
//                         </div>

//                     </section>
//                     {/* 11 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             11. What are the C++ access specifiers?

//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 In C++ there are the following access specifiers:
//                             </p>
//                             <div>
//                                 <p><b> Public: </b> All data members and member functions are accessible outside the class.                                </p>
//                                 <p><b> Protected: </b>  All data members and member functions are accessible inside the class and to the derived class.         </p>
//                                 <p><b> Private: </b> All data members and member functions are not accessible outside the class.         </p>

//                             </div>

//                         </div>

//                     </section>
//                     {/* 12 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             12. Define inline function
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 If a function is inline, the compiler places a copy of the code of that function at each point where the function is called at compile time. One of the important advantages of using an inline function is that it eliminates the function calling overhead of a traditional function.


//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 13 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             13. What is a reference in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A reference is like a pointer. It is another name of an already existing variable. Once a reference name is initialized with a variable, that variable can be accessed by the variable name or reference name both.
//                             </p>
//                             <p>For example-                            </p>
//                             <div>
//                                 <CodeEditor
//                                     value={Sex}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setSex(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>
//                             <p>If we change the value of ref it will be reflected in x. Once a reference variable is initialized it cannot refer to any other variable. We can declare an array of pointers but an array of references is not possible.

//                             </p>

//                         </div>

//                     </section>
//                     {/* 14 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             14. What do you mean by abstraction in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 Abstraction is the process of showing the essential details to the user and hiding the details which we don’t want to show to the user or hiding the details which are irrelevant to a particular user.


//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 15 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             15. Is deconstructor overloading possible? If yes then explain and if no then why?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 No destructor overloading is not possible. Destructors take no arguments, so there’s only one way to destroy an object. That’s the reason destructor overloading is not possible.


//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 16 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             16. What do you mean by call by value and call by reference?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 In call by value method, we pass a copy of the parameter is passed to the functions. For these copied values a new memory is assigned and changes made to these values do not reflect the variable in the main function.
//                             </p>
//                             <p>
//                                 In call by reference method, we pass the address of the variable and the address is used to access the actual argument used in the function call. So changes made in the parameter alter the passing argument.
//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 17 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             17. What is an abstract class and when do you use it?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A class is called an abstract class whose objects can never be created. Such a class exists as a parent for the derived classes. We can make a class abstract by placing a pure virtual function in the class.


//                             </p>
//                             <div>


//                             </div>

//                         </div>

//                     </section>
//                     {/* 18 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             18. What are destructors in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A constructor is automatically called when an object is first created. Similarly when an object is destroyed a function called destructor automatically gets called. A destructor has the same name as the constructor (which is the same as the class name) but is preceded by a tilde.                            </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Seven}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setSeven(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>

//                         </div>

//                     </section>
//                     {/* 19 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             19. What are the static members and static member functions?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 When a variable in a class is declared static, space for it is allocated for the lifetime of the program. No matter how many objects of that class have been created, there is only one copy of the static member. So same static member can be accessed by all the objects of that class.
//                             </p>
//                             <p>
//                                 A static member function can be called even if no objects of the class exist and the static function are accessed using only the class name and the scope resolution operator ::

//                             </p>
//                             <div>

//                             </div>

//                         </div>

//                     </section>
//                     {/* 20 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             20. Explain inheritance
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 Inheritance is the process of creating new classes, called derived classes, from existing classes. These existing classes are called base classes. The derived classes inherit all the capabilities of the base class but can add new features and refinements of their own.


//                             </p>
//                             <div className={styles.Question1AnswerImg}>
//                                 <img src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/058/original/Inheritance_in_C__.png?1614780459" alt="" />
//                                 <p>Inheritance in C++
//                                 </p>
//                             </div>
//                             <div>
//                                 <p>Class Bus, Class Car, and Class Truck inherit the properties of Class Vehicle.                                </p>
//                                 <p>The most important thing about inheritance is that it permits code reusability.

//                                 </p>

//                             </div>

//                         </div>

//                     </section>
//                     <div className={styles.InterviewTitle}>
//                         Advance type dagi C++ intervyu savollari
//                     </div>
//                     {/* 21 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             21. What is a copy constructor?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A copy constructor is a member function that initializes an object using another object of the same class.


//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Eight}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setEight(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>
//                             <p>We can define our copy constructor. If we don’t define a copy constructor then the default copy constructor is called.

//                             </p>

//                         </div>

//                     </section>
//                     {/* 22 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             22. What is the difference between shallow copy and deep copy?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The difference between shallow copy and a deep copy is given below:
//                             </p>
//                             <div className={styles.Question1AnswerItem3}>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Shallow Copy	</th>
//                                             <th>Deep Copy
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>Shallow copy stores the references of objects to the original memory address.</td>
//                                             <td>	Deep copy makes a new and separate copy of an entire object with its unique memory address.
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>Shallow copy is faster.	</td>
//                                             <td>Deep copy is comparatively slower.
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td>Shallow copy reflects changes made to the new/copied object in the original object.		</td>
//                                             <td>Deep copy doesn’t reflect changes made to the new/copied object in the original object

//                                             </td>
//                                         </tr>

//                                     </tbody>
//                                 </table>


//                             </div>


//                         </div>

//                     </section>
//                     {/* 23 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             23. What is the difference between virtual functions and pure virtual functions?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A virtual function is a member function in the base class that you redefine in a derived class. It is declared using the virtual keyword.
//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Nine}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setNine(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />
//                             </div>
//                             <p>A pure virtual function is a function that has no implementation and is declared by assigning 0. It has no body.
//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Teen}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setTeen(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />
//                             </div>
//                             <p>Here, = sign has got nothing to do with the assignment, and value 0 is not assigned to anything. It is used to simply tell the compiler that a function will be pure and it will not have anybody.

//                             </p>


//                         </div>

//                     </section>
//                     {/* 24 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             24. If class D is derived from a base class B. When creating an object of type D in what order would the constructors of these classes get called?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The derived class has two parts, a base part, and a derived part.  When C++ constructs derived objects, it does so in phases. First, the most-base class(at the top of the inheritance tree) is constructed. Then each child class is constructed in order until the most-child class is constructed last.
//                                 {`\n`}So the first Constructor of class B will be called and then the constructor of class D will be called.
//                             </p>
//                             <p>During the destruction exactly reverse order is followed. That is destructor starts at the most-derived class and works its way down to base class.
//                                 So the first destructor of class D will be called and then the destructor of class B will be called.</p>


//                         </div>

//                     </section>                    {/* 25 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             25. Can we call a virtual function from a constructor?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 Yes, we can call a virtual function from a constructor. But the behavior is a little different in this case. When a virtual function is called, the virtual call is resolved at runtime. It is always the member function of the current class that gets called. That is the virtual machine doesn’t work within the constructor.
//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Twelve}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setTwelve(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>
//                             <p>We can assign a pointer of any type to a void pointer but the reverse is not true unless you typecast it as                            </p>
//                             <div>
//                                 <CodeEditor
//                                     value={Threeteen}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setThreeteen(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>
//                         </div>

//                     </section>
//                     {/* 26 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             26. What are void pointers?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 A void pointer is a pointer which is having no datatype associated with it. It can hold addresses of any type.

//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Eleven}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setEleven(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>

//                         </div>

//                     </section>
//                     {/* 27 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             27. What is this pointer in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The member functions of every object have a pointer named this, which points to the object itself. The value of this is set to the address of the object for which it is called. It can be used to access the data in the object it points to.


//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Fourteen}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setFourteen(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>

//                         </div>

//                     </section>
//                     {/* 28 question */}

//                     <section className={styles.Question1}>
//                         <div className={styles.Question1Title}>
//                             28. How do you allocate and deallocate memory in C++?
//                         </div>
//                         <div className={styles.Question1Answer}>
//                             <p>
//                                 The new operator is used for memory allocation and deletes operator is used for memory deallocation in C++.


//                             </p>
//                             <div>
//                                 <p><b>Example:</b></p>
//                                 <CodeEditor
//                                     value={Fiveteen}
//                                     language="cpp"
//                                     placeholder="Please enter JS code."
//                                     onChange={(evn) => setFiveteen(evn.target.value)}
//                                     padding={15}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: "#F5F8FF",
//                                         fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
//                                     }}
//                                 />

//                             </div>

//                         </div>

//                     </section>




//                 </div >


//             </div >


//         </div >
//     )
// }
