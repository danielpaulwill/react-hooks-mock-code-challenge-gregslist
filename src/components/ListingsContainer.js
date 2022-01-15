import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteClick }) {

  const listingArray = listings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} onDeleteClick={onDeleteClick} />
  ))

  return (
    <main>
      <ul className="cards">
        {listingArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
