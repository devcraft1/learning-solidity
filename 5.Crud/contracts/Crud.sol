// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Crud {
	struct User {
		uint id;
		string name;
	}

	User[] public users;
	uint public newId;

	function create(string memory name) public {
		users.push(User(newId, name));
	}

	function read(uint id) public view returns (uint, string memory) {
		for (uint i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				return (users[i].id, users[i].name);
			}
		}
	}

	function update(uint id, string memory name)
		public
		returns (string memory)
	{
		for (uint i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				return (users[i].name = name);
			}
		}
	}

	function destroy(uint id) public {
		delete users[id];
	}
}
