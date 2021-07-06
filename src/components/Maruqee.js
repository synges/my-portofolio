import { keyframes } from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { styled } from 'twin.macro'

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
`

const MarqueeContainer = styled.div`
  ${(props) => props.children.props.rightToLeft && 'direction:rtl'};
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  background-color: white;
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      #fff,
      transparent 20%,
      transparent 80%,
      #fff
    );
  }
`

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(
    ${(props) => !props.rightToLeft && '-'}${(props) => props.move}px
  );
  animation: ${moveLeft} ${(props) => props.time}s linear infinite;
  animation-play-state: inherit;
`

const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 2rem;
`

const getFillList = (list, copyTimes = 1) => {
  let newlist = []
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list)
  }
  return newlist
}

const Marquee = ({ list, time, rightToLeft, ...props }) => {
  const marqueeContainer = useRef(null)
  const marqueeArea = useRef(null)
  const [moveLeft, setMoveLeft] = useState(0)
  const [showList, setShowList] = useState(list)
  const [realTime, setRealTime] = useState(time)

  useEffect(() => {
    const containerWidth = Math.ceil(marqueeContainer.current.offsetWidth)
    const areaWidth = Math.ceil(marqueeArea.current.scrollWidth)
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth))
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2)
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2))
    setShowList(getFillList(list, copyTimes))
    setMoveLeft(newMoveLeft)
    setRealTime(newRealTime)
  }, [list, time])

  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        rightToLeft={rightToLeft}
      >
        {showList.map((item, key) => {
          return <MarqueeItem key={key}>{item}</MarqueeItem>
        })}
      </MarqueeArea>
    </MarqueeContainer>
  )
}

export default Marquee
