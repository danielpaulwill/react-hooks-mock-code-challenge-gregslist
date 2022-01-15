import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  console.log("listings:", listings)

  function listingFetch() {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }

  useEffect(() => {
    listingFetch()
  }, [])

  function handleOnDeleteClick(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
})
    listingFetch()
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDeleteClick={handleOnDeleteClick} />
    </div>
  );
}

export default App;



// ,
//     {
//       "id": 8,
//       "description": "Test Listing",
//       "image": "./images/toyota-grill.jpg",
//       "location": "Test"
//     }