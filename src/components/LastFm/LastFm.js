import React, { Component } from "react";

export default class LastFm extends Component {
	render() {
		return (
			<div>
				<h2>Рейтинг артистов на Last.fm</h2>
				<div className="grid__row grid_row_title">
					<div className="grid__field">Имя артиста</div>
					<div className="grid__field">Кол-во прослушиваний</div>
					<div className="grid__field">Кол-во слушателей</div>
					<div className="grid__field">Ссылка</div>
				</div>
				{this.props.LoadingStatus ? (
					this.props.data.map(item => {
						return (
							<div className="grid__row" key={item.mbid + item.name}>
								<div className="grid__field">{item.name}</div>
								<div className="grid__field">{item.playcount}</div>
								<div className="grid__field">{item.listeners}</div>
								<div className="grid__field">
									<a href={item.url}>Перейти на сайт</a>
								</div>
							</div>
						);
					})
				) : (
					<div className="loading">Идет загрузка...</div>
				)}
			</div>
		);
	}
}
