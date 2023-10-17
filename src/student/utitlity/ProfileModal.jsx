import { Button, Modal, TextInput, FileInput, Label } from "flowbite-react";
import { Form } from "react-router-dom";
const ProfileModal = ({ props, userData }) => {
  return (
    <div>
      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Update Profile</Modal.Header>
        <Modal.Body>
          <Form
            className="space-y-6"
            action="."
            method="post"
            encType="multipart/form-data"
          >
            <div className="mb-2 block">
              <Label htmlFor="file" value="Upload Profile Image" />
            </div>
            <FileInput
              helperText="A profile picture is useful to confirm your are logged into your account"
              name="file"
            />
            <div className="flex items-center ">
              <label className="font-bold "> Name: &nbsp;&nbsp; </label>
              <TextInput
                placeholder="Islt"
                required
                type="text"
                name="name"
                className="flex-shrink-0 flex-grow"
                defaultValue={userData.name}
              />
              <TextInput
                placeholder="Islt"
                required
                type="hidden"
                name="user_id"
                className="flex-shrink-0 flex-grow"
                defaultValue={userData.id}
              />
            </div>
            <div className="flex items-center ">
              <label className="font-bold "> Email: &nbsp;&nbsp; </label>

              <TextInput
                placeholder="email@islt.com"
                required
                type="email"
                name="email"
                className="flex-shrink-0 flex-grow"
                defaultValue={userData.email}
              />
            </div>
            <div className="flex items-center ">
              <label className="font-bold "> Phone Number: &nbsp;&nbsp; </label>

              <TextInput
                placeholder="phone number"
                required
                type="text"
                name="phone"
                className="flex-shrink-0 flex-grow"
                defaultValue={userData.phone_number}
              />
            </div>

            <Button
              className="text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProfileModal;
