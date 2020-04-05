import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import LayoutGrid from 'layouts/Grid'
import Fullscreen from 'containers/Fullscreen'
import 'sass/style.scss';


const FakeHeader = props => <div className={props.className}> <h2>header</h2></div>
const FakeContent = props => <div className={props.className}> content</div>
const FakeFooter = props => <div className={props.className}> footer</div>

const SpecificView = props => <LayoutGrid layout3r className="testviewprout">{props.children}</LayoutGrid>

export const ExampleSimple = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <LayoutGrid layout3r>
         <FakeHeader/>
         <FakeContent/>
         <FakeFooter/>
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
         <FakeFooter/>
      </SpecificView>
    </Fullscreen>
  </div>
);



export const NotInOrder = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <SpecificView>
         <FakeFooter/>
         <FakeContent/>
         <FakeHeader />
      </SpecificView>
    </Fullscreen>
  </div>
);




export const ReorderViaCSS = () => (
  <div className="theme-blue-light">
    <Fullscreen >
      <SpecificView>
         <FakeFooter/>
         <FakeContent/>
         <FakeHeader className="force-header"/>
      </SpecificView>
    </Fullscreen>
  </div>
);



export default {
  title: 'Layout/Grid',
  parameters: {
    notes: {
      TitreExample: 'This is something to know',
    }
  },
};
