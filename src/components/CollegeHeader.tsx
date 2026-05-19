import { Link } from 'react-router-dom';
import { imgUrl } from '../utils/asset';

const CollegeHeader = () => (
  <header className="college-header">
    <div className="container">
      <Link to="/" className="college-logo" style={{display:'flex',alignItems:'center'}}>
        <img src={imgUrl("images/Logo/sankarankovil-college-logo-1.png")} alt="GASC Sankarankovil Logo" style={{width:'70px',height:'70px',objectFit:'contain'}} />
      </Link>
      <Link to="/" className="college-name" style={{textDecoration:'none',color:'inherit'}}>
        <h1>Government Arts and Science College, Sankarankovil</h1>
        <span className="tagline">Affiliated to Manonmaniam Sundaranar University | Estd. June 2020</span>
      </Link>
      <Link to="/" className="header-right" style={{display:'flex',alignItems:'center'}}>
        <img src={imgUrl("images/Logo/Emblem_of_Tamil_Nadu.svg.png")} alt="Tamil Nadu Emblem" style={{width:'65px',height:'65px',objectFit:'contain'}} />
      </Link>
    </div>
  </header>
);

export default CollegeHeader;
