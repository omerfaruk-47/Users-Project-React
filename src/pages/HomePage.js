import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "./../components/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);

    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "ömer faruk",
          surname: "özçelik",
          username: "omer47",
        },
        {
          id: uuidv4(),
          name: "mehmet",
          surname: "seyhan",
          username: "mseyhan",
        },
        {
          id: uuidv4(),
          name: "john",
          surname: "klar",
          username: "j.lakr",
        },
        {
          id: uuidv4(),
          name: "luna",
          surname: "mell",
          username: "l.mell",
        },
      ],
    };
  }

  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast(`"${name}" kullanıcısı eklendi.`);
    } else {
      alert("Please fill all fields");
    }
  };

  deleteUser = (obj) => {
    const users = this.state.users.filter((user) => {
      return user.id !== obj.id;
    });
    this.setState({ users });
    toast(`"${obj.name}" kullanıcısı silindi.`);
  };

  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            surname: surname,
            username: username,
          };
        }
        return user;
      });

      this.setState({
        users: updatedUsers,
      });
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar
          style={{ height: "75px", borderRedius: "5px", background: "red" }}
          expand="md"
          color="light"
        >
          <div className="container ">
            <NavbarBrand href="/">Users-Project-React</NavbarBrand>
          </div>
        </Navbar>

        <UserListComponent
          users={this.state.users}
          addUser={this.addUser}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
      </div>
    );
  }
}
