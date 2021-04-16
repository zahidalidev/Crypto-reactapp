import React from 'react';

import colors from '../config/colors';

function Home(props) {
    return (
        <div style={{ backgroundColor: colors.grey }}>
            <div style={{ height: 800, color: "white", fontSize: "3vw", marginLeft: "4vw" }}  >
                Instructions
            <p style={{ fontSize: "1.3vw" }}>
                    ● Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc elit, suscipit id felis in,</p>
                <p style={{ fontSize: "1.3vw" }}>● venenatis placerat arcu. Etiam blandit nulla maximus, imperdiet neque ut, sollicitudin nunc.</p>
                <p style={{ fontSize: "1.3vw" }}>● Ut ut tempor turpis. Phasellus at mattis ipsum, ut viverra nisi. Pellentesque auctor</p>
                <p style={{ fontSize: "1.3vw" }}>● consectetur enim, eu laoreet nulla suscipit in. Nulla facilisi. Nunc ultrice </p>
            </div>
        </div>
    );
}



export default Home;