import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import "./topbar.scss";

function TopBar({menuOpen, setMenuOpen}) {
    return (
        <header className={"topbar " + (menuOpen && "topbar--active")}>
            <div className="topbar__inner">
                <div className="topbar__left">
                    <a href="#intro" className="topbar__logo">Nurlanbekova.</a>

               <div className="topbar__contact-item">
                   <PhoneIcon className="topbar__icon"/>
                   <span> +996 05 05 05</span>
               </div>
               <div className="topbar__contact-item">
                   <MailIcon className="topbar__icon"/>
                   <span> example@gmail.com</span>
               </div>
                </div>
                <div className="topbar__right">
                <button 
                onClick={() => setMenuOpen(!menuOpen)} className="topbar__nav-toggler"></button>
                </div>
            </div>
            
        </header>
    );
}

export default TopBar;
