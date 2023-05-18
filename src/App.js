import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/card/card";
import { Col, Row } from "antd";
import CustomModal from "./components/custom-modal/custom-modal";

function App() {
  const [users, setUsers] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = (data) => {
    const editedFormData = users.map((user) => {
      if (user.id === data.id) {
        return {
          ...user,
          ...data,
        };
      } else {
        return user;
      }
    });
    setUsers(editedFormData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalData = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const handleDelete = (deletedUser) => {
    const remainingUsers = users.filter((user) => user.id !== deletedUser.id);
    setUsers(remainingUsers);
  };

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (data) => data.json()
    );
    setUsers(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Row gutter={[25, 25]}>
        {users.map((user) => (
          <Col key={user.id} lg={6} sm={8} xs={24}>
            <UserCard
              user={user}
              onEditClick={handleModalData}
              onDelete={handleDelete}
            />
          </Col>
        ))}
      </Row>
      <CustomModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        modalData={modalData}
      />
    </div>
  );
}

export default App;
