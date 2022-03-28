const history = document.querySelector('#historyBar');  

history.addEventListener("change", (e) => {
  const number = eval(e.target.value);
  const div = document.getElementById('divAdd')
  const year = document.createElement('h2')
  const contents = document.createElement('pre');
  const init = document.getElementById('divAdd').innerHTML = '';

  if (number == 9.7) {
    contents.innerHTML = "<div class='text_box'><p>2011<hr></p><br>"
      + "<pre>12  FAX 보안 이슈 해결 ’보안그린팩스’ 출시<br>12  온라인기반 수금 서비스 ‘바로수금서비스(Bill36524)’ 출시<br>11  지식경제부 지정 ‘공인전자문서센터’ 승인<br>09  국제원산지정보원과 협력, 관세청 FTA-PASS用 ‘더존 ERP <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FTA원산지 모듈’ 개발 보급<br>07  강촌캠퍼스 소재 ‘D-클라우드 센터’ 개관 및 클라우드 서비스 개시<br>01  더존ICT그룹 강촌캠퍼스 신축 이전</pre></div></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 18.4) {
    contents.innerHTML = "<div class='text_box'><p>2012<hr></p><br>"
      + "<pre>11  더존ICT그룹 강촌캠퍼스 R&D센터 신축<br>10  지경부 TOPCIT 활용과 확산 MOU 체결<br>08  더존 i CUBE 프리미엄 에디션 출시<br>08  교육/세미나 홈페이지 서비스 실시<br>07  공인전자문서센터 서비스 실시<br>05  iPLUS 클라우드 에디션 출시</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 27.1) {
    contents.innerHTML = "<div class='text_box'><p>2013<hr></p><br>"
      + "<pre>07  새로운 세무회계프로그램, ‘더존 Smart A’ 출시<br>04  전산회계 운용사 수험 프로그램, ‘더존S플러스’ 채택<br>04  더존ICT그룹 직장내 어린이집 개원<br>02  한국공인회계사회 공동 AT자격시험 신설<br>01  지식경제부 공인전자문서중계자 공식 지정</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 35.8) {
    contents.innerHTML = "<div class='text_box'><p>2014<hr></p><br>"
      + "<pre>12  국내 최초 1,028만 달러 규모 디지털포렌식센터 해외(오만) 수출<br>07  미래부 ‘공공기관 클라우드 서비스 안전성 검증 시범사업’ 협약<br>05  중소기업청, ‘2014년 월드클래스 300 프로젝트’ 선정<br>03  더존 미디어센터(DMC)개국, Smart 아카데미 오픈<br>01  정보보호관리체계(ISMS) 인증획득</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 44.5) {
    contents.innerHTML = "<div class='text_box'><p>2015<hr></p><br>"
      + "<pre>11  더존 Smart A 활용 'AT자격시험' 국가공인 취득(한국공인회계사회)<br>06  D-Cloud Private Edition CC인증 획득<br>04  세무회계 MRI 시스템 출시<br>03  국가보안기술연구소 패밀리기업 선정(더존포렌식센터)<br>02  애플리케이션 가상화 시스템 관련 클라우드 보안 특허 획득</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 53.2) {
    contents.innerHTML = "<div class='text_box'><p>2016<hr></p><br>"
      + "<pre>12  평창동계올림픽 ERP부문 공식서포터 선정<br>11  2016년도 국가품질상 산업통상자원부장관 표창<br>11  ASOCIO(아시아-대양주 정보산업기구) Award ICT기업상<br>03  파이낸스아시아 'Asia's Best Companies' 선정(韓 최고 경영기업 7위)</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 61.9) {
    contents.innerHTML = "<div class='text_box'><p>2017<hr></p><br>"
      + "<pre>10  더존비즈온, 2017 국가생산성대상 대통령표창(서비스업 부문 대상)<br>05  더존다스, 더존ICT그룹 지주회사 전환</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 70.6) {
    contents.innerHTML = "<div class='text_box'><p>2018<hr></p><br>"
      + "<pre>06  대기업·그룹사·글로벌 법인용 차세대 'D_ERP' 출시<br>02  더존비즈온, 코스피·코스닥시장 신 통합지수 'KRX300' 구성 종목 선정</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 79.3) {
    contents.innerHTML = "<div class='text_box'><p>2019<hr></p><br>"
      + "<pre>12  한국국제협력단(KOICA) 발주 '필리핀 조세 분야 전자정부 구축사업’ 수주<br>09  중소벤처기업부 ‘TIPS’(기술창업 지원 프로그램) 더존홀딩스 컨소시엄 참여<br>08  한국인터넷진흥원(KISA) 주관 ‘클라우드 서비스 보안인증 (CSAP)’ 획득<br>06  세무회계사무소용 ERP ‘WEHAGO T’ 출시<br>05  과학기술정보통신부 ‘빅데이터 플랫폼’ 사업자 선정<br>05  금융위원회 ’혁신금융서비스 사업자’ 지정, 금융규제 샌드박스 적용<br>03  내부회계관리 시스템 ‘DICS' 출시 (新외감법 적용)</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 88) {
    contents.innerHTML = "<div class='text_box'><p>2020<hr></p><br>"
      + "<pre>11  11‘WEHAGO V’ 공공부문수의계약공급클라우드서비스로선정<br>09  정부‘비대면바우처서비스공급기업’ 선정및비대면서비스 '홈피스올인원팩' <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;출시<br>06  '디지털 뉴딜' 첫 현장 행보로 문재인 대통령, 더존비즈온 강촌캠퍼스 방문<br>05  과기정통부 블록체인 민간주도 국민 프로젝트 더존비즈온 컨소시엄 선정<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(전자계약 분야)<br>02  중소·중견기업 빅데이터 유통 플랫폼 개소</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
  if (number == 96.7) {
    contents.innerHTML = "<div class='text_box'><p>2021<hr></p><br>"
      + "<pre>05  신개념ERP ‘Amaranth 10’ 출시<br>03  글로벌사모펀드베인캐피탈2대주주로영입<br>01  전자세금계산서서비스WEHAGO로통합<br>01  과기정통부‘가명정보결합전문기관‘ 지정</pre></div>";
    document.getElementById('divAdd').appendChild(contents);
  }
}); 
$("#rside").load("/mini/common/r-sidebar.html");