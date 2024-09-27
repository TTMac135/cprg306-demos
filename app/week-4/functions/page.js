

export default function FunctionsPage() {

    function helloWorld(username, dayOfWeek) {
       // return 'Hello world! Welcome back ' + username + ', today is ' + dayOfWeek;
       return `Hellow World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld3 = (username) => `Hello ${username}`;
    const helloMath = (a, b) => a + b;

    const louder = (textFunc, username) => {
        let thisText = textFunc(username);
        return thisText.toUpperCase();
    }

    const multiplyBy = (num1) => {
        return (num2) => num1 * num2;
    }

    const multiplyBy3 = multiplyBy(3);
    const multiplyBy10 = multiplyBy(10);

    return (
        <main>
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Friday")}</p>
            <p>{helloWorld2("Jeremy", "Wednesday")}</p>
            <p>{helloWorld3("John")}</p>
            <p>{helloMath(3, 4)}</p>
            <p>{louder( helloWorld3, "Robert" )}</p>
            <p>{louder( helloWorld2, "Anne" )}</p>
            <p>{multiplyBy3(7)}</p>
            <p>{multiplyBy10(7)}</p>
            <p>{multiplyBy10(5)}</p>
        </main>
    );
}