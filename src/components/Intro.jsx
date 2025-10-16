import darren from '../images/darren.jpg'


const Intro = () => {
    return (
    <div className='intro'>
        <div className='photo'>
            <img id="darren" src={darren}></img>
            <p>Darren Bagheri</p>
            <p id='tag'>In-person in Abingdon • Online across the UK</p>
        </div>
        <div className='para'>
            <h1>Welcome</h1>
            <p>You might be clear about what&apos;s brought you here, or you might just feel like something needs to change.<br></br><br></br>
             You don't have to arrive with the right words.<br></br><br></br>

                I offer a space where you can talk things through openly and honestly. My approach is person-centred, grounded and human. I work with people facing all kinds of experiences — from day-to-day pressure to the impact of trauma, neurodiversity, identity and emotional strain.

                <br></br><br></br>If you're curious about working together, we can have a free 30-minute conversation to see if it feels like a good fit. </p> <p id='touch'><i>Get in Touch</i></p>
        </div>

    </div>
)};

export default Intro;