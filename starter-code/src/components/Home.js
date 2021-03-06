import React, { Component } from 'react'
/* import axios from 'axios'; */
import { Link } from "react-router-dom";



class Home extends Component {
    constructor() {
        super();
        this.state = {  };
      }
    
    


    render() {
        return (
            <div style={{color: "black"}}>
            
                <div className="" >
                    <Link className="w-100" to={'/beers'} style={{color: "black"}}>
                        <img className="w-100" src="/images/beers.png" alt="beers"/>
                        <h1 className="font-weight-normal px-5">All beers</h1>
                        <p className="font-weight-light text-muted px-5 pb-2" style={{fontSize: "22px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet blanditiis aut ipsum earum. Id illo inventore aut officia odit culpa iure harum esse! Minima sint totam ut quis debitis.</p>
                    </Link>
                </div>
                <div>
                    <Link className="w-100" to={'/random-beer'}style={{color: "black"}}>
                        <img className="w-100" src="/images/random-beer.png" alt="random-beer"/>
                        <h1 className="font-weight-normal px-5">Random beer</h1>
                        <p className="font-weight-light text-muted px-5 pb-2" style={{fontSize: "22px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet blanditiis aut ipsum earum. Id illo inventore aut officia odit culpa iure harum esse! Minima sint totam ut quis debitis.</p>
                    </Link>
                </div>
                <div>
                    <Link className="w-100" to={'/new-beer'} style={{color: "black"}}>
                        <img className="w-100" src="/images/new-beer.png" alt="new-beer"/>
                        <h1 className="font-weight-normal px-5 ">New beer</h1>
                        <p className="font-weight-light text-muted px-5 pb-2" style={{fontSize: "22px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse amet blanditiis aut ipsum earum. Id illo inventore aut officia odit culpa iure harum esse! Minima sint totam ut quis debitis.</p>
                    </Link>
                </div>
                
            </div>
        )
    }
}


export default Home