import s from "../benefitsSection/benefits.module.css"

function Benefits(){
    return(
        <>
        <h1>BENEFITS</h1>
        <div className={s.mainContainer}>
            <div className={s.container}>
                <div className={s.box}>
                    <h2>Free shipping</h2>
                    <p>On order over 150 $</p>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.box}>
                    <h2>Secure pay</h2>
                    <p>secure online payments</p>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.box}>
                    <h2>Consultancy</h2>
                    <p>consulting services in stores</p>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.box}>
                    <h2>Safe return</h2>
                    <p>Possibility of return in 14 days</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Benefits;