import React from 'react';
import type { User } from '../Types/user';

interface Props {
  user: User;
  onDelete: (id: string) => void;
}

const UserRow: React.FC<Props> = ({ user, onDelete }) => {
  return (
    <div className="table-row">
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <span>{user.email}</span>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserRow;
