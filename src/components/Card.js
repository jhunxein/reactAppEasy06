import React from 'react';

export class Card extends React.Component {
	constructor(props) {
		super(props);
		// this.state  = {id: '',title: '',desc: '', iconSrc: ''};
		const { id, title, desc, iconSrc, borderTopColor } = props;
		this.id = id;
		this.title = title;
		this.desc = desc;
		this.iconSrc = iconSrc;
		this.borderTopColor = borderTopColor;
	}

	render() {
		return (
			<section
				className="card"
				style={{ borderTop: `3px solid ${this.borderTopColor}` }}
			>
				<h1>{this.title}</h1>
				<p>{this.desc}</p>
				<div>
					<img src={this.iconSrc} alt="..." className="icon" />
				</div>
			</section>
		);
	}
}

export default Card;
