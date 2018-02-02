import React from "react";
import Link from "gatsby-link";

export default () =>
    <div style={{ color: 'tomato' }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://images.freeimages.com/images/large-previews/89a/one-tree-hill-1360813.jpg" alt="" style={{ width: '50%' }} />
        <br />
        <div>
            <br />
            <Link to="/page-2/"> Link  </Link>
        </div>
        <div>
            <br />
            <Link to="/counter/"> Counter </Link>
        </div>
    </div>
