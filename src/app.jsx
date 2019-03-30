var React = require('react');

var SearchContainer = require('./components/SearchContainer.jsx');
var FacePlateContainer = require('./components/facePlateContainer.jsx');
var MovieInfo = require('./components/movieInfo.jsx');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sampleMovie:{
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjJ0oj9DdOyVjYyDREytOES2pKEDgUtXDvNeaDnflAoXfg6I4",
                          movieName: "Kill Bill",
                          movieYear: "2003",
                          movieGenre: "Action",
                          rating:1,
                          movieDesc: "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza."
            },
            movies :[
                {
                    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjJ0oj9DdOyVjYyDREytOES2pKEDgUtXDvNeaDnflAoXfg6I4",
                    movieName: "Kill Bill",
                    movieYear: "2003",
                    movieGenre: "Action",
                    rating:1
                  },
                  {
                    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Kill_Bill_Volume_2.png/220px-Kill_Bill_Volume_2.png",
                    movieName: "Kill Bill 2",
                    movieYear: "2004",
                    movieGenre: "Action",
                    rating:2
                  },
                  {
                      imgSrc: "https://i.pinimg.com/originals/bd/71/8c/bd718cb3d0932ff76eafc649921772a9.jpg",
                      movieName: "Kill Bill 3",
                      movieYear: "2018",
                      movieGenre: "Action",
                      rating:3
                    }
            ]
        }
    }
    
    render() {
            return (
                    <div className="">
                    <SearchContainer />
                    <FacePlateContainer movies={this.state.movies}/>
                    <MovieInfo movie={this.state.sampleMovie}/>
                    </div>
            )
        }
}

module.exports = App;