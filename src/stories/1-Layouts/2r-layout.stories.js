import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import LayoutGrid from 'layouts/Grid'
import Fullscreen from 'containers/Fullscreen'
import 'sass/projects/hermod/style.scss';

const FakeHeader = props => <div className={props.className}> <h2>header</h2></div>
const FakeContent = props => <div className={props.className}> content</div>
const FakeFooter = props => <div className={props.className}> footer</div>

const SpecificView = props => <LayoutGrid layout2r className="testview--2r">{props.children}</LayoutGrid>

export const ExampleSimple = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <LayoutGrid layout2r>
         <FakeHeader/>
         <FakeContent/>
      </LayoutGrid>
    </Fullscreen>
  </div>
);

export const SuperChargedExample = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <SpecificView>
         <FakeHeader/>
         <FakeContent/>
      </SpecificView>
    </Fullscreen>
  </div>
);



export const NotInOrder = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <SpecificView>
         <FakeContent/>
         <FakeHeader />
      </SpecificView>
    </Fullscreen>
  </div>
);




export const InheritedViewReorderViaCSS = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <SpecificView>
         <FakeFooter/>
         <FakeHeader className="force-header"/>
      </SpecificView>
    </Fullscreen>
  </div>
);


export const WithoutContainer = () => (
  <div className="theme-blue-light">
      <SpecificView>
         <FakeFooter/>
         <FakeContent/>
         <FakeHeader className="force-header"/>
      </SpecificView>
  </div>
);


export default {
  title: 'Layout/Grid/TwoRows',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS:'Here the order should be Header, footer,content',
      NotInOrder:'Here the order should be reversed'
    }
  },
};
