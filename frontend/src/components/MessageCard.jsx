import React from "react";
import "./css/MessageCard.css";

function MessageCard(props) {
	return (
		props.isSender ? (
			<div className="message-card">
				<div className="message-header">
				</div>

				<div className="message-body">
					<p>{props.message}</p>
				</div>
			</div>
		) : (
			<div className="message-card other">
				<div className="message-header">
				</div>

				<div className="message-body">
					<p>{props.message}</p>
				</div>
			</div>
		)
	);
}

export default MessageCard;