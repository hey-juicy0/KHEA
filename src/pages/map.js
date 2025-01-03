import { Link } from "react-router-dom";
import './style.css';

const Map = () =>{
    return(
        <>
            <div className="map_container">
                <h3>오시는 길</h3>
                <div className="map">
                    <div className="map_box">
                        <div className="map_link">
                            <h4>약도</h4>
                            <Link to = 'https://naver.me/xzxPIlyT'>
                                <div className="map_naver">
                                    <img src = '/images/naver.png' alt="네이버"/>
                                    <label>네이버 길찾기</label>
                                    </div>
                                </Link><br/>
                        </div>
                    <img src = '/images/map.png' className="map_img" alt="지도"/>
                    </div>
                    <div className="map_box">
                    <h4>대중교통</h4>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginRight:'auto', gap:'1em'}}>
                    <div className="map_transport">
                        <img src = '/images/subway.png' alt="지하철"/>
                        <label>지하철</label>
                    </div>
                    <span><strong>7호선 신풍역</strong> 3번 출구 도보 2분</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginRight:'auto', gap:'1em', marginTop:'2em'}}>
                    <div className="map_transport" style={{backgroundColor:'#256BFA'}}>
                        <img src = '/images/bus.png' alt="버스"/>
                        <label>버스</label>
                    </div>
                    <span>
                        <strong>간선</strong> 654
                        <strong> &nbsp;&nbsp;지선</strong> 6516 | 6633 <br/>
                        <strong>일반 </strong>5
                        <strong> &nbsp;&nbsp;마을 </strong>영등포01 | 영등포13</span>
                    </div>
                    </div>
                    <div className="map_box">
                    <h4>주소</h4>
                    <span>서울 영등포구 대방천로 155 신풍두산위브센티움 208호</span>
                    </div>
                    <div className="map_box">
                    <h4>전화</h4>
                    <span>📞 02-848-5061</span>
                    </div>
                    <div className="map_box">
                        <h4>카페 / 유튜브</h4>
                        <div className="map_icons">
                            <Link to = 'https://cafe.daum.net/KHE'>
                            <div className="map_links">
                                다음 카페 이동
                            </div>
                            </Link>
                            <Link to = 'https://cafe.naver.com/sihf'>
                            <div className="map_links">
                                네이버 카페 이동
                            </div>
                            </Link>
                            <Link to = 'https://www.youtube.com/@SIHF-uv5mk'>
                            <div className="map_links">
                                유튜브 채널 이동
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Map;