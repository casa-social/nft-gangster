import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {RoadMapStyle} from '../../../style';
import KGImage from '../../../assets/images/KG.png'

const RoadMap = () => {
  return (
    <>
      <RoadMapStyle>
        <div id="roadmap">
          <h1 className="text-white">ROADMAP</h1>
          <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 1</h1>
              <p style={{ fontSize: 22 }}>
                Waste management business
                -Design first batch of Kryptogangster NFTs
                -Start of our social media channels
                (IG, TG, FB, Twitter, Discord)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 2</h1>
              <p style={{ fontSize: 22 }}>
              Shakedown
              - Start Kilo Private Pre-Sale
              - Start Kryptogangsters NFT Sale
              - Bribe Law enforcement
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 3</h1>
              <p style={{ fontSize: 22 }}>
              Initiation
            - Finalise website
            - Finish White Paper
            - Finalise 10k Limited Edition Kryptogangsters
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 4</h1>
              <p style={{ fontSize: 22 }}>
              Cosa Nostra
              - Mint 10k Limited Edition
              - Announce further plans
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 5</h1>
              <p style={{ fontSize: 22 }}>
              Build Empire
              - Launch Kilo on CEX
              - Start developing Stablecoin
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 6</h1>
              <p style={{ fontSize: 22 }}>
              Take Over
              - Roll out next set of Limited NFT Batch
              - Set up Crypto Ecosystem
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 7</h1>
              <p style={{ fontSize: 22 }}>
              Plead Innocent
            - Finalise NFT Gamification Development
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </RoadMapStyle>
    </>
  );
}

export default RoadMap;