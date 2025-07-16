import React, { useState, useEffect } from 'react';
import type { User } from '../../Types/user';
import { createUser, deleteUser, getUsers } from '../../api/users';
import CreateUserModal from '../CreateUserModal/CreateUserModal';
import UserRow from '../UserRow';
import './Users.css';

const Users: React.FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsersList(Array.isArray(response) ? response : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCreateUser = async (newUserData: Omit<User, "id">) => {
    try {
      const createdUser = await createUser(newUserData);
      setUsersList((prevUsers) => [...prevUsers, createdUser]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      setUsersList((prevUsers) => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className="users-container">
        <div className="header-row">
          <h1 className="title">USERS</h1>
          <button className="create-button" onClick={() => setIsModalOpen(true)}>
            Create User
          </button>
        </div>

        <hr className="divider" />

        <div className="users-table">
          <div className="table-header">
            <span>First Name</span>
            <span>Last Name</span>
            <span>Email</span>
            <span>Actions</span>
          </div>

          {usersList.map(user => (
            <UserRow key={user.id} user={user} onDelete={handleDeleteUser} />
          ))}
        </div>
      </div>

      <CreateUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(formData: Omit<User, "id">) => {
          handleCreateUser(formData);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default Users;
