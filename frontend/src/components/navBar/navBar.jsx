import s from "../navBar/navBar.module.css"
import { RiSearch2Line } from "@remixicon/react";
import { RiShoppingCartLine } from "@remixicon/react";

function NavBar(){
    return(
        <>
        <div className={s.header}>
           <div className={s.section1}><h1>Nisi-Products</h1></div>
           <div className={s.section2}>
                <div>Home</div>
                <div>Benefits</div>
                <div>Shop now</div>
                <div>Contact</div>
           </div>
           <div className={s.section3}>
            <div><RiSearch2Line/></div>
            <div><RiShoppingCartLine/></div>
           </div>
        </div>
        </>
    );
}

export default NavBar;