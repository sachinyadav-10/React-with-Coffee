import React from 'react';
import ReactDOM from 'react-dom/client';

const Header =()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                {/* logo */}
                <img className='logo' src='https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};
const StyleCard={
    backgroundColor:'#f0f0f0',
};
const RestaurentCard =({resName})=>{
    // const{resname,cuisine,...}=props ----> destructuring on fly
    // console.log(props);
    
    return(
        <div className='res-card'>
            <img className='rescard-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiOVVrTdtJ9Z5RJeuRFc2dIRrmBddvlaPfQ&s' alt='Cheese fried momos'></img>
            <h3>{resName}</h3>
            <h4>Muskan's Favourate Love</h4>
            <h4>4.7</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}
const Body=()=>{
    return (
        <div className='body'>
            <div className='searchbar'>Search</div>
            <div className='res-container'>
                {/* restaurentCard */}
                <RestaurentCard resName="Kaish Momos" />
                <RestaurentCard resName="Tan-Sukh"/>
                <RestaurentCard resName="Jain Chat" />
                <RestaurentCard resName="Burger King" />
                <RestaurentCard resName="Nutraj Thali"/>
                <RestaurentCard resName="Rawat"/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className='app'> 
            {/* Header */}
            <Header/>
            {/* body */}
            <Body/>
            {/* Footer */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
