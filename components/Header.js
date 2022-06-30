import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'


const styles ={
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: 'flex items-cneter justify-center p-2 rounded bg-[#171924]',
    input: 'bg-transparent outline-one text-white w-70'
}


const Header = () => {
  return (
    <div className={styles.header}>
        <Image 
            src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
            alt='logo'
            width={220}
            height={220}
        />


        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Cryptocurrencies
                    </div>
                        <div className={styles.badge}/>
                    </div>


                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Exchanges
                    </div>
                    </div>


                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        NFT
                        </div>
                        <div className={styles.badge}/>
                    </div>



                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Cryptown
                        </div>
                        <div className={styles.badge}/>
                    </div>



                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Portfolio
                        </div>

                    </div>


                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Watchlist
                        </div>

                    </div>



                <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Products
                        </div>
                        <div className={styles.badge}/>
                    </div>


                    <div className={styles.navItem}>
                    <div className={styles.navLInk}>
                        Learn
                        </div>

                    </div>




            </nav>

            <div className='flex items-center'>
                {/* connect Button */}


                <div className={styles.inputContainer}>
                    <Search/>                    
                    <input className={styles.input} placeholder="Search"/>
                </div>


            </div>

        </div>
        </div>

  )
}

export default Header