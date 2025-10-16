const Fees = () => {
    return (
        <div className="fees">
            <h1 className="fees-h1">Fees & Sessions</h1><br></br>
            <h2 className="fees-h2">Session Options</h2>
            <div className="prices">
                <ul className="sessions">
                    <li><b>Online sessions</b> <br></br>50 minutes — £60 </li></ul>
                <ul className="sessions">
                    <li><b>In-person sessions</b> (Abingdon)<br></br>50 minutes — £65  </li>
                </ul>
            </div>
            <br></br><br></br><br></br><h2 className="fees-h2">Initial Conversations</h2>
            <p className="convo"><b>I offer a free 30-minute phone call</b> so you can get a sense of me and decide whether working together feels right. There’s no pressure or obligation to continue. </p><br></br>
            <h2 className="fees-h2">Frequency</h2>
            <p className="convo">Most people start with weekly sessions, but we can discuss what works best for you. </p><br></br>
            <h2 className="fees-h2">Confidentiality & Accessibility </h2>
            <p className="convo">All sessions are confidential and handled with care and professionalism. Online sessions are available to anyone across the UK. <br></br><br></br>If you have questions about how sessions work, I’m happy to talk things through. </p><br></br>
        </div>
    )
}

export default Fees;