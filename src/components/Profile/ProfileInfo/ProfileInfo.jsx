import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div >
      <div className={s.picterOnFon}>
        <img src="https://im0-tub-ru.yandex.net/i?id=1aafc98470cb970f10d1676b4bd4e3ef-l&n=13" alt=""></img>
      </div>
      <div className={s.descriptionBlock}>
        Урок 39
        ava+description
      </div>
    </div>
  )
}


export default ProfileInfo;