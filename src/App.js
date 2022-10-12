import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// Accordion properties
// const items = [
//   {
//     title: 'what is React',
//     content: 'React is frontend Javascript framework'
//   },
//   {
//     title: 'why use React',
//     content: 'React is a favourite JS library among engineers'
//   },
//   {
//     title: 'How do you use React',
//     content: 'You use React by creating component'
//   }

// ]



//--------- A sample options for dropdown 

// const options = [
//   {
//     label: "The Color Red",
//     value: "red",
//   },
//   {
//     label: "The Color Blue",
//     value: "blue",
//   },
//   {
//     label: "The Color Green",
//     value: "green",
//   },
// ];

function App() {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>

      <Translate/>
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <Accordion   items={items}/> */}
      {/* <Search/> */}
    </div>
  );
}

export default App;
