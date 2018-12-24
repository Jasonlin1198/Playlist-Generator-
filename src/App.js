import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let defaultTextColor = '#111';
let defaultStyle = {
  color: defaultTextColor
};
let fakeServerData = {
  user: {
    name: 'Jason',
    playlists: [
      {
        name: 'My favorites',
        songs: [{name:'Sweet Time', duration: 1234},
                {name:'Sweet Time', duration: 1234},
                {name:'Sweet Time', duration: 1234}]
      },
      {
        name: 'Discover Weekly',
        songs: [{name:'Sweet Time', duration: 1234},
                {name:'Sweet Time', duration: 1234},
                {name:'Sweet Time', duration: 1234}]
      },
      {
        name: 'Another playlist',
        songs:  [{name:'Sweet Time', duration: 1234},
                 {name:'Sweet Time', duration: 1234},
                 {name:'Sweet Time', duration: 1234}]
      },
      {
        name: 'More playlist',
        songs:  [{name:'Sweet Time', duration: 1234},
                 {name:'Sweet Time', duration: 1234},
                 {name:'Sweet Time', duration: 1234}]
      }
    ]
  }
};
class PlaylistCounter extends Component{
  render()  {
      return(
        <div style= {{...defaultStyle, width: '40%', display: 'inline-block'}}>
          <h2> {this.props.playlists.length} Playlists </h2>
        </div>
      );
  }
}
class HoursCounter extends Component{
  render()  {
      let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
        return songs.concat(eachPlaylist.songs)
      } , [] )
      let sumTime = allSongs.reduce((sum, eachSongs) => {
        return sum + eachSongs.duration
      } , 0 )
      return(
        <div style= {{...defaultStyle, width: '40%', display: 'inline-block'}}>
          <h2> {Math.round (sumTime/60) } Hours </h2>
        </div>
      );
  }
}

class Filter extends Component{
  render() {
      return(
        <div style={defaultStyle}>
          <img/>
          <input type= "text"/>
          &nbsp;&nbsp;&nbsp;&nbsp;Filter
        </div>

      )
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
        <img />
        <h3>Playlist Name!</h3>
        <ul>
          <li>Song1</li>
          <li>Song2</li>
          <li>Song3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000)

  }
  render(){
    return(
      <div className="App">
      {this.state.serverData.user ?
        <div>
          <h1>
          {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists = {this.state.serverData.user.playlists}/>
          <HoursCounter playlists = {this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style = {defaultStyle}>loading...</h1>
      }
      </div>
    );
  }
}

export default App;
