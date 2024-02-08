import Lane from '../../components/Lane'
import LaneModel from '../../model/lane'
import StepModel from '../../model/step'
import { useEffect, useState } from 'react'
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react'
import Watson from '../../components/Chat'
import React, { useCallback } from 'react';

//import { waitForFind, waitForWebChat } from '../test/testUtils';

console.debug("process.env")
console.debug(process.env.NEXT_PUBLIC_INTEGRATIONID)

const BASE_URL = 'http://localhost:3000/api'
const TEST_INSTANCE_CONFIG = {
  integrationID: process.env.NEXT_PUBLIC_INTEGRATIONID,
  region: process.env.NEXT_PUBLIC_REGION,
  serviceInstanceID: process.env.NEXT_PUBLIC_SERVICEINSTANCEID,
  openChatByDefault: true,
};

export default function Home() {

    const l1 = new LaneModel(400,"Health", [
        StepModel.inactive(700, "Imports Data Now"),
        StepModel.inactive(701, "Cleans Data"),
        StepModel.inactive(702, "Creates Notebook"),
        StepModel.active(703, "Trains Model")
    ], true)
    console.debug("test index.js Lane ID")
    console.debug(l1.id)
    console.debug("Steps 0")
    console.debug(l1.steps[0])
    setEnableDebug(true);

    async function loadChatContainer() {
      console.debug("loadChatContainer")
    }

    useEffect(() => {
      loadChatContainer()
    }, [])

  return(
    <div style={{display: "flex"}}>   <Lane value={l1}  />
    
    <Watson>   
      here
    </Watson>

    </div>

  ) 
}