// function Banner() {
//   const title = "La maison jungle"
//   return (<h1>{title}</h1>)
// }


// import '../styles/Banner.css'
// import logo from '../assets/logo.png'

// function Banner() {
//   return <div className='lmj-banner'>
//     <h1>La maison jungle</h1>
//   </div>
// }
// export default Banner


import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
  const title = 'La maison jungle'
  return (
    <div className='lmj-banner'>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>{title}</h1>
    </div>
  )
}

export default Banner