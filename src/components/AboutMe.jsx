
import tommy from '../images/tommy.png'
const AboutMe = () => {
    return (
    <div className='about-me'>
        <p className="about"><h1 className="header">About Me</h1> 

 
<div className='content'>
<div className='about-left'>I'm a Person-Centred Therapist offering counselling in Abingdon-on-Thames and online. <br></br><br></br>

My background includes working with young adults, people navigating trauma, and those exploring or living with neurodiversity — as well as clients dealing with anxiety, stress, low mood, relationships, identity, and self-esteem. I don&apos;t assume what you need; I meet you where you are. 

I&apos;m grounded, open and direct in my style. My role isn&apos;t to judge, fix, or tell you who to be. It&apos;s to walk alongside you, help you feel heard and understood, and support you in making sense of your experiences in your own way. <br></br><br></br>
If you&apos;re unsure what you need but know something isn&apos;t right, we can explore it together.</div>
<div className='about-right'><h2 id='qualifications'>Qualifications & Professional Standards</h2>

<ul className="list">
  <li>Level 4 Diploma in Therapeutic Counselling </li>
  <li>NCFE CACHE Certificate in Awareness of Mental Health Problems</li>
  <li>Enhanced DBS certification </li>
  <li>Member of the British Association for Counselling and Psychotherapy (BACP), membership no. 00997441 </li>
  <li>Committed to ongoing professional development and ethical practice </li>
</ul>
<img id="tommy" src={tommy}></img>
<br></br><br></br>
</div>
</div>
 </p>
 
    </div>
)};

export default AboutMe;