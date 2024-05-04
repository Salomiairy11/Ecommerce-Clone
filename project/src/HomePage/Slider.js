import React from "react"
import { useState } from "react"
import img1 from "./images/img1.jpg"
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.png'
import img5 from './images/img5.jpg'
import img6 from './images/img1.jpg'
import img7 from './images/img2.jpg'
import img8 from './images/img3.jpg'
import img9 from './images/img4.png'
import img10 from './images/img5.jpg'
import './Slider.css'

export default function Slider(){

    const [count, setCount] = useState(0);
    const [margin, setMargin] = useState('0%');
    const [forward, setForward] = useState(true);

    function shiftImage(count){
            switch (count) {
              case 0:
                setMargin('0%')
                break
              case 1:
                setMargin('-10%')
                break
              case 2:
                setMargin('-20%')
                break
              case 3:
                setMargin('-30%')
                break
              case 4:
                setMargin('-40%')
                break
              case 5:
                setMargin('-50%')
                break
              case 6:
                setMargin('-60%')
                break
              case 7:
                setMargin('-70%')
                break
              case 8:
                setMargin('-80%')
                break
              case 9:
                setMargin('-90%')
                break
            }
    }

    if(forward){
        for(let i=0;i<10;i++)
            {
                setTimeout(()=>{
                    if (count === 10) {
                      setForward(false);
                    }
                    else{
                        setCount(count + 1);
                        shiftImage(count);
                    }
                },1000)

            
            }
    }
    else{
        for (let i = 10; i > 0; i--) {
          setTimeout(() => {
            if (count === 0) {
              setForward(true)
            } else {
              setCount(count - 1)
              shiftImage(count)
            }
          }, 1500)
        }
    }

    return (
      <div className="carosel_container">
        <div className="images_container">
          <div className="image" style={{ marginLeft: margin }}>
            <img src={img1}></img>
          </div>
          <div className="image">
            {' '}
            <img src={img2}></img>
          </div>
          <div className="image">
            <img src={img3}></img>
          </div>
          <div className="image">
            <img src={img4}></img>
          </div>
          <div className="image">
            <img src={img5}></img>
          </div>
          <div className="image">
            <img src={img6}></img>
          </div>
          <div className="image">
            <img src={img7}></img>
          </div>
          <div className="image">
            <img src={img8}></img>
          </div>
          <div className="image">
            <img src={img9}></img>
          </div>
          <div className="image">
            <img src={img10}></img>
          </div>
        </div>
      </div>
    )
}