import React from "react";

//Rendering Lists Dynamically Using map()

const Listconcept = () => {
    //js logic- 
    const fruits = ["Apple", "orange", "banana", "papaya"];

    const students = [
        { id: 1, name: "John" },
        { id: 2, name: "Mary" },
        { id: 3, name: "David" }
    ];

    //Conditional Rendering in React :Using if Statement, Using Ternary Operator, Using Logical AND (&&)

    const isLoggedIn = true;

    //
    const products = [
     { id: 1, name: "Laptop", available: true },
     { id: 2, name: "Mobile", available: false },
     { id: 3, name: "Tablet", available: true }
   ];


    return (
        <div className="list">
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit) => (
                    <li>{fruit}</li>
                ))}
            </ul>

            {/*sample student list generation*/}

            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name}
                    </li>
                ))}
            </ul>

            <h2>{isLoggedIn && <h2>React Learning Session</h2>}</h2>
            <h2>  {isLoggedIn ? "Welcome User!" : "Please Login"}</h2>

            <h1>Product List</h1>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} -
                        {product.available ? (
                            <span> In Stock</span>
                        ) : (
                            <span> Out of Stock</span>
                        )}
                    </li>
                ))}
            </ul>

        </div>
    );

};
export default Listconcept;