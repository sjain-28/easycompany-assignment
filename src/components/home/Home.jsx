import React from 'react';
import "./home.css"
import { BsPause } from "react-icons/bs";
import { BiRadioCircle } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import man from "../../assets/man_circle.png"
import amazon from "../../assets/amazon.png"
import pintrest from "../../assets/pintrest.png"
import stripe from "../../assets/stripe.png";
import google from "../../assets/google.png";
import walmart from "../../assets/walmart.png";
import zoom from "../../assets/zoom.png";
import microsoft from "../../assets/microsoft.png";
import paypal from "../../assets/paypal.png";
const Home = () => {
  return (

    <section className="about_top" id="about_top">
      <div className="about_container max-width">

        <div className="about_content content1">
          <div className="column left">
            <h1>Keep your business organized in just one application</h1>
            <p>Bill with downloadable statistics, measure profitability,manage <br /> team workloads, manage budgets and track performance.</p>
          </div>
          <div className="column right">
            <div className='rightside'>
              <div className="up">
                <div className="up_first">
                  <div><h6>AMAZON PROJECT</h6></div>
                  <div><h6>TUE, 30 AUG</h6></div>
                </div>
                <div className='up_second'>
                  <h4>Architecture Analysis</h4>
                </div>
                <div className='up_third'>
                  <div className='playpause'>
                    <BsPause className='pause' />
                    <div className='circle'>
                      <div className="square">

                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className='time'>1:38:47</h1>
                  </div>
                </div>
              </div>
              <div className="down">
                <div className="down_left">
                  <div className="down_left_up">
                    <div className="employee"><h6>EMPLOYEE</h6></div>
                    <div className="name"><h4>Leonard Lauren</h4></div>
                  </div>
                  <div className="down_left_down">
                    <div className="total_bill">
                      <div className="total_in"><h6>TOTAL</h6></div>
                      <div className="total_bill"><h5>Billable</h5></div>
                    </div>

                    <div className="bill_amount">
                      <div className="total_amount"><h6>48:00</h6></div>
                      <div className="total_billable"><h5>42:00</h5></div>
                    </div>
                    <div className="final">
                      <div></div>
                      <div className="final_usd"><h5>3,150 USD</h5></div>
                    </div>

                  </div>

                </div>
                <div className="down_right">
                  <div>
                    <img src={man} alt="logoman" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="about_content content2">
          <div className="column_left">

            <div className='left_top'>
              <div className='left_button'>
                <a href="#">Try For Free</a>
              </div>
              <div className='right_button'>
                <a href="#">Learn More</a>
              </div>

            </div>
            <div className="left_bottom">
              <div><h4>Trusted by the greatest</h4></div>
              <div className='line'></div>
              <div className="company">
                <div className="company_top">
                  <div className="company_logo">
                    <img src={stripe} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img className='pintrest' src={pintrest} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img src={walmart} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img src={zoom} alt="logo" />
                  </div>
                </div>
                <div className="company_down">
                  <div className="company_logo">
                    <img src={microsoft} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img className='google' src={google} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img src={paypal} alt="logo" />
                  </div>
                  <div className="company_logo">
                    <img src={amazon} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column_right">
            <div className="right_div_bottom">
              <div className="bottom_left">
                <div className='top_button'>
                  <a href="#">Front End</a>
                </div>
                <div className="first">
                  <BiRadioCircle className='radio' />
                  <div className="text"><h5>Update Componen</h5></div>
                </div>
                <div className="second line2"></div>
                <div className="third">
                  <BiRadioCircle className='radio' />
                  <div className="text"><h5>Platform Login flow</h5></div>
                </div>
                <div className="fourth  line2"></div>
                <div className="fifth">
                  <BiRadioCircle className='radio' />
                  <div className="text"><h5>Micro Interactions</h5></div>
                </div>
              </div>
              <div className="bottom_right">
                <div className="button_two">

                  <div className='button_two_left'>
                    <a href="#">Design</a>
                  </div>
                  <div className='button_two_right'>
                    <a href="#">3 tasks</a>
                  </div>
                </div>
                <div className="first1">
                  <div className="first_left">
                    <BiRadioCircle className='radio' />
                    <div className="text"><h5>Design System</h5></div>
                  </div>
                  <div className="first_right">

                    <div className="first_right_left"><h5>27:40:12</h5></div>
                    <div className="first_right_right">

                      <div className='first_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                      <div className='first_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second line21"></div>
                <div className="third1">
                  <div className="third_left">

                    <BiRadioCircle className='radio' />
                    <div className="text"><h5>Platform Structure</h5></div>
                  </div>
                  <div className="third_right">

                    <div className="third_right_left"><h5>34:28:35</h5></div>
                    <div className="third_right_right">
                      <div className='third_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                      <div className='third_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="fourth  line21"></div>
                <div className="fifth1">
                  <div className="fifth_left">

                    <BiRadioCircle className='radio' />
                    <div className="text"><h5>Design Review</h5></div>
                  </div>
                  <div className="fifth_right">
                    <div className="fifth_right_left"><h5>19:35:54</h5></div>
                    <div className="fifth_right_right">
                      <div className='fifth_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                      <div className='fifth_right_right_img'>

                        <img src={man} alt="logoman" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="about_contents content3">
          <div className='last_buttons' id="testing">
            <div className='small'><span className="e">Te</span><span className="st">st</span><span className="ing">ing</span> <span className="ana">Ana</span><span className='lysis'>lysis</span></div>
          </div>
          <div className="last_button1 lbutton">

            
            <div className='last_buttons2'>
             
               <BiRadioCircle className='radio1 opacity1' />
              <div className='small light'>Create AM-5 Wireframes</div>
            </div>
          </div>
         
          <div className="last_button2 lbutton">

            
            <div className='last_button'>
             
               <BiRadioCircle className='radio1' />
              <div className='small'>Update BE-1 Userflow</div>
            </div>
          </div>
          <div className="last_button3 lbutton">

            
            <div className='last_button'>
             
              <BsFillCircleFill className='radio2  fill' />
              <div className='small'>Platform Structure</div>
            </div>
          </div>
          <div className="last_button4 lbutton">

            
            <div className='last_button'>
             
              <BsFillCircleFill className='radio2 fill' />
              <div className='small'>Design System</div>
            </div>
          </div>
          <div className="last_button5 lbutton">

            
            <div className='last_button'>
             
              <IoIosAddCircle className='radio1' />
              <div className='small'>5 more tasks</div>
            </div>
          </div>
        </div>
      </div >

    </section >
  );
}

export default Home;
