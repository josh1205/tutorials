import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}


function App() {


  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://www.google.com/search?q=lebron+images&rlz=1C5CHFA_enUS879US880&sxsrf=APq-WBsxMVUZPgtyMx5dC_gnYGgCdQCMcQ:1645930140862&tbm=isch&source=iu&ictx=1&vet=1&fir=AG4HgdoqvwdjwM%252C419L3oQD0wn-iM%252C_%253Bj8H2TxuzoavClM%252CBxeAPnv0SEu1lM%252C_%253B92_6m-qSOYDf5M%252Cz-ZwiWHhXouBBM%252C_%253BLXr1aTYZF-X47M%252CXh2esfH4FTElZM%252C_%253BHNJ41m501_XchM%252CJgK1C8tWjQnUVM%252C_%253BXZmab_Qq34btWM%252CJgK1C8tWjQnUVM%252C_%253B3uBqkWrKEYrOMM%252CFx9Usaz3bUiDEM%252C_%253BdT6Jpb8B56ylNM%252CLwlzCpIEjWtCbM%252C_%253BURSReyG-P13fjM%252CpX0BSXfpZ0q1lM%252C_%253BSXs4tfADFzqX9M%252CBIaf3D0WJT2CcM%252C_%253BVxLU3S7AJpqKlM%252CEkfn08Hs6ErdMM%252C_%253BS-0o8RUeu5HMkM%252CUfDqAfWRFCFbQM%252C_%253B1_qq5fMzKKinhM%252Cf04pnmhyTqNxAM%252C_%253B-K4l-RaThDlO_M%252C18basW0TVKM1xM%252C_&usg=AI4_-kRfcAC89C51WjP32FlNTg6vNb2V4g&sa=X&sqi=2&ved=2ahUKEwidufvK7572AhXNQvEDHYpWA4kQ9QF6BAgDEAE#imgrc=AG4HgdoqvwdjwM",
      note: "Not that great at basketball"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
