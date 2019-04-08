import React from 'react';
import renderer from 'react-test-renderer';

import MovieInfo from './movieInfo';

describe('Snapshot', () => {
it('MovieInfo matches the snapshot', () => {
    var movie = {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjJ0oj9DdOyVjYyDREytOES2pKEDgUtXDvNeaDnflAoXfg6I4",
                  movieName: "Kill Bill",
                  movieYear: "2003",
                  movieGenre: "Action",
                  rating:1,
                  movieDesc: "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza."
    }
    const tree = renderer.create(<MovieInfo movie={movie}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});