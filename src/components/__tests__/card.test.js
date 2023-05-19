import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../card/card";

import "@testing-library/jest-dom/extend-expect";
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  username: "johndoe",
  website: "example.com",
};

describe("UserCard", () => {
  test("renders user details correctly", () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("http://example.com")).toBeInTheDocument();
  });

  test("renders heart icon initially as outlined", () => {
    render(<UserCard user={mockUser} />);

    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveClass("anticon anticon-heart");
  });

  test("calls onEditClick with user data on edit icon click", () => {
    const handleEditClick = jest.fn();
    render(<UserCard user={mockUser} onEditClick={handleEditClick} />);

    const editIcon = screen.getByTestId("edit-icon");
    fireEvent.click(editIcon);

    expect(handleEditClick).toHaveBeenCalledWith(mockUser);
  });

  test("calls onDelete with user data on delete icon click", () => {
    const handleDelete = jest.fn();
    render(<UserCard user={mockUser} onDelete={handleDelete} />);

    const deleteIcon = screen.getByTestId("delete-icon");
    fireEvent.click(deleteIcon);

    expect(handleDelete).toHaveBeenCalledWith(mockUser);
  });
});
