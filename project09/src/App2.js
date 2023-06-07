import React from 'react'
import {useMap, MapMarker, Map} from 'react-kakao-maps-sdk'
import { useState } from 'react';


const App2 = () => {

    const [centerLat, setCenterLat] = useState(33.450701)
    const [centerLon, setCenterLon] = useState(126.570667)
    const [level, setLevel] = useState(3)

    const [data, setData] = useState([
        {
          content: <div style={{ color: "#000" }}>스마트인재개발원</div>,
          latlng: { lat: 35.14980068704499, lng: 126.91989541267787  },
        }
    ])

    const smhrdMarker = ()=>{
        console.log('smhrd Marker Function');
        setCenterLat(35.14980068704499)
        setCenterLon(126.91989541267787)
        setData([
            {
                content: <div style={{ color: "#000" }}>스마트인재개발원</div>,
                latlng: { lat: 35.14980068704499, lng: 126.91989541267787  }
            },
            {
                content: <div style={{ color: "#000" }}>스마트인재개발원</div>,
                latlng: { lat: 35.110479, lng: 126.877456 },
            }
        ])
        setLevel(8)

    }
    
    const EventMarkerContainer = ({ position, content }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)

        
    
        return (
          <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && content}
          </MapMarker>
        )
    }
    
    return (
        <div>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: centerLat, lng: centerLon,
          }}
          style={{
            // 지도의 크기
            width: "99%",
            height: "500px",
          }}
          level={level} // 지도의 확대 레벨
        >
          {data.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}
        </Map>
        <button onClick={smhrdMarker}>스마트인재개발원</button>

        </div>
    )
}

export default App2