import React from 'react';
import "./styles/styles.css";

const morning = "https://cdn.glitch.global/e529880a-3388-4b83-9517-778f299e5e87/thumbnails%2Fmorning.jpg?1718232099818";
const afternoon = "https://cdn.glitch.global/e529880a-3388-4b83-9517-778f299e5e87/thumbnails%2Fafternoon.jpg?1718232054307";
const evening = "https://cdn.glitch.global/e529880a-3388-4b83-9517-778f299e5e87/thumbnails%2Fevening.jpg?1718232079769";
const night = "https://cdn.glitch.global/e529880a-3388-4b83-9517-778f299e5e87/thumbnails%2Fnight.jpg?1718232124339";
const orchid = "https://cdn.glitch.global/e529880a-3388-4b83-9517-778f299e5e87/thumbnails%2Forchid.jpg?1718232135089";

const determineTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour >= 6 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 18) {
      return 'afternoon';
    } else if (hour >= 18 && hour < 21) {
      return 'evening';
    } else {
      return 'night';
    }
  };

  const imageUrls = {
    morning,
    afternoon,
    evening,
    night,
  };

  const TimeOfDayBackground = () => {
    const [timeOfDay, setTimeOfDay] = React.useState('');
  
    React.useEffect(() => {
      setTimeOfDay(determineTimeOfDay());
    }, []);
  
    const imageUrl = imageUrls[timeOfDay];
  
    return (
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <h1>Welcome to the {timeOfDay}!</h1>
      </div>
    );
  };
  

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName} <br />
      {lastName}
    </h2>
  </div>
)

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date.toString()}</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return <ul>{techsFormatted}</ul>
  }
}

class Main extends React.Component {
  render() {
    const {
      techs,
      user,
    } = this.props

return (
  <main>
    <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <TechList techs={techs} />
          <UserCard user={user} />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Created by Ariana Spretz {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: '',
      color: '',
    },
    backgroundColor: '', 
  }

  showDate = (time) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
  }
  
  render() {
    const data = {
      welcome: 'Welcome to My React App',
      title: 'Getting Started React',
      subtitle: 'A JavaScript Library',
      author: {
        firstName: 'Ariana',
        lastName: 'Spretz',
      },
      date: new Date('Oct 7, 2020'),
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const user = { image: orchid }

    return (
      <div className='app'>
        <TimeOfDayBackground />
        <Header data={data} />
        <Main user={user}
        techs={techs}
/>
        <Footer date={new Date()} />
      </div>
    )
  }
}


export default App;


/*
morning
Foto de <a href="https://unsplash.com/es/@wildandfree_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Damian Markutt</a> en <a href="https://unsplash.com/es/fotos/flores-de-petalos-purpuras-cerca-de-la-montana-Dhmn6ete6g8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

afternoon
Foto de <a href="https://unsplash.com/es/@ejuneolgac?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">June O</a> en <a href="https://unsplash.com/es/fotos/el-sol-se-esta-poniendo-sobre-un-campo-de-hierba-ZbKThTA88cc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

evening
Foto de <a href="https://unsplash.com/es/@ivan_monroy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Iván Monroy</a> en <a href="https://unsplash.com/es/fotos/arboles-cerca-de-la-canasta-de-baloncesto-durante-la-noche-ITmR-4ofV4g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
night
Foto de <a href="https://unsplash.com/es/@phaelnogueira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raphael Nogueira</a> en <a href="https://unsplash.com/es/fotos/fondo-de-pantalla-de-galaxy-svbDI1Pq30s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
