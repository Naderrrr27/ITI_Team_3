import Logo from "./Logo"
import ana from './intro.css'
export const Intro = () => {
  return (
    <div className="introCont" style={ana.introCont}>
        <Logo />
        <div className="content" style={ana.content}>
          Restaurants offer a variety of services, including food preparation
           <br />
           Table service, and ambiance.
        </div>
    </div>
  )
}  

 
export default Intro
