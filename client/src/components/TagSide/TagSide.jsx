import React from 'react'
import './TagSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCart from '../TrendCart/TrendCart'
import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const TagSide = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="TagSide">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="HomeImg" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="NotiImg" />
        <img src={Comment} alt="CommentImg" />
      </div>
      <TrendCart />
      <button className="button b-tagSide" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default TagSide
