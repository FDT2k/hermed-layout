import React,{useEffect,useState,useRef} from 'react';
import ThemePicker from 'components/ThemePicker'
import LayoutGrid from 'layouts/Grid'
import Fullscreen from 'containers/Fullscreen'
import 'sass/projects/hermod/style.scss';


const FakeHeader = props => <div className={props.className}> <h2>header</h2></div>
const FakeContent = props => <div className={props.className}> content</div>
const FakeFooter = props => <div className={props.className}> footer</div>
const Nested = props => <div className={props.className}> nested</div>

const SpecificView = props => <LayoutGrid layout3r className={props.className +" testview"}>{props.children}</LayoutGrid>

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




export const InheritedViewReorderViaCSS = () => (
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


export const WithoutContainer = () => (
  <div className="theme-blue-light">
      <SpecificView>
         <FakeFooter/>
         <FakeContent/>
         <FakeHeader className="force-header"/>
      </SpecificView>
  </div>
);

export const NestedWithInheritance = () => (
  <div className="theme-blue-light">
      <SpecificView>
        <div className="force-footer">
        <SpecificView >
          <Nested/>
          <Nested/>
          <Nested/>
        </SpecificView>
        </div>
         <FakeContent/>
         <FakeHeader className="force-header"/>
      </SpecificView>
  </div>
);



export default {
  title: 'Layout/Grid/ThreeRows',
  parameters: {
    notes: {
      InheritedViewReorderViaCSS:'Here the order should be Header, footer,content',
      NotInOrder:'Here the order should be reversed'
    }
  },
};
