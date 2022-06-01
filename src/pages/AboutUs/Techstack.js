import React from 'react';
import { Header, SubHeader } from '../../components/contentbox';
import CSS from '../../assets/images/techstack/css.png';
import FIGMA from '../../assets/images/techstack/figma.png';
import HTML from '../../assets/images/techstack/html.png';
import JAVA from '../../assets/images/techstack/java.png';
import MONGO from '../../assets/images/techstack/mongo.png';
import REACT from '../../assets/images/techstack/react.png';
import FLUTTER from '../../assets/images/techstack/flutter.png';
import SASS from '../../assets/images/techstack/sass.png';
import VUE from '../../assets/images/techstack/vue.png';
function Techstack() {
  return (
    <div className="w=screen h-full flex justify-center flex-col items-center technologies">
      <div className="page w-5/6 h-full flex flex-col justify-center items-center">
        <div className="page w-5/6 flex flex-col items-center justify-center">
          <div className="header flex flex-col items-center ">
            <SubHeader title="What makes it work" />
            <Header title="Technology we use" />
          </div>
          <div className="page full-width techstack w-4/6 h-full flex items-center justify-center user-img">
            <div className="stack-one flex justify-between items-center">
              <img
                src={VUE}
                className="img"
                data-aos="fade-up"
                  data-aos-delay={400}
              />
              <div className="stack-two flex justify-between items-center">
                <div className="col h-full">
                  <img
                    src={HTML}
                    className="img"
                    data-aos="fade-left"
                      data-aos-delay={300}
                  />
                  <img
                    src={FIGMA}
                    className="img"
                    data-aos="fade-left"
                      data-aos-delay={500}
                  />
                </div>
                <div className="col h-full">
                  <img
                    src={FLUTTER}
                    className="img"
                    data-aos="fade-up"
                      data-aos-delay={200}
                  />
                  <img src={JAVA} className="img" />
                  <img
                    src={REACT}
                    className="img"
                    data-aos="fade-down"
                      data-aos-delay={600}
                  />
                </div>
                <div className="col h-full">
                  <img
                    src={CSS}
                    className="img"
                    data-aos="fade-right"
                      data-aos-delay={900}
                  />
                  <img
                    src={MONGO}
                    className="img"
                    data-aos="fade-right"
                      data-aos-delay={700}
                  />
                </div>
              </div>
              <img
                src={SASS}
                className="img"
                data-aos="fade-right"
                  data-aos-delay={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
