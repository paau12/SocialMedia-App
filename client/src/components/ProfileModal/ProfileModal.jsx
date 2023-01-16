import { Modal, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { uploadImage } from '../../actions/uploadAction'
import { updateUser } from '../../actions/userAction'

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme()
  const { password, ...other } = data
  const [formData, setFormData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const param = useParams()
  const { user } = useSelector((state) => state.authReducer.authData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      event.target.name === 'profileImage'
        ? setProfileImage(img)
        : setCoverImage(img)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append('name', fileName);
      data.append('file', profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name; 
      data.append('name', fileName)
      data.append('file', coverImage)
      UserData.coverPicture = fileName
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="info-form">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="info-input"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="info-input"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Works At"
            className="info-input"
            name="worksAt"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Lives In"
            className="info-input"
            name="livesIn"
            onChange={handleChange}
            value={formData.livesIn}
          />

          <input
            type="text"
            placeholder="Country"
            className="info-input"
            name="country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="info-input"
            placeholder="Relationship Status"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>

        <button className="button info-btn" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </Modal>
  )
}

export default ProfileModal
