import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: 'what is React',
    content: 'React is frontend Javascript framework'
  },
  {
    title: 'why use React',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating component'
  }

]

export default () => {
  return (
    <div>

      <br />
      <Search/>
    </div>
  );
};
