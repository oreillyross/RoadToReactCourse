import "./styles.css";

const student = {
  ID: "21",
  name: "John",
  GPA: "3.0"
};

// an example of using object destructuring
// and also uses name aliasing on the name property
const {ID, name: mystudent, GPA } = student;
// example of rest destructuring
const {name, ...rest} = {...student, a: "another value"};

export default function App() {
  const users = [{ name: "Robin" }, { name: "Markus" }];
  const showUsers = true;

  return (
    <div className="App">
      
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {`${ID}, ${mystudent}, ${GPA}`}
<div>{JSON.stringify(rest)}</div>



      <div>
        {/* usage of a short-circuit operator, can also use a ternary operator 
       here and return null as the false branch */}
        {showUsers && (
          <ul>
            {users.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
{/* forms in React */}
<div>
  <h1>My Hacker stories</h1>
<form>
    
  </form>
  </div>
    </div>
  );
}


// two ways to concatenate two or more arrays
// first is using the concat function in ES5 second is ES6 
// spread operator

const a = [1,2,3];
const b = [4,5,6]
const c = a.concat(b)
console.log("concat: ", c)
//spread operator
const d = [...a, "add any extra values",  ...b]
console.log('spread:', d)
// very useful i nreact for building up objects