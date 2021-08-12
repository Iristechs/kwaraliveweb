import React from "react";
import '../css/footer.css'


const currentDate = Date().split(' ')[3]

const Footer=()=>{
    return(
        <footer>
            <p>&copy; kwaralive {currentDate}</p>
        </footer>
    )
}

export default Footer