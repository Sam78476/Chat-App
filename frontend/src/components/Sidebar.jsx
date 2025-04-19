import React from "react";
import "./css/Sidebar.css";

function Card(params) {
    return (
        <div className="card">
            <img src={params.img} alt="Avatar" />
            <div className="container">
                <h3>{params.name}</h3>
            </div>
        </div>
    );
}

function Sidebar() {
  return (
    <aside className="sidebar">
        
        <div className="sidebar-header">
            <h2>Whiz Chat</h2> 
            <input type="text" placeholder="Search ..." />
        </div>

        <div className="sidebar-links">
        <Card img="https://dummyimage.com/100x100/000/fff&text=User1" name="User 1" />
            <Card img="https://dummyimage.com/100x100/000/fff&text=User2" name="User 2" />
            <Card img="https://dummyimage.com/100x100/000/fff&text=User3" name="User 3" />
            <Card img="https://dummyimage.com/100x100/000/fff&text=User3" name="User 3" />
            <Card img="https://dummyimage.com/100x100/000/fff&text=User3" name="User 3" />
        </div>

        <div className="sidebar-footer">
            <div className="user">
                <img src="https://dummyimage.com/100x100/000/fff&text=User" alt="Avatar" />
                <div className="user-info">
                    <h3>User Name</h3>
                    <p>Online</p>
                </div>
            </div>
        </div>

    </aside>
  );
}

export default Sidebar;