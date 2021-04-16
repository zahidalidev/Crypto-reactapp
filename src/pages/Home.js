import React from 'react';

import colors from '../config/colors';

function Home(props) {
    return (
        <div style={{ backgroundImage: "linear-gradient(326deg, #AA076B 0%, #61045f 74%)" }}>
            <div style={{ height: 800, color: "white", fontSize: "2rem", marginLeft: "4rem", paddingTop: "4rem" }}  >
                Instructions
            <p style={{ fontSize: "1rem" }}>
                    ● Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc elit, suscipit id felis in,</p>
                <p style={{ fontSize: "1rem" }}>● venenatis placerat arcu. Etiam blandit nulla maximus, imperdiet neque ut, sollicitudin nunc.</p>
                <p style={{ fontSize: "1rem" }}>● Ut ut tempor turpis. Phasellus at mattis ipsum, ut viverra nisi. Pellentesque auctor</p>
                <p style={{ fontSize: "1rem" }}>● consectetur enim, eu laoreet nulla suscipit in. Nulla facilisi. Nunc ultrice </p>
            </div>
        </div>
    );
}



export default Home;