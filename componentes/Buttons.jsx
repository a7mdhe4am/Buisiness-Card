function Buttons() {
    
return(
        <div className="buttons-container">
            <button className="email-btn" id="email-btn">
                <a href="ahmdhesham241@gmail.com" target='_blank' >
                    <img src="../images/Mail.png" />
                    <p>Email</p>
                </a>    
            </button>
            <button className="linkedin-btn" id="linkedin-btn">
                <a href="https://www.linkedin.com/in/ahmed-hesham-0404b121b/" target='_blank'>
                    <img src="../images/linkedin.png" />
                    <p>LinkedIn</p> 
                </a>    
            </button>
        </div>
    )
}

export default Buttons