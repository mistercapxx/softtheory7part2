import React from 'react'

interface SchetProps {
    initialCount:Number;
}

const Schet: React.FC<SchetProps> = ({initialCount}) => {
    const [count,setCount] = useState(initialCount);
  return (
   <>
   Count: {count}
   <button onClick={()=> setCount(count - 1)}>-</button>
   <button onClick={()=> setCount(count + 1)}>+</button>
   </>
  );
};

export default Schet;

//////////////////



type ObjectsWithNamesArray = Array<{name:string}>

const people: ObjectsWithNamesArray = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' }
];

function printNames(objects: ObjectsWithNamesArray): void {
  objects.forEach(obj => {
      console.log(obj.name);
  });
}
interface PeopleListProps {
  people: ObjectsWithNamesArray;
}

const PeopleList: React.FC<PeopleListProps> = ({people}) => {
  return (
    <ul>
      {people.map((person,index) => (
        <li key= {index}>{person.name}</li>
      ))}
    </ul>
  );
};


const App: React.FC = () => (
<div>
  <h1>People List</h1>
  <PeopleList people={people}/>
</div>
)


