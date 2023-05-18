import React, { useState } from "react";
import { Form, Modal } from "antd";
import { Input } from "antd";

const CustomModal = ({ isModalOpen, handleCancel, handleOk, modalData }) => {
  const { name, email, phone, website, id } = modalData;

  const [formData, setFormData] = useState(modalData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      id,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => handleOk(formData)}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Name"
            initialValue={name}
            name="name"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="name" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Email"
            initialValue={email}
            name="email"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input name="email" value={email} onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Phone"
            initialValue={phone}
            name="phone"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="phone" value={phone} onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Website"
            initialValue={website}
            name="website"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="website" value={website} onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomModal;
