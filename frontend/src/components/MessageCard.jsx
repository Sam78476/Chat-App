import React from "react";
import "./css/MessageCard.css";

function MessageCard(props) {
	return (

		(
			props.isSender ? (
				<div className="message-card">

					<div className="message-header">

					</div>


					<div className="message-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nobis omnis perferendis molestiae sunt voluptates.</p>
					</div>


				</div>

			) : (

				<div className="message-card other">

					<div className="message-header">

					</div>


					<div className="message-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nobis omnis perferendis molestiae sunt voluptates.</p>
					</div>


				</div>

			)
		)
	);
}

export default MessageCard;