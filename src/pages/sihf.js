import './style.css';
const SIHF = () => {
    return(
        <>
        <div className="sihf_container">
            <img src = '/images/SIHF.png' alt='SIHF' className='sihf_img'/>
            <div className='sihf_box'>
            <h4>서울국제하모니카페스티벌<br/>SIHF(Seoul International Harmonica Festival)</h4>
            <div className="sihf_text">
            세계적인 하모니카 아티스트들의 초청공연을 통하여 국제교류를 활성화하고,
            국내 재능있는 신인들을 발굴하는 한편 하모니카 음악 보급 활성화를 통한 사회공동체의 파트너십을 구축하기 위하여 개최하는 행사입니다.
            2013년에 처음 시작된 이 행사는 2024년에 제 10회를 맞이하며 더욱 뜻깊은 축제로 자리 잡았습니다.
            </div>
            </div>
            <div className='sihf_box'>
            <h4>주요 프로그램</h4>
            <div className='sihf_text'>
                - 경연대회 : 독주, 2중주, 3중주, 앙상블, 소합주, 대합주 (초등부, 중고등부, 성인부, 시니어부)<br/>
                - 갈라콘서트 : 국내외 하모니카 연주자 초청<br/>
                - 하모니카 클리닉 : 하모니카 무료 강습, 하모니카 무료 수리<br/>
                - 국제 학술 세미나<br/>
                - 오픈 스테이지 공연<br/>
            </div>
            </div>
            <div className='sihf_box'>
            <h4>참가현황</h4>
            <div className='sihf_text'>
            - 13개국 2,000여명의 하모니카 연주자 참가 <br/>
            - 총 210개 하모니카 연주 단체 참가
            </div>
            </div>
        </div>
        </>
    )
}
export default SIHF;