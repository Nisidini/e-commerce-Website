import s from  "../homePage/home.module.css";

function Home(){
    return(
        <>
        <div className={s.container}>
            
            <div className={s.box}>
                <div>
                    <div className={s.product1}></div>
                    <div className={s.product2}></div>
                </div>
                <div className={s.middleContainer}></div>
                <div>
                    <div className={s.sideBox}></div>
                    <div className={s.bottomBox}>
                        <div className={s.box1}></div>
                        <div className={s.box2}></div>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;