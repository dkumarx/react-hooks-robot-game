import React from "react";
import { Animate } from 'react-move'
import { ROBOT_DIMENSION } from "../../constants";
import useGlobal from "../../store";


const trackStyles = {
    position: 'absolute',
    width: ROBOT_DIMENSION,
    height: ROBOT_DIMENSION,
    bottom: 10
  }
  
const RobotComponent = () => {
  const [globalState] = useGlobal();
  return (
    <Animate>
          {() => {
            let { x, y } = globalState
            return (
              <div style={trackStyles}>
                <div
                  style={{
                    position: 'absolute',
                    width: ROBOT_DIMENSION,
                    height: ROBOT_DIMENSION,
                    borderRadius: ROBOT_DIMENSION,
                    opacity: 0.7,
                    backgroundColor: 'grey',
                    WebkitTransform: `translate(${x}px, ${-y}px)`,
                    transform: `translate3d(${x}px, ${-y}px)`,
                    margin: 6
                  }}
                />
              </div>
            )
          }}
        </Animate>
  )
}

export default RobotComponent; 