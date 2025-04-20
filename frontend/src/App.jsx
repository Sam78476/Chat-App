import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MessageInput from "./components/MessageInput";
import MessageCard from "./components/MessageCard";

function App() {
	return (
		<div className="layout">

			<Sidebar />

			<div>
				<Navbar />

				<div className="message-area">

					<MessageCard isSender={false} />
					<MessageCard isSender={true} />
					<MessageCard isSender={false} />
					<MessageCard isSender={false} />
					<MessageCard isSender={false} />
					<MessageCard isSender={true} />
					<MessageCard isSender={false} />
					<MessageCard isSender={false} />
					<MessageCard isSender={true} />
					<MessageCard isSender={true} />
					<MessageCard isSender={true} />
					<MessageCard isSender={false} />
					<MessageCard isSender={false} />
					<MessageCard isSender={true} />
					<MessageCard isSender={false} />

				</div>

				<div className="message-input-container">
					<MessageInput />
				</div>



			</div>
		</div>
	);
}

export default App;
