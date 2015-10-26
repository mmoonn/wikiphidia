import React from 'react';
import {RouteHandler} from 'react-router';

import Login from './Login';

export default class App extends React.Component {
	state = { user: USER }

	render () {
		return <div>
			<div className='row'>
				<div className='three columns'>
					<h1>Wikiphidia</h1>
					<Login user={this.state.user} />

					Pagelist
				</div>
				<div className='nine columns'>
					<RouteHandler user={this.state.user} />
				</div>
			</div>
		</div>
	}
}
