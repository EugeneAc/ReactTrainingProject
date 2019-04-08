import React from 'react';
import renderer from 'react-test-renderer';

import MovieFacePlate from './movieFacePlate';

describe('Snapshot', () => {
it('MovieInfo matches the snapshot', () => {
    var movies = [
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
    ];
    const tree = renderer.create(<MovieFacePlate movies={movies} onChangeSelected={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});