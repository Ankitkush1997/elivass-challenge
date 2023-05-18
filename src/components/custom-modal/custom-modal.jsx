import React, { useEffect, useState } from "react";
import { Form, Modal } from "antd";
import { Input } from "antd";
import { useForm } from "antd/lib/form/Form";

const CustomModal = ({ isModalOpen, handleCancel, handleOk, modalData }) => {
  const [form] = useForm();
  const { id } = modalData;

  const [formData, setFormData] = useState(modalData);

  useEffect(() => {
    form.setFieldsValue(modalData);
  }, [modalData, form]);

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
        title="Edit Details"
        open={isModalOpen}
        onOk={() => handleOk(formData)}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="name" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input name="email" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="phone" onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "This Field is required" }]}
          >
            <Input name="website" onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomModal;
