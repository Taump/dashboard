import React, { Component } from "react";

export default class TheCat extends Component {
	render() {
		return (
			<div>
				<h2>Список пород кошек</h2>
				<div className="grid__row grid_row_title">
					<div className="grid__field">Порода</div>
					<div className="grid__field">Описание</div>
					<div className="grid__field">Происхождение</div>
					<div className="grid__field">Ссылка на википедию</div>
				</div>
				{this.props.LoadingStatus ? (
					this.props.data.map(item => {
						return (
							<div className="grid__row" key={item.id + item.name}>
								<div className="grid__field">{item.name}</div>
								<div className="grid__field">{item.description}</div>
								<div className="grid__field">{item.origin}</div>
								<div className="grid__field">
									<a href={item.wikipedia_url}>Перейти на сайт</a>
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
