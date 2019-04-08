var React = require('react');

var SearchContainer = require('./components/SearchContainer.jsx');
var FacePlateContainer = require('./components/facePlateContainer.jsx');
var MovieInfo = require('./components/movieInfo.jsx');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedMovie:{
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
                    rating:1,
                    movieDesc: "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza."
                  },
                  {
                    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Kill_Bill_Volume_2.png/220px-Kill_Bill_Volume_2.png",
                    movieName: "Kill Bill 2",
                    movieYear: "2004",
                    movieGenre: "Action",
                    rating:2,
                    movieDesc: "Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child."
                  },
                  {
                      imgSrc: "https://i.pinimg.com/originals/bd/71/8c/bd718cb3d0932ff76eafc649921772a9.jpg",
                      movieName: "Kill Bill 3",
                      movieYear: "2018",
                      movieGenre: "Action",
                      rating:3,
                      movieDesc: "Kill Bill 3 Will Probably Never Happen Now"
                    }
            ],
            sorting:"left",
            searchString : "",
            searchParam : "Title",
            moviesFound: "3"
        }
    }

    onChangeSerachString(newSearchString){
        this.setState(
            {
                movies: this.state.movies.filter(this.filterMovies(newSearchString))
            })
    }

    onChangeSearchParam(newSearchParam){
        if (newSearchParam === "left") {
            this.setState({searchParam: "Title"});
        }
        else{
            this.setState({searchParam: "Genre"});
        }
    }

    onChangeSorting(newSorting){
         this.setState(
            {
                movies: this.state.movies.sort(this.sortMovies(newSorting))
            })
    }

    onChangeSelected(newSelected){
        this.setState({selectedMovie: newSelected})
    }

    filterMovies(newSearchString)
    {
        return (item) => {
            return item.movieName.toLowerCase().search(newSearchString)!== -1
        }
    }

    sortMovies(newSorting)
    {
        if (newSorting === "left")
        {
            return function(a, b){return a.movieYear - b.movieYear};
        }
        else
        {
            return function(a, b){return b.rating - a.rating};
        }
    }

    render() {
            return (
                    <div className="new-class">
                    <SearchContainer
                        onSearch={this.onChangeSerachString.bind(this)}
                        onChangeSearchParam={this.onChangeSearchParam.bind(this)}
                        moviesFound = {this.state.movies.length}/>
                    <FacePlateContainer 
                        movies={this.state.movies} 
                        onChangeSorting={this.onChangeSorting.bind(this)}
                        onChangeSelected={this.onChangeSelected.bind(this)}/>
                    <MovieInfo movie={this.state.selectedMovie}/>
                    </div>
            )
        }
}

module.exports = App;