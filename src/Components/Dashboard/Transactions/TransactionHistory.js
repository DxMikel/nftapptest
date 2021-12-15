import React,{memo,Fragment,useState,useEffect} from "react"
import styles from "./transactions.module.css"
// import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {nanoid} from "nanoid"
import {BsArrowUpRight,BsArrowDownLeft} from "react-icons/bs"
const TransactionHistory = () => {
    const [tabs,setTabs] = useState("all")
    const dispatch = useDispatch()
    const [windowstate,setWindow] = useState(window.innerWidth < 767);
    useEffect(()=>{
        window.addEventListener('resize', () => {
            const ismobile = window.innerWidth < 767;
            if (ismobile !== windowstate) setWindow(ismobile)
        }, false);
    }, [windowstate])
    const alltransactions = [
        {
            transaction:"sent",
            id:"#17372",
            name:"michael.near",
            time:"3 days ago",
        },
        {
            transaction:"received",
            id:"#8982",
            name:"0x748....4d849",
            time:"3 days ago",
        },
        {
            transaction:"sent",
            id:"#17372",
            name:"jordan.near",
            time:"3 days ago",
        },
        {
            transaction:"received",
            id:"#8982",
            name:"0x748....4d849",
            time:"3 days ago",
        },
        {
            transaction:"sent",
            id:"#17372",
            name:"michael.near",
            time:"3 days ago",
        },
    ]

    const handleTabClick = (e) =>{
        setTabs(e.target.value)
    }
    const SendNft = () => {
        dispatch({type:"sendnft__open"})
    }
    return(
        <>
        <div className={styles.transaction__wrapper}>
            <div className={styles.transaction__header}>
                <h5>History</h5>
                {!windowstate && <div className={styles.transaction__tab} onClick={handleTabClick}>
                    <button className={tabs === "all" ? styles.active : ""} value="all">All</button>
                    <button className={tabs === "sent" ? styles.active : ""} value="sent">Sent</button>
                    <button className={tabs === "received" ? styles.active : ""} value="received">Received</button>
                </div>}
                <button onClick={SendNft}><span><BsArrowUpRight/></span>Send NFT</button>
            </div>
            {windowstate && <div className={styles.small__screen__transaction__wrapper}>
                <div className={styles.small__screen__transaction} onClick={handleTabClick}>
                    <button className={tabs === "all" ? styles.active : ""} value="all">All</button>
                    <button className={tabs === "sent" ? styles.active : ""} value="sent">Sent</button>
                    <button className={tabs === "received" ? styles.active : ""} value="received">Received</button>
                </div>
            </div>}
            <div className={styles.transaction__list__wrapper}>
                {alltransactions
                .filter((data)=> tabs === "sent" ? data.transaction==="sent" : tabs==="received" ? data.transaction==="received" : data)
                .map((data)=>{
                    return(
                        <Fragment key={nanoid()}>
                            <div className={styles.transaction__list}>
                                <div className={styles.transaction__action}>
                                    <div className={styles.icon__wrapper}>{data.transaction === "sent" ? <BsArrowUpRight/> : <BsArrowDownLeft/>}</div>
                                    <h6><span>{data.id}</span> {data.transaction === "sent" ? "Sent to" : "Received from"} <a href="https://explorer.near.org/" target="_blank" rel="noreferrer" className={styles.transaction__name}>{data.name}</a></h6>
                                </div>
                                <div className={styles.transaction__time}>
                                    <p>{data.time}</p>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default memo(TransactionHistory);