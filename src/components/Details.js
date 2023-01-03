import { Button } from "bootstrap";
import React from "react";


function Detail({ selected, closeDetail }) {
return (
	<section className="detail">
	<div className="content">
		<h2>{selected.Title}</h2>
		<span>{selected.Year}</span>
		<p className="rating">Rating: {selected.imdbRating}</p>

		<div className="about">
		<img src={selected.Poster} alt="" />
			
<p>{selected.Plot}</p>

		</div>
		<button className="close" onClick={closeDetail}>
		Close
		</button>
		<br></br>
		<button button1 className="Book-Tickets"  style={{
			backgroundColor: '#223343',
			width: '100%',
			padding: '0.85em',
            borderRadius: '8px',
			justifyContent: 'center',
			margin: 'auto',
			display: 'flex',
			color: 'white',
			fontSize: '18px'
			
			
		}}>
		<b>Book Tickets</b>
		</button>
	</div>
	</section>
);
}

export default Detail;
