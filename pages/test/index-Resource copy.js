// pages/index.js
// Get templates from https://bulmatemplates.github.io/bulma-templates/  click on source code button
// Apply styles from Bulma 
// npm install  --save bulma
// add import "../styles/globals.css" to pages/_app.js  
// To test go to URL localhost:3000/test
// Or use mui Material design https://mui.com/material-ui/getting-started/example-projects/
//import Link from 'next/link'
import * as React from 'react';

import Footer from '../../components/Footer'
import ResourceHighlight from '../../components/ResourceHighlight'
import ResourceList from '../../components/ResourceList'
import ResourceListModel from '../../model/resourcelist'
import ResourceHighlightModel from '../../model/resourcehighlight'
import FooterModel from '../../model/footer'
//import { resources } from '../src/data';

import Layout from '../../components/Layout';
//import { resources } from './data';

function Home() {

  const h1 = new ResourceHighlightModel("400","HealthHighlight",true)
  const l1 = new ResourceListModel("500","HealthList",true)
  const f1 = new FooterModel("600","HealthFooter",true)
  return (
    <>
    <Layout>
      <ResourceHighlight value={h1} ></ResourceHighlight>
      <ResourceList value={l1}></ResourceList>
      <Footer value={f1}></Footer>
    </Layout>
    </>

  )
}

export default Home;

