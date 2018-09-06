import React, { Component } from 'react'
import Request from 'superagent'
import _ from 'lodash'

class News extends Component {
	
dd8d23210c73452e85c96f007cca668f

	state = {
		movies: []
	}
	
componentWillMount() {
//	var url = 'http://www.omdbapi.com?s=star&y=&r=json&plot=short&apikey=a8dc2e4a';
	Request.get('http://mediametrics.ru/data/archive/day/ru-2014-04-01.zip').then((response) => {
		this.setState({
			movies: response.body.Search
		})
	})
} 
	
  render() {
	
var movies = _.map(this.state.movies, (movies) => {
	return <li>{movies.itle}</li>;
})	  
    return (
        <div>
           <div id="feed" width="100%">
		<ul>
			{movies}
		</ul>
			</div>
		<p></p>
        </div>

    );
  }
}

export default News;
