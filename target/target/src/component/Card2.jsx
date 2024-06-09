import React from "react";
import Slider from "react-slick";

function Card2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
    
  };
  return (
    <div className="slider-container"  style={{width:"80%", margin: "auto ",padding:"20px",display:"flex", flexDirection:"column", gap:"10px"}}>
        <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bold", padding:"10px"}}>Tag @Target to share your #TargetStyle</h1>
      <Slider {...settings}>
        <div >
          <img src="https://edge.curalate.com/v1/img/YnTpS0ygbAh2LGzUX2Olsi-1JtuCrBAdWdVthMEG8Aw=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/cPocJZGHjWqXl13LwMgBlezH_OCkAOTPsiof0pvpL3M=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/GgQuUStYyeXKhfA0VriXc94bk97BkQ_7JzBSO5J03-U=/sc/320x320?compression=0.65&fit=crop" alt=""/>
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/i0NXLHwNr7hu08RJzJcSp4t7RM7UTHCyAxfcD3FHHn8=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/sYvU0QgA-Mq31aXMUHwKWr8yCB3914NctmW-NrT_zhI=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/u6Ni9ysOh0KEbDxgVnGGiyW3MU0HwB-z506PyRWZuhI=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/pA7JADVERQ9TR3FJvy3Yak6N-Okax4szKXnrV0j7KrU=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/hYpqrVRcE8mdOYlzzMciDN-8QYXgg6xdOWEFYGpm3EU=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/Skypq-iC4f2ZduwbO4X_ZY8oDo_sVtESxKAVfGOt08U=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/6G5C4Q6DbUpluNVBVPH3Q-bjOIEZPYXFoNBnvG7Pzno=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/uwsaVGyKwx20GwF3PtJWL0Bz6OhdED3cSQW7CalgA4Y=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/_gNKNlmO1RBLWQ-1LmUNtZ1LbpNi_-KqmM6fh-n6qNI=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/0d6bX30RucRtHDrIBVLY6ukaXARnPvSD0iEhULqof70=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/jtm6hDFfuu4ZnRMCneNcjgEtTeCUseMMLBcgZvqKJbc=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/K0_JYsKAlGGiIF3WQeN_lfxgpcVOX0RK4kGH9RIlf1I=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        <div>
          <img src="https://edge.curalate.com/v1/img/a-U0QfRtsWzR3piqTaGsSWxQcIUAzD4AXkaI3EM2OwY=/sc/320x320?compression=0.65&fit=crop" alt="" />
        </div>
        
        
      </Slider>
    </div>
  );
}

export default Card2;
