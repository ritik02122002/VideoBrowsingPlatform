
const ProfileImage = ({ first_letter, color, size }) => {
  return (

    <h1 className={'text-white rounded-full my-1 align-middle items-center mx-auto px-2 h-max ' + color + " " + size} >
      {first_letter}
    </h1>
  )
}

export default ProfileImage