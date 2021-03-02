import React from 'react'
import Header from './js/shared/Header'
import Footer from './js/shared/Footer'

const menuItems = [
  { label: "Menu 1", link: '/menu1' },
  { label: "Menu 2", link: '/menu2' },
  { label: "Menu 3", link: '/menu3' }

]

function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <p>hello</p>
      <Footer />
    </div>
  );
}

export default App;
