import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class SearchFormComponent extends Component {

  @action
  updateSearchFields() {
    const search = document.getElementById('title').value;
    let type = document.getElementById('movie').checked;
    if(search === "") {
      let output = `<h1>Please enter a movie/series name.</h1>`;
      document.getElementById("output1").innerHTML = output;
    }
    else{
      if(typeof type == 'boolean') {
        const request = new Request(
          `https://www.omdbapi.com/?apikey=15e8a773&type=movie&plot=full&t=${search}`
        );
        fetch(request)
        .then((r) => {
          r.json()
          .then((data) => {
            if (data['Response'] != 'False')
            {
              let output = '';
              output += `
                <img src='${data['Poster']}' alt='poster'>
                <table class="table-sm">
                  <tr>
                    <td>${data['Title']}</td>
                  </tr>
                  <tr>
                    <td>${data['Awards']}</td>
                  </tr>
                  <tr>
                    <td>${data['Released']}</td>
                  </tr>
                  <tr>
                    <td>${data['Rated']}</td>
                  </tr>`
              if(data['BoxOffice']){
              output += `<tr>
                    <td>Box office Earnings</td>
                    <td>${data['BoxOffice']}</td>
                  </tr>`
              }
              output +=`<tr>
                    <td>Director</td>
                    <td>${data['Director']}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td>${data['Actors']}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>${data['Genre']}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>${data['Language']}</td>
                  </tr>
                  <tr>
                    <td>Metascore</td>
                    <td>${data['Metascore']}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>${data['Runtime']}</td>
                  </tr>
                  <tr>
                    <td>IMDB rating</td>
                    <td>${data['imdbRating']}</td>
                  </tr>
                  <tr>
                    <td>IMDB votes</td>
                    <td>${data['imdbVotes']}</td>
                  </tr>
                  <caption>${data['Plot']}</caption>
                </table>
              `;
              document.getElementById('output1').innerHTML = output;
              return output;
            }
            else {
              let output = '';
              output += `<h1>Coudn't find what you were looking for.</h1>`;
              document.getElementById('output1').innerHTML = output;
              return output;
            }
            
          }).catch((err)=>{
              console.log(err);
          });
        });
        const req = new Request(
          `https://www.omdbapi.com/?apikey=15e8a773&type=series&plot=full&t=${search}`
        );
        fetch(req)
        .then((r) => {
          r.json()
          .then((data) => {
            if (data['Response'] != 'False')
            {
              let output = '';
              output += `
                <img src='${data['Poster']}' alt='poster'>
                <table class="table-sm">
                  <tr>
                    <td>${data['Title']}</td>
                  </tr>
                  <tr>
                    <td>${data['Awards']}</td>
                  </tr>
                  <tr>
                    <td>${data['Released']}</td>
                  </tr>
                  <tr>
                    <td>${data['Rated']}</td>
                  </tr>`
              if(data['BoxOffice']){
              output += `<tr>
                    <td>Box office Earnings</td>
                    <td>${data['BoxOffice']}</td>
                  </tr>`
              }
              output +=`<tr>
                    <td>Director</td>
                    <td>${data['Director']}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td>${data['Actors']}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>${data['Genre']}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>${data['Language']}</td>
                  </tr>
                  <tr>
                    <td>Metascore</td>
                    <td>${data['Metascore']}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>${data['Runtime']}</td>
                  </tr>
                  <tr>
                    <td>IMDB rating</td>
                    <td>${data['imdbRating']}</td>
                  </tr>
                  <tr>
                    <td>IMDB votes</td>
                    <td>${data['imdbVotes']}</td>
                  </tr>
                  <caption>${data['Plot']}</caption>
                </table>
              `;
              document.getElementById('output2').innerHTML = output;
              return output;
            }
            else {
              let output = '';
              output += `<h1>Coudn't find what you were looking for.</h1>`;
              document.getElementById('output2').innerHTML = output;
              return output;
            }
            
          }).catch((err)=>{
              console.log(err);
          });
        });
  
      }
      else{
        if (type) {
          type = 'movie';
        } else {
          type = 'series';
        }
        const request = new Request(
          `https://www.omdbapi.com/?apikey=15e8a773&type=${type}&plot=full&t=${search}`
        );
        fetch(request)
          .then((r) => {
            r.json()
            .then((data) => {
              if (data['Response'] != 'False')
              {
                let output = '';
                output += `
                  <img src='${data['Poster']}' alt='poster'>
                  <table class="table-sm">
                    <tr>
                      <td>${data['Title']}</td>
                    </tr>
                    <tr>
                      <td>${data['Awards']}</td>
                    </tr>
                    <tr>
                      <td>${data['Released']}</td>
                    </tr>
                    <tr>
                      <td>${data['Rated']}</td>
                    </tr>`
                if(data['BoxOffice']){
                output += `<tr>
                      <td>Box office Earnings</td>
                      <td>${data['BoxOffice']}</td>
                    </tr>`
                }
                output +=`<tr>
                      <td>Director</td>
                      <td>${data['Director']}</td>
                    </tr>
                    <tr>
                      <td>Actors</td>
                      <td>${data['Actors']}</td>
                    </tr>
                    <tr>
                      <td>Genre</td>
                      <td>${data['Genre']}</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>${data['Language']}</td>
                    </tr>
                    <tr>
                      <td>Metascore</td>
                      <td>${data['Metascore']}</td>
                    </tr>
                    <tr>
                      <td>Runtime</td>
                      <td>${data['Runtime']}</td>
                    </tr>
                    <tr>
                      <td>IMDB rating</td>
                      <td>${data['imdbRating']}</td>
                    </tr>
                    <tr>
                      <td>IMDB votes</td>
                      <td>${data['imdbVotes']}</td>
                    </tr>
                    <caption>${data['Plot']}</caption>
                  </table>
                `;
                document.getElementById('output1').innerHTML = output;
                console.log(data);
                return output;
              }
              else {
                let output = '';
                output += `<h1>Coudn't find what you were looking for.</h1>`;
                document.getElementById('output1').innerHTML = output;
                return output;
              }
              
            }).catch((err)=>{
                console.log(err);
            });
          });
      }
    }
    
    
    //   .then((data) => console.log(data))
    //   .then((data) => console.log(data));
  }
}
