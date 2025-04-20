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

					<MessageCard message="Hello, World!" isSender={true} />
					<MessageCard message="Hi there!" isSender={false} />
					<MessageCard message="How are you?" isSender={true} />
					<MessageCard message="I'm good, thanks!" isSender={false} />
					<MessageCard message="What about you?" isSender={true} />
					<MessageCard message="I'm doing well!" isSender={false} />
					<MessageCard message="What are you up to?" isSender={true} />
					<MessageCard message="Just working on a project." isSender={false} />
					<MessageCard message="Sounds interesting!" isSender={true} />
					<MessageCard message="It is! I'm learning a lot." isSender={false} />
					<MessageCard message="That's great to hear!" isSender={true} />
					<MessageCard message="Thanks! What about you?" isSender={false} />
					<MessageCard message="I'm just relaxing." isSender={true} />
					<MessageCard message="Nice! Any plans for the weekend?" isSender={false} />
					<MessageCard message="Not yet, maybe a movie?" isSender={true} />
					<MessageCard message="That sounds fun!" isSender={false} />
					<MessageCard message="Yeah, I'm looking forward to it." isSender={true} />
					<MessageCard message="What movie are you thinking of?" isSender={false} />
					<MessageCard message="Maybe something action-packed." isSender={true} />
					<MessageCard message="Sounds exciting!" isSender={false} />
					<MessageCard message="I love action movies!" isSender={true} />
					<MessageCard message="Me too! They keep you on the edge of your seat." isSender={false} />
					<MessageCard message="Exactly! I can't wait." isSender={true} />
					<MessageCard message="Let me know how it is!" isSender={false} />
					<MessageCard message="Will do! Thanks!" isSender={true} />
					<MessageCard message="You're welcome! Enjoy!" isSender={false} />
					<MessageCard message="Thanks! Talk later?" isSender={true} />
					<MessageCard message="Sure! Bye!" isSender={false} />
					<MessageCard message="Bye!" isSender={true} />

				</div>

				<div className="message-input-container">
					<MessageInput />
				</div>



			</div>
		</div>
	);
}

export default App;
